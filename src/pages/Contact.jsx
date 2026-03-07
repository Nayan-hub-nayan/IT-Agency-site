import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactTerminal from '../components/ContactTerminal';
import NodeLocations from '../components/NodeLocations';
import GeospatialMap from '../components/GeospatialMap';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background-dark pt-32 pb-32">
      <ContactHero />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-start border-x border-white/5">
        <ContactTerminal />
        <NodeLocations />
      </div>

      <div className="mt-32">
        <GeospatialMap />
      </div>
    </div>
  );
};

export default Contact;
