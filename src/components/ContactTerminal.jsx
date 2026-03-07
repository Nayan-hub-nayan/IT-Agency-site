import React from 'react';
import { motion } from 'framer-motion';

const ContactTerminal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('TRANS_INIT: Data transmission sequence protocols activated.');
    alert('DATA_TRANSMISSION_SUCCESS: Message has been vectorized and sent to the core.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col gap-8 bg-white/[0.02] backdrop-blur-md p-10 rounded-3xl border border-white/10 relative overflow-hidden group shadow-2xl"
    >
      <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-white/20 text-right uppercase tracking-widest">
        FORM_ID: 0x882A<br />
        ENCRYPTION: AES-256
      </div>
      
      <h3 className="text-2xl font-black flex items-center gap-4 text-white uppercase tracking-tighter">
        <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
        TERMINAL_COMMAND_FORM
      </h3>

      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase font-mono">[INPUT:NAME]</label>
            <input
              type="text"
              required
              className="w-full bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 font-mono text-sm placeholder:text-white/10 transition-all outline-none"
              placeholder="Enter designation..."
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase font-mono">[INPUT:MAIL]</label>
            <input
              type="email"
              required
              className="w-full bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 font-mono text-sm placeholder:text-white/10 transition-all outline-none"
              placeholder="protocol@domain.com"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase font-mono">[INPUT:SUBJECT]</label>
          <div className="relative">
            <select
              required
              className="w-full bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 font-mono text-sm appearance-none outline-none transition-all cursor-pointer"
            >
              <option className="bg-background-dark">GENERAL_QUERY</option>
              <option className="bg-background-dark">TECHNICAL_PARTNERSHIP</option>
              <option className="bg-background-dark">NODE_DEPLOYMENT</option>
              <option className="bg-background-dark">SECURITY_AUDIT</option>
            </select>
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none">expand_more</span>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase font-mono">[INPUT:BODY]</label>
          <textarea
            required
            rows="5"
            className="w-full bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 font-mono text-sm placeholder:text-white/10 transition-all outline-none resize-none"
            placeholder="Initialize message sequence..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#000000' }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-accent text-background-dark font-black py-5 rounded-2xl tracking-[0.4em] flex items-center justify-center gap-4 transition-all shadow-[0_0_40px_rgba(204,255,0,0.1)] uppercase"
        >
          SEND_MESSAGE
          <span className="material-symbols-outlined font-black">send</span>
        </motion.button>
      </form>

      {/* Scanning Line overlay */}
      <div className="absolute inset-0 scanner-line opacity-[0.03] pointer-events-none animate-scanning"></div>
    </motion.div>
  );
};

export default ContactTerminal;
