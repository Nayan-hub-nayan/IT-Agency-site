import React from 'react';
import { motion } from 'framer-motion';

const GeospatialMap = () => {
  return (
    <section className="w-full px-6 py-32 bg-white/[0.01] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-4xl font-black tracking-tighter mb-3 text-white uppercase italic">GEOSPATIAL_MAPPING</h3>
            <p className="text-xs font-mono text-slate-500 uppercase tracking-widest font-black">LOCATING_NODE: NAGPUR_CLUSTER_01</p>
          </motion.div>
          <div className="text-right text-[10px] font-mono text-white/20 space-y-1 uppercase tracking-widest leading-relaxed">
            RENDER_ENGINE: VECTOR_DARK_v2<br />
            LATENCY: 12ms // SYNC: COMPLETE
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group shadow-3xl bg-zinc-900"
        >
          <div className="absolute inset-0 bg-background-dark/20 z-10 pointer-events-none"></div>
          
          <div className="absolute top-6 left-6 z-20 bg-background-dark/90 px-4 py-2 border border-primary/40 text-[10px] font-mono rounded-lg shadow-xl text-white/80">
            ZOOM_LVL: 14.5x // FOCUS_NODE: 0xFD2
          </div>
          
          <img 
            className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[2000ms] ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Q8JCAHCMJJtGuZ7Z9PX9XGtf8hVZ4C4ySYiGBsOuf9Ft4N1eFd80advYw9LtaCS3bcoIPeMMclRrhQwqlg7SjEpHxUec39LCGr4u2G5qfHlv9sUfk_jasS--EUuYvmCoAYJefOVmzwcVqcQIemu9bPoJSxN2w3Y-4fDHs5KZgxLpksvkcIfWG7l2N2O4lUZH3HABOLTO7ZrDBWPlvR7r5t_iVGS9YbDo_nH5XZveEt7nSOnQ5Yjh_FKsf5jiuDFYJbu88Z062OV8" 
            alt="Stylized dark map"
          />

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping [animation-duration:3s]"></div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative p-6 bg-primary text-white rounded-full shadow-[0_0_50px_rgba(242,13,166,0.8)]"
              >
                <span className="material-symbols-outlined text-4xl font-black">radar</span>
              </motion.div>
              
              {/* Radial signal rings */}
              <div className="absolute inset-[-40px] border border-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-[-80px] border border-primary/10 rounded-full animate-pulse [animation-delay:0.5s]"></div>
            </div>
          </div>

          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            style={{ backgroundImage: 'radial-gradient(var(--primary) 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeospatialMap;
