import { motion } from 'framer-motion';
import { FiSmartphone, FiCpu, FiCompass, FiZap, FiGrid, FiLayers } from 'react-icons/fi';

export default function FocusAreas() {
  const areas = [
    {
      title: 'Artificial Intelligence',
      icon: <FiCpu size={24} />,
      desc: 'Exploring developments in machine learning, deep learning, LLMs, neural engines, and AI applications shaping everyday digital interfaces.'
    },
    {
      title: 'Smartphones & Tech',
      icon: <FiSmartphone size={24} />,
      desc: 'In-depth analyses, hardware specifications, camera advancements, screen technologies, and user experience updates in consumer mobile telephony.'
    },
    {
      title: 'Android Ecosystem',
      icon: <FiLayers size={24} />,
      desc: 'Following custom ROMs, kernels, launchers, system adjustments, developer betas, and open-source operating system improvements.'
    },
    {
      title: 'Xiaomi Coverage',
      icon: <FiZap size={24} />,
      desc: 'Dedicated news on HyperOS, MIUI builds, ecosystem devices, product announcements, global releases, and firmware updates.'
    },
    {
      title: 'Technology News',
      icon: <FiCompass size={24} />,
      desc: 'Tracking updates and shifting paradigms across computing ecosystems, cloud networks, cybersecurity, and global tech brands.'
    },
    {
      title: 'Tech Facts & Trivia',
      icon: <FiGrid size={24} />,
      desc: 'Delivering curated technical insights, histories, computing milestones, hardware records, and smartphone facts for our community.'
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
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 18 }
    }
  };

  return (
    <section id="focus-areas" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Background neon light blob */}
      <div className="glow-blob" style={{ left: '-5%', bottom: '5%', opacity: 0.05, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Interests & Content</span>
          <h2 className="section-title">Focus Areas</h2>
          <p className="section-subtitle">
            We cover a variety of technological topics, catering to developer circles and smartphone enthusiasts.
          </p>
        </div>

        {/* M3 Card Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="card-grid"
        >
          {areas.map((area, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="m3-card"
              style={{ gap: '1.25rem' }}
            >
              {/* Icon Frame */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                backgroundColor: 'rgba(0, 123, 255, 0.06)',
                border: '1px solid rgba(0, 123, 255, 0.12)',
                color: 'var(--accent-blue)'
              }}>
                {area.icon}
              </div>

              {/* Title & Desc */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.2px' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {area.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
