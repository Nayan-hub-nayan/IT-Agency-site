import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="mb-32 pt-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.4, x: 0 }}
          className="text-xs font-mono uppercase tracking-[0.3em] mb-4 md:mb-0"
        >
          // IDENTITY & VISION
        </motion.span>
        <span className="text-[10px] font-mono opacity-40">REF: ELN_ABOUT_V2</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-[10vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase mb-12"
      >
        WHO WE ARE <br />
        <span className="flex items-center gap-4">
          & WHAT <span className="text-primary italic">&nbsp;DRIVES</span>
        </span>
        <span className="text-primary">US.</span>
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-12">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs opacity-60 leading-relaxed uppercase max-w-xs">
            A multi-million dollar technology power-house based in Nagpur, delivering high-impact digital solutions across the global tech landscape. We don't just build software; we engineer future-ready assets.
          </p>
        </div>
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex-1 space-y-4"
          >
            <div className="h-[1px] w-full bg-accent/30"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Scaling Excellence</h3>
            <p className="text-sm opacity-50 leading-relaxed">
              Our methodology integrates deep technical intelligence with disruptive creativity, ensuring every project benchmarks success.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-4"
          >
            <div className="h-[1px] w-full bg-primary/30"></div>
            <h3 className="text-2xl font-bold uppercase tracking-tight">Global Impact</h3>
            <p className="text-sm opacity-50 leading-relaxed">
              From startups to Fortune 500s, our digital frameworks empower market leaders to maintain their competitive edge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
