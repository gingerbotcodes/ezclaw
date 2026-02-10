"use client";
import React, { useState } from "react";

/* ── SVG Icon Components ── */
const ClaudeIcon = () => (
  <svg viewBox="0 0 46 32" className="w-6 h-6" fill="#D97757">
    <path d="M33.6 0H26l-13 32h7.6L33.6 0Zm-14 0H12L0 32h7.6L19.6 0ZM27 11l6.4 21H41L34.5 11H27Z" />
  </svg>
);

const GPTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#10A37F">
    <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A5.98 5.98 0 0 0 13.26 24a6.06 6.06 0 0 0 5.77-4.21 5.99 5.99 0 0 0 4-2.9 6.06 6.06 0 0 0-.75-7.07zM13.26 22.43a4.48 4.48 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zM3.6 18.3a4.47 4.47 0 0 1-.54-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.84 2.79a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.68a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L4.04 14.02A4.5 4.5 0 0 1 2.34 7.87zm16.6 3.86L13.1 8.36l2.02-1.16a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.68a.79.79 0 0 0-.4-.66zm2.01-3.02l-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68zm1.1-2.37l2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5z" />
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 28 28" className="w-6 h-6">
    <defs>
      <linearGradient id="gemGrad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <path d="M14 28C14 21.83 9.17 17 3 14 9.17 11 14 6.17 14 0c0 6.17 4.83 11 11 14-6.17 3-11 7.83-11 14Z" fill="url(#gemGrad)" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M22 2L11 13" stroke="#26A5E4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#26A5E4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M9.5 14.5C10.3284 14.5 11 13.8284 11 13C11 12.1716 10.3284 11.5 9.5 11.5C8.67157 11.5 8 12.1716 8 13C8 13.8284 8.67157 14.5 9.5 14.5Z" fill="#5865F2" />
    <path d="M14.5 14.5C15.3284 14.5 16 13.8284 16 13C16 12.1716 15.3284 11.5 14.5 11.5C13.6716 11.5 13 12.1716 13 13C13 13.8284 13.6716 14.5 14.5 14.5Z" fill="#5865F2" />
    <path d="M8.5 8.5C8.5 8.5 10 7.5 12 7.5C14 7.5 15.5 8.5 15.5 8.5" stroke="#5865F2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 10C6 10 5 12 5 14C5 16 7 19 9 19.5L10 17.5" stroke="#5865F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 10C18 10 19 12 19 14C19 16 17 19 15 19.5L14 17.5" stroke="#5865F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 14.17 2.69 16.17 3.86 17.81L2.5 22L6.78 20.67C8.33 21.56 10.11 22.05 12 22.05C17.52 22.05 22 17.57 22 12.05C22 6.53 17.52 2 12 2Z" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10.5C8.5 12 10 14.5 12 15.5C13.5 14.5 14.5 13.5 15 12.5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="10" cy="10" r="9" fill="rgba(34,197,94,0.15)" stroke="#22C55E" strokeWidth="1.2" />
    <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0" fill="none">
    <circle cx="10" cy="10" r="9" fill="rgba(239,68,68,0.15)" stroke="#EF4444" strokeWidth="1.2" />
    <path d="M7 7L13 13M13 7L7 13" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 18 18" className="w-4 h-4">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853" />
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 2.58 9 2.58z" fill="#EA4335" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="16" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6L10 11L18 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Data ── */
const models = [
  { id: "claude", name: "Claude Opus 4", icon: <ClaudeIcon />, desc: "Anthropic" },
  { id: "gpt", name: "GPT-5.2", icon: <GPTIcon />, desc: "OpenAI" },
  { id: "gemini", name: "Gemini 3 Flash", icon: <GeminiIcon />, desc: "Google" },
];

const channels = [
  { id: "telegram", name: "Telegram", icon: <TelegramIcon /> },
  { id: "discord", name: "Discord", icon: <DiscordIcon /> },
  { id: "whatsapp", name: "WhatsApp", icon: <WhatsAppIcon /> },
];

const traditionalSteps = [
  { label: "Purchase a virtual machine", time: "15 min" },
  { label: "Create SSH keys & store securely", time: "10 min" },
  { label: "Connect to server via SSH", time: "5 min" },
  { label: "Install Node.js and NPM", time: "5 min" },
  { label: "Install OpenClaw", time: "7 min" },
  { label: "Configure OpenClaw", time: "10 min" },
  { label: "Connect to AI provider", time: "4 min" },
  { label: "Pair with messaging channel", time: "4 min" },
];

const useCases = [
  { icon: "📧", text: "Read & summarize emails" },
  { icon: "✏️", text: "Draft replies" },
  { icon: "🌐", text: "Translate messages" },
  { icon: "📥", text: "Organize your inbox" },
  { icon: "🎧", text: "Answer support tickets" },
  { icon: "📄", text: "Summarize long documents" },
  { icon: "🧾", text: "Do your taxes" },
  { icon: "💰", text: "Track expenses" },
  { icon: "🔄", text: "Manage subscriptions" },
  { icon: "📅", text: "Plan your week" },
  { icon: "🏷️", text: "Find the best prices" },
  { icon: "📱", text: "Draft social posts" },
  { icon: "📝", text: "Write contracts" },
  { icon: "📰", text: "Monitor the news" },
  { icon: "💼", text: "Draft job descriptions" },
  { icon: "🏃", text: "Run standup summaries" },
  { icon: "📊", text: "Analyze spreadsheets" },
  { icon: "🛡️", text: "Compare insurance quotes" },
];

/* ── Component ── */
export default function Home() {
  const [selectedModel, setSelectedModel] = useState("claude");
  const [selectedChannel, setSelectedChannel] = useState("telegram");

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden max-w-[100vw]">

      {/* ╔══ Navbar ══╗ */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-[15px] tracking-tight flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
            <span className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            EZClaw
          </div>
          <a
            href="mailto:support@ezclaw.com?subject=EZClaw%20Support%20Inquiry&body=Hi%2C%0A%0AI%20need%20help%20with%3A%0A%0A"
            className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition"
          >
            <MailIcon />
            Contact Support
          </a>
        </div>
      </nav>

      {/* ╔══ Hero ══╗ */}
      <header className="pt-24 sm:pt-32 pb-8 px-6 text-center max-w-3xl mx-auto glow-indigo-top animate-fade-in-up">
        <h1
          className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-[-0.02em] leading-[1.2] text-white mb-4"
          style={{ fontFamily: "var(--font-ibm-plex), 'IBM Plex Sans', sans-serif" }}
        >
          Deploy your personal assistant{" "}
          <br className="hidden sm:block" />
          in under 1 minute
        </h1>
        <p
          className="text-[15px] sm:text-base text-zinc-400 max-w-lg mx-auto leading-relaxed font-normal"
          style={{ fontFamily: "var(--font-ibm-plex), 'IBM Plex Sans', sans-serif" }}
        >
          Skip all technical complexity and one-click deploy your own 24/7 active personal AI assistant.
        </p>
      </header>

      {/* ╔══ Interactive Configurator ══╗ */}
      <section className="px-6 pb-10 max-w-2xl mx-auto animate-fade-in-up-delay-1">
        <div className="glass-card p-6 sm:p-8 space-y-8">
          {/* Step 1: Model */}
          <div>
            <h2 className="text-sm font-semibold text-zinc-300 mb-4 tracking-wide">
              Which model do you want as default?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {models.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className={`select-card flex items-center gap-3 text-left ${selectedModel === m.id ? "selected" : ""}`}
                >
                  <div className="shrink-0">{m.icon}</div>
                  <div>
                    <div className="text-sm font-medium text-white">{m.name}</div>
                    <div className="text-[11px] text-zinc-500">{m.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Channel */}
          <div>
            <h2 className="text-sm font-semibold text-zinc-300 mb-4 tracking-wide">
              Which channel do you want to use for messaging?
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {channels.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChannel(c.id)}
                  className={`select-card flex flex-col items-center justify-center gap-2 py-5 ${selectedChannel === c.id ? "selected" : ""}`}
                >
                  {c.icon}
                  <span className="text-xs font-medium text-zinc-400">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-[11px] text-zinc-500 leading-relaxed max-w-sm mx-auto">
              Sign in to deploy your AI assistant and connect your channels.
              <br />
              <span className="text-zinc-600">Limited cloud servers — only <strong className="text-zinc-400">11</strong> remaining</span>
            </p>
            <button className="inline-flex items-center gap-3 bg-white text-black px-7 py-3 rounded-xl font-semibold text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200">
              <GoogleIcon />
              Sign in with Google
            </button>
          </div>
        </div>
      </section>

      {/* ╔══ Comparison ══╗ */}
      <section className="px-6 py-14 border-t border-white/5 glow-purple animate-fade-in-up-delay-2">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-3">
            Traditional Method vs EZClaw
          </h2>
          <p className="text-center text-zinc-500 text-sm mb-14 max-w-md mx-auto">
            See just how much time and effort you save.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Column */}
            <div className="glass-card p-6">
              <h3 className="font-semibold text-zinc-300 mb-1 text-sm tracking-wide">Traditional</h3>
              <p className="text-[11px] text-zinc-600 mb-5">The long way around</p>
              <div className="space-y-3">
                {traditionalSteps.map((step, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <XIcon />
                      {step.label}
                    </div>
                    <span className="text-zinc-600 text-xs font-mono">{step.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-zinc-500 font-medium">Total</span>
                <span className="text-red-400 font-bold text-lg font-mono">60 min</span>
              </div>
              <p className="mt-3 text-[10px] text-zinc-600 italic leading-relaxed">
                If you&apos;re non-technical, multiply these times by 10 — you&apos;ll need to learn each step before doing it.
              </p>
            </div>

            {/* EZClaw Column */}
            <div className="glass-card p-6 animate-pulse-glow">
              <h3 className="font-semibold text-zinc-300 mb-1 text-sm tracking-wide">EZClaw</h3>
              <p className="text-[11px] text-zinc-600 mb-5">The smart shortcut</p>
              <div className="flex flex-col items-center justify-center py-8">
                <span className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">&lt;1 min</span>
                <p className="text-zinc-500 text-sm mt-4 text-center leading-relaxed max-w-xs">
                  Pick a model, connect your channel, deploy — done in under 1 minute.
                </p>
              </div>
              <div className="space-y-2.5 mt-4">
                {[
                  "Servers already provisioned & waiting",
                  "SSH & environment pre-configured",
                  "Simple, secure, instant connection",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-400">
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ╔══ Use Cases ══╗ */}
      <section className="py-14 border-t border-white/5">
        <div className="text-center animate-fade-in-up-delay-3 mb-12 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            What can your EZClaw assistant<br />do for you?
          </h2>
          <p className="text-zinc-500 text-sm">One assistant, thousands of use cases</p>
        </div>

        {/* Marquee Row 1 — scrolls left */}
        <div className="marquee-container mb-3">
          <div className="marquee-row marquee-left" style={{ '--duration': '35s' } as React.CSSProperties}>
            {[...useCases.slice(0, 9), ...useCases.slice(0, 9)].map((item, i) => (
              <div key={i} className="use-chip">
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 — scrolls right */}
        <div className="marquee-container mb-3">
          <div className="marquee-row marquee-right" style={{ '--duration': '40s' } as React.CSSProperties}>
            {[...useCases.slice(9), ...useCases.slice(9)].map((item, i) => (
              <div key={i} className="use-chip">
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 3 — scrolls left slower */}
        <div className="marquee-container">
          <div className="marquee-row marquee-left" style={{ '--duration': '45s' } as React.CSSProperties}>
            {[...useCases.slice(4, 14), ...useCases.slice(4, 14)].map((item, i) => (
              <div key={i} className="use-chip">
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-14 px-6">
          <p className="text-zinc-600 text-[11px] uppercase tracking-widest opacity-70">
            Your assistant learns with persistent memory — it gets smarter the more you use it
          </p>
        </div>
      </section>

      {/* ╔══ Footer ══╗ */}
      <footer className="py-10 border-t border-white/5 animate-fade-in-up-delay-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            Built with <span className="text-red-400">❤️</span> by Ginger and MK42
          </p>
          <a
            href="mailto:support@ezclaw.com?subject=EZClaw%20Support%20Inquiry&body=Hi%2C%0A%0AI%20need%20help%20with%3A%0A%0A"
            className="flex items-center gap-2 text-xs text-zinc-600 hover:text-white transition"
          >
            <MailIcon />
            Contact Support
          </a>
        </div>
      </footer>
    </div>
  );
}
