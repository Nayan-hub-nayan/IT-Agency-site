import React from 'react';
import { motion } from 'framer-motion';

const TechOrbit = () => {
  const techs = [
    { name: 'REACT_JS.01', color: 'deep-magenta', pos: 'top-1/4 left-1/4' },
    { name: 'NODE_V20.8', color: 'neon-green', pos: 'bottom-1/4 right-1/4' },
    { name: 'AI_OPEN_LLM', color: 'deep-magenta', pos: 'top-1/2 right-[15%]' },
    { name: 'DOCKER_CONTAINER', color: 'neon-green', pos: 'bottom-1/3 left-[15%]' },
    { name: 'POSTGRES_DB', color: 'white', pos: 'top-[10%] right-1/3' },
  ];

  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Tech_Stack_Orbit</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
        <span className="text-[10px] font-mono opacity-40">SYSTEM_RESOURCES_v3.0</span>
      </div>

      <div className="relative h-[600px] flex items-center justify-center border border-white/5 bg-white/[0.02] overflow-hidden group rounded-3xl">
        {/* Pulsing Orbits */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ scale: [0.8, 0.85, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 border border-deep-magenta/20 rounded-full"
          ></motion.div>
          <motion.div 
            animate={{ scale: [0.5, 0.55, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 border border-neon-green/10 rounded-full"
          ></motion.div>
        </div>

        <div className="relative flex items-center justify-center w-full h-full">
          {/* Central Hub */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-center z-10 p-12 border border-white/10 backdrop-blur-2xl bg-black/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-5xl font-black uppercase text-white mb-2 tracking-tighter">Neural</h3>
            <p className="font-mono text-[10px] text-primary tracking-[0.5em] opacity-80">CORE_ENGINE</p>
          </motion.div>

          {/* Orbiting Techs */}
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className={`absolute ${tech.pos} p-4 border border-${tech.color}/40 text-${tech.color} font-mono text-[10px] bg-black/80 backdrop-blur-md cursor-pointer hover:border-${tech.color} transition-colors uppercase tracking-widest shadow-xl`}
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
        
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default TechOrbit;
