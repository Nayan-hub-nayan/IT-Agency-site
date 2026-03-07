import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-background-dark bg-mesh font-display antialiased text-white">
            {/* Left Arrow Navigation Trigger */}


            <header className="p-8 flex justify-between items-start z-20">
                <div className="font-mono text-xs opacity-60 dark:opacity-40 tracking-widest">
                    (N°004) <br />
                    EST. 2018
                </div>
                <div className="flex gap-4 items-center">
                    <div
                        onClick={() => navigate('/about')}
                        className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] tracking-widest uppercase font-mono cursor-pointer hover:bg-white/10"
                    >
                        About Us
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                        <span className="material-icons text-sm">menu</span>
                    </button>
                </div>
            </header>


            <main className="flex-1 grid grid-cols-12 gap-6 px-8 relative z-10">
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-start pt-12">
                    <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            Design that <br />
                            sparks <span className="text-accent">thought and emotion.</span>
                        </h1>
                        <p className="text-sm opacity-60 max-w-[280px] leading-relaxed mb-12">
                            Visuals that connect, inspire, and engage. Because good design moves people.
                        </p>
                        <a className="w-16 h-16 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300" href="/home">
                            <span className="material-icons material-symbols-outlined text-background-dark font-bold text-black">arrow_forward</span>
                        </a>
                    </div>
                    <div className="mt-20 font-mono text-[10px] tracking-widest leading-loose uppercase opacity-50">
                        Freelance Designer<br />
                        Crafting Digital Experiences<br />
                        —From UI to Branding—With<br />
                        Intent and Precision.
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-8 flex flex-col justify-center relative">
                    <div className="absolute right-[-10%] top-[-10%] w-[120%] h-[120%] opacity-40 mix-blend-screen pointer-events-none">
                        <img
                            alt="Cyberpunk Aesthetic Portrait"
                            className="w-full h-full object-cover filter grayscale brightness-50 contrast-125"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Qxj5KQnhQewQqbqcURTA_lwezGCqsTa0vOUExD5skjM2epRFk1mqvcL0nP3Y8Ga3qxu66W5bEamJBQPk0uv8PmVQS_HAEu0AaBFEe9or03ozYWmlsPCKap72wG0rZkZZwDJ4yxuDHCC2h4Cmb8gg0nuknoGMTkZv3M18uL005TtDvgsTWKB-tYnNEXGsuVzk1P0JaMZmckPtF7f472Olut5A6TnBTewmHQ-Ji6OvxJCeYVQi9bqS5_AqI-VJKKUTEkbpwcr8lMlI"
                        />
                    </div>
                    <div className="relative z-10 max-w-2xl ml-auto lg:mr-24">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[2px] w-12 bg-accent"></div>
                            <span className="font-mono text-accent text-lg">(032)</span>
                        </div>
                        <h2 className="text-6xl font-medium tracking-tight leading-none mb-10">
                            I'm a designer who helps brands find - <span className="text-accent">clarity through smart, clean visuals.</span>
                        </h2>
                        <div className="grid grid-cols-2 gap-12 items-end">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border border-white/20 p-1 rounded-full w-fit pr-6">
                                    <span className="bg-white/10 px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-tighter">Eluna</span>
                                    <span className="font-mono text-[9px] uppercase tracking-tighter opacity-60">Studio</span>
                                </div>
                                <p className="font-mono text-[9px] leading-relaxed opacity-60 uppercase tracking-widest">
                                    The project included homepage, service pages, portfolio showcase, and a custom blog layout—built with a user-first mindset and mobile optimization in focus.
                                </p>
                            </div>
                            <div className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 leading-relaxed text-right">
                                My approach blends<br />
                                creativity with clarity.<br />
                                Good design should feel<br />
                                good—and work even better.
                            </div>
                        </div>
                        <div className="mt-16 flex items-end justify-between border-t border-white/10 pt-8">
                            <div className="w-48 h-24 overflow-hidden relative border border-white/10 rounded-lg bg-black/40">
                                <svg className="w-full h-full stroke-accent/40 fill-none opacity-50" viewBox="0 0 400 200">
                                    <path d="M0,100 C100,20 150,180 200,100 S300,180 400,100" strokeWidth="0.5"></path>
                                    <path d="M0,110 C100,30 150,190 200,110 S300,190 400,110" strokeWidth="0.5"></path>
                                    <path d="M0,120 C100,40 150,200 200,120 S300,200 400,120" strokeWidth="0.5"></path>
                                    <path d="M0,90 C100,10 150,170 200,90 S300,170 400,90" strokeWidth="0.5"></path>
                                </svg>
                            </div>
                            <div className="text-right font-mono space-y-4">
                                <div className="text-[10px] tracking-widest">40.7440°N 73.9873°W</div>
                                <div className="flex justify-end gap-2">
                                    <span className="bg-white text-black px-2 py-0.5 text-[9px] font-bold">INA</span>
                                    <span className="border border-white/20 px-2 py-0.5 text-[9px]">UI/UX DESIGN</span>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <div className="w-16 h-4 bg-[repeating-linear-gradient(90deg,white,white_1px,transparent_1px,transparent_3px)] opacity-50"></div>
                                    <div className="text-[8px] opacity-40">1696 4567</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-auto px-8 pb-4 relative z-0">
                <div className="flex items-end justify-between border-b border-white/10 pb-4">
                    <div className="flex gap-12 font-mono text-[10px] tracking-widest uppercase opacity-40">
                        <span>// SINCE 2018</span>
                        <span>// NEW YORK BASED</span>
                    </div>
                    <div className="text-right">
                        <div className="text-accent text-2xl font-bold mb-1">クリエイティ<br />ブ・マインド</div>
                        <div className="font-mono text-[10px] opacity-60 tracking-widest">40.7440°N 73.9873° W</div>
                    </div>
                </div>
                <div className="relative mt-4">
                    <h1 className="text-[18vw] font-bold leading-[0.8] tracking-tighter text-gradient uppercase flex items-baseline">
                        Yelena<span className="text-[4vw] ml-4 align-top">.</span>
                    </h1>
                    <span className="absolute top-0 right-0 font-mono text-accent text-2xl font-bold">TM</span>
                </div>
            </footer>

            <div className="fixed top-8 right-8 z-50">
                <svg className="text-primary float-anim" fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
