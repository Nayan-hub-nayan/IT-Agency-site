import React from 'react';
import { motion } from 'framer-motion';

const JoinElite = () => {
  return (
    <section className="relative py-60 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-background-dark">
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="text-[40vw] font-black text-white uppercase leading-none select-none tracking-tighter"
        >
          RECRUIT
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <span className="font-mono text-primary text-sm tracking-[0.6em] uppercase mb-12 block font-black">// Infiltration Protocol</span>
        <h2 className="text-7xl md:text-[10rem] font-black text-accent mb-16 tracking-tighter uppercase italic leading-[0.8]">
          Join the <br /> Elite
        </h2>
        <p className="font-mono text-white/30 max-w-2xl mx-auto mb-16 uppercase text-xs tracking-[0.3em] leading-loose">
          We are looking for agents with exceptional logical processing and creative divergence capacities.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-12 group cursor-pointer"
        >
          <span className="font-mono text-3xl text-white uppercase group-hover:text-primary transition-colors tracking-tighter font-black underline underline-offset-8">
            Submit Credentials
          </span>
          <div className="w-24 h-24 border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all rounded-full shadow-[0_0_30px_rgba(255,0,122,0.2)]">
            <span className="material-symbols-outlined text-primary group-hover:text-black text-5xl font-black">north_east</span>
          </div>
        </motion.a>
      </motion.div>

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 grid-lines opacity-5 pointer-events-none"></div>
    </section>
  );
};

export default JoinElite;
