import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiCheckCircle, FiBell } from 'react-icons/fi';

export default function BlogComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Frontend validation succeeded
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="blogs" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background neon light blob */}
      <div className="glow-blob" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', opacity: 0.12 }} />

      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="teaser-card"
          >
            {/* Launching Soon Badge */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div className="launching-badge">
                <span className="pulse-dot" />
                LAUNCHING SOON
              </div>
            </div>

            {/* Headers */}
            <h2 className="coming-soon-title">NEXSAI <span className="title-highlight">Blogs</span></h2>
            <p className="coming-soon-description">
              We are currently building a dedicated technology news and blogging platform. 
              Soon, you will find comprehensive AI guides, latest technology news, software reviews, 
              tech tutorials, and emerging technology analysis.
            </p>

            {/* Email Notification Form */}
            <div className="form-container">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    style={{ position: 'relative' }}
                  >
                    <div className="input-wrapper">
                      <div className="input-field-container" style={{ position: 'relative', flex: 1, width: '100%' }}>
                        <FiMail className="mail-icon" />
                        <input 
                          type="email" 
                          placeholder="Enter your email for updates..." 
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if(error) setError('');
                          }}
                          className="notify-input"
                        />
                      </div>
                      <button type="submit" className="notify-btn">
                        <FiBell /> Notify Me
                      </button>
                    </div>
                    {error && (
                      <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="form-error"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="success-message"
                  >
                    <FiCheckCircle size={28} style={{ color: 'var(--accent-blue)' }} />
                    <div>
                      <h4>You are on the list!</h4>
                      <p>We will notify you the moment the NEXSAI Blog goes live.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Future Features list */}
            <div className="features-preview">
              <div className="feature-item"><span>✦</span> AI Guides & How-Tos</div>
              <div className="feature-item"><span>✦</span> Latest Tech News</div>
              <div className="feature-item"><span>✦</span> AI Insights</div>
              <div className="feature-item"><span>✦</span> Tech Reviews</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .teaser-card {
          background-color: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl); /* M3 XL Rounded corners (28px) */
          padding: 4.5rem 3rem;
          text-align: center;
          position: relative;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .launching-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(0, 123, 255, 0.08);
          border: 1px solid var(--m3-outline-variant);
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          padding: 6px 16px;
          border-radius: var(--m3-radius-full);
          box-shadow: 0 0 20px rgba(0, 123, 255, 0.1);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-blue);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7); }
          50% { transform: scale(1.1); opacity: 1; box-shadow: 0 0 0 8px rgba(0, 123, 255, 0); }
          100% { transform: scale(0.9); opacity: 0.6; box-shadow: 0 0 0 0 rgba(0, 123, 255, 0); }
        }

        .coming-soon-title {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.25rem;
          background: linear-gradient(180deg, #FFFFFF 0%, #B0B0B0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-highlight {
          color: var(--accent-blue);
          -webkit-text-fill-color: var(--accent-blue) !important;
        }

        .coming-soon-description {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 650px;
          margin: 0 auto 3rem auto;
        }

        .form-container {
          max-width: 520px;
          margin: 0 auto;
        }

        .input-wrapper {
          display: flex;
          position: relative;
          background-color: var(--surface-container-low);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg); /* 16px */
          padding: 4px;
          transition: border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                      background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .input-wrapper:focus-within {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.24);
          background-color: var(--surface-container);
        }

        .mail-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          font-size: 1.2rem;
          pointer-events: none;
        }

        .notify-input {
          flex: 1;
          background: none;
          border: none;
          padding: 0.9rem 1rem 0.9rem 3.25rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 1rem;
          outline: none;
        }

        .notify-btn {
          background-color: var(--accent-blue);
          border: none;
          border-radius: var(--m3-radius-md); /* 12px */
          color: var(--text-primary);
          font-weight: 600;
          padding: 0 1.5rem;
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .notify-btn:hover {
          background-color: var(--accent-blue-hover);
        }

        .form-error {
          color: #FF3B30;
          font-size: 0.9rem;
          text-align: left;
          margin-top: 0.5rem;
          padding-left: 0.5rem;
        }

        .success-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          background-color: rgba(0, 123, 255, 0.06);
          border: 1px solid rgba(0, 123, 255, 0.2);
          border-radius: var(--m3-radius-lg);
          padding: 1.25rem;
          text-align: left;
        }

        .success-message h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .success-message p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .features-preview {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--m3-outline);
        }

        .feature-item {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feature-item span {
          color: var(--accent-blue);
        }

        @media (max-width: 768px) {
          .teaser-card {
            padding: 3rem 1.5rem;
          }
          .coming-soon-title {
            font-size: 2.25rem;
          }
          .input-wrapper {
            flex-direction: column;
            background: none;
            border: none;
            padding: 0;
            gap: 1rem;
          }
          .notify-input {
            border: 1px solid var(--m3-outline);
            background-color: var(--surface-container-low);
            border-radius: var(--m3-radius-lg);
            padding: 0.9rem 1rem 0.9rem 3.25rem;
            width: 100%;
            transition: border-color 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                        box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), 
                        background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .notify-input:focus {
            outline: none;
            border-color: var(--accent-blue);
            background-color: var(--surface-container);
            box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.24);
          }
          .notify-btn {
            width: 100%;
            justify-content: center;
            padding: 1rem;
            border-radius: var(--m3-radius-lg);
          }
          .features-preview {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
