import React from 'react';

const Ticker = () => {
  const items = [
    { label: 'SYSTEM_STATUS', value: 'NOMINAL', color: 'accent' },
    { label: 'THREAT_LEVEL', value: 'ZERO', color: 'primary' },
    { label: 'UPLINK_STABLE', value: '9.8 GB/S', color: 'accent' },
    { label: 'ACTIVE_PROJECTS', value: '24', color: 'white' },
    { label: 'REGION', value: 'NORTH_AMERICA', color: 'accent' },
    { label: 'ENCRYPTION', value: 'AES-256-GCM', color: 'primary' },
  ];

  return (
    <div className="border-y border-white/5 py-4 ticker-wrap bg-white/[0.02] backdrop-blur-md">
      <div className="ticker-content flex space-x-12">
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className={`font-mono text-[10px] tracking-[0.3em] text-${item.color} uppercase font-black`}>
                  {item.label}: {item.value}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase font-light">//</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
