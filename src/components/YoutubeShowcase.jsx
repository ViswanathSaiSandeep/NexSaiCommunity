import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function YoutubeShowcase() {
  const channelUrl = 'https://www.youtube.com/@NEXSAICommunity';
  const videoId = '5L3sSBF4BuI';
  const videoTitle = 'NEXSAI Community Video';
  const videoDesc = 'Explore our latest reviews, custom setups, smartphone breakdowns, and technology guides on our official YouTube channel.';

  return (
    <section id="videos" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow blobbing */}
      <div className="glow-blob" style={{ left: '-5%', top: '30%', opacity: 0.08, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)' }} />
      <div className="glow-blob" style={{ right: '-5%', bottom: '10%', opacity: 0.06, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 60%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Official Media</span>
          <h2 className="section-title">Featured Video</h2>
          <p className="section-subtitle">
            Watch our tech guides, hardware reviews, and AI updates direct from our official channel.
          </p>
        </div>

        {/* Video Showcase Layout (Centered, 1 Column) */}
        <div style={{ maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="youtube-player-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                title={videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '680px', margin: '0 auto' }}>
                {videoDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Subscribe Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="youtube-sub-banner"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255, 0, 0, 0.08)', color: '#FF0000', border: '1px solid rgba(255, 0, 0, 0.15)', boxShadow: '0 0 24px rgba(255, 0, 0, 0.15)' }}>
            <FaYoutube size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Subscribe to NEXSAI Tech Channel</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '540px', margin: '0 auto', lineHeight: '1.6' }}>
              Join us on YouTube for daily breakdowns, tutorials, comparisons, and technical discussions. Stay ahead of the technology curve!
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open(channelUrl, '_blank', 'noopener,noreferrer')}
            className="btn btn-accent"
            style={{ backgroundColor: '#FF0000', borderColor: '#FF0000', boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)', minWidth: '180px' }}
          >
            Visit Channel <FiExternalLink size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
