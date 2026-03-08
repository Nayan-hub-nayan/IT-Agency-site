import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navLinks = [
    { name: '_HOME', path: '/home' },
    { name: '_SERVICES', path: '/services' },
    { name: '_PROJECTS', path: '/projects' },
    { name: '_TEAM', path: '/team' },
    { name: '_FAQ', path: '/faq' },
    { name: '_CONTACT', path: '/contact' },
  ];
  return (
    <footer className="pt-32 pb-8 px-8 border-t border-white/10 relative overflow-hidden bg-background-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24 relative z-10">
        <div className="lg:col-span-2 space-y-12">
          <div className="text-accent text-4xl font-black leading-tight">
            デジタル<br />
            ドア・スタジオ
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-mono text-[10px] opacity-60 tracking-[0.3em] uppercase">CONNECT_TERMINAL:</div>
            <a
              href="mailto:hello@digitaldoor.agency"
              className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors tracking-tighter"
            >
              HELLO@NAYAN.DESIGN
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse shadow-[0_0_10px_#39FF14]"></div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-neon-green">
              System_Active // All Nodes Operational
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="font-mono text-[10px] opacity-40 uppercase tracking-[0.4em]">Location_HQ</h4>
          <div className="space-y-4">
            <div className="font-mono text-xs leading-relaxed opacity-60">
              121 VARICK STREET<br />
              NEW YORK, NY 10013<br />
              UNITED STATES
            </div>
            <div className="font-mono text-xs text-accent">
              40.7128° N, 74.0060° W
            </div>
          </div>
          <div className="flex gap-4">
            {[['TW', '/home'], ['LN', '/service'], ['IG', '/team']].map(social => (
              <Link to={social[1]} key={social} className="w-8 h-8 border border-white/10 flex items-center justify-center font-mono text-[10px] hover:bg-white hover:text-black transition-all cursor-pointer">
                {social[0]}
              </Link>
            ))}
          </div>
        </div>


        <div className="space-y-8">

          <span className="text-slate-500 text-[10px] font-mono font-black tracking-[0.5em] uppercase">NAVIGATION</span>
          <div className="space-y-6">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white font-black text-sm tracking-[0.2em] hover:text-primary transition-colors w-fit uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-8">
          <div className="flex flex-wrap gap-8 font-mono text-[9px] tracking-[0.3em] uppercase opacity-40">
            <span>// SINCE 2018</span>
            <span>// PRIVACY PROTOCOL</span>
            <span>// TERMS OF SERVICE</span>
          </div>
          <div className="text-right font-mono text-[9px] opacity-40 tracking-widest">
            © 2024 NAYAN.DESIGN. ALL SYSTEMS RESERVED.
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 1 }}
          className="text-[18vw] font-black leading-[0.8] tracking-tighter text-gradient uppercase flex items-baseline select-none pointer-events-none"
        >
          Digital<span className="text-[4vw] ml-4 align-top">.</span>
        </motion.h1>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
