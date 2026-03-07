import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    date: '2024.10.12',
    category: 'Engineering',
    title: 'Implementing Rust in Edge Computing Nodes.',
    desc: 'Exploring the speed benefits of Rust for low-latency global deployments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4-CivrEn4inCSaFxPkQ1mgS026rPdmebiauYgQhqKNeufxuB16jHBnhGbe13vaAA4KI1dvUHNfIHFJwdU-CxfQKTxwiieGu7Q5he4OdhUyShVn_TGW5RjI5TpVMiw0eALEngBFSi9aNJStHKttqKB5vzv1_9mozBnwoo86MjsiCkdZX0VKxy76zgpB-rBmjzq1QELP16epVMCt5aPG4EzDMZW52_dVcmpzk1bynwh9Tf7y8B4fHHbIJROR2UO6fIkJ4T4Qk1lZgLW',
    color: 'primary'
  },
  {
    date: '2024.10.05',
    category: 'Infrastructure',
    title: 'The Zero-Trust Model for Enterprise SaaS.',
    desc: 'Why perimeter defense is dead and how to rebuild for security.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1FbAAfUdamddxJip92-j8xFOGAi1ds-Gg93BEa-yjQKJpqu-amK4XoN07O-Kr1URqYSD2Pi_hB98PphzYFtkydAxputZBu1it_p6_UWFaCm7MeryaxxgI-0DlPprKmWmNcNLIuPK8v5YoVusdyiMyVHZ8ZFbvMY__sktfHzxZIwoT-2BhulxJUzhit2aZwDxDPBTFUnbT5rWXD9KcslGF69waL_fuzsGESRIJqeogri1VJL2Fb0z-o_-q7fA67Zl_EConF_GVyKHV',
    color: 'accent'
  },
  {
    date: '2024.09.28',
    category: 'Design',
    title: 'Psychology of Cyberpunk Visual Systems.',
    desc: 'Why high-contrast, neon-lit interfaces are dominating digital luxury.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmnaYlzNPuLat5Ch-p-Aofz64pnVTrhbIwyANYYhHI5yMkmhXvXBCuxUxyXuMN0ySL_UYhVENhDu5WkYr15dB9dxP-WYL4Ks0XFaAbL2oNn2PyiANPeYjwoGpCU1FloJJiszFcLb_Cy7bvhASGoKrOxZw241BVXZvvvgB_puSOxthsj8WiLYGDB8krH669EZ5LHX4zYvRbx8iJXFt1AXIj4FFkFlyZZno91TgP_vMDaSZ2C0-CArhyhzecwXcMY3O6Up9SEhBP3Xpv',
    color: 'neon-green'
  }
];

const TechnicalInsights = () => {
  return (
    <section className="py-32 px-8 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-black uppercase tracking-tighter"
          >
            Technical Insights
          </motion.h2>
          <motion.a 
            whileHover={{ x: 5 }}
            className="font-mono text-[10px] uppercase tracking-widest border-b border-white/30 hover:border-white transition-all pb-1 cursor-pointer"
            href="#"
          >
            View Archive // 2024
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border border-white/10 hover:border-${article.color}/50 transition-all p-1 rounded-2xl group cursor-pointer`}
            >
              <div className="aspect-[4/3] bg-zinc-900 rounded-xl mb-6 overflow-hidden relative">
                <img 
                  alt={article.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src={article.image}
                />
                <div className={`absolute inset-0 bg-${article.color}/10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              </div>
              <div className="p-6">
                <div className="flex gap-4 font-mono text-[9px] opacity-40 uppercase mb-4">
                  <span>// {article.date}</span>
                  <span>// {article.category}</span>
                </div>
                <h3 className={`text-xl font-black mb-4 group-hover:text-${article.color} transition-colors uppercase tracking-tight`}>
                  {article.title}
                </h3>
                <p className="text-sm opacity-50 mb-6 font-light leading-relaxed">
                  {article.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalInsights;
