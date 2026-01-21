'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Coffee, Loader2, Search, Cpu, Lock, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-darkBg text-white gap-4">
        <Loader2 className="animate-spin text-sannViolet w-12 h-12" />
        <p className="text-gray-500 animate-pulse">Memuat Assets SANN404...</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-darkBg text-white p-4 md:p-8 relative">
      
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[400px] h-[400px] bg-sannViolet/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto space-y-12 relative z-10"
      >
        
        {/* Header Dashboard */}
        <header className="flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-1">Tools Dashboard</h1>
              <p className="text-gray-400 text-sm">Welcome back, Developer.</p>
            </div>
            <Link href="/" className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 text-sm transition-colors text-gray-300">
              &larr; Kembali ke Home
            </Link>
        </header>

        {/* PREMIUM ACCESS CARD (Highlight) */}
        {data.premium && (
          <motion.a 
            variants={itemAnim}
            href={data.premium.link}
            target="_blank"
            className="block relative overflow-hidden rounded-2xl p-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 shadow-xl shadow-yellow-900/20 group"
          >
            <div className="bg-gray-900 rounded-xl p-6 h-full flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-500/20 rounded-lg text-yellow-500">
                  <Lock size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {data.premium.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{data.premium.desc}</p>
                </div>
              </div>
              <div className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full text-sm">
                Akses Sekarang
              </div>
            </div>
          </motion.a>
        )}

        {/* MAIN TOOLS (Grid Besar) */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-sannViolet">
            <Cpu size={20} />
            <h3 className="font-bold text-lg tracking-wider uppercase">Core Utilities</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.mainTools.map((tool, idx) => (
              <motion.a
                key={idx}
                variants={itemAnim}
                href={tool.link}
                target="_blank"
                className="glass-card p-6 rounded-2xl hover:bg-gray-800/50 transition-all group border border-gray-800 hover:border-sannViolet/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-sannViolet group-hover:text-white transition-all">
                    <Zap size={24} />
                  </div>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">{tool.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed h-10 overflow-hidden">
                  {tool.detail}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* PROJECTS LIST (Grid Rapat) */}
        <section>
          <div className="flex items-center gap-2 mb-6 text-green-400">
            <Shield size={20} />
            <h3 className="font-bold text-lg tracking-wider uppercase">Project Repository</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((proj, idx) => (
              <motion.a
                key={idx}
                variants={itemAnim}
                href={proj.link}
                target="_blank"
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800 transition-all hover:translate-x-1 group"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors shadow-lg shadow-green-400/0 group-hover:shadow-green-400/50"></div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-200 group-hover:text-white mb-1">
                    {proj.name}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {proj.desc}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={16} className="text-sannViolet"/>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer Support Area */}
        <motion.div variants={itemAnim} className="pt-10 mt-10 border-t border-gray-800 text-center">
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-pink-500 to-violet-500 mb-6">
            <a 
              href={data.company.support}
              target="_blank"
              className="block px-8 py-3 rounded-full bg-black hover:bg-gray-900 transition-all text-white font-medium flex items-center gap-2"
            >
              <Coffee size={18} className="text-pink-500" />
              Support Development (Saweria)
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            {data.company.copyright} <br/>
            Engineered by <span className="text-sannViolet font-bold">{data.company.owner}</span>
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
