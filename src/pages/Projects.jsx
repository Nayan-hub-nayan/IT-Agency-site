import React from 'react';
import ProjectHero from '../components/ProjectHero';
import ProjectShowcase from '../components/ProjectShowcase';
import ProjectGallery from '../components/ProjectGallery';
import Ticker from '../components/Ticker';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background-dark pb-32 pt-32 overflow-hidden">
      <ProjectHero />
      <ProjectShowcase />
      <ProjectGallery />
      <div className="mt-32">
        <Ticker />
      </div>

      {/* Decorative vertical progress */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-8 items-center">
        <div className="flex flex-col space-y-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(255,30,86,0.5)]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
        </div>
        <div className="w-[1px] h-32 bg-white/10 relative">
          <div className="absolute top-0 left-0 w-full h-1/4 bg-accent shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>
        </div>
        <div className="rotate-180 [writing-mode:vertical-lr] font-mono text-[9px] tracking-[0.5em] opacity-30 uppercase font-black">
          USER_JOURNEY
        </div>
      </div>
    </div>
  );
};

export default Projects;
