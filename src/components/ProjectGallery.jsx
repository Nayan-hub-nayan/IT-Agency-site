import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { 
    id: 1, 
    colSpan: 'col-span-8', 
    rowSpan: 'row-span-4', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCJNggdaBWQuzKU0iBBDmDXJ9-fRx6FQ-tW7zljSsCXtJG_RzfHQu4GK_9_IDpI429qZuWZucVDdtuJis-nZUoj8hjkNNleuJUqs3nSNVivQRwN3mFaVnBFXR3XgA5_0_ghROZXE9c5Usdpdm6VRxQhPh_i44ENh3IGOjhQIFc7YARd6PQw_78heIVa3oXZneUdsso1_dbOMNtHNyAGISu0wucvI57hBtsTt9gAAGJG8wk_9rhJLUdS8aW3HbNDgwqBukNZ5ySDkcC',
    details: [
      { k: 'ISO_PARAM', v: '800_NATIVE', ck: 'primary' },
      { k: 'RESOLUTION', v: '7680x4320', ck: 'accent' }
    ]
  },
  { 
    id: 2, 
    colSpan: 'col-span-4', 
    rowSpan: 'row-span-2', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6DuBOfoFNOnzBuZlmn4fFutu6k5pkFR6FfpprNC7waQDN5ZQC6bLsCHVour5Q6ISO3Uf6XmKANauaH8qcW3q5U5N6VKpdlDIMtmvpt0g8TdDrHUNBRtjKduOgpqVTH6fUqCRsW4UT1qRKENTzTqQFcn-4oFFFuqnIsQuuxp5lb1ZlmB0Q2WNRGfndz97gZqrPJyIeDpg4pc0xRsymU7ecVsO7RgxajS3Ca9wXnf7DJ-INdHS0o1IUWsGZ6U8qIVoeVvSZeNsASzvo',
    status: 'SCANNING_DATA...', 
    nodeId: '0x22941'
  },
  { 
    id: 3, 
    colSpan: 'col-span-4', 
    rowSpan: 'row-span-2', 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    label: 'RE_091 // DEPTH_AXIS'
  },
  {
    id: 4,
    colSpan: 'col-span-4',
    rowSpan: 'row-span-3',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    label: 'FRAGMENT_04 // SYS_CAPTURE'
  },
  {
    id: 5,
    colSpan: 'col-span-8',
    rowSpan: 'row-span-3',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtz9thErGSY9Epdl0lFWe-b9S3hXUqNG8-Hz7oUvy2kbJZhIE2RI9-mHB9Z3130DlSRjCRXUhWF0pO5RUBs0W4vm7qZbqMmABPAtG1wQCWwyTMKx3XQ7O2ryMNUVEBF2T6BzG4EeY53ptOKgvHaIEcaOsjm3q2LW9-EZgphwgFNLeNLHfJF5FVB3ztRQ8wHgNiDqN9cZfUKowfbWbblM7EF5jgFHUkHACV2yO7qlp2T9BzKoz6A9Uwge1oLsJ_RJb0f5JdCe5bjnof',
    stats: [
      { l: 'DATA_STREAM', v: 'ENCRYPTED_256', cl: 'white' },
      { l: 'LATENCY', v: '0.002ms', cl: 'primary' }
    ]
  }
];

const ProjectGallery = () => {
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
            {['ALL', 'UI/UX', '3D', 'MOTION', 'BRANDING'].map((f, i) => (
              <button 
                key={f}
                className={`px-4 py-2 border border-white/10 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] transition-all hover:border-accent hover:text-white ${i === 0 ? 'bg-white/5 border-accent text-white' : 'text-white/40'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="masonry-grid">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`${item.colSpan} ${item.rowSpan} relative group overflow-hidden border border-white/5 rounded-2xl cursor-crosshair`}
            >
              <img 
                alt="Project Fragment" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                src={item.img} 
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center p-8">
                {item.details && (
                  <div className="w-full max-w-[200px] border border-white/10 p-4 font-mono text-[8px] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-black/40 rounded-lg">
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
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
