import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Lassgana transformed our legacy platform into a high-speed revenue machine within weeks.",
    author: "Marcus V.",
    role: "CTO, Vertex AI",
    color: "primary"
  },
  {
    quote: "The technical precision and aesthetic vision of this agency are unmatched in the current market.",
    author: "Elena K.",
    role: "Lead Designer, Chronos",
    color: "accent"
  },
  {
    quote: "Scale without friction. Our user base grew by 300% and the infrastructure didn't even flinch.",
    author: "James R.",
    role: "Founder, Horizon Pay",
    color: "neon-green"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-8 bg-white/5 border-y border-white/10 overflow-hidden">
      <div className="flex items-center gap-8 mb-20 px-4 max-w-7xl mx-auto">
        <div className="h-px bg-white/20 flex-1"></div>
        <h2 className="font-mono text-[10px] tracking-[0.5em] uppercase opacity-50 shrink-0">
          Echoes from the Network
        </h2>
        <div className="h-px bg-white/20 flex-1"></div>
      </div>

      <div className="flex gap-12 overflow-x-auto hide-scrollbar pb-12 cursor-grab active:cursor-grabbing px-4 max-w-[1400px] mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="min-w-[400px] lg:min-w-[600px] space-y-8 p-12 glass rounded-3xl border-white/5"
          >
            <div className={`text-6xl text-${t.color} font-serif italic`}>"</div>
            <p className="text-4xl font-medium tracking-tight leading-tight italic">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-black opacity-40">
                {t.author[0]}
              </div>
              <div>
                <div className="font-black uppercase text-sm tracking-tighter">
                  {t.author}
                </div>
                <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  {t.role}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background decoration */}
      <div className="flex justify-center mt-8 opacity-20">
        <div className="font-mono text-[8px] tracking-[1em] uppercase">
          // END_TRANSMISSION //
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
