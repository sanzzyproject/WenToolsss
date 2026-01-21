'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal, Cpu, Zap, Code2 } from 'lucide-react';

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
    <main className="min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sannBlue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sannViolet/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar Glass */}
      <nav className="fixed top-0 w-full z-50 glass-nav px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-sannBlue to-sannDarkBlue rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
            <Code2 className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">SANN404<span className="text-sannBlue">FORUM</span></span>
        </div>
        <Link href="/dashboard" className="hidden md:flex items-center gap-2 px-5 py-2 bg-sannBlue/10 hover:bg-sannBlue/20 text-sannBlue border border-sannBlue/20 rounded-full text-sm font-medium transition-all">
          <Terminal size={16} />
          Login Console
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 container mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sannBlue/30 bg-sannBlue/5 text-sannBlue text-xs font-mono mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Online v1.0.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Build Faster. <br/>
            <span className="text-gradient">Deploy Smarter.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Platform ekosistem developer all-in-one. Akses tools premium, kelola project, dan download source code berkualitas tinggi dalam satu dashboard terintegrasi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/dashboard" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-sannBlue hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/30 transition-all flex items-center justify-center gap-2 group hover:-translate-y-1">
                Buka Dashboard
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="https://t.me/sannnforums" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-white/5 rounded-xl font-medium text-gray-300 transition-all">
              Join Telegram
            </a>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-darkBg to-transparent z-10 opacity-60"></div>
          {/* Unsplash Image: Code Editor / Dark Mode Setup */}
          <img 
            src="https://images.unsplash.com/photo-1607799275518-d58665d096b1?q=80&w=1600&auto=format&fit=crop" 
            alt="Developer Dashboard SANN404" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          
          {/* Floating UI Elements (Decoration) */}
          <div className="absolute bottom-8 left-8 z-20 glass-panel p-4 rounded-xl flex items-center gap-4 animate-float hidden md:flex">
             <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Terminal size={20}/></div>
             <div>
                <p className="text-xs text-gray-400">Status</p>
                <p className="font-mono text-sm font-bold text-green-400">System Stable</p>
             </div>
          </div>
        </motion.div>
      </section>

      {/* TECH STACK GRID */}
      <section className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powered by Modern Tech</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Dibangun dengan teknologi terkini untuk performa maksimal. Full Stack Development environment.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {loading ? (
              <div className="text-sannBlue animate-pulse">Loading Asset...</div>
            ) : (
              techStack.map((tech, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div className={`w-16 h-16 md:w-20 md:h-20 p-4 rounded-2xl bg-cardBg border border-white/5 group-hover:border-sannBlue/50 shadow-lg group-hover:shadow-sannBlue/20 transition-all flex items-center justify-center ${tech.invert ? 'bg-white text-black' : ''}`}>
                    {tech.isCustom ? (
                        <span className="font-extrabold text-2xl text-green-500 tracking-tighter">Ac</span>
                    ) : (
                        <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 font-mono font-medium group-hover:text-sannBlue transition-colors">{tech.name}</span>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT & ARCHITECTURE */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Unsplash Image: Server Room / Mobile Coding */}
                <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Cyberpunk Server" 
                    className="w-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-sannBlue/10 mix-blend-overlay"></div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">Designed for <br/> <span className="text-gradient">Mobile Scalability</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              SANN404 FORUM bukan sekadar website biasa. Ini adalah bukti konsep bahwa pengembangan web modern skala besar bisa dilakukan di mana saja.
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sannBlue/10 flex items-center justify-center text-sannBlue shrink-0">
                        <Zap size={24}/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white">Next.js & Node.js Core</h4>
                        <p className="text-sm text-gray-500 mt-1">Routing sisi server yang cepat dan API yang aman untuk pengelolaan data project.</p>
                    </div>
                </div>
                
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                        <Code2 size={24}/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white">Built on Acode (Android)</h4>
                        <p className="text-sm text-gray-500 mt-1">100% ditulis dan dideploy menggunakan perangkat mobile melalui editor Acode.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                        <Cpu size={24}/>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-white">Tailwind & Framer Motion</h4>
                        <p className="text-sm text-gray-500 mt-1">User Interface yang responsif, modern, dan penuh animasi interaktif.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10 mt-10">
        <div className="container mx-auto px-6 text-center md:text-left grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Code2 className="text-sannBlue"/>
                    <h3 className="text-xl font-bold text-white">SANN404 FORUM</h3>
                </div>
                <p className="text-gray-500 text-sm max-w-sm mx-auto md:mx-0">
                    Kami menyediakan alat dan sumber daya terbaik untuk membantu developer membangun masa depan. Terus berinovasi, terus berkarya.
                </p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><Link href="/dashboard" className="hover:text-sannBlue transition-colors">Tools Dashboard</Link></li>
                    <li><a href="https://t.me/sannnforums" className="hover:text-sannBlue transition-colors">Telegram Community</a></li>
                    <li><a href="https://roadmap.sh" className="hover:text-sannBlue transition-colors">Developer Roadmap</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                    <li><a href="https://saweria.co/sannnforums" className="hover:text-sannBlue transition-colors">Support & Donate</a></li>
                    <li><span className="text-gray-600 cursor-not-allowed">Terms of Service</span></li>
                    <li><span className="text-gray-600 cursor-not-allowed">Privacy Policy</span></li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-xs font-mono">
                &copy; 2024 SANN404 FORUM Corp. Developed by <span className="text-sannBlue">SANN404</span>. <br/>
                All Rights Reserved.
            </p>
        </div>
      </footer>
    </main>
  );
}
