'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Coffee, Loader2, Star, Zap, Code, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data dari Backend Node.js kita
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
      <div className="min-h-screen flex items-center justify-center bg-sannWhite">
        <Loader2 className="animate-spin text-sannBlue w-10 h-10" />
      </div>
    );
  }

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-sannWhite p-4 md:p-8">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-sannBlue pl-4">
              Dashboard Tools
            </h2>
            <Link href="/" className="text-sm text-slate-400 hover:text-sannBlue">Log Out</Link>
        </header>

        {/* 1. PREMIUM SECTION */}
        {data.premium && (
          <motion.a 
            variants={item}
            href={data.premium.link}
            target="_blank"
            className="block relative overflow-hidden bg-gradient-to-r from-sannBlue to-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20 transform transition hover:scale-[1.02]"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Star className="fill-yellow-400 text-yellow-400" /> 
                  {data.premium.title}
                </h3>
                <p className="text-blue-100 text-sm mt-1">Tap to access exclusive content</p>
              </div>
              <ExternalLink className="opacity-80" />
            </div>
            {/* Dekorasi Background */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-white/10 skew-x-12"></div>
          </motion.a>
        )}

        {/* 2. MAIN TOOLS GRID */}
        <section>
          <h3 className="text-slate-500 font-semibold mb-3 flex items-center gap-2"><Shield size={18}/> Main Access</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.mainTools.map((tool, idx) => (
              <motion.a
                key={idx}
                variants={item}
                href={tool.link}
                target="_blank"
                className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-sannBlue transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg text-sannBlue group-hover:bg-sannBlue group-hover:text-white transition-colors">
                    <Zap size={20} />
                  </div>
                  <span className="font-medium text-slate-700">{tool.name}</span>
                </div>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-sannBlue" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* 3. NEW PROJECTS LIST */}
        <section>
          <h3 className="text-slate-500 font-semibold mb-3 flex items-center gap-2"><Code size={18}/> New Projects</h3>
          <div className="grid grid-cols-1 gap-3">
            {data.projects.map((proj, idx) => (
              <motion.a
                key={idx}
                variants={item}
                href={proj.link}
                target="_blank"
                className="group bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:ring-2 hover:ring-sannBlue/20 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-sannBlue transition-colors">
                      {proj.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 italic">
                      {proj.desc}
                    </p>
                  </div>
                  <div className="bg-slate-50 px-2 py-1 rounded text-xs text-slate-400 border border-slate-100">
                    Open
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* 4. FOOTER / SUPPORT */}
        <motion.div variants={item} className="mt-12 pt-8 border-t border-slate-200 text-center">
          <a 
            href={data.support.link}
            target="_blank"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-500 transition-colors bg-white px-6 py-2 rounded-full shadow-sm border border-slate-200"
          >
            <Coffee size={20} />
            <span className="font-medium">Traktir Kopi {data.support.owner}</span>
          </a>
          <p className="text-slate-400 text-xs mt-4">Powered by SANN404 &bull; React &bull; Next.js</p>
        </motion.div>

      </motion.div>
    </div>
  );
}
