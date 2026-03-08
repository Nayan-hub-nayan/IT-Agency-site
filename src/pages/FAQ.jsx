import React from 'react';
import { motion } from 'framer-motion';
import FAQHero from '../components/FAQHero';
import FAQAccordion from '../components/FAQAccordion';
import FAQFooter from '../components/FAQFooter';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 overflow-x-hidden relative selection:bg-accent selection:text-white">
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0 opacity-20"></div>

      {/* Header Info */}


      <main className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <FAQHero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-20">
          {/* Categories Sidebar */}
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-16">
              <div className="space-y-6">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] font-black">// CATEGORIES</div>
                <ul className="space-y-6">
                  {['Project Logistics', 'Tech Stacks', 'Commercials'].map((cat, i) => (
                    <li key={cat} className={`flex items-center gap-4 group cursor-pointer ${i === 0 ? 'opacity-100' : 'opacity-40'} hover:opacity-100 transition-opacity`}>
                      <span className={`w-2.5 h-2.5 ${i === 0 ? 'bg-accent shadow-[0_0_10px_rgba(233,30,99,0.5)]' : 'bg-white/20'} rounded-full`}></span>
                      <span className="text-xs font-mono uppercase tracking-[0.2em] font-black group-hover:text-accent transition-colors">{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-12 border-t border-white/5">
                <div className="text-[9px] font-mono text-slate-500 mb-6 font-black tracking-widest">SYSTEM STATUS: NOMINAL</div>
                <img
                  alt="Abstract waveform"
                  className="w-full opacity-20 filter invert grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBBvg1GmTOk9KN_MmnzO3Yd9ct1nW1JASOmHc4skd9TiGUYEDaEuFrJPe5AGqx2ExM_ZFH2XVf8Fw4_rSLvl0djUrKrjcptVj1PDkaxMS4OKeqqZ0SOU3eHkGHO-lEzI3YsC_gw_YTllEx7g96NTWpEO5onONO3aqxe-5dXVJQXFL3ucpM3_kvyNyhbe566NefoArNfIeyXkPeAZMLa4Q6tocTeQGdE99IjiL3kHqh3wlN4b8YkZ6HEBclnIVqdroSVLpHTDPKma6j"
                />
              </div>
            </div>
          </div>

          <FAQAccordion />
        </div>

        <FAQFooter />
      </main>

      {/* Latency Indicator */}
      <div className="fixed bottom-12 left-12 z-50 pointer-events-none hidden md:block">
        <div className="flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
          <div className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#39FF14]"></div>
          <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest font-black">
            Network Latency: 12ms // Region: US-EAST-1
          </span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
