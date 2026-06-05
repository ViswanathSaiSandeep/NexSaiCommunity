import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCpu } from 'react-icons/fi';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
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

  return (
    <section id="about" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Static background blur blob */}
      <div className="glow-blob" style={{ right: '-5%', top: '5%', opacity: 0.06, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Brand</span>
          <h2 className="section-title">What is NEXSAI?</h2>
          <p className="section-subtitle">
            NEXSAI Community is an expressive, technology-focused platform sharing insights, updates, and discussions regarding modern tech and future innovations.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}
        >
          {/* Mission Card */}
          <motion.div variants={itemVariants} className="m3-card" style={{ gap: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '52px', 
              height: '52px', 
              borderRadius: '16px', 
              backgroundColor: 'rgba(0, 123, 255, 0.08)', 
              color: 'var(--accent-blue)',
              border: '1px solid rgba(0, 123, 255, 0.15)'
            }}>
              <FiTarget size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '-0.3px' }}>Our Mission</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                To make technology information accessible, engaging, and highly useful for everyone. We aim to break down complex innovations into clear, insightful, and practical knowledge.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={itemVariants} className="m3-card" style={{ gap: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '52px', 
              height: '52px', 
              borderRadius: '16px', 
              backgroundColor: 'rgba(0, 123, 255, 0.08)', 
              color: 'var(--accent-blue)',
              border: '1px solid rgba(0, 123, 255, 0.15)'
            }}>
              <FiEye size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '-0.3px' }}>Our Vision</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                To become a trusted global destination for technology news, hardware discussions, and emerging digital innovations, establishing a community of passionate technophiles.
              </p>
            </div>
          </motion.div>

          {/* Core Philosophy Card */}
          <motion.div variants={itemVariants} className="m3-card" style={{ gap: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '52px', 
              height: '52px', 
              borderRadius: '16px', 
              backgroundColor: 'rgba(0, 123, 255, 0.08)', 
              color: 'var(--accent-blue)',
              border: '1px solid rgba(0, 123, 255, 0.15)'
            }}>
              <FiCpu size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: 700, letterSpacing: '-0.3px' }}>Core Focus</h3>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
                We bridge the gap between users and emerging tech. Our coverage spans across mobile ecosystems, artificial intelligence models, hardware trends, and the future of consumer gadgets.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
