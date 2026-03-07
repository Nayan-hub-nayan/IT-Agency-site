import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 lg:px-12 py-20 overflow-hidden border-b border-white/5 bg-background-dark">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="text-primary font-mono text-xs tracking-[0.5em] uppercase">[ SYSTEM_CAPABILITIES_V4.0 ]</span>
          <div className="h-[1px] w-24 bg-primary/30"></div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-huge uppercase text-white tracking-tighter leading-[0.8]"
        >
          SYSTEM_<br />
          <span className="text-primary">CAPABILITIES</span>
        </motion.h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] opacity-60">Global_Infrastructure</p>
            <p className="text-4xl font-black text-white leading-none tracking-tighter">99.9% UPTIME</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-mono text-neon-green uppercase tracking-[0.3em] opacity-60">Active_Deployments</p>
            <p className="text-4xl font-black text-white leading-none tracking-tighter">1,420 UNITS</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[10px] font-mono text-primary uppercase tracking-[0.3em] opacity-60">Response_Latency</p>
            <p className="text-4xl font-black text-white leading-none tracking-tighter">&lt;12MS</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
