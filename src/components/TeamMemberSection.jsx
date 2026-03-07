import React from 'react';
import { motion } from 'framer-motion';

const TeamMemberSection = ({ name, role, node, level, desc, img, color, reverse }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center border-b border-white/5 bg-background-dark overflow-hidden">
      {/* Background Image / Portrait */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          alt={name} 
          className="noir-portrait w-full h-full object-cover grayscale brightness-50 contrast-125"
          src={img} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/40 via-transparent to-transparent"></div>
      </div>

      <div className="absolute top-24 right-12 font-mono text-[10px] text-white/20 text-right uppercase space-y-2 z-10 tracking-[0.2em] hidden md:block">
        <div>Lat: 40.7128° N</div>
        <div>Long: 74.0060° W</div>
        <div className={`text-${color}/60 font-black`}>Data_Package: Alpha_7</div>
      </div>

      <div className="relative z-10 pt-40 px-8 md:px-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-neon-green animate-pulse shadow-[0_0_15px_rgba(57,255,20,0.6)]"></div>
          <span className="font-mono text-xs text-neon-green tracking-[0.3em] uppercase font-black">Status: Online</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`font-black text-huge uppercase select-none tracking-tighter mb-12`}
          style={{ color: `var(--${color})` }}
        >
          {name}
        </motion.h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 max-w-xl"
          >
            <div className="font-mono text-primary text-sm tracking-[0.2em] font-black uppercase italic">
              Specialization: {role} // Node: {node} // Level: {level}
            </div>
            <p className="text-white/70 text-2xl leading-relaxed max-w-lg font-light">
              {desc}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: `var(--${color})`, color: 'black' }}
              className={`group flex items-center gap-6 bg-transparent border border-white/20 px-10 py-5 text-white font-mono text-xs tracking-widest uppercase transition-all hover:border-transparent`}
            >
              VIEW RECENT WORK
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward_ios</span>
            </motion.button>
          </motion.div>

          <div className="hidden lg:block border-l border-white/10 pl-12 pb-6">
            <div className="font-mono text-[10px] text-white/30 space-y-3 uppercase tracking-[0.4em] font-light">
              <div>// Signal Strength: 99%</div>
              <div>// Encryption: RSA-4096</div>
              <div>// Identity: Verified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default TeamMemberSection;
