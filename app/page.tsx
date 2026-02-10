"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07080a] text-white font-sans selection:bg-white selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#07080a]/80 backdrop-blur z-50 border-b border-white/5 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg tracking-tight flex items-center gap-2 cursor-pointer hover:opacity-80">
            <span className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></span> EZClaw
          </div>
          <button className="bg-[#18181b] border border-white/10 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700">
        <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-gray-400 mb-6 tracking-wide uppercase hover:bg-white/10 cursor-default transition">
          Private Beta v1.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
          Deploy your AI Assistant<br/>in under 1 minute.
        </h1>
        <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed opacity-80">
          Skip the terminal. Avoid the config. One-click deploy your 24/7 active AI employee.
        </p>
        
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-base hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition transform">
          Deploy Instance →
        </button>
        <p className="mt-6 text-[10px] text-gray-600 animate-pulse">Limited capacity: 11 servers remaining</p>
      </header>

      {/* Use Cases Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-[#07080a] to-[#0c0d10]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 tracking-tight">What can EZClaw<br/>do for you?</h2>
          <p className="text-gray-500 mb-12 text-sm">One assistant, thousands of use cases</p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: "📥", text: "Organize your inbox" },
              { icon: "🎧", text: "Answer support tickets" },
              { icon: "🧾", text: "Track expenses and receipts" },
              { icon: "🛡️", text: "Compare insurance quotes" },
              { icon: "📉", text: "Price-drop alerts" },
              { icon: "⚖️", text: "Compare product specs" },
              { icon: "📝", text: "Summarize bullet points" },
              { icon: "✈️", text: "Book travel and hotels" },
              { icon: "💼", text: "Draft job descriptions" },
              { icon: "🏃", text: "Run standup summaries" },
            ].map((item, i) => (
              <div key={i} className="px-5 py-2 border border-white/5 rounded-full bg-[#111] hover:bg-[#1a1a1a] hover:border-white/20 transition cursor-pointer flex items-center gap-2 text-xs text-gray-400 hover:text-white group hover:scale-105 active:scale-95 duration-200 shadow-sm hover:shadow-md">
                <span className="opacity-50 group-hover:opacity-100 transition scale-75 group-hover:scale-100">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-600 text-[10px] uppercase tracking-widest opacity-60">
            PS. You can add as many use cases as you want via natural language
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-700 text-xs border-t border-white/5 hover:text-gray-500 transition cursor-default">
        &copy; 2026 EZClaw. Built for the future of work.
      </footer>
    </div>
  );
}
