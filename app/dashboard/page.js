'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setTechStack(data.techStack || []);
      });
  }, []);

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-6 py-5 border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center font-bold text-sm font-serif">
              S4
            </div>
            <span className="font-bold text-sm tracking-wide hidden sm:block">/ hello@sann404.dev</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Product</a>
            <a href="#" className="hover:text-black transition-colors">Resources</a>
            <a href="#" className="hover:text-black transition-colors">Our Work</a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium hover:underline">FAQ</Link>
            <Link href="/dashboard" className="px-5 py-2.5 rounded-full border border-black text-sm font-medium hover:bg-black hover:text-white transition-all">
              Open Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-20 px-6 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-6 block">
            — DEVELOPMENT ECOSYSTEM —
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif text-black leading-[1.1] mb-8">
            The Essential Stack That <br/>
            <span className="italic">Empowers</span> Developers
          </h1>
          
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12 font-light">
            A platform delivering ultra-fast, dynamic & personalized project resources. <br/>
            Everything you need in one unified workflow.
          </p>

          {/* TECH STACK GRID (REPLACING THE ICONS IN IMAGE) */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16">
            {techStack.slice(0, 5).map((tech, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-50 flex flex-col items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer relative group">
                {idx === 2 && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
                )}
                <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                <span className="text-sm font-bold text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <Link href="/dashboard">
              <button className="px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-gray-400/50 transition-all transform hover:scale-105">
                Get Started — It's Free
              </button>
            </Link>
            
            <div className="flex gap-8 text-xs font-medium text-gray-500 mt-4">
              <span className="flex items-center gap-1">✓ Free Access</span>
              <span className="flex items-center gap-1">✓ No Credit Card Required</span>
              <span className="flex items-center gap-1">✓ Open Source</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER LOGOS */}
      <footer className="py-12 border-t border-gray-100 mt-10">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Mockup logos for visual balance */}
           <h3 className="font-bold text-xl font-serif">Express.js</h3>
           <h3 className="font-bold text-xl font-serif">React</h3>
           <h3 className="font-bold text-xl font-serif">Next.js</h3>
           <h3 className="font-bold text-xl font-serif">Tailwind</h3>
           <h3 className="font-bold text-xl font-serif">GitHub</h3>
        </div>
      </footer>
    </main>
  );
}
