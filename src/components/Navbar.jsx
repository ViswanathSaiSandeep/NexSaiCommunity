import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/NexSai Logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Focus Areas', href: '#focus-areas', id: 'focus-areas' },
    { name: 'Founder', href: '#founder', id: 'founder' },
    { name: 'Blogs', href: '#blogs', id: 'blogs' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur adjustment on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120; // offset navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight + 35;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'auto'
      });
    }
  };

  return (
    <>
      <nav className={`glass-nav ${scrolled ? 'nav-scrolled' : ''}`} style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Brand */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <img 
              src={logo} 
              alt="NEXSAI Logo" 
              style={{ height: '40px', width: '40px', objectFit: 'contain', borderRadius: '8px' }} 
            />
            <span style={{ 
              fontWeight: 800, 
              fontSize: '1.25rem', 
              color: 'var(--text-primary)', 
              letterSpacing: '-0.5px',
              fontFamily: "'Outfit', sans-serif" 
            }}>
              NEXSAI <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>Community</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    color: activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    transition: 'var(--transition-fast)',
                    position: 'relative',
                    padding: '0.5rem 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === link.id ? 'var(--text-primary)' : 'var(--text-secondary)'}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        backgroundColor: 'var(--accent-blue)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Toggle */}
          <button 
            onClick={toggleMenu} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--text-primary)', 
              fontSize: '1.5rem', 
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center'
            }}
            className="mobile-toggle-btn"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-color)',
              zIndex: 99,
              padding: '2rem 1.25rem'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.2rem',
                      display: 'block',
                      padding: '0.5rem 0'
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        .nav-scrolled {
          background: rgba(0, 0, 0, 0.85) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </>
  );
}
