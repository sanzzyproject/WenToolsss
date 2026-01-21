'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 3 detik untuk menampilkan animasi loader baru
    const timer = setTimeout(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // === NEW LOADER RENDER ===
  if (loading) {
    return (
      <div className="loader-container">
        <div className="main">
          <div className="loaders">
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
            <div className="loader"></div>
          </div>
          <div className="loadersB">
            <div className="loaderA">
              <div className="ball0"></div>
            </div>
            <div className="loaderA">
              <div className="ball1"></div>
            </div>
            <div className="loaderA">
              <div className="ball2"></div>
            </div>
            <div className="loaderA">
              <div className="ball3"></div>
            </div>
            <div className="loaderA">
              <div className="ball4"></div>
            </div>
            <div className="loaderA">
              <div className="ball5"></div>
            </div>
            <div className="loaderA">
              <div className="ball6"></div>
            </div>
            <div className="loaderA">
              <div className="ball7"></div>
            </div>
            <div className="loaderA">
              <div className="ball8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // === COMPONENT KARTU BERSIH (TEXT ONLY) ===
  const TextToolCard = ({ title, desc, link, isPremium }) => (
    <div className="clean-card group">
      <div>
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg tracking-tight text-gray-900 group-hover:text-black">
                {title}
            </h3>
            {isPremium && (
                <span className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded uppercase">VIP</span>
            )}
        </div>
        <p className="text-xs text-gray-500 leading-relaxed font-medium">
            {desc}
        </p>
        <div className="mt-4 flex gap-2">
            <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded">Secure</span>
            <span className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded">Fast</span>
        </div>
      </div>
      
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
        <button className="clean-btn">
          {isPremium ? "Authenticate Access" : "Execute Module"}
        </button>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-20">
      
      {/* Header Dashboard Minimalis */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold font-serif tracking-tight">Console Dashboard</h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">System Operational</p>
            </div>
            <Link href="/" className="text-xs font-medium text-gray-500 hover:text-black underline decoration-1 underline-offset-4">
                Return Home
            </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-10 space-y-16">
        
        {/* SECTION PREMIUM */}
        {data.premium && (
          <section>
             <div className="mb-6 border-l-4 border-black pl-4">
                 <h2 className="text-2xl font-serif font-bold">Premium Kernel</h2>
                 <p className="text-sm text-gray-500">Restricted access modules for advanced users.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TextToolCard 
                  title={data.premium.title} 
                  desc={data.premium.desc} 
                  link={data.premium.link}
                  isPremium={true}
                />
             </div>
          </section>
        )}

        {/* SECTION MAIN TOOLS */}
        <section>
          <div className="mb-6 border-l-4 border-gray-300 pl-4">
             <h2 className="text-2xl font-serif font-bold">Core Utilities</h2>
             <p className="text-sm text-gray-500">Essential development tools for daily workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.mainTools.map((tool, idx) => (
              <TextToolCard 
                key={idx} 
                title={tool.name} 
                desc={tool.detail} 
                link={tool.link} 
              />
            ))}
          </div>
        </section>

        {/* SECTION PROJECTS */}
        <section>
          <div className="mb-6 border-l-4 border-gray-300 pl-4">
             <h2 className="text-2xl font-serif font-bold">Project Repository</h2>
             <p className="text-sm text-gray-500">Open source applications and deployment templates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.projects.map((proj, idx) => (
              <TextToolCard 
                key={idx} 
                title={proj.name} 
                desc={proj.desc} 
                link={proj.link} 
              />
            ))}
          </div>
        </section>

        {/* Footer Dashboard */}
        <footer className="pt-20 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400 font-mono">
                Running Process ID: 8921-X • Memory Usage: Optimized <br/>
                {data.company.copyright}
            </p>
        </footer>

      </div>
    </div>
  );
}
