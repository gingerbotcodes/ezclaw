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
          Skip the terminal. Avoid the config. One-click deploy your 24/7 active AI employee.
        </p>
        
        <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition transform">
          Deploy Instance →
        </button>
        <p className="mt-6 text-xs text-gray-500">Limited capacity: 11 servers remaining</p>
      </header>

      {/* Use Cases Section (Cloned from Screenshot) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-2">What can EZClaw<br/>do for you?</h2>
          <p className="text-gray-500 mb-12 text-lg">One assistant, thousands of use cases</p>

          <div className="flex flex-wrap justify-center gap-4">
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
              <div key={i} className="px-6 py-3 border border-white/10 rounded-full bg-[#111] hover:border-white/30 transition cursor-default flex items-center gap-3 text-sm text-gray-300 hover:text-white group">
                <span className="opacity-50 group-hover:opacity-100 transition">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <p className="mt-12 text-gray-500 text-sm">
            PS. You can add as many use cases as you want via natural language
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 text-sm border-t border-white/5">
        &copy; 2026 EZClaw.
      </footer>
    </div>
  );
}
