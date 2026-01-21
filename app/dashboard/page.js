'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading agar spinner terlihat
    setTimeout(() => {
      fetch('/api/data')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, 2000); // 2 detik loading
  }, []);

  // TAMPILAN LOADING SPINNER (Sesuai Request)
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <div className="spinnerin"></div>
        </div>
      </div>
    );
  }

  // KOMPONEN KARTU (Sesuai CSS User)
  const ToolCard = ({ title, desc, link, isPremium }) => (
    <div className="card">
      <div className="card__border"></div>
      <div className="card_title__container">
        <span className="card_title">{title}</span>
        <p className="card_paragraph">
          {desc}
        </p>
      </div>
      <hr className="line" />
      <ul className="card__list">
        <li className="card__list_item">
          <span className="check">
            <svg className="check_svg" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
            </svg>
          </span>
          <span className="list_text">High Performance</span>
        </li>
        <li className="card__list_item">
          <span className="check">
            <svg className="check_svg" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd"></path>
            </svg>
          </span>
          <span className="list_text">Secure Access</span>
        </li>
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
        <button className="button">
          {isPremium ? "ACCESS PREMIUM" : "OPEN TOOL"}
        </button>
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white p-6 md:p-10">
      
      {/* Header Dashboard */}
      <header className="max-w-7xl mx-auto flex justify-between items-end mb-12 border-b border-gray-800 pb-6">
        <div>
           <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
             CONSOLE DASHBOARD
           </h1>
           <p className="text-gray-400 text-sm mt-2 font-mono">Select a module to execute.</p>
        </div>
        <Link href="/" className="px-4 py-2 text-xs font-mono border border-gray-700 rounded hover:bg-gray-800 transition-colors">
          EXIT TERMINAL
        </Link>
      </header>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION PREMIUM */}
        {data.premium && (
          <section>
             <h2 className="text-xl font-bold mb-6 text-yellow-500 flex items-center gap-2">
               ⚡ VIP MODULE
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ToolCard 
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
          <h2 className="text-xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
            💠 CORE UTILITIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.mainTools.map((tool, idx) => (
              <ToolCard 
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
          <h2 className="text-xl font-bold mb-6 text-purple-400 flex items-center gap-2">
             🚀 PROJECT REPOSITORY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.projects.map((proj, idx) => (
              <ToolCard 
                key={idx} 
                title={proj.name} 
                desc={proj.desc} 
                link={proj.link} 
              />
            ))}
          </div>
        </section>

        <footer className="text-center pt-10 border-t border-gray-800 text-gray-600 text-xs font-mono">
           SYSTEM STATUS: ONLINE <br/>
           {data.company.copyright}
        </footer>

      </div>
    </div>
  );
}
