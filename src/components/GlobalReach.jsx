import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'NAGPUR_HQ', label: 'LOC: NAGPUR_HQ', coords: '21.1458° N, 79.0882° E', top: '45%', left: '65%', color: 'neon-green' },
  { id: 'LONDON_HUB', label: 'LOC: LONDON_HUB', coords: '51.5074° N, 0.1278° W', top: '35%', left: '48%', color: 'primary' },
  { id: 'NY_OFFICE', label: 'LOC: NY_OFFICE', coords: '40.7128° N, 74.0060° W', top: '40%', left: '22%', color: 'accent' },
];

const GlobalReach = () => {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Global_Reach</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
        <span className="text-[10px] font-mono opacity-40">ACTIVE_NODES: 03</span>
      </div>

      <div className="relative w-full aspect-[21/9] bg-[#0c0c0c] border border-white/10 overflow-hidden rounded-3xl group">
        {/* Carbon Fiber Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
        
        {/* World Map Placeholder (Stylized Dots/Grid) */}
        <div className="absolute inset-0 opacity-[0.03] cyber-grid pointer-events-none"></div>

        {/* Nodes */}
        {nodes.map((node) => (
          <div 
            key={node.id}
            className="absolute group/node"
            style={{ top: node.top, left: node.left }}
          >
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-6 h-6 -translate-x-1.5 -translate-y-1.5 bg-${node.color} rounded-full absolute`}
            ></motion.div>
            <div className={`w-3 h-3 bg-${node.color} rounded-full relative shadow-[0_0_15px_currentColor] cursor-pointer`}></div>
            
            {/* Tooltip */}
            <div className={`absolute left-6 top-1/2 -translate-y-1/2 bg-black/95 p-4 border border-${node.color}/40 min-w-[180px] pointer-events-none opacity-0 group-hover/node:opacity-100 transition-all duration-300 transform group-hover/node:translate-x-2 z-20 backdrop-blur-xl rounded-lg shadow-2xl`}>
              <p className={`text-[10px] font-mono text-${node.color} uppercase tracking-[0.2em] mb-1`}>{node.label}</p>
              <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{node.coords}</p>
            </div>
          </div>
        ))}

        {/* Status Indicators */}
        <div className="absolute bottom-6 left-8 font-mono text-[9px] opacity-30 space-y-2 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span>
            LATENCY: 14ms
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            UPLINK: STABLE
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
            ENCRYPTION: AES_256
          </div>
        </div>

        {/* Scanning Line Effect */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/5 scan-line"></div>
      </div>
    </section>
  );
};

export default GlobalReach;
