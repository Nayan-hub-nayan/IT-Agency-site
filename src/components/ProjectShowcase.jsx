import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'CC-09',
    name: 'CYBER CORE',
    status: 'SYSTEM_ONLINE',
    uptime: '99.9998%',
    latency: '42ms',
    desc: 'Building the back-bone for the next generation of global financial settlement. Sub-second finality with post-quantum security measures.',
    stack: ['Q-LEDGER_v2', 'SWIFT_PROTOCOL', 'ZERO_KNOWLEDGE'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof'
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-24 space-y-32 bg-background-dark">
      {projects.map((p, idx) => (
        <div key={idx} className="relative px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-4">
                <span className="font-mono text-[10px] text-accent font-black uppercase tracking-widest">[ SYSTEM_ID: {p.id} ]</span>
                <div className="h-[1px] flex-grow bg-white/10"></div>
                <div className="flex items-center gap-2 px-3 py-1 bg-accent/5 border border-accent/20 rounded-full">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-tighter">{p.status}</span>
                </div>
              </div>

              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-7xl font-black uppercase tracking-tighter text-primary leading-none mb-4"
                >
                  {p.name}
                </motion.h3>
                <div className="flex items-center gap-4 bg-white/5 p-3 border border-white/10 w-fit rounded-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                    <span className="font-mono text-[9px] text-accent font-bold uppercase">Uptime: {p.uptime}</span>
                  </div>
                  <span className="w-px h-3 bg-white/10"></span>
                  <span className="font-mono text-[9px] opacity-40 uppercase tracking-widest">LATENCY: {p.latency}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group rounded-2xl">
                  <div className="scanning-line opacity-20"></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em] mb-3">INTEGRATION_STACK</p>
                      <ul className="text-[10px] font-mono space-y-2 opacity-60">
                        {p.stack.map(s => <li key={s}>&gt; {s}</li>)}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em] mb-3">NETWORK_STATUS</p>
                      <p className="text-4xl font-black text-white font-mono tracking-tighter flex items-end gap-2">
                        LIVE<span className="text-accent text-lg">99.9%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg opacity-60 leading-relaxed font-light border-l-4 border-primary pl-8 italic">
                {p.desc}
              </p>

              <motion.a 
                whileHover={{ x: 10 }}
                className="inline-flex items-center space-x-4 group cursor-pointer"
              >
                <span className="font-mono text-xs border-b border-primary pb-1 group-hover:text-primary transition-colors uppercase tracking-widest text-primary/80">
                  Access_Encrypted_Data
                </span>
                <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">database</span>
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="relative aspect-video overflow-hidden bg-zinc-900 border border-white/10 group rounded-3xl shadow-2xl">
                <img 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  src={p.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 font-mono text-[10px] bg-primary text-white px-3 py-1.5 uppercase tracking-widest rounded-md shadow-lg">
                  PRIORITY: HIGH_IMPACT
                </div>
                <div className="absolute top-8 right-8 font-mono text-[9px] text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full">
                  NODE_ID: AX-992 // <span className="text-accent font-black">STABLE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
