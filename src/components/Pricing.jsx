import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <section className="py-32 px-8 bg-black/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black uppercase tracking-tighter mb-4"
        >
          Pricing Models
        </motion.h2>
        <p className="font-mono text-[10px] opacity-50 uppercase tracking-[0.4em]">
          Scalable investment for every stage of growth
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Starter Tier */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-12 rounded-[40px] border-primary/30 hover:border-primary transition-all flex flex-col items-center group cursor-pointer"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6">Tier_01</span>
          <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Starter</h3>
          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-5xl font-black text-primary tracking-tighter">$99</span>
            <span className="text-[10px] opacity-40 uppercase font-mono tracking-widest">/Mo [Base]</span>
          </div>
          <ul className="w-full space-y-4 mb-12 text-sm font-light opacity-70">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span> 
              Web Core Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span> 
              Standard SEO Module
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span> 
              24/7 Monitoring
            </li>
            <li className="flex items-center gap-3 opacity-30">
              <span className="material-symbols-outlined text-sm">cancel</span> 
              Custom App Dev
            </li>
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 border border-primary/50 group-hover:bg-primary transition-all uppercase font-mono text-[10px] tracking-[0.2em] font-bold"
          >
            Initialize
          </motion.button>
        </motion.div>

        {/* Enterprise Tier */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass p-12 rounded-[40px] border-accent/30 hover:border-accent transition-all flex flex-col items-center group relative overflow-hidden cursor-pointer"
        >
          <div className="absolute top-0 right-0 bg-accent text-black px-8 py-1 font-mono text-[10px] font-black rotate-45 translate-x-8 translate-y-3 uppercase tracking-tighter shadow-xl">
            Popular
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6">Tier_02</span>
          <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">Enterprise</h3>
          <div className="flex items-baseline gap-1 mb-10">
            <span className="text-5xl font-black text-accent tracking-tighter">$399</span>
            <span className="text-[10px] opacity-40 uppercase font-mono tracking-widest">/Mo [Pro]</span>
          </div>
          <ul className="w-full space-y-4 mb-12 text-sm font-light opacity-70">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-sm">check_circle</span> 
              Full Infrastructure Suite
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-sm">check_circle</span> 
              Mobile App Ecosystem
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-sm">check_circle</span> 
              Dedicated Dev Ops
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent text-sm">check_circle</span> 
              Global CDN Scale
            </li>
          </ul>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-accent text-black transition-all uppercase font-mono text-[10px] tracking-[0.2em] font-black"
          >
            Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
