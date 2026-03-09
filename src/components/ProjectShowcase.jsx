import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const filters = ['ALL', 'FINANCE', 'SECURITY', 'INFRASTRUCTURE'];

const projects = [
  {
    id: 'CC-09',
    name: 'CYBER CORE',
    categories: ['FINANCE', 'INFRASTRUCTURE'],
    status: 'SYSTEM_ONLINE',
    uptime: '99.9998%',
    latency: '42ms',
    desc: 'Building the back-bone for the next generation of global financial settlement. Sub-second finality with post-quantum security measures.',
    stack: ['Q-LEDGER_v2', 'SWIFT_PROTOCOL', 'ZERO_KNOWLEDGE'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'AX-11',
    name: 'AEGIS SHIELD',
    categories: ['SECURITY', 'INFRASTRUCTURE'],
    status: 'OPTIMAL_DEFENSE',
    uptime: '100.00%',
    latency: '18ms',
    desc: 'Advanced threat detection matrix capable of preemptive strike against zero-day vulnerabilities in enterprise networks.',
    stack: ['NEURAL_DETECTOR', 'WAF_PRO_MAX', 'DEEP_PACKET_9'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu8U-tM7c5dDE5g7aB7U2f46_BDEgN9c3zX_cE6vQ7I7vV83S82bQ9d-XnLQ5b-_S4LgD0d_3k_3Q2e9C7B-h-2s8qN63dK5L8a3iE7u_9KzV3-X8iZ7aZ9-Q02HqN2fGzK8G8sV4fR1w_lU3C_kH8oK8fB72P8wW2E_5H94qF4iG2uI3K7hB8qF4xO4cI3sX2W8kE7rU_pY0gZ0K7wZ4iZ7sZ44oH_8fP8aT-iL8tP_9nZ23sJ31dG31',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'NX-99',
    name: 'NEXUS GRID',
    categories: ['INFRASTRUCTURE'],
    status: 'DATA_SYNCING',
    uptime: '99.9850%',
    latency: '65ms',
    desc: 'A decentralized computing cluster harnessing unused processing power across millions of devices for complex simulations.',
    stack: ['P2P_MESH_NET', 'WASM_RUNTIME', 'EDGE_CACHE_PRO'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6DuBOfoFNOnzBuZlmn4fFutu6k5pkFR6FfpprNC7waQDN5ZQC6bLsCHVour5Q6ISO3Uf6XmKANauaH8qcW3q5U5N6VKpdlDIMtmvpt0g8TdDrHUNBRtjKduOgpqVTH6fUqCRsW4UT1qRKENTzTqQFcn-4oFFFuqnIsQuuxp5lb1ZlmB0Q2WNRGfndz97gZqrPJyIeDpg4pc0xRsymU7ecVsO7RgxajS3Ca9wXnf7DJ-INdHS0o1IUWsGZ6U8qIVoeVvSZeNsASzvo',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const navigate = useNavigate();

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section className="py-24 space-y-32 bg-background-dark">
      {/* Filters UI */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-6">
        <h2 className="font-mono text-[10px] text-primary tracking-[0.5em] uppercase border-b border-primary/30 pb-2">
          [ PROJECT_FILTERS ]
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 border rounded-full text-[10px] font-mono uppercase tracking-[0.2em] transition-all
                ${activeFilter === f 
                  ? 'bg-primary border-primary text-black font-bold shadow-[0_0_15px_rgba(255,30,86,0.3)]' 
                  : 'bg-transparent border-white/20 text-white/50 hover:border-white/50 hover:text-white'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-32">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((p, idx) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative px-6 md:px-12 max-w-7xl mx-auto"
            >
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
                onClick={() => navigate(`/project/${p.id}`)}
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
              <div 
                className="relative aspect-video overflow-hidden bg-zinc-900 border border-white/10 group rounded-3xl shadow-2xl"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <img 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 absolute inset-0 z-0" 
                  src={p.img} 
                />

                {/* Hover Video */}
                {p.video && (
                  <video 
                    src={p.video} 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
                
                <div className="absolute bottom-8 left-8 font-mono text-[10px] bg-primary text-white px-3 py-1.5 uppercase tracking-widest rounded-md shadow-lg z-30 pointer-events-none">
                  PRIORITY: HIGH_IMPACT
                </div>
                <div className="absolute top-8 right-8 font-mono text-[9px] text-white bg-black/60 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full">
                  NODE_ID: AX-992 // <span className="text-accent font-black">STABLE</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;
