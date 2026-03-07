import React from 'react';
import { motion } from 'framer-motion';

const FAQHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 bg-background-dark">
      <div className="lg:col-span-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl leading-none uppercase mb-8"
        >
          <span className="block text-white">Knowledge</span>
          <span className="block text-accent">Insights</span>
          <span className="block text-gradient">Base.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          className="text-xl md:text-2xl font-light text-slate-300 max-w-2xl leading-relaxed"
        >
          High-impact answers for multi-million dollar digital scaling. We decode complexity through smart, clean visuals and robust engineering.
        </motion.p>
      </div>

      <div className="lg:col-span-4 flex flex-col justify-end space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="border-l-2 border-accent pl-6 py-2"
        >
          <div className="text-[10px] font-mono text-slate-500 uppercase mb-2 tracking-widest">(092) Metrics</div>
          <div className="font-display text-5xl font-black text-white italic tracking-tighter">98%</div>
          <div className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mt-1">Client Satisfaction</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden group rounded-2xl"
        >
          <div className="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative z-10">
            <span className="material-symbols-outlined text-accent mb-6 text-4xl">barcode_scanner</span>
            <p className="text-xs font-mono leading-loose text-slate-400 uppercase tracking-widest">
              OUR APPROACH BLENDS CREATIVITY WITH CLARITY. GOOD DESIGN SHOULD FEEL GOOD—AND WORK EVEN BETTER.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQHero;
