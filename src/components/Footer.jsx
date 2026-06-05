import { FaTelegramPlane, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/NexSai Logo.png';

export default function Footer() {
  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/nexsaicommunity', icon: <FaTelegramPlane size={18} /> },
    { name: 'Instagram', url: 'https://instagram.com/nexsaicommunity', icon: <FaInstagram size={18} /> },
    { 
      name: 'Threads', 
      url: 'https://threads.net/@nexsaicommunity', 
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.36 12.3c-.29.41-.67.75-1.14 1.01-.47.26-1 .39-1.59.39-1.12 0-2.03-.37-2.71-1.1-.68-.74-1.02-1.74-1.02-3.01v-.18c0-1.28.34-2.28 1.02-3 .68-.73 1.58-1.1 2.71-1.1.84 0 1.54.21 2.11.63.57.42.92 1.02 1.05 1.79l-1.39.26c-.08-.43-.27-.77-.57-1.01-.3-.24-.69-.36-1.17-.36-.66 0-1.19.23-1.58.7-.39.47-.59 1.15-.59 2.05v.19c0 .91.2 1.59.59 2.06.39.47.92.71 1.58.71.43 0 .79-.11 1.08-.34.29-.23.47-.56.54-.98h-1.62v-1.19h2.92v3.31h-1.09l-.15-.71z" />
        </svg>
      )
    },
    { 
      name: 'X', 
      url: 'https://x.com/nexsaicommunity', 
      icon: (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    { name: 'Facebook', url: 'https://facebook.com/nexsaicommunity', icon: <FaFacebookF size={18} /> },
    { name: 'WhatsApp', url: 'https://whatsapp.com/channel/0029Vb80VTu2Jl8HRTu7ig1K', icon: <FaWhatsapp size={18} /> }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Focus Areas', href: '#focus-areas' },
    { name: 'Founder', href: '#founder' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer style={{ backgroundColor: '#020202', borderTop: '1px solid var(--border-color)', padding: '5rem 0 3rem 0' }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src={logo} 
                alt="NEXSAI Logo" 
                style={{ height: '38px', width: '38px', objectFit: 'contain', borderRadius: '8px' }} 
              />
              <span style={{ 
                fontWeight: 800, 
                fontSize: '1.2rem', 
                color: 'var(--text-primary)', 
                letterSpacing: '-0.5px',
                fontFamily: "'Outfit', sans-serif" 
              }}>
                NEXSAI <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>Community</span>
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Where Tech Meets Tomorrow. A community dedicated to AI developments, smartphone innovations, mobile operating systems, and technological literacy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Link List */}
          <div className="footer-socials">
            <h4 className="footer-title">Join The Community</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Subscribe and engage with us across our platforms.
            </p>
            <div className="social-icon-row">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={social.name}
                  className="social-footer-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Credits & Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2026 NEXSAI Community. All Rights Reserved.
          </p>
          <p className="founder-credit">
            Founded by <a href="https://vsaisandeep.netlify.app" target="_blank" rel="noopener noreferrer">VISWANATH SAI SANDEEP</a>
          </p>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          max-width: 380px;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          letter-spacing: -0.2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem 1.5rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--text-primary);
          transform: translateX(2px);
          display: inline-block;
        }

        .social-icon-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .social-footer-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .social-footer-icon:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--accent-blue);
          border-color: rgba(0, 123, 255, 0.3);
          transform: translateY(-2px);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .founder-credit a {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .founder-credit a:hover {
          color: var(--accent-blue);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-brand, .footer-nav, .footer-socials {
            max-width: 100%;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
