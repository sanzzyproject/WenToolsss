'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2, Search, Zap, LayoutGrid, Shield, Crown, Coffee } from 'lucide-react';
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
        <div className="relative">
             <div className="w-16 h-16 border-4 border-sannBlue/30 border-t-sannBlue rounded-full animate-spin"></div>
             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <Zap size={20} className="text-white animate-pulse"/>
             </div>
        </div>
        <p className="text-gray-500 font-mono text-sm animate-pulse">Loading SANN404 Assets...</p>
      </div>
    );
  }

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-darkBg text-sannWhite p-4 md:p-8 relative selection:bg-sannBlue selection:text-white">
      
      {/* Dynamic Background */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-sannBlue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto space-y-12 relative z-10"
      >
        
        {/* Header Dashboard */}
        <header className="glass-panel p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 border-b-2 border-sannBlue/20">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-sannBlue rounded-xl flex items-center justify-center shadow-lg shadow-sannBlue/30">
                  <LayoutGrid className="text-white" size={24}/>
               </div>
               <div>
                  <h1 className="text-2xl font-bold tracking-tight">Console Dashboard</h1>
                  <p className="text-gray-400 text-xs md:text-sm font-mono">Welcome back, SANN404 Developer.</p>
               </div>
            </div>
            <Link href="/" className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-medium transition-all text-gray-300 border border-white/10 flex items-center gap-2">
              &larr; Back to Home
            </Link>
        </header>

        {/* SECTION 1: PREMIUM ACCESS (Highlight) */}
        {data.premium && (
          <motion.a 
            variants={itemAnim}
            href={data.premium.link}
            target="_blank"
            className="block relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-cardBg rounded-2xl p-6 md:p-8 border border-yellow-500/30 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
              
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

              <div className="flex items-start gap-5 relative z-10">
                <div className="p-4 bg-yellow-500/20 rounded-2xl text-yellow-400 shadow-inner shadow-yellow-500/10">
                  <Crown size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                      {data.premium.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-yellow-500 text-black text-[10px] font-bold rounded uppercase tracking-wider">
                      {data.premium.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm max-w-lg">{data.premium.desc}</p>
                </div>
              </div>
              
              <div className="relative z-10 px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition-transform flex items-center gap-2">
                Get Access
                <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        )}

        {/* SECTION 2: MAIN TOOLS (Large Grid) */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 bg-sannBlue rounded-full"></div>
            <h3 className="font-bold text-xl tracking-wide">CORE UTILITIES</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.mainTools.map((tool, idx) => (
              <motion.a
                key={idx}
                variants={itemAnim}
                href={tool.link}
                target="_blank"
                className="glass-panel p-6 rounded-2xl hover:bg-sannBlue/10 transition-all group border border-white/5 hover:border-sannBlue/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={18} className="text-gray-500 group-hover:text-sannBlue" />
                </div>
                
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                   {/* Icon Placeholder logic based on text */}
                   <span className="text-2xl">
                     {tool.icon === 'Globe' ? '🌐' : 
                      tool.icon === 'Map' ? '🗺️' : 
                      tool.icon === 'MessageCircle' ? '💬' : 
                      tool.icon === 'Bot' ? '🤖' : '📂'}
                   </span>
                </div>
                
                <h4 className="font-bold text-lg mb-2 text-white group-hover:text-sannBlue transition-colors">{tool.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {tool.detail}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* SECTION 3: PROJECT REPOSITORY (Compact Grid) */}
        <section>
          <div className="flex items-center gap-3 mb-6 mt-8">
             <div className="h-8 w-1 bg-green-500 rounded-full"></div>
             <h3 className="font-bold text-xl tracking-wide">PROJECT REPOSITORY</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((proj, idx) => (
              <motion.a
                key={idx}
                variants={itemAnim}
                href={proj.link}
                target="_blank"
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-cardBg hover:bg-gray-800 transition-all hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Status Indicator */}
                <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-green-400 transition-colors shadow-[0_0_10px_rgba(74,222,128,0)] group-hover:shadow-[0_0_10px_rgba(74,222,128,0.5)] shrink-0"></div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-200 group-hover:text-white mb-1 truncate pr-2">
                        {proj.name}
                    </h4>
                    {/* Tags */}
                    <div className="hidden sm:flex gap-1">
                        {proj.tags && proj.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-500 border border-white/5">{tag}</span>
                        ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-2">
                    {proj.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer Support Area */}
        <motion.div variants={itemAnim} className="pt-12 mt-12 border-t border-white/10 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8 hover:scale-105 transition-transform">
            <a 
              href={data.company.support}
              target="_blank"
              className="block px-8 py-3 rounded-full bg-darkBg hover:bg-gray-900 transition-all text-white font-bold flex items-center gap-3"
            >
              <Coffee size={20} className="text-pink-500" />
              Traktir Kopi (Support)
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sannBlue font-bold text-lg">
                 <Shield size={18}/> {data.company.owner}
              </div>
              <p className="text-gray-600 text-xs font-mono">
                {data.company.copyright} <br/>
                {data.company.full_credit}
              </p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
