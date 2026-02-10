"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07080a] text-white font-sans selection:bg-white selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#07080a]/80 backdrop-blur z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-full"></span> EZClaw
          </div>
          <button className="bg-[#18181b] border border-white/10 text-white px-5 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition text-sm">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 mb-6 tracking-wide uppercase">
          Private Beta v1.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Deploy your AI Assistant<br/>in under 1 minute.
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
          Skip the terminal. Avoid the config. One-click deploy your 24/7 active OpenClaw instance.
        </p>
        
        {/* Connection UI Mockup */}
        <div className="max-w-md mx-auto bg-[#111] border border-white/10 rounded-2xl p-6 mb-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm font-bold text-gray-300">Connect Channel</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between bg-[#18181b] hover:bg-[#222] border border-white/5 p-4 rounded-xl transition group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">W</div>
                <span className="text-sm">WhatsApp</span>
              </div>
              <span className="text-xs text-gray-500 group-hover:text-white">Connect →</span>
            </button>
            <button className="w-full flex items-center justify-between bg-[#18181b] hover:bg-[#222] border border-white/5 p-4 rounded-xl transition group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
                <span className="text-sm">Telegram</span>
              </div>
              <span className="text-xs text-gray-500 group-hover:text-white">Connect →</span>
            </button>
          </div>
        </div>

        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition transform">
          Deploy Instance →
        </button>
        <p className="mt-6 text-xs text-gray-500">Limited capacity: 11 servers remaining</p>
      </header>

      {/* Comparison Table */}
      <section className="py-20 border-t border-white/5 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-500">Traditional Method</h3>
              <ul className="space-y-4 text-sm text-gray-500 font-mono">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>1. Buy VPS ($5/mo)</span> <span>15m</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>2. SSH & Security</span> <span>20m</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>3. Install Node.js</span> <span>10m</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>4. Config OpenClaw</span> <span>30m</span></li>
                <li className="text-red-500 pt-2">Total: 1 Hour + Headaches</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">EZClaw Method</h3>
              <ul className="space-y-4 text-sm text-gray-300 font-mono">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>1. Sign In</span> <span>5s</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>2. Pick Model</span> <span>10s</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>3. Deploy</span> <span>15s</span></li>
                <li className="text-green-400 pt-2 font-bold">Total: 30 Seconds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        &copy; 2026 EZClaw.
      </footer>
    </div>
  );
}
