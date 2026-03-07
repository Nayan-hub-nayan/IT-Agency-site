import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What is the typical project timeline?",
    a: "Our engagements typically span 12 to 24 weeks depending on the complexity. We operate on a dual-track agile methodology: Discovery takes 4 weeks, followed by iterative development cycles of 2 weeks. Every project includes a dedicated QA phase before deployment to ensure zero-latency performance."
  },
  {
    q: "How do you handle pricing models?",
    a: "We offer three structured tiers: Fixed-scope for defined MVP builds, Time & Materials for dynamic R&D projects, and Retained Partnership for long-term platform evolution. Most enterprise clients opt for our $250k+ quarterly milestone-based structure to maintain high-velocity output."
  },
  {
    q: "What tech stacks do you master?",
    a: "We are tech-agnostic but performance-biased. Our core stack typically revolves around modern, scalable technologies designed for multi-million user environments.",
    stack: [
      { label: 'FRONTEND', val: 'NEXT.JS / TS' },
      { label: 'BACKEND', val: 'GO / RUST' },
      { label: 'DATA', val: 'POSTGRES / REDIS' },
      { label: 'CLOUD', val: 'AWS / K8S' }
    ]
  },
  {
    q: "Do you provide post-launch support?",
    a: "Support is integral to our DNA. Every project includes a 60-day stabilization period. Following that, we offer Managed Services Agreements (MSA) that guarantee 99.9% uptime and 4-hour response times for critical incidents. We don't just build and leave; we scale with you."
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="lg:col-span-9 space-y-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-background-dark overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex justify-between items-center p-8 text-left hover:bg-white/5 transition-colors group"
          >
            <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-colors ${openIndex === i ? 'text-accent' : 'text-white'}`}>
              {faq.q.split(' ').map((word, idx) => (
                <span key={idx} className={idx === 3 ? 'text-accent group-hover:text-white transition-colors' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            <motion.span 
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              className="material-symbols-outlined text-4xl text-accent"
            >
              expand_more
            </motion.span>
          </button>
          
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="p-8 pt-0 space-y-8">
                  <p className="text-lg text-slate-400 font-light leading-relaxed max-w-3xl">
                    {faq.a}
                  </p>
                  
                  {faq.stack && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {faq.stack.map((s, si) => (
                        <motion.div 
                          key={si}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: si * 0.1 }}
                          className="p-4 border border-white/10 bg-white/5 rounded-lg"
                        >
                          <div className="text-[9px] font-mono text-accent mb-2 font-black tracking-widest">{s.label}</div>
                          <div className="font-black text-sm uppercase tracking-tight text-white">{s.val}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
