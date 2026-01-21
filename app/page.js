'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-sannWhite text-center p-6 overflow-hidden relative">
      
      {/* Background Blobs Animation */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sannBlue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-lg"
      >
        <div className="mx-auto bg-sannBlue text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
          <ShieldCheck size={32} />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-2 tracking-tight">
          SANN404 <span className="text-sannBlue">FORUM</span>
        </h1>
        <p className="text-slate-500 mb-8 text-lg">
          Gateway to Premium Tools & Projects
        </p>

        <Link href="/dashboard">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-sannBlue rounded-full overflow-hidden shadow-lg shadow-blue-500/40 transition-all hover:bg-blue-700"
          >
            <span className="mr-2">Masuk Forum</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>

      <footer className="absolute bottom-6 text-slate-400 text-sm">
        &copy; 2024 SannnForums Security
      </footer>
    </main>
  );
}
