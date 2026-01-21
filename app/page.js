'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal, Server, Code2, Database } from 'lucide-react';

export default function Home() {
  const [techStack, setTechStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setTechStack(data.techStack || []);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-darkBg text-white overflow-hidden relative selection:bg-sannViolet selection:text-white">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sannDarkViolet/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar Simple */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-sannViolet to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">S</div>
          <span className="font-bold text-xl tracking-tight">SANN404<span className="text-sannViolet">FORUM</span></span>
        </div>
        <Link href="/dashboard" className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-all backdrop-blur-sm border border-white/10">
          Login / Dashboard
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-sannViolet/50 bg-sannViolet/10 text-sannViolet text-sm font-medium mb-6 inline-block">
            🚀 The Ultimate Developer Ecosystem
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Your Projects are Messy... <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sannViolet">
              We Make Them Work.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Organize your tools, deploy projects, and access premium scripts in one unified dark-mode workspace. Built for speed, security, and scalability.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
             <Link href="/dashboard">
              <button className="px-8 py-4 bg-sannViolet hover:bg-sannDarkViolet text-white rounded-xl font-bold text-lg shadow-lg shadow-sannViolet/25 transition-all flex items-center gap-2 group">
                Akses Dashboard
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="https://t.me/sannnforums" target="_blank" className="px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 rounded-xl font-medium text-gray-300 transition-all">
              Join Community
            </a>
          </div>
        </motion.div>

        {/* Hero Image Mockup (Visual Representation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 mx-auto max-w-5xl rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-sannViolet/10"
        >
          {/* Menggunakan gambar coding reallife */}
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80" 
            alt="Dashboard Preview" 
            className="w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
          />
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 border-t border-gray-800 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Mastered Technologies</h2>
            <p className="text-gray-400">Platform ini dibangun dan dikelola dengan stack teknologi modern.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {loading ? (
              <p className="text-gray-600">Loading Tech Stack...</p>
            ) : (
              techStack.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-16 h-16 p-3 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-sannViolet/50 transition-all flex items-center justify-center ${tech.invert ? 'bg-gray-200' : ''}`}>
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono group-hover:text-sannViolet">{tech.name}</span>
                </motion.div>
              ))
            )}
            {/* Manual add for Acode since it might not be in API list sometimes */}
            <div className="flex flex-col items-center gap-2 group">
                 <div className="w-16 h-16 p-3 rounded-xl bg-gray-900 border border-gray-800 group-hover:border-sannViolet/50 transition-all flex items-center justify-center">
                    <span className="font-bold text-2xl text-green-500">A</span>
                 </div>
                 <span className="text-xs text-gray-500 font-mono">Acode</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Info Section */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Scalability, <br/> Designed for <span className="text-sannViolet">Humans.</span></h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            SANN404 FORUM bukan sekadar kumpulan link. Ini adalah ekosistem yang dirancang dengan **Next.js** dan **Node.js** untuk memastikan performa maksimal. 
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-sannViolet/20 text-sannViolet"><Terminal size={20}/></div>
              <span>Didevelop penuh menggunakan Acode di Android.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Database size={20}/></div>
              <span>Backend API Routes untuk keamanan data project.</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20 text-green-400"><Code2 size={20}/></div>
              <span>Open Source & Community Driven.</span>
            </li>
          </ul>
        </div>
        <div className="relative">
             <img 
            src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80" 
            alt="Server Data" 
            className="rounded-2xl shadow-2xl border border-gray-800 relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sannViolet/30 rounded-2xl -z-0"></div>
        </div>
      </section>

      {/* Footer Professional */}
      <footer className="bg-black py-12 border-t border-gray-800 text-center md:text-left">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">SANN404 FORUM</h3>
            <p className="text-gray-500 max-w-xs">
              Platform tools developer nomor #1 yang dikembangkan dengan cinta dan kopi.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link href="/dashboard">Dashboard Tools</Link></li>
              <li><a href="https://saweria.co/sannnforums">Donasi / Support</a></li>
              <li><a href="https://roadmap.sh">Developer Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal & Credit</h4>
            <p className="text-gray-500 text-sm">
              Developed by <span className="text-white">SANN404</span>. <br/>
              &copy; 2024 SannnForums Corp. <br/>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
