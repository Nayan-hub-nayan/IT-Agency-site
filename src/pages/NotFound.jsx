import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background-dark font-display text-slate-100 flex flex-col items-center justify-center relative overflow-hidden selection:bg-primary selection:text-white">
      {/* Dynamic Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none opacity-20"></div>
      <div className="fixed inset-0 scanline pointer-events-none opacity-5"></div>

      <main className="relative z-10 flex flex-col lg:flex-row p-8 lg:p-20 gap-16 items-center justify-center max-w-7xl mx-auto w-full">
        {/* Left Column: The Error Code */}
        <div className="flex flex-col flex-1 w-full lg:w-1/2 space-y-12">
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -top-12 -left-4 text-primary text-[10px] font-mono font-black tracking-[0.4em] uppercase"
            >
              ERROR_CODE: 0x00000194
            </motion.span>
            
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="glitch-text text-[150px] lg:text-[250px] font-black leading-none tracking-tighter text-white/90 italic"
            >
              404
            </motion.h1>
            
            <div className="absolute top-1/2 -right-12 translate-x-1/2 bg-primary px-5 py-2 rotate-90 text-[11px] font-black text-white tracking-[0.5em] shadow-[0_0_20px_rgba(242,13,166,0.6)]">
              NODE_LOST
            </div>
          </div>

          <div className="space-y-6 border-l-4 border-primary pl-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-tight"
            >
              SYSTEM_ERROR:<br /><span className="text-primary italic">NODE_NOT_FOUND</span>
            </motion.h2>
            <p className="text-primary/60 text-xl font-mono uppercase font-black tracking-widest">
              COORDINATES_LOST_IN_CYBERSPACE<br />// SECTOR_UNKNOWN
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/5 p-8 rounded-2xl border border-primary/20 font-mono text-xs text-primary/80 max-w-md space-y-3 shadow-inner"
            >
              <p>&gt; TRACE_ROUTING... <span className="text-red-500 font-black">FAILED</span></p>
              <p>&gt; PING_SERVER_UPLINK... <span className="text-red-500 font-black">TIMEOUT</span></p>
              <p>&gt; RECOVERY_PROTOCOL... <span className="text-accent font-black">STANDBY</span></p>
              <div className="h-px bg-primary/10 my-4"></div>
              <p className="leading-relaxed opacity-60">The requested packet was intercepted by the void or dissipated during transmission.</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Link to="/">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(242, 13, 166, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white font-black py-5 px-10 rounded-2xl flex items-center gap-4 transition-all uppercase tracking-widest group shadow-xl"
              >
                <span className="material-symbols-outlined group-hover:rotate-180 transition-transform">refresh</span>
                REBOOT_TO_HOME
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(242, 13, 166, 0.1)' }}
                className="bg-transparent border-2 border-primary/30 text-primary font-black py-5 px-10 rounded-2xl flex items-center gap-4 transition-all uppercase tracking-widest"
              >
                <span className="material-symbols-outlined">explore</span>
                LOCATE_ENGINEER
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Right Column: HUD Visualization */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-zinc-900 border-2 border-primary/20 rounded-3xl overflow-hidden aspect-video group shadow-3xl"
          >
            <div className="absolute inset-0 opacity-40 bg-primary/10 mix-blend-overlay"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80 border border-primary/10 rounded-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 border border-primary/30 rounded-full border-dashed p-4"
                ></motion.div>
                <div className="absolute w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_#f20da6]"></div>
                <span className="material-symbols-outlined text-primary text-8xl opacity-30 animate-pulse">radar</span>
              </div>
            </div>
            
            {/* HUD Elements */}
            <div className="absolute top-8 left-8 border-t-4 border-l-4 border-primary w-8 h-8 opacity-40"></div>
            <div className="absolute top-8 right-8 border-t-4 border-r-4 border-primary w-8 h-8 opacity-40"></div>
            <div className="absolute bottom-8 left-8 border-b-4 border-l-4 border-primary w-8 h-8 opacity-40"></div>
            <div className="absolute bottom-8 right-8 border-b-4 border-r-4 border-primary w-8 h-8 opacity-40"></div>
            
            <img 
              className="w-full h-full object-cover opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBviqBc5rTB8MEoVypkmxMl3E8qd21NC14EYC6-CkwzeBq3olqisy_MAQkK2Wz3QvMhwjXWvYxv2v0Y2C8_LZex9Pq6RlUwuUuXIdt5JpBGjsmWUMkO03DZAXftvlG46pxbp2MVKJH3l2CO-vEIqnp3u1cbM5fl1It4wWkIPFFbR6nuFgChDEUZ5LJKEx7sIC8-qojTn-aMFoOmh1-XWOqplwIPgJ4k7MVDzxfykLDM9t1295pA46GIEYlwauZ95UiaWTH0O5Y9BXC5" 
              alt="Cyber diagnostic"
            />
          </motion.div>

          {/* Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'LATENCY', val: '0.00ms', trend: 'SIGNAL_NULL', color: 'primary' },
              { label: 'PACKET_LOSS', val: '100%', trend: 'CRITICAL', color: 'red-500' },
              { label: 'ENCRYPTION', val: 'AES-256', trend: 'ACTIVE', color: 'emerald-500' }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-white/[0.03] border border-white/5 p-6 rounded-2xl hover:bg-primary/5 transition-all shadow-xl"
              >
                <span className="text-[9px] text-white/40 font-mono block mb-2 font-black tracking-widest uppercase">{m.label}</span>
                <div className="text-3xl font-black tracking-tighter text-white">{m.val}</div>
                <div className={`text-${m.color} text-[9px] font-mono mt-3 flex items-center gap-1 font-black uppercase`}>
                  <span className="material-symbols-outlined text-xs">{m.trend === 'ACTIVE' ? 'lock' : m.trend === 'CRITICAL' ? 'error' : 'trending_down'}</span>
                  {m.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Decorative Accents */}
      <div className="fixed top-1/4 right-10 w-48 h-48 border border-primary/5 rounded-full animate-pulse pointer-events-none hidden xl:block"></div>
      <div className="fixed bottom-1/4 left-10 w-96 h-96 border-l border-t border-primary/5 pointer-events-none hidden xl:block"></div>
    </div>
  );
};

export default NotFound;
