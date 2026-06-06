import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import logo from '../assets/NexSai Logo.png';

export default function Navbar({ theme, setTheme }) {
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
      const navbarHeight = 72;
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
      <nav className={`glass-nav ${scrolled ? 'nav-scrolled' : ''}`} style={{ height: '72px', display: 'flex', alignItems: 'center' }}>
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

          {/* Controls Container (Theme Toggle + Mobile Menu Button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <button 
              onClick={toggleMenu} 
              style={{ 
                background: 'none', 
                border: 'none', 
                color: 'var(--text-primary)', 
                cursor: 'pointer',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                padding: 0
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <motion.line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  animate={isOpen ? { x1: 5, y1: 5, x2: 19, y2: 19 } : { x1: 3, y1: 6, x2: 21, y2: 6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  animate={isOpen ? { x1: 5, y1: 19, x2: 19, y2: 5 } : { x1: 3, y1: 18, x2: 21, y2: 18 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: scrolled ? 'calc(0.75rem + 76px)' : 'calc(1.25rem + 76px)',
              left: scrolled ? '0.75rem' : '1.25rem',
              right: scrolled ? '0.75rem' : '1.25rem',
              background: theme === 'dark' 
                ? 'linear-gradient(135deg, rgba(6, 8, 12, 0.96) 0%, rgba(10, 25, 50, 0.96) 100%)' 
                : 'linear-gradient(135deg, rgba(243, 245, 249, 0.96) 0%, rgba(215, 230, 250, 0.96) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid var(--m3-outline-variant)',
              borderRadius: 'var(--m3-radius-xl)',
              zIndex: 99,
              padding: '1.25rem',
              boxShadow: '0 12px 40px var(--m3-card-shadow)',
              transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), left 0.4s cubic-bezier(0.16, 1, 0.3, 1), right 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      color: activeSection === link.id ? '#FFFFFF' : 'var(--text-primary)',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      display: 'block',
                      padding: '0.75rem 1.25rem',
                      borderRadius: 'var(--m3-radius-full)',
                      background: activeSection === link.id 
                        ? 'linear-gradient(90deg, var(--accent-blue) 0%, var(--accent-blue-hover) 100%)' 
                        : 'transparent',
                      boxShadow: activeSection === link.id 
                        ? '0 4px 12px var(--accent-blue-glow)' 
                        : 'none',
                      transition: 'all 0.3s ease'
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
          background: var(--nav-scrolled-bg) !important;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          border-color: var(--m3-outline) !important;
        }
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--surface-container-low);
          border: 1px solid var(--m3-outline);
          color: var(--text-primary);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .theme-toggle-btn:hover {
          background-color: var(--surface-container-high);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          transform: scale(1.05);
        }
        .theme-toggle-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}
