import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import { MenuProvider } from './context/MenuContext';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <MenuProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-background-dark text-slate-100 flex flex-col relative">
          <Navbar />

          {/* Pulsing Accent (Corner Sticky) */}
          <div className="fixed top-24 right-8 z-50 pointer-events-none">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="text-primary"
              fill="none" height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 0L24.5 15.5L40 20L24.5 24.5L20 40L15.5 24.5L0 20L15.5 15.5L20 0Z" fill="currentColor"></path>
            </motion.svg>
          </div>

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="*"
              element={
                <main className="flex-grow">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              }
            />
          </Routes>
          <Footer />
        </div>
      </MenuProvider>
    </Router>
  );
}

export default App;
