import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    icon: 'language',
    title: 'Web Architecture',
    desc: 'High-performance frontend & robust backend systems built with React and Go.',
    color: 'primary'
  },
  {
    id: '02',
    icon: 'phone_iphone',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS and Android.',
    color: 'primary'
  },
  {
    id: '03',
    icon: 'search',
    title: 'Performance SEO',
    desc: 'Dominating search rankings with technical precision and semantic indexing.',
    color: 'primary'
  },
  {
    id: '04',
    icon: 'cloud',
    title: 'Cloud Infrastructure',
    desc: 'Scalable AWS/GCP deployments with CI/CD automation pipelines.',
    color: 'primary'
  },
  {
    id: '05',
    icon: 'security',
    title: 'Cyber Security',
    desc: 'Hardening systems against threats with zero-trust architecture.',
    color: 'primary'
  },
  {
    id: '06',
    icon: 'monitoring',
    title: 'Data Analytics',
    desc: 'Extracting actionable insights through advanced telemetry and ML.',
    color: 'primary'
  }
];

const ServicesGrid = () => {
  return (
    <section className="py-32 px-8 border-y border-white/5 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-lg">[03]</span>
          <h2 className="text-4xl font-bold uppercase tracking-tighter">What we do best</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-dark p-12 hover:bg-primary/5 transition-all group relative overflow-hidden cursor-pointer"
            >
              <span className="font-mono text-[10px] opacity-40 mb-8 block uppercase tracking-[0.2em]">
                (Service_{service.id})
              </span>
              <span className={`material-symbols-outlined text-${service.color} text-4xl mb-6`}>
                {service.icon}
              </span>
              <h3 className="text-2xl font-bold mb-4 uppercase">{service.title}</h3>
              <p className="text-sm opacity-50 leading-relaxed mb-8">{service.desc}</p>
              
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className={`material-symbols-outlined text-${service.color}`}>north_east</span>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
