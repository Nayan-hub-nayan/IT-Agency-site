import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    id: '01',
    title: 'Innovation & Integrity',
    desc: 'We push boundaries while maintaining an unwavering moral compass. Every line of code and every design pixel reflects our commitment to quality.'
  },
  {
    id: '02',
    title: 'Collaboration',
    desc: "Success is a collective effort. We integrate seamlessly with our clients' teams to foster a culture of transparency and shared goals."
  },
  {
    id: '03',
    title: 'Result Driven',
    desc: 'We measure our performance by the tangible outcomes we deliver. Growth metrics and ROI are our ultimate indicators of success.'
  }
];

const CoreValues = () => {
  return (
    <section className="mb-32">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl font-black uppercase tracking-tighter">Core Values</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((v, i) => (
          <motion.div 
            key={v.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group border-l border-white/10 pl-8 py-4 hover:border-accent transition-colors cursor-default"
          >
            <span className="text-accent font-mono text-xl mb-4 block group-hover:scale-110 transition-transform origin-left">
              [{v.id}]
            </span>
            <h3 className="text-2xl font-black mb-6 tracking-tight uppercase">{v.title}</h3>
            <p className="text-sm opacity-50 leading-relaxed mb-8 font-light">
              {v.desc}
            </p>
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent flex items-center gap-2"
            >
              Read More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
