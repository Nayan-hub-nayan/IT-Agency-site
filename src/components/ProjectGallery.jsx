import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const filters = ['ALL', 'UI/UX', '3D', 'MOTION', 'BRANDING'];

const items = [
  { 
    id: 1, 
    categories: ['UI/UX', 'BRANDING'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCJNggdaBWQuzKU0iBBDmDXJ9-fRx6FQ-tW7zljSsCXtJG_RzfHQu4GK_9_IDpI429qZuWZucVDdtuJis-nZUoj8hjkNNleuJUqs3nSNVivQRwN3mFaVnBFXR3XgA5_0_ghROZXE9c5Usdpdm6VRxQhPh_i44ENh3IGOjhQIFc7YARd6PQw_78heIVa3oXZneUdsso1_dbOMNtHNyAGISu0wucvI57hBtsTt9gAAGJG8wk_9rhJLUdS8aW3HbNDgwqBukNZ5ySDkcC',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    details: [
      { k: 'ISO_PARAM', v: '800_NATIVE', ck: 'primary' },
      { k: 'RESOLUTION', v: '7680x4320', ck: 'accent' }
    ]
  },
  { 
    id: 2, 
    categories: ['3D', 'MOTION'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6DuBOfoFNOnzBuZlmn4fFutu6k5pkFR6FfpprNC7waQDN5ZQC6bLsCHVour5Q6ISO3Uf6XmKANauaH8qcW3q5U5N6VKpdlDIMtmvpt0g8TdDrHUNBRtjKduOgpqVTH6fUqCRsW4UT1qRKENTzTqQFcn-4oFFFuqnIsQuuxp5lb1ZlmB0Q2WNRGfndz97gZqrPJyIeDpg4pc0xRsymU7ecVsO7RgxajS3Ca9wXnf7DJ-INdHS0o1IUWsGZ6U8qIVoeVvSZeNsASzvo',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    status: 'SCANNING_DATA...', 
    nodeId: '0x22941'
  },
  { 
    id: 3, 
    categories: ['UI/UX'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'RE_091 // DEPTH_AXIS'
  },
  {
    id: 4,
    categories: ['BRANDING', '3D'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    label: 'FRAGMENT_04 // SYS_CAPTURE'
  },
  {
    id: 5,
    categories: ['MOTION', 'UI/UX'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    stats: [
      { l: 'DATA_STREAM', v: 'ENCRYPTED_256', cl: 'white' },
      { l: 'LATENCY', v: '0.002ms', cl: 'primary' }
    ]
  }
];

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const navigate = useNavigate();

  const filteredItems = activeFilter === 'ALL' 
    ? items 
    : items.filter(item => item.categories.includes(activeFilter));

  return (
    <section className="py-32 px-6 bg-black overflow-hidden bg-background-dark">
      <div className="max-w-7xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black uppercase tracking-tighter"
        >
          MEDIA_FRAGMENTATION
        </motion.h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-6">
          <p className="font-mono text-[10px] text-primary tracking-[0.5em] uppercase">// EXPERIMENTAL_UI_UNITS</p>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] transition-all hover:border-accent hover:text-white ${activeFilter === f ? 'bg-white/5 border-accent text-white' : 'text-white/40'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, i) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/project/${item.id}`)}
                className="relative aspect-square group overflow-hidden border border-white/5 rounded-2xl cursor-pointer bg-black"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) video.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <img 
                  alt="Project Fragment" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 absolute inset-0 z-0" 
                  src={item.img} 
                />

                {/* Hover Video */}
                {item.video && (
                  <video 
                    src={item.video} 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"
                  />
                )}
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8 z-20">
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.categories.map((cat, idx) => (
                       <span key={idx} className="bg-black/50 text-white border border-white/10 px-2 py-1 rounded text-[8px] font-mono uppercase tracking-widest">{cat}</span>
                    ))}
                  </div>

                  {item.details && (
                    <div className="w-full border border-white/10 p-4 font-mono text-[8px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-black/40 rounded-lg">
                      {item.details.map((d, di) => (
                        <div key={di} className={`flex justify-between ${di < item.details.length - 1 ? 'border-b border-white/10' : ''} pb-2 mb-2 last:pb-0 last:mb-0`}>
                          <span className={`text-${d.ck}`}>{d.k}</span>
                          <span className="text-white opacity-80">{d.v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {item.status && (
                    <div className="bg-black/60 border border-accent/30 p-4 font-mono text-[8px] uppercase tracking-[0.2em] rounded-lg">
                      <p className="text-accent mb-2 animate-pulse">{item.status}</p>
                      <p className="text-white opacity-60">NODE: {item.nodeId}</p>
                    </div>
                  )}
                  {item.label && (
                    <div className="bg-primary/10 backdrop-blur-md border border-primary/30 p-4 font-mono text-[8px] uppercase tracking-widest rounded-lg">
                      <p className="text-white">{item.label}</p>
                    </div>
                  )}
                  {item.stats && (
                    <div className="w-full grid grid-cols-2 gap-4 font-mono text-[8px] uppercase">
                      {item.stats.map((s, si) => (
                        <div key={si} className="p-4 bg-black/60 border border-white/10 rounded-lg">
                          <span className={`block text-${s.cl} mb-2 opacity-60`}>{s.l}</span>
                          <span className="text-white font-black">{s.v}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-accent opacity-0 group-hover:opacity-100 transition-opacity m-2"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-accent opacity-0 group-hover:opacity-100 transition-opacity m-2"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
