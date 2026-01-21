'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [techStack, setTechStack] = useState([]);
  const [webInfo, setWebInfo] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setTechStack(data.techStack || []);
        setWebInfo(data.webDetail || {});
      });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md px-6 py-5 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm font-serif">
              S4
            </div>
            <span className="font-medium text-sm text-gray-600 hidden sm:block">/ hello@sann404.dev</span>
          </div>
          
          <div className="flex items-center gap-6">
             <span className="hidden md:block text-xs font-medium text-gray-400">v4.2.0 Stable</span>
            <Link href="/dashboard" className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-all">
              Launch App
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 container mx-auto text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase mb-8 block">
            — SYSTEM INTEGRATION —
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-[1] mb-8 tracking-tight">
            The Essential Stack That <br/>
            <span className="italic text-gray-700">Connects</span> Developers
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            A platform delivering ultra-fast, dynamic & personalized project resources. 
            Built for modern engineering teams.
          </p>

          {/* TECH STACK GRID (REAL LOGOS) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20 px-2 md:px-0">
            {techStack.map((tech, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 bg-white">
                <div className="w-10 h-10 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 group-hover:text-black uppercase tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <Link href="/dashboard">
              <button className="px-12 py-4 bg-black text-white rounded-full font-medium text-lg shadow-xl shadow-black/20 hover:scale-105 transition-all duration-300">
                Get Started — It's Free
              </button>
            </Link>
            
            <div className="flex gap-8 text-xs font-medium text-gray-400">
              <span className="flex items-center gap-1">✓ Free Signup</span>
              <span className="flex items-center gap-1">✓ No Credit Card</span>
              <span className="flex items-center gap-1">✓ Open Source</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SYSTEM ARCHITECTURE / ABOUT SECTION */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="font-serif text-3xl md:text-4xl mb-10">Architecture & Performance</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Frontend Core</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Built on top of <strong>Next.js 14 App Router</strong> allowing for React Server Components, resulting in zero-bundle-size server data fetching.
                    </p>
                    <div className="text-xs font-mono bg-gray-100 p-2 rounded inline-block text-gray-600">react@18.2.0</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Styling Engine</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Utilizing <strong>Tailwind CSS</strong> with JIT engine for atomic CSS generation and Framer Motion for hardware-accelerated animations.
                    </p>
                    <div className="text-xs font-mono bg-gray-100 p-2 rounded inline-block text-gray-600">tailwindcss@3.4</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-lg mb-2">Edge Deployment</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Deployed globally on the <strong>Vercel Edge Network</strong>, ensuring sub-100ms latency worldwide via serverless functions.
                    </p>
                     <div className="text-xs font-mono bg-gray-100 p-2 rounded inline-block text-gray-600">region: global</div>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col gap-2 text-center md:text-left">
              <h5 className="font-bold text-xl tracking-tight">SANN404 FORUM</h5>
              <p className="text-sm text-gray-400">© 2026 SANN404 Inc. All rights reserved.</p>
           </div>
           
           <div className="flex gap-8 text-sm font-medium text-gray-600">
               <a href="#" className="hover:text-black">Terms</a>
               <a href="#" className="hover:text-black">Privacy</a>
               <a href="#" className="hover:text-black">Status</a>
               <a href="#" className="hover:text-black">Contact</a>
           </div>

           <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                {/* Visual filler for client logos */}
                <span className="font-serif font-bold text-lg">Vercel</span>
                <span className="font-serif font-bold text-lg">Github</span>
           </div>
        </div>
      </footer>
    </main>
  );
}
