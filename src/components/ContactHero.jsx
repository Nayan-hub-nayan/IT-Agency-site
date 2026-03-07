import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="w-full max-w-7xl px-6 py-12 md:py-24 border-x border-white/5 mx-auto">
      <div className="flex flex-col gap-2 mb-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 text-xs font-mono text-primary/60"
        >
          <span>[COORDS: 21.1458° N, 79.0882° E]</span>
          <span className="w-12 h-[1px] bg-white/10"></span>
          <span className="text-accent animate-pulse">STATUS: SCANNING_FOR_UPLINK...</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase"
        >
          GET_IN_<span className="text-primary italic">TOUCH</span>
        </motion.h1>
        
        <div className="scanner-line mt-4 opacity-50"></div>
      </div>
    </section>
  );
};

export default ContactHero;
