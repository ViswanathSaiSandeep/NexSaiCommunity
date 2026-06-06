import { motion } from 'framer-motion';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';
import logo from '../assets/NexSai Logo.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  const handleCTAClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '140px', 
      paddingBottom: '80px',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'var(--bg-primary)'
    }}>
      {/* Cinematic Moving Background Glow System */}
      <div className="hero-glow-container">
        <div className="hero-glow-blob blob-1" />
        <div className="hero-glow-blob blob-2" />
      </div>
      <div className="hero-grid-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%', maxWidth: '900px' }}
          >
            {/* Expressive Larger Logo Container */}
            <motion.div 
              variants={itemVariants} 
              style={{ marginBottom: '2.5rem', display: 'inline-block' }}
            >
              <img 
                src={logo} 
                alt="NEXSAI Logo" 
                style={{ 
                  width: '160px', 
                  height: '160px', 
                  objectFit: 'contain'
                }} 
              />
            </motion.div>

            {/* Giant Bold Brand Title */}
            <motion.h1 
              variants={itemVariants}
              className="hero-title"
            >
              NEXSAI COMMUNITY
            </motion.h1>

            {/* Minimal Tagline */}
            <motion.h2 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(1.25rem, 3.5vw, 2rem)', 
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Where Tech Meets Tomorrow
            </motion.h2>

            {/* Short Description */}
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
                color: 'var(--text-secondary)',
                marginBottom: '3.5rem',
                lineHeight: 1.65,
                maxWidth: '660px',
                margin: '0 auto 3.5rem auto'
              }}
            >
              NEXSAI Community is a technology-focused platform dedicated to sharing insights, updates, and discussions on AI, smartphones, Android, emerging technologies, and the future of innovation.
            </motion.p>

            {/* CTA Buttons in Pill Form */}
            <motion.div 
              variants={itemVariants}
              style={{ 
                display: 'flex', 
                gap: '1.25rem', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                width: '100%'
              }}
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('https://t.me/nexsaicommunity')}
                className="btn btn-accent"
                style={{ minWidth: '190px' }}
              >
                <FaTelegramPlane size={16} /> Join on Telegram
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCTAClick('https://instagram.com/nexsaicommunity')}
                className="btn btn-secondary"
                style={{ minWidth: '190px' }}
              >
                <FaInstagram size={16} /> Follow on Instagram
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: 80px 80px;
          background-image: 
            linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px);
          mask-image: radial-gradient(circle 50% at 50% 50%, #000 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(circle 50% at 50% 50%, #000 40%, transparent 100%);
          z-index: 1;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
