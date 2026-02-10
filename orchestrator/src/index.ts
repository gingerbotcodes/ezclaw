import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { spawnAgent, stopAgent, getQrCode } from "./dockerManager.js";

// ── App ──
const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);

app.use(cors());
app.use(express.json());

// ── Health ──
app.get("/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", uptime: process.uptime() });
});

// ── POST /agent/spawn ──
app.post("/agent/spawn", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, apiKey, telegramBotId, plan } = req.body;

        if (!userId || typeof userId !== "string") {
            res.status(400).json({ error: "userId is required (string)" });
            return;
        }
        if (!apiKey || typeof apiKey !== "string") {
            res.status(400).json({ error: "apiKey is required (string)" });
            return;
        }

        const result = await spawnAgent(userId, apiKey, telegramBotId, plan);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
});

// ── POST /agent/stop ──
app.post("/agent/stop", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { containerId } = req.body;

        if (!containerId || typeof containerId !== "string") {
            res.status(400).json({ error: "containerId is required (string)" });
            return;
        }

        await stopAgent(containerId);
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

// ── GET /agent/qr/:containerId ──
app.get("/agent/qr/:containerId", async (req: Request<{ containerId: string }>, res: Response, next: NextFunction) => {
    try {
        const { containerId } = req.params;
        const qr = await getQrCode(containerId);
        res.json({ qr });
    } catch (err) {
        next(err);
    }
});

// ── Global Error Handler ──
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    console.error("❌ ", err.message);

    // Map known errors to status codes
    if (err.message.includes("not found")) {
        res.status(404).json({ error: err.message });
        return;
    }
    if (err.message.includes("Cannot connect to the Docker daemon")) {
        res.status(503).json({
            error: err.message,
            hint: "Make sure Docker Desktop is running",
        });
        return;
    }

    res.status(500).json({ error: err.message });
});

// ── Start ──
app.listen(PORT, () => {
    console.log(`
  ╔══════════════════════════════════════╗
  ║   EZClaw Orchestrator API            ║
  ║   http://localhost:${PORT}              ║
  ╚══════════════════════════════════════╝
  `);
});
