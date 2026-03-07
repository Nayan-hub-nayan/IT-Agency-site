import React from 'react';
import { motion } from 'framer-motion';

const ProjectHero = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center px-6 md:px-12 cyber-grid bg-background-dark">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="inline-block px-3 py-1 border border-accent text-accent font-mono text-[10px] mb-6 tracking-[0.2em] uppercase"
        >
          DIRECTORY: PORTFOLIO_ROOT_v2
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-[9rem] font-black leading-[0.8] uppercase tracking-tighter mb-12"
        >
          CORE<br /><span className="outline-text text-white">RECORDS</span>
        </motion.h1>

        <div className="flex flex-wrap gap-4 mt-12">
          {['ALL_SYSTEMS', '[01] WEB_APPS', '[02] AI_NEURAL', '[03] BLOCKCHAIN'].map((filter, i) => (
            <motion.button 
              key={filter}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--accent)', color: 'white' }}
              className={`px-6 py-2 border-2 ${i === 0 ? 'bg-primary border-primary text-white' : 'border-white/10 text-white/40'} font-mono text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 transition-all`}
            >
              {i === 0 && <span className="w-2 h-2 bg-white rounded-full"></span>}
              {filter}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
