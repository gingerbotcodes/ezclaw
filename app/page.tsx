"use client";
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">EZClaw</div>
          <button className="bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Your personal AI assistant, <br/><span className="text-gray-400">deployed in 30 seconds.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Avoid technical headaches. One-click deploy your own 24/7 active AI employee. Connects to WhatsApp & Telegram instantly.
        </p>
        <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition transform shadow-xl">
          Deploy Your Assistant →
        </button>
        <p className="mt-4 text-sm text-gray-400">Limited cloud servers — only 7 left</p>
      </header>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why EZClaw?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* The Hard Way */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 opacity-60">
              <h3 className="text-xl font-bold mb-6 text-gray-400">The Hard Way</h3>
              <ul className="space-y-4 text-gray-500">
                <li className="flex justify-between"><span>Buy Virtual Machine</span> <span>15 min</span></li>
                <li className="flex justify-between"><span>Configure SSH Keys</span> <span>10 min</span></li>
                <li className="flex justify-between"><span>Install Node & Python</span> <span>15 min</span></li>
                <li className="flex justify-between"><span>Debug Environment</span> <span>20 min</span></li>
                <li className="flex justify-between"><span>Connect APIs</span> <span>10 min</span></li>
                <li className="border-t pt-4 flex justify-between font-bold"><span>Total Time</span> <span>~1 Hour+</span></li>
              </ul>
              <p className="mt-6 text-xs text-gray-400">*Requires coding knowledge.</p>
            </div>

            {/* The EZClaw Way */}
            <div className="bg-black text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
              <h3 className="text-xl font-bold mb-6">The EZClaw Way</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex justify-between items-center">
                  <span>Pick a Model</span> 
                  <span className="text-green-400">✓</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Connect WhatsApp</span> 
                  <span className="text-green-400">✓</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Click Deploy</span> 
                  <span className="text-green-400">✓</span>
                </li>
                <li className="border-t border-gray-800 pt-4 flex justify-between font-bold text-white text-xl">
                  <span>Total Time</span> <span>30 Seconds</span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-gray-500">*No coding required. We handle the servers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">One assistant, thousands of use cases.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Read & summarize email", "Draft replies", "Schedule meetings", "Track expenses",
              "Find best prices", "Negotiate refunds", "Monitor news", "Summarize PDFs",
              "Create invoices", "Research competitors", "Find recipes", "Plan travel",
              "Remind deadlines", "Transcribe audio", "Write code snippets", "Track habits"
            ].map((useCase, i) => (
              <div key={i} className="p-4 border border-gray-100 rounded-lg hover:border-black transition cursor-default text-sm font-medium text-gray-600 hover:text-black bg-gray-50/50 hover:bg-white">
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm border-t border-gray-100">
        &copy; 2026 EZClaw. Built for the future of work.
      </footer>
    </div>
  );
}
