import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Quantum Pay',
    category: 'FINTECH',
    roi: '5x ROI',
    period: 'In 6 Months',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQmOiHOcKh5VifFFBMb4k71vFU9tUQd5pA6cwO7lF7DceK4EiB35yl1tZgdwKA6tkNx3aE4yLi1m9gC5xr41iHIFfEJrT8X085mj2XFeAbWt1RFM0YjqHA3CITaIwKp8wvKHKplKfpM53I2wZP6kbrxWXCwY7KxcSJR4cE1koti2oPfjVz20M6T4HYM3r5ZLrzQhrYQcrZZNXMJ4zKZETqkbXzmpDgKnrpIlMk4Qb9TUHGJcjRA2pe4Sou7TuTeGTwVgrXsU2mTOtK',
    offset: false
  },
  {
    id: 2,
    title: 'Nexus Platform',
    category: 'SAAS',
    roi: '150% Leads',
    period: 'User Engagement',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtb98XEgTQqYliXBaX7Ighrvj24BP9hPXSM3RRhb3xcnSsGptPtLEiv8znNLH5G7xvKwzY7bJKeYi0D0AeBASgS3b-rBHSNWmr4RvkOCS3r7dkbWgEW_bPTKgbRiF7wnjJxjcpRIgTPa3b_8zMFKn_vgwN4mvvrFZYRQ1KzasLes6D7snogrXaKOgvJLQgwLPX47J_qthjCfelJiYvZHDfiGLyeKaadM1c-Xh4JBDN9hyRoXy_d1lx741MzpDz15AohhgbbpKgA4Gd',
    offset: true
  }
];

const CaseStudies = () => {
  return (
    <section className="py-32 px-8 bg-background-dark" id="work">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex justify-between items-end border-b border-white/10 pb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold tracking-tighter uppercase leading-[0.9]"
          >
            Case<br />Studies
          </motion.h2>
          <div className="font-mono text-[10px] opacity-50 uppercase tracking-[0.3em] pb-4">
            Selected Deployments // V_2.0
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative ${project.offset ? 'lg:mt-32' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-900 mb-8 border border-white/10 relative">
                <img 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-white text-black px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 border border-neon-green/30 text-[10px] text-neon-green font-mono">
                      <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span> LIVE
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-accent tracking-tighter">{project.roi}</div>
                  <div className="font-mono text-[10px] opacity-40 uppercase tracking-widest mt-1">
                    {project.period}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
