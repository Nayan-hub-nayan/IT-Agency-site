import React from 'react';
import { motion } from 'framer-motion';

const FAQFooter = () => {
  return (
    <section className="mt-32 relative py-24 overflow-hidden border-t border-white/10">
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none overflow-hidden hidden lg:block">
        <span className="font-black text-[25vw] leading-none select-none text-white italic tracking-tighter">YLENA</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 border border-accent text-accent bg-accent/5 rounded-xl shadow-[0_0_20px_rgba(233,30,99,0.2)]">
              <span className="material-symbols-outlined text-4xl">qr_code_2</span>
            </div>
            <div className="font-mono text-[10px] leading-relaxed text-slate-500 uppercase tracking-widest font-black">
              AUTHENTICATED BY<br />ELUNA DESIGN SYSTEM v4.0
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-white">
            Still have <span className="text-accent italic">Questions?</span>
          </h2>
          <p className="mt-8 text-slate-400 font-mono text-xs max-w-sm uppercase leading-relaxed tracking-widest">
            Our experts are available for a 1:1 strategy session. Connect to our network to begin the integration process.
          </p>
        </motion.div>

        <div className="flex flex-col items-start md:items-end gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="group relative inline-block cursor-pointer"
          >
            <div className="absolute -inset-4 bg-accent/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 rounded-2xl"></div>
            <div className="flex items-center gap-8 relative">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-black shadow-[0_0_30px_rgba(233,30,99,0.4)]">
                <span className="material-symbols-outlined text-5xl font-black">arrow_forward</span>
              </div>
              <span className="text-4xl font-black uppercase italic group-hover:pl-4 transition-all tracking-tighter underline underline-offset-8 decoration-accent/30">
                Start Engagement
              </span>
            </div>
          </motion.div>
          
          <div className="flex gap-6">
            {['TW', 'LN', 'IG'].map(s => (
              <motion.div 
                key={s}
                whileHover={{ y: -5, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                className="w-12 h-12 border border-white/10 flex items-center justify-center text-[11px] font-mono text-slate-500 cursor-pointer transition-all rounded-lg uppercase font-black"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-wrap justify-between items-center gap-8 border-t border-white/5 pt-12 opacity-40">
        <div className="font-mono text-[9px] text-slate-500 flex items-center gap-8 uppercase tracking-[0.3em] font-black">
          <span>© 2024 ELUNA STUDIO</span>
          <span className="hidden sm:inline">PRIVACY_PROTOCOL</span>
          <span className="hidden sm:inline text-accent">ENCRYPTION_ENABLED</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-4 w-[1px] bg-white/20"></div>
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">40.7440°N 73.9873°W</span>
          <div className="h-1.5 w-12 bg-accent shadow-[0_0_10px_rgba(233,30,99,0.5)]"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQFooter;
