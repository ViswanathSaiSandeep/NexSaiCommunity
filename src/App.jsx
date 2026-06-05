import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Founder from './components/Founder';
import SocialLinks from './components/SocialLinks';
import BlogComingSoon from './components/BlogComingSoon';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      if (window.scrollY > 600) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScrollBtnVisibility);
    return () => window.removeEventListener('scroll', handleScrollBtnVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <FocusAreas />
        <Founder />
        <SocialLinks />
        <BlogComingSoon />
        <Contact />
      </main>

      {/* Footer Content */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            title="Scroll to Top"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 123, 255, 0.9)',
              color: 'var(--text-primary)',
              border: 'none',
              cursor: 'pointer',
              zIndex: 99,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .scroll-to-top-btn:hover {
          background-color: var(--accent-blue-hover) !important;
          transform: translateY(-3px) scale(1.05) !important;
        }
        .scroll-to-top-btn:active {
          transform: translateY(0) scale(0.95) !important;
        }
      `}</style>
    </div>
  );
}
