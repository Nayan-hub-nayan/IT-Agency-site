import React from 'react';
import AboutHero from '../components/AboutHero';
import TechOrbit from '../components/TechOrbit';
import StatsSection from '../components/StatsSection';
import CoreValues from '../components/CoreValues';
import GlobalReach from '../components/GlobalReach';
import TeamSection from '../components/TeamSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100 overflow-x-hidden relative">
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 bg-glow -z-10 pointer-events-none opacity-40"></div>
      <div className="fixed inset-0 opacity-[0.03] wave-pattern -z-10 pointer-events-none"></div>

      <main className="relative pt-32 px-6 md:px-12 lg:px-20 max-w-screen-2xl mx-auto pb-32">
        <AboutHero />
        <TechOrbit />
        <StatsSection />
        <CoreValues />
        <GlobalReach />
        <TeamSection />

      </main>

    </div>
  );
};

export default AboutPage;
