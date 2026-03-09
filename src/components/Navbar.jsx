import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMenu } from '../context/MenuContext';

const Navbar = () => {
  const { isMenuOpen: isOpen, setIsOpen, toggleMenu, closeMenu } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '_Home', path: '/home' },
    { name: '_About', path: '/about' },
    { name: '_Services', path: '/services' },
    { name: '_Projects', path: '/projects' },
    { name: '_Team', path: '/team' },
    { name: '_FAQ', path: '/faq' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo/Status Section */}
        <div className="flex flex-col gap-1">
          <Link to="/home" className="text-accent text-xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-primary text-2xl"
              fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" fill="currentColor"></path>
            </motion.svg>
            Lassgana
          </Link>
          <div className="font-mono text-[8px] opacity-40 tracking-widest uppercase hidden md:block">
            (REF. DD_2024) // SYSTEM_STATUS: ACTIVE
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-white/60'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)', color: 'white' }}
              className="px-6 py-1.5 border border-white/20 text-[10px] font-mono uppercase tracking-widest font-black transition-colors rounded-full"
            >
              Connect Node
            </motion.button>
          </Link>

        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
        >
          <span className="material-symbols-outlined text-sm">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`font-mono text-xs uppercase tracking-[0.2em] ${location.pathname === link.path ? 'text-primary' : 'text-white/60'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full bg-primary text-white px-6 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-primary transition-all mt-4">
                INITIATE_CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
