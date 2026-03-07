import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Discovery & Audit',
    desc: 'We deep-dive into your existing architecture to find bottlenecks and untapped potential in your digital infrastructure.',
    color: 'accent',
    log: [
      'SCANNING_SYSTEMS... COMPLETED',
      'ERRORS_FOUND: 12',
      'OPTIMIZATION_POSSIBILITY: 85%'
    ]
  },
  {
    id: '02',
    title: 'Strategic Design',
    desc: 'Mapping out the high-impact visual and technical blueprint for your platform.',
    color: 'primary'
  },
  {
    id: '03',
    title: 'Precision Build',
    desc: 'Code implementation with extreme attention to performance, security, and scalability.',
    color: 'white'
  },
  {
    id: '04',
    title: 'Global Launch',
    desc: 'Final optimization and deployment to our global CDN network for worldwide reach.',
    color: 'neon-green'
  }
];

const ProcessProtocol = () => {
  return (
    <section className="py-32 px-8 overflow-hidden bg-background-dark">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="sticky top-40"
          >
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
              Process<br />Protocol
            </h2>
            <p className="opacity-50 font-mono text-[10px] uppercase tracking-widest leading-loose">
              // EXECUTION FLOW [01-04]<br />
              // TOTAL SYNC ENABLED<br />
              // REALTIME DEPLOYMENT
            </p>
          </motion.div>
        </div>

        <div className="lg:w-2/3 space-y-32 relative">
          <div className="absolute left-0 top-0 w-px h-full bg-white/10 ml-[18px]"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-12 relative"
            >
              <div 
                className={`w-10 h-10 rounded-full bg-background-dark border ${step.id === '04' ? 'border-neon-green text-neon-green' : 'border-white/20'} flex items-center justify-center font-mono text-xs z-10 shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
              >
                {step.id}
              </div>
              <div className="pt-2">
                <h3 className={`text-3xl font-black uppercase mb-4 tracking-tighter text-${step.color}`}>
                  {step.title}
                </h3>
                <p className="text-lg opacity-60 leading-relaxed font-light max-w-xl">
                  {step.desc}
                </p>
                
                {step.log && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    className="mt-8 p-4 font-mono text-[9px] bg-white/5 border border-white/10 uppercase tracking-[0.2em] space-y-1"
                  >
                    {step.log.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessProtocol;
