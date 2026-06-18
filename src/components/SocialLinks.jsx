import { motion } from 'framer-motion';
import { FaTelegramPlane, FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

export default function SocialLinks({ theme }) {
  const isLight = theme === 'light';

  const socials = [
    {
      name: 'YouTube',
      handle: '@NEXSAICommunity',
      url: 'https://www.youtube.com/@NEXSAICommunity',
      icon: <FaYoutube size={24} />,
      color: '#ff0000',
      prominent: true,
      description: 'Subscribe to our official YouTube channel for high-quality tech videos, smartphone reviews, AI guides, and technology breakdowns.'
    },
    {
      name: 'Telegram',
      handle: '@nexsaicommunity',
      url: 'https://t.me/nexsaicommunity',
      icon: <FaTelegramPlane size={24} />,
      color: '#0088cc',
      prominent: true,
      description: 'Join our primary community hub for instant announcements, latest tech news, AI updates, and interactive chat.'
    },
    {
      name: 'Instagram',
      handle: '@nexsaicommunity',
      url: 'https://instagram.com/nexsaicommunity',
      icon: <FaInstagram size={24} />,
      color: '#e1306c',
      prominent: true,
      description: 'Follow our official page for daily tech infographics, emerging tech reels, AI tool tips, and community updates.'
    },
    {
      name: 'X (Twitter)',
      handle: '@nexsaicommunity',
      url: 'https://x.com/nexsaicommunity',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: isLight ? '#0f1419' : '#ffffff',
      prominent: false,
      description: 'Tech thoughts, news updates, and retweets.'
    },
    {
      name: 'Threads',
      handle: '@nexsaicommunity',
      url: 'https://threads.net/@nexsaicommunity',
      icon: (
        <svg viewBox="0 0 960 960" width="22" height="22" fill="currentColor">
          <path d="M404.63 392.13c-11.92-7.93-51.53-35.49-51.53-35.49 33.4-47.88 77.46-66.52 138.36-66.52 43.07 0 79.64 14.52 105.75 42 26.12 27.49 41.02 66.8 44.41 117.07 14.48 6.07 27.85 13.22 39.99 21.4 48.96 33 75.92 82.34 75.92 138.91 0 120.23-98.34 224.67-276.35 224.67-152.84 0-311.63-89.11-311.63-354.45 0-263.83 153.81-353.92 311.2-353.92 72.68 0 243.16 10.76 307.27 222.94l-60.12 15.63C678.33 213.2 574.4 189.14 479.11 189.14c-157.52 0-246.62 96.13-246.62 300.65 0 183.38 99.59 280.8 248.71 280.8 122.68 0 214.15-63.9 214.15-157.44 0-63.66-53.37-94.14-56.1-94.14-10.42 54.62-38.36 146.5-161.01 146.5-71.46 0-133.07-49.47-133.07-114.29 0-92.56 87.61-126.06 156.8-126.06 25.91 0 57.18 1.75 73.46 5.07 0-28.21-23.81-76.49-83.96-76.49-55.15-.01-69.14 17.92-86.84 38.39zm105.8 96.25c-90.13 0-101.79 38.51-101.79 62.7 0 38.86 46.07 51.74 70.65 51.74 45.06 0 91.35-12.52 98.63-107.31-22.85-5.14-39.88-7.13-67.49-7.13z"/>
        </svg>
      ),
      color: isLight ? '#000000' : '#E5E5E5',
      prominent: false,
      description: 'Conversational updates and quick reviews.'
    },
    {
      name: 'WhatsApp',
      handle: 'NEXSAI Community',
      url: 'https://whatsapp.com/channel/0029Vb80VTu2Jl8HRTu7ig1K',
      icon: <FaWhatsapp size={22} />,
      color: '#25D366',
      prominent: false,
      description: 'Direct mobile updates via broadcast channel.'
    },
    {
      name: 'Facebook',
      handle: '@nexsaicommunity',
      url: 'https://facebook.com/nexsaicommunity',
      icon: <FaFacebookF size={20} />,
      color: '#1877F2',
      prominent: false,
      description: 'Connecting our community members on FB.'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 16 }
    }
  };

  return (
    <section id="social-links" style={{ overflow: 'hidden' }}>
      {/* Background glow blobbing */}
      <div className="glow-blob" style={{ right: '-5%', top: '20%', opacity: 0.08, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Social Channels</span>
          <h2 className="section-title">Follow NEXSAI</h2>
          <p className="section-subtitle">
            Join the NEXSAI Community across multiple networks. Get the latest tech updates and news direct to your feeds.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="socials-geometric-grid"
        >
          {socials.map((social, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                borderColor: social.color,
                boxShadow: `0 15px 35px -10px ${social.color}25, 0 0 1px 1px ${social.color}20`
              }}
              onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
              className={`m3-card social-cell ${social.name === 'YouTube' ? 'featured-cell' : 'standard-cell'}`}
              style={{
                cursor: 'pointer',
                borderRadius: 'var(--m3-radius-xl)', /* Material 3 28px rounded corners */
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease'
              }}
            >
              {/* Top Row: Icon & Link Indicator */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: `${social.color}10`,
                  color: social.color,
                  border: `1px solid ${social.color}20`
                }}>
                  {social.icon}
                </div>
                <div className="arrow-indicator" style={{ color: 'var(--text-muted)', transition: 'transform 0.2s ease, color 0.2s ease' }}>
                  <FiArrowUpRight size={18} />
                </div>
              </div>

              {/* Middle Row: Name & Handle */}
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {social.name}
                </h3>
                <span style={{ fontSize: '0.85rem', color: social.color, fontWeight: 500, marginTop: '2px', display: 'inline-block' }}>
                  {social.handle}
                </span>
              </div>

              {/* Bottom Row: Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: '1rem' }}>
                {social.description}
              </p>

              {/* Subtle back gradient glow */}
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                right: '-40px',
                width: '100px',
                height: '100px',
                background: `radial-gradient(circle, ${social.color}06 0%, transparent 70%)`,
                borderRadius: '50%',
                pointerEvents: 'none'
              }} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .socials-geometric-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 980px;
          margin: 0 auto;
          width: 100%;
        }

        .social-cell {
          padding: 2.25rem;
        }

        .social-cell span, .social-cell p, .social-cell h3 {
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
        }

        .standard-cell {
          grid-column: span 1;
          min-height: 220px;
        }

        .featured-cell {
          grid-column: span 3;
          min-height: 180px;
        }

        .social-cell:hover .arrow-indicator {
          color: var(--text-primary) !important;
          transform: translate(2px, -2px);
        }

        @media (max-width: 900px) {
          .socials-geometric-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .standard-cell {
            min-height: auto;
          }
          .featured-cell {
            grid-column: span 2;
          }
          .social-cell {
            padding: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .socials-geometric-grid {
            grid-template-columns: 1fr;
          }
          .standard-cell, .featured-cell {
            grid-column: span 1;
          }
          .social-cell {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
