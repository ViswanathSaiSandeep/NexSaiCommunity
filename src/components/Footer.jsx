import { FaTelegramPlane, FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../assets/NexSai Logo.png';

export default function Footer() {
  const socialLinks = [
    { name: 'YouTube', url: 'https://www.youtube.com/@NEXSAICommunity', icon: <FaYoutube size={18} /> },
    { name: 'Telegram', url: 'https://t.me/nexsaicommunity', icon: <FaTelegramPlane size={18} /> },
    { name: 'Instagram', url: 'https://instagram.com/nexsaicommunity', icon: <FaInstagram size={18} /> },
    { 
      name: 'Threads', 
      url: 'https://threads.net/@nexsaicommunity', 
      icon: (
        <svg viewBox="0 0 960 960" width="18" height="18" fill="currentColor">
          <path d="M404.63 392.13c-11.92-7.93-51.53-35.49-51.53-35.49 33.4-47.88 77.46-66.52 138.36-66.52 43.07 0 79.64 14.52 105.75 42 26.12 27.49 41.02 66.8 44.41 117.07 14.48 6.07 27.85 13.22 39.99 21.4 48.96 33 75.92 82.34 75.92 138.91 0 120.23-98.34 224.67-276.35 224.67-152.84 0-311.63-89.11-311.63-354.45 0-263.83 153.81-353.92 311.2-353.92 72.68 0 243.16 10.76 307.27 222.94l-60.12 15.63C678.33 213.2 574.4 189.14 479.11 189.14c-157.52 0-246.62 96.13-246.62 300.65 0 183.38 99.59 280.8 248.71 280.8 122.68 0 214.15-63.9 214.15-157.44 0-63.66-53.37-94.14-56.1-94.14-10.42 54.62-38.36 146.5-161.01 146.5-71.46 0-133.07-49.47-133.07-114.29 0-92.56 87.61-126.06 156.8-126.06 25.91 0 57.18 1.75 73.46 5.07 0-28.21-23.81-76.49-83.96-76.49-55.15-.01-69.14 17.92-86.84 38.39zm105.8 96.25c-90.13 0-101.79 38.51-101.79 62.7 0 38.86 46.07 51.74 70.65 51.74 45.06 0 91.35-12.52 98.63-107.31-22.85-5.14-39.88-7.13-67.49-7.13z"/>
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
    { name: 'Videos', href: '#videos' },
    { name: 'Founder', href: '#founder' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--m3-outline)', padding: '5rem 0 4rem 0' }}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-cards-grid">
          {/* Brand Info Card */}
          <div className="footer-card brand-card">
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
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
              Where Tech Meets Tomorrow. A community dedicated to AI developments, smartphone innovations, mobile operating systems, and technological literacy.
            </p>
            
            {/* Inline Copyright and Credits (pinned to bottom of Brand Card) */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--m3-outline)', paddingTop: '1.25rem' }}>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                &copy; 2026 NEXSAI Community. All Rights Reserved.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px', marginBottom: 0 }} className="founder-credit">
                Founded by <a href="https://vsaisandeep.netlify.app" target="_blank" rel="noopener noreferrer">VISWANATH SAI SANDEEP</a>
              </p>
            </div>
          </div>

          {/* Quick Links Card */}
          <div className="footer-card links-card">
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

          {/* Socials Link List Card */}
          <div className="footer-card socials-card">
            <h4 className="footer-title">Join The Community</h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Subscribe and engage with us across our official social channels to stay updated.
            </p>
            <div className="social-icon-row" style={{ marginTop: 'auto' }}>
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
      </div>

      <style>{`
        .footer-cards-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr 1.1fr;
          gap: 1.5rem;
          align-items: stretch;
        }

        .footer-card {
          background-color: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: var(--transition-smooth);
          height: 100%;
        }

        .footer-card:hover {
          border-color: var(--m3-outline-variant);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px var(--m3-card-shadow);
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
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-links a::before {
          content: "→";
          font-size: 0.85rem;
          color: var(--accent-blue);
          opacity: 0.7;
          transition: var(--transition-fast);
        }

        .footer-links a:hover {
          color: var(--text-primary);
          padding-left: 4px;
        }

        .footer-links a:hover::before {
          opacity: 1;
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
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: var(--surface-container-low);
          border: 1px solid var(--m3-outline);
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .social-footer-icon:hover {
          background-color: var(--accent-blue-glow);
          color: var(--accent-blue);
          border-color: var(--accent-blue);
          transform: translateY(-3px) scale(1.08);
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
          .footer-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .footer-card {
            padding: 1.75rem;
          }
          .footer-links {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
