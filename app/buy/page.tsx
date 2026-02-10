"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

/* ── Icons ── */
const GoogleIcon = () => (
    <svg viewBox="0 0 18 18" className="w-5 h-5">
        <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
        <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 2.58 9 2.58z" fill="#EA4335" />
    </svg>
);

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <path d="M22 2L11 13" stroke="#26A5E4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#26A5E4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CheckCircle = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
        <circle cx="12" cy="12" r="10" fill="rgba(34,197,94,0.15)" stroke="#22C55E" strokeWidth="1.5" />
        <path d="M8 12L11 15L16 9" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SpinnerIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 animate-spin" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" strokeDasharray="60" strokeDashoffset="15" strokeLinecap="round" />
    </svg>
);

const ArrowLeft = () => (
    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 4L6 10L12 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ── Price lookup based on model from homepage ── */
const modelPricing: Record<string, { price: string; label: string; brain: string }> = {
    claude: { price: "₹2,999", label: "God Mode", brain: "Claude Opus 4" },
    gpt: { price: "₹1,999", label: "Better Brain", brain: "GPT-5.2" },
    gemini: { price: "₹999", label: "Shared Brain", brain: "Gemini 3 Flash" },
};

const deploySteps = [
    "Provisioning cloud server",
    "Creating Docker container",
    "Installing OpenClaw",
    "Configuring AI model",
    "Connecting Telegram bot",
    "Running health checks",
];

/* ── Main buy flow (wrapped for Suspense) ── */
function BuyFlow() {
    const searchParams = useSearchParams();
    const model = searchParams.get("model") || "claude";
    const channel = searchParams.get("channel") || "telegram";
    const pricing = modelPricing[model] || modelPricing.claude;

    const { data: session, status } = useSession();
    const isLoggedIn = status === "authenticated";

    // Step: 1=login, 2=bot token, 3=payment, 4=deploy
    // Auto-advance to step 2 if already logged in
    const [step, setStep] = useState(1);
    const [botToken, setBotToken] = useState("");
    const [deployProgress, setDeployProgress] = useState(-1);
    const [deployDone, setDeployDone] = useState(false);

    // Auto-advance when session becomes active
    useEffect(() => {
        if (isLoggedIn && step === 1) {
            setStep(2);
        }
    }, [isLoggedIn, step]);

    /* deploy animation */
    useEffect(() => {
        if (step !== 4) return;
        setDeployProgress(0);
        const timers: ReturnType<typeof setTimeout>[] = [];
        deploySteps.forEach((_, i) => {
            timers.push(
                setTimeout(() => {
                    setDeployProgress(i + 1);
                    if (i === deploySteps.length - 1) {
                        setTimeout(() => setDeployDone(true), 800);
                    }
                }, (i + 1) * 1200)
            );
        });
        return () => timers.forEach(clearTimeout);
    }, [step]);

    const handleGoogleSignIn = () => {
        // After Google OAuth completes, redirect back here with query params preserved
        const callbackUrl = `/buy?model=${model}&channel=${channel}`;
        signIn("google", { callbackUrl });
    };

    const handleConfirmPayment = () => {
        setStep(4);
    };

    /* ══ Step 1: Login ══ */
    const renderLogin = () => (
        <div className="buy-step-content buy-login-step">
            <div className="buy-login-card">
                <div className="buy-login-logo">
                    <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
                    <span className="text-lg font-bold tracking-tight">EZClaw</span>
                </div>
                <h2 className="buy-title" style={{ marginTop: 24 }}>Sign in to continue</h2>
                <p className="buy-subtitle">Connect your Google account to deploy your assistant</p>
                {status === "loading" ? (
                    <div className="flex items-center justify-center gap-2 mt-8 text-zinc-400">
                        <SpinnerIcon />
                        <span>Checking session…</span>
                    </div>
                ) : !isLoggedIn ? (
                    <button onClick={handleGoogleSignIn} className="buy-google-btn mt-8">
                        <GoogleIcon />
                        <span>Sign in with Google</span>
                    </button>
                ) : (
                    <div className="buy-logged-in mt-8">
                        <CheckCircle />
                        <span>Signed in as {session?.user?.name || session?.user?.email}</span>
                    </div>
                )}
            </div>
        </div>
    );

    /* ══ Step 2: Bot Token ══ */
    const renderBotToken = () => (
        <div className="buy-step-content">
            <h2 className="buy-title">Enter your Telegram Bot Token</h2>
            <p className="buy-subtitle">
                Create a bot via{" "}
                <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer" className="text-[#26A5E4] hover:underline">
                    @BotFather
                </a>{" "}
                and paste the token below
            </p>
            <div className="buy-input-group mt-8">
                <div className="buy-input-wrapper">
                    <TelegramIcon />
                    <input
                        type="text"
                        placeholder="e.g. 123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
                        value={botToken}
                        onChange={(e) => setBotToken(e.target.value)}
                        className="buy-input"
                        autoFocus
                    />
                </div>
                <p className="buy-input-hint">Your bot token is kept encrypted and never shared.</p>
            </div>
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => setStep(3)}
                    disabled={!botToken.trim()}
                    className="buy-next-btn"
                >
                    <span>Continue to Payment</span>
                    <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M8 4L14 10L8 16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );

    /* ══ Step 3: Payment ══ */
    const renderPayment = () => (
        <div className="buy-step-content">
            <h2 className="buy-title">Confirm & Pay</h2>
            <p className="buy-subtitle">Review your setup before deploying</p>

            <div className="buy-modal-summary mt-8 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-zinc-400">AI Model</span>
                    <span className="text-sm font-medium text-white">{pricing.brain}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-zinc-400">Plan</span>
                    <span className="text-sm font-medium text-white">{pricing.label}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-zinc-400">Platform</span>
                    <span className="text-sm font-medium text-white capitalize">{channel}</span>
                </div>
                {session?.user?.email && (
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-zinc-400">Account</span>
                        <span className="text-sm font-medium text-white">{session.user.email}</span>
                    </div>
                )}
                <div className="buy-modal-divider" />
                <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-zinc-300">Total</span>
                    <span className="text-xl font-bold text-white">{pricing.price}<span className="text-sm font-normal text-zinc-500">/mo</span></span>
                </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
                <button onClick={() => setStep(2)} className="buy-modal-cancel" style={{ maxWidth: 140 }}>
                    Back
                </button>
                <button onClick={handleConfirmPayment} className="buy-modal-confirm" style={{ maxWidth: 240 }}>
                    Confirm & Deploy
                </button>
            </div>
        </div>
    );

    /* ══ Step 4: Deploying ══ */
    const renderDeploy = () => (
        <div className="buy-step-content buy-deploy-step">
            {!deployDone ? (
                <>
                    <div className="buy-deploy-spinner">
                        <div className="buy-deploy-ring" />
                    </div>
                    <h2 className="buy-title" style={{ marginTop: 32 }}>Deploying your assistant…</h2>
                    <p className="buy-subtitle">This usually takes about 30 seconds</p>
                    <div className="buy-deploy-steps mt-8">
                        {deploySteps.map((s, i) => (
                            <div
                                key={i}
                                className={`buy-deploy-item ${deployProgress > i ? "done" : deployProgress === i ? "active" : ""}`}
                            >
                                <div className="buy-deploy-item-icon">
                                    {deployProgress > i ? <CheckCircle /> : deployProgress === i ? <SpinnerIcon /> : <div className="buy-deploy-dot" />}
                                </div>
                                <span>{s}</span>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="buy-deploy-success">
                    <div className="buy-success-icon">
                        <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                            <circle cx="32" cy="32" r="30" fill="rgba(34,197,94,0.1)" stroke="#22C55E" strokeWidth="2" />
                            <path d="M20 32L28 40L44 24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="buy-title" style={{ marginTop: 24 }}>Your assistant is live! 🎉</h2>
                    <p className="buy-subtitle">Open Telegram and start chatting with your bot.</p>
                    <Link href="/" className="buy-home-btn mt-8">Back to Home</Link>
                </div>
            )}
        </div>
    );

    const stepRenderers = [renderLogin, renderBotToken, renderPayment, renderDeploy];
    const stepLabels = ["Login", "Bot Token", "Payment"];

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden max-w-[100vw]">
            {/* ── Navbar ── */}
            <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-white/5">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="font-bold text-[15px] tracking-tight flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
                        <span className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                        EZClaw
                    </Link>
                    <div className="flex items-center gap-3">
                        {isLoggedIn && session?.user && (
                            <div className="flex items-center gap-2">
                                {session.user.image && (
                                    <img src={session.user.image} alt="" className="w-6 h-6 rounded-full" />
                                )}
                                <span className="text-xs text-zinc-400 hidden sm:block">{session.user.name}</span>
                            </div>
                        )}
                        {step <= 3 && <span className="text-xs text-zinc-500">Step {step} of 3</span>}
                    </div>
                </div>
            </nav>

            {/* ── Progress bar ── */}
            {step <= 3 && (
                <div className="fixed top-[57px] left-0 w-full z-40">
                    <div className="buy-progress-bar">
                        <div className="buy-progress-fill" style={{ width: `${(step / 3) * 100}%` }} />
                    </div>
                </div>
            )}

            {/* ── Step dots ── */}
            {step <= 3 && (
                <div className="fixed top-[61px] left-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/5">
                    <div className="max-w-sm mx-auto px-6 py-2 flex justify-between">
                        {stepLabels.map((label, i) => (
                            <div key={label} className={`buy-step-label ${i + 1 === step ? "active" : ""} ${i + 1 < step ? "completed" : ""}`}>
                                <div className="buy-step-dot">
                                    {i + 1 < step ? (
                                        <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none">
                                            <path d="M3 6L5.5 8.5L9 4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <span>{i + 1}</span>
                                    )}
                                </div>
                                <span className="text-[11px]">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* ── Content ── */}
            <main style={{ paddingTop: step <= 3 ? 130 : 80 }} className="pb-16 px-6 max-w-3xl mx-auto">
                {stepRenderers[step - 1]()}
            </main>

            {/* ── Back on step 2 ── */}
            {step === 2 && (
                <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur-xl border-t border-white/5 z-40">
                    <div className="max-w-3xl mx-auto px-6 py-4">
                        <button onClick={() => setStep(1)} className="buy-back-btn">
                            <ArrowLeft />
                            <span>Back</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

/* ── Page export with Suspense ── */
export default function BuyPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="buy-deploy-ring w-10 h-10" />
            </div>
        }>
            <BuyFlow />
        </Suspense>
    );
}
