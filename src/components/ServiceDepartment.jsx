import React from 'react';
import { motion } from 'framer-motion';

const ServiceDepartment = ({ id, name, line1, line2, line3, color, subColor, features, stack, reverse }) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-12 border-b border-white/5 group bg-background-dark`}>
      {/* Left/Right Branding Column */}
      <div className={`lg:col-span-5 p-8 lg:p-20 border-r border-white/5 bg-surface-dark relative overflow-hidden ${reverse ? 'lg:order-2 lg:border-l lg:border-r-0' : ''}`}>
        <div className="scanning-line"></div>
        
        <div className="mb-12 flex items-center justify-between relative z-10">
          <span className={`font-mono text-sm font-bold text-${color}`}>[DEPT_{id}]</span>
          <span className={`text-[10px] font-mono text-${subColor} bg-${subColor}/5 px-3 py-1 uppercase tracking-tighter border border-${subColor}/20`}>
            Live_Status: Operational
          </span>
        </div>

        <motion.h3 
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-7xl font-black text-white uppercase mb-8 leading-[0.9] tracking-tighter"
        >
          {name.split('_').map((part, i) => (
            <React.Fragment key={i}>
              {part}{i === 0 && <br />}
            </React.Fragment>
          ))}
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-white text-xs font-mono leading-loose mb-12 max-w-md uppercase tracking-widest"
        >
          &gt; {line1}...<br />
          &gt; {line2}...<br />
          &gt; {line3}...
        </motion.div>

        <motion.button 
          whileHover={{ x: 10, backgroundColor: 'var(--neon-green)', color: 'black' }}
          className={`w-full flex items-center justify-between bg-${color} text-black font-black tracking-tighter uppercase px-10 py-6 transition-all duration-300 relative z-10`}
        >
          <span className="text-xl">INITIATE_PROTOCOL</span>
          <span className="material-symbols-outlined text-4xl">arrow_right_alt</span>
        </motion.button>
      </div>

      {/* Right/Left Detail Column */}
      <div className={`lg:col-span-7 p-8 lg:p-20 bg-background-dark relative ${reverse ? 'lg:order-1' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
          <div className="space-y-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className={`text-${color} font-mono text-[10px] uppercase tracking-[0.3em]`}>
                  [{i + 1 < 10 ? `0${i+1}` : i+1}] {feature.title}
                </span>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="border border-white/10 p-8 bg-white/[0.02] backdrop-blur-sm rounded-xl"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-[10px] font-mono font-black text-white uppercase tracking-[0.3em] opacity-40 mb-4">
                    STACK_OVERVIEW
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((item, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-black/40 border border-white/10 text-[9px] font-mono text-white/60 uppercase tracking-tighter hover:border-primary transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {reverse && (
                  <div className="border-t border-white/5 pt-6 font-mono text-[8px] opacity-20 uppercase tracking-[0.4em] space-y-1">
                    <p>0x45 0x21 0x99 processing...</p>
                    <p>System_Integrity: 100%</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDepartment;
