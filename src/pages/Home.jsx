import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from '../components/ServicesGrid';
import CaseStudies from '../components/CaseStudies';
import Pricing from '../components/Pricing';
import ProcessProtocol from '../components/ProcessProtocol';
import Testimonials from '../components/Testimonials';
import TechnicalInsights from '../components/TechnicalInsights';

const Home = () => {
  return (
    <div className="bg-mesh min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 px-8 flex flex-col justify-center bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-4"
          >
            <h1 className="text-6xl font-black leading-[0.9] mb-8 uppercase tracking-tighter">
              Scale with <br />
              absolute <span className="text-accent">digital precision.</span>
            </h1>
            <p className="text-sm opacity-60 max-w-[280px] leading-relaxed mb-12 uppercase font-mono tracking-tighter">
              Next-gen infrastructure for high-growth tech entities.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#work"
              className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-black shadow-[0_0_30px_rgba(212,255,0,0.3)]"
            >
              <span className="material-symbols-outlined font-black">arrow_downward</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="col-span-12 lg:col-span-8 relative"
          >
            <div className="absolute right-[-10%] top-[-5%] w-[110%] h-[110%] opacity-30 mix-blend-lighten pointer-events-none">
              <img
                alt="Portrait"
                className="w-full h-full object-cover filter grayscale contrast-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Qxj5KQnhQewQqbqcURTA_lwezGCqsTa0vOUExD5skjM2epRFk1mqvcL0nP3Y8Ga3qxu66W5bEamJBQPk0uv8PmVQS_HAEu0AaBFEe9or03ozYWmlsPCKap72wG0rZkZZwDJ4yxuDHCC2h4Cmb8gg0nuknoGMTkZv3M18uL005TtDvgsTWKB-tYnNEXGsuVzk1P0JaMZmckPtF7f472Olut5A6TnBTewmHQ-Ji6OvxJCeYVQi9bqS5_AqI-VJKKUTEkbpwcr8lMlI"
              />
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full pb-20">
              <div className="text-[14vw] font-black leading-[0.8] tracking-tighter text-gradient uppercase select-none">
                Lassgana
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Footer Info */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-7xl mx-auto w-full mt-20 font-mono text-[10px] tracking-widest leading-loose uppercase opacity-40"
        >
          40.7128° N, 74.0060° W<br />
          NEW YORK CITY TERMINAL<br />
          ENCRYPTED DATA STREAM<br />
          V_0.1.42
        </motion.div>
      </section>

      {/* Live Feed Section */}
      <section className="py-32 px-8 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="relative border-2 border-white/10 p-2 rounded-lg bg-black/60 shadow-[0_0_50px_rgba(57,255,20,0.1)]">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-neon-green/50"></div>
                </div>
                <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">LIVE_FEED_MONITOR_01</span>
              </div>
              <div className="aspect-video bg-zinc-900 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full border border-neon-green/30 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                  >
                    <span className="material-symbols-outlined text-neon-green text-4xl">play_arrow</span>
                  </motion.div>
                </div>
                <img
                  alt="Tech Monitor"
                  className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJDz5DWvK7R5dH_193U2MNWn9Cf5KTw5Sq881OLDgCpbvKJlAjFYGyz5nxg5lup76wHub5J5vBNjVT8ylCHwQKX0692O_FmJ6nAC88BN1QtBml0j8gl0D-M7Vs2t9j7aioSNum0FJUc-FJXc098T2rhW8fRDu8ICr75YTaVd0IW2OtwiGWCI4ZpwThsj7Q9jY8EmSlDg_NYYmfsxGDKeU5ovQhw0KWaN51N-ZVOtN5hw3OiIaiRmp7_QsV6Z3wEz5JbbPxCG0rX0fj"
                />
                <div className="absolute bottom-4 left-4 font-mono text-neon-green text-[10px] flex flex-col">
                  <span>REC ● 00:42:15:09</span>
                  <span>BITRATE: 45.2 MBPS</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-neon-green/30 rounded-full">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
              <span className="font-mono text-[10px] text-neon-green uppercase tracking-widest">50+ Verified Reviews</span>
            </div>
            <h2 className="text-6xl font-black leading-[0.9] uppercase tracking-tighter">
              Boost <span className="text-neon-green">Revenue</span> <br /> via Tech Superiority.
            </h2>
            <p className="text-lg opacity-60 leading-relaxed font-light">
              We bridge the gap between complex engineering and commercial dominance. Our systems are engineered for conversion, speed, and massive scalability.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "backOut" }}
                  className="text-4xl font-black text-neon-green tracking-tighter"
                >
                  99.9%
                </motion.div>
                <div className="font-mono text-[9px] uppercase opacity-40 tracking-[0.2em] mt-2">Uptime Reliability</div>
              </div>
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                  className="text-4xl font-black text-neon-green tracking-tighter"
                >
                  12ms
                </motion.div>
                <div className="font-mono text-[9px] uppercase opacity-40 tracking-[0.2em] mt-2">Server Response</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Decorative Grid */}
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      </section>

      <ServicesGrid />
      <CaseStudies />
      <Pricing />
      <ProcessProtocol />
      <Testimonials />
      <TechnicalInsights />

      {/* Pulsing Accent (Corner Sticky) */}
      <div className="fixed top-24 right-8 z-50">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-primary"
          fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" fill="currentColor"></path>
        </motion.svg>
      </div>
    </div>
  );
};

export default Home;
