import { motion } from 'framer-motion';
import { FiExternalLink, FiCompass, FiCode, FiBookOpen } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

export default function Founder() {
  const handlePortfolioClick = () => {
    window.open('https://vsaisandeep.netlify.app', '_blank', 'noopener,noreferrer');
  };

  const badges = [
    { text: 'Founder & Lead', icon: <FiCompass size={13} /> },
    { text: 'CSE AI & DS Student', icon: <FiCode size={13} /> },
    { text: 'Tech Content Creator', icon: <FiBookOpen size={13} /> }
  ];

  return (
    <section id="founder" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div className="glow-blob" style={{ right: '5%', top: '20%', opacity: 0.08, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)' }} />
      <div className="glow-blob" style={{ left: '10%', bottom: '10%', opacity: 0.06, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">About The Founder</h2>
          <p className="section-subtitle">
            The visionary mind behind NEXSAI Community, combining computer science with consumer technology.
          </p>
        </div>

        {/* Re-designed Founder Showcase Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="m3-card founder-showcase-card"
          style={{ padding: '3.5rem', maxWidth: '980px', margin: '0 auto', display: 'block' }}
        >
          {/* Grid Layout inside the card */}
          <div className="founder-grid-layout">
            
            {/* Left: Beautiful Photo Container */}
            <div className="avatar-side">
              <div className="image-frame-container">
                <div className="outer-glow-layer" />
                <div className="inner-border-layer" />
                <img 
                  src={profileImg} 
                  alt="VISWANATH SAI SANDEEP - Founder of NEXSAI Community" 
                  className="founder-img"
                />
              </div>
            </div>

            {/* Right: Detailed Biography Info */}
            <div className="content-side">
              {/* Badges Row */}
              <div className="badge-row">
                {badges.map((badge, idx) => (
                  <span key={idx} className="bio-badge">
                    {badge.icon} {badge.text}
                  </span>
                ))}
              </div>

              {/* Title & Sub */}
              <h3 className="founder-heading">VISWANATH SAI SANDEEP</h3>
              <p className="founder-role">Founder, NEXSAI Community</p>
              
              {/* Divider */}
              <div className="bio-divider" />

              {/* Bio Paragraphs */}
              <p className="founder-bio-text">
                I am a Computer Science Engineering student specializing in Artificial Intelligence and Data Science. 
                My passion lies at the intersection of software engineering, artificial intelligence algorithms, 
                and mobile technology ecosystems.
              </p>
              <p className="founder-bio-text">
                NEXSAI Community represents the culmination of this passion—a community built for technophiles 
                seeking clarity, updates, and deep analytical discussions on upcoming technologies, Xiaomi's HyperOS, 
                and the AI revolution.
              </p>

              {/* CTA Button */}
              <div style={{ paddingTop: '1rem' }}>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePortfolioClick}
                  className="btn btn-accent"
                >
                  Visit Portfolio <FiExternalLink size={14} />
                </motion.button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      <style>{`
        .founder-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3.5rem;
          align-items: center;
        }

        .avatar-side {
          display: flex;
          justify-content: center;
        }

        .image-frame-container {
          position: relative;
          width: 280px;
          height: 280px;
        }

        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--m3-radius-xl); /* 28px corners */
          position: relative;
          z-index: 3;
        }

        .outer-glow-layer {
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          border-radius: 34px;
          background: radial-gradient(circle, var(--accent-blue) 0%, transparent 70%);
          z-index: 1;
          filter: blur(8px);
          opacity: 0.4;
        }

        .inner-border-layer {
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border-radius: 29px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 4;
          pointer-events: none;
        }

        .content-side {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 0.25rem;
        }

        .bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--surface-container-low);
          border: 1px solid var(--m3-outline);
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: var(--m3-radius-full);
        }

        .founder-heading {
          font-size: 2.25rem;
          font-weight: 850;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .founder-role {
          color: var(--accent-blue);
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: -0.1px;
        }

        .bio-divider {
          height: 1px;
          background: linear-gradient(90deg, var(--m3-outline) 0%, transparent 100%);
          width: 100%;
          margin: 0.25rem 0;
        }

        .founder-bio-text {
          font-size: 1.02rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .founder-showcase-card {
            padding: 2rem !important;
          }
          .founder-grid-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .image-frame-container {
            width: 220px;
            height: 220px;
          }
          .content-side {
            align-items: center;
            text-align: center;
          }
          .badge-row {
            justify-content: center;
          }
          .bio-divider {
            background: var(--m3-outline);
          }
        }
      `}</style>
    </section>
  );
}
