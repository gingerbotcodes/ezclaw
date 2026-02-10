import Docker from "dockerode";
import path from "node:path";
import fs from "node:fs";

// ── Constants ──
const IMAGE = "openclaw/openclaw:latest";
const INTERNAL_PORT = "18789/tcp";
const MEMORY_LIMIT = 512 * 1024 * 1024; // 512 MB
const DATA_ROOT = path.resolve(process.cwd(), "data");

// ── Docker client ──
let docker: Docker;

try {
    docker = new Docker({ socketPath: "/var/run/docker.sock" });
} catch {
    console.error(
        "❌  Docker socket not found at /var/run/docker.sock\n" +
        "    Make sure Docker Desktop is running."
    );
    process.exit(1);
}

// ── Types ──
export interface SpawnResult {
    containerId: string;
    port: number;
}

// ── Helpers ──
function containerName(userId: string): string {
    return `ezclaw-${userId}`;
}

function ensureDataDir(userId: string): string {
    const dir = path.join(DATA_ROOT, userId);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    return dir;
}

// ── Public API ──

/**
 * Spawn a new OpenClaw agent container for a user.
 * If a container with the same name already exists, it is stopped & removed first.
 */
export async function spawnAgent(
    userId: string,
    apiKey: string
): Promise<SpawnResult> {
    // Ping Docker to verify connection
    try {
        await docker.ping();
    } catch {
        throw new Error(
            "Cannot connect to the Docker daemon. Is Docker Desktop running?"
        );
    }

    const name = containerName(userId);
    const hostDataDir = ensureDataDir(userId);

    // Clean up existing container with the same name
    try {
        const existing = docker.getContainer(name);
        const info = await existing.inspect();
        if (info.State.Running) {
            await existing.stop();
        }
        await existing.remove();
        console.log(`♻️  Removed existing container "${name}"`);
    } catch {
        // No existing container — that's fine
    }

    // Pull image if not present
    try {
        await docker.getImage(IMAGE).inspect();
    } catch {
        console.log(`📦  Pulling image ${IMAGE}...`);
        await new Promise<void>((resolve, reject) => {
            docker.pull(IMAGE, (err: Error | null, stream: NodeJS.ReadableStream) => {
                if (err) return reject(err);
                docker.modem.followProgress(stream, (err: Error | null) => {
                    if (err) return reject(err);
                    resolve();
                });
            });
        });
        console.log(`✅  Image ${IMAGE} pulled`);
    }

    // Create and start container
    const container = await docker.createContainer({
        Image: IMAGE,
        name,
        Env: [`API_KEY=${apiKey}`],
        HostConfig: {
            Memory: MEMORY_LIMIT,
            MemorySwap: MEMORY_LIMIT, // no swap
            Binds: [`${hostDataDir}:/app/data`],
            PortBindings: {
                [INTERNAL_PORT]: [{ HostPort: "" }], // random host port
            },
            RestartPolicy: { Name: "unless-stopped" },
        },
        ExposedPorts: {
            [INTERNAL_PORT]: {},
        },
    });

    await container.start();

    // Retrieve the assigned host port
    const inspectData = await container.inspect();
    const portBindings =
        inspectData.NetworkSettings.Ports[INTERNAL_PORT];

    if (!portBindings || portBindings.length === 0) {
        throw new Error("Failed to retrieve assigned host port");
    }

    const assignedPort = parseInt(portBindings[0].HostPort, 10);

    console.log(
        `🚀  Container "${name}" started → localhost:${assignedPort}`
    );

    return {
        containerId: container.id,
        port: assignedPort,
    };
}

/**
 * Stop and remove a container by its ID.
 */
export async function stopAgent(containerId: string): Promise<void> {
    const container = docker.getContainer(containerId);

    try {
        const info = await container.inspect();
        if (info.State.Running) {
            await container.stop();
        }
        await container.remove();
        console.log(`🛑  Container ${containerId.slice(0, 12)} stopped & removed`);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        if (message.includes("no such container")) {
            throw new Error(`Container ${containerId} not found`);
        }
        throw err;
    }
}

/**
 * Execute the WhatsApp QR login command inside a running container
 * and return the QR code string from stdout.
 */
export async function getQrCode(containerId: string): Promise<string> {
    const container = docker.getContainer(containerId);

    try {
        await container.inspect();
    } catch {
        throw new Error(`Container ${containerId} not found`);
    }

    const exec = await container.exec({
        Cmd: ["openclaw", "channels", "login", "whatsapp", "--print-qr"],
        AttachStdout: true,
        AttachStderr: true,
    });

    const stream = await exec.start({ Detach: false, Tty: false });

    return new Promise<string>((resolve, reject) => {
        const chunks: Buffer[] = [];

        stream.on("data", (chunk: Buffer) => {
            chunks.push(chunk);
        });

        stream.on("end", () => {
            const output = Buffer.concat(chunks).toString("utf-8").trim();
            if (!output) {
                reject(new Error("No QR code output received from container"));
                return;
            }
            // Docker stream may contain 8-byte header frames; strip non-printable prefix
            const cleaned = output.replace(/^[\x00-\x1f]+/g, "").trim();
            resolve(cleaned);
        });

        stream.on("error", reject);

        // Timeout after 30s
        setTimeout(() => {
            reject(new Error("Timed out waiting for QR code"));
        }, 30_000);
    });
}
