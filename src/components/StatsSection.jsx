import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: '01', value: '50+', label: 'Verified Reviews', color: 'neon-green' },
  { id: '02', value: '90%', label: 'Process Improved', color: 'neon-green' },
  { id: '03', value: '49%', label: 'New Project Intake', color: 'neon-green' },
];

const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/5 border border-white/10 mb-32 overflow-hidden rounded-2xl">
      {stats.map((stat, i) => (
        <motion.div 
          key={stat.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className="p-16 flex flex-col items-center justify-center text-center bg-background-dark relative group overflow-hidden"
        >
          <div className="absolute top-4 left-4 font-mono text-[8px] opacity-20 tracking-widest">
            DATA_SET_{stat.id}
          </div>
          <motion.span 
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            className={`text-6xl md:text-7xl font-black text-${stat.color} mb-4 tracking-tighter`}
          >
            {stat.value}
          </motion.span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
            {stat.label}
          </span>
          
          {/* Hover Glow */}
          <div className={`absolute inset-0 bg-${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
        </motion.div>
      ))}
    </section>
  );
};

export default StatsSection;
