import React from 'react';
import { motion } from 'framer-motion';

const NodeLocations = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-6">
        <h3 className="text-2xl font-black flex items-center gap-4 uppercase tracking-tighter text-white">
          <span className="material-symbols-outlined text-primary text-3xl">hub</span>
          NODE_LOCATIONS
        </h3>
        
        <motion.div 
          whileHover={{ borderColor: 'var(--primary)' }}
          className="glitch-border bg-white/[0.02] p-8 rounded-2xl space-y-4 border border-white/5 transition-all group"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase font-mono">[PRIMARY_HUB: NAGPUR_IN]</p>
              <p className="text-xl font-medium leading-normal text-white/80">
                Suite 404, Tech Horizon Tower,<br />
                IT Park Road, Gayatri Nagar,<br />
                Nagpur, Maharashtra 440022
              </p>
              <p className="text-xs font-mono text-accent font-black tracking-widest uppercase mt-4">GPS: 21.1251° N, 79.0538° E</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-primary/40 transition-all group"
        >
          <p className="text-[10px] font-black text-white/20 tracking-[0.4em] mb-3 font-mono uppercase">[TEL]</p>
          <p className="text-xl font-mono group-hover:text-primary transition-colors text-white font-black">+91 (712) 224-NODE</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-primary/40 transition-all group"
        >
          <p className="text-[10px] font-black text-white/20 tracking-[0.4em] mb-3 font-mono uppercase">[MAIL]</p>
          <p className="text-xl font-mono group-hover:text-primary transition-colors text-white font-black">uplink@core-sys.io</p>
        </motion.div>
      </div>

      <div className="space-y-6 mt-4">
        <h4 className="text-[10px] font-black text-white/30 tracking-[0.5em] uppercase font-mono">SOCIAL_MATRIX</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'LINKEDIN', icon: 'share', status: 'ACTIVE', color: 'accent' },
            { label: 'GITHUB', icon: 'code', status: 'FEED', color: 'accent' },
            { label: 'X_CORP', icon: 'alternate_email', status: 'IDLE', color: 'white/20' },
            { label: 'DISCORD', icon: 'forum', status: '4.2k_ON', color: 'accent' }
          ].map((s, i) => (
            <motion.a 
              key={i}
              whileHover={{ scale: 1.05, borderColor: 'var(--primary)', backgroundColor: 'rgba(242, 13, 166, 0.05)' }}
              className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl transition-all cursor-pointer group"
            >
              <span className="material-symbols-outlined mb-3 text-white/40 group-hover:text-primary">{s.icon}</span>
              <span className="text-[10px] font-black text-white/60 tracking-widest">{s.label}</span>
              <span className={`text-[8px] mt-2 font-mono font-black`} style={{ color: `var(--${s.color.includes('/') ? 'white' : s.color})`, opacity: s.color.includes('/') ? 0.2 : 1 }}>● {s.status}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NodeLocations;
