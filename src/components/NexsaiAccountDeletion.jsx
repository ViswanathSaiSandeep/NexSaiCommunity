import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTrash2, 
  FiMail, 
  FiAlertTriangle, 
  FiCheckCircle, 
  FiShield, 
  FiSun, 
  FiMoon, 
  FiArrowUp, 
  FiUser, 
  FiClock, 
  FiCreditCard, 
  FiHardDrive,
  FiSend,
  FiCopy,
  FiCheck
} from 'react-icons/fi';
import logo from '../assets/NexSai Logo.png';

export default function NexsaiAccountDeletion({ theme, setTheme }) {
  const [copied, setCopied] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    document.title = "Request Account Deletion — NEXSAI One | NEXSAI Community";
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nexsaicommunity@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailSubject = encodeURIComponent("NEXSAI One Account Deletion Request");
  const emailBody = encodeURIComponent(
`Hello NEXSAI One Support Team,

I would like to request the permanent deletion of my NEXSAI One account and associated personal data.

Account Information:
- NEXSAI One Username: [Enter your username here]
- Account Email: [Enter your registered email address]

Statement:
I confirm that I am the owner of this account and I request that my NEXSAI One account and its associated personal data be deleted in accordance with the NEXSAI One Deletion Policy.

Thank you.`
  );

  const mailtoLink = `mailto:nexsaicommunity@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div className="deletion-page-wrapper">
      {/* Dynamic Glow Blobs */}
      <div 
        className="glow-blob" 
        style={{ top: '0', left: '10%', opacity: 0.12, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} 
      />
      <div 
        className="glow-blob" 
        style={{ top: '500px', right: '5%', opacity: 0.08, background: 'radial-gradient(circle, #EF4444 0%, transparent 70%)' }} 
      />

      {/* Standalone Header */}
      <header className="deletion-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="deletion-brand-link" title="Return to NEXSAI Community">
            <img 
              src={logo} 
              alt="NEXSAI Community Logo" 
              style={{ height: '36px', width: '36px', objectFit: 'contain', borderRadius: '8px' }} 
            />
            <span className="brand-text">
              NEXSAI <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>Community</span>
            </span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="app-badge">NEXSAI One</span>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark / Light Theme"
              className="theme-switch-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container" style={{ padding: '3rem 1.5rem 5rem 1.5rem', maxWidth: '920px' }}>
        {/* Hero Section */}
        <div className="deletion-hero">
          <div className="hero-tag-badge">
            <FiTrash2 size={14} style={{ color: '#EF4444' }} />
            <span style={{ color: '#EF4444' }}>Account Management & Privacy</span>
          </div>

          <h1 className="deletion-hero-title">
            Request Account Deletion
          </h1>

          <div className="deletion-meta-row">
            <span className="meta-item">
              <strong>Application:</strong> NEXSAI One
            </span>
            <span className="meta-separator">•</span>
            <span className="meta-item">
              <strong>Developer & Operator:</strong> Viswanath Sai Sandeep
            </span>
            <span className="meta-separator">•</span>
            <span className="meta-item">
              <strong>Last Updated:</strong> October 23, 2026
            </span>
          </div>

          {/* Introductory Preamble Card */}
          <div className="preamble-card">
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-primary)', margin: 0 }}>
              If you would like to delete your NEXSAI One account and request deletion of your associated personal data, you can submit a deletion request using the process described below.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="deletion-sections-container">
          {/* Section: How to Request Account Deletion */}
          <section className="deletion-card highlight-card">
            <div className="section-card-header">
              <div className="section-badge-icon" style={{ background: 'rgba(0, 123, 255, 0.1)', color: 'var(--accent-blue)' }}>
                <FiMail size={22} />
              </div>
              <div>
                <h2 className="section-card-title">How to Request Account Deletion</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', margin: 0 }}>
                  Follow these instructions to submit your verification and deletion request.
                </p>
              </div>
            </div>

            <div className="section-card-body">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                To request deletion of your NEXSAI One account, send an email to:
              </p>

              {/* Email Action Box */}
              <div className="email-action-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href={mailtoLink} className="email-address-link">
                    nexsaicommunity@gmail.com
                  </a>
                  <button 
                    onClick={handleCopyEmail} 
                    className="copy-email-btn"
                    title="Copy Email Address"
                  >
                    {copied ? <FiCheck size={14} style={{ color: '#10B981' }} /> : <FiCopy size={14} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a href={mailtoLink} className="launch-email-btn">
                  <FiSend size={15} />
                  <span>Draft Deletion Email</span>
                </a>
              </div>

              <div className="deletion-instruction-box">
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Please send the request from the email address associated with your NEXSAI One account.
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  Include the following information in your request:
                </p>
                <ul className="deletion-checklist">
                  <li>
                    <FiCheckCircle size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }} />
                    <span>Your NEXSAI One username</span>
                  </li>
                  <li>
                    <FiCheckCircle size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }} />
                    <span>The email address associated with your account</span>
                  </li>
                  <li>
                    <FiCheckCircle size={16} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '3px' }} />
                    <span>A clear statement that you want your NEXSAI One account deleted</span>
                  </li>
                </ul>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '0.92rem' }}>
                We may request additional information when reasonably necessary to verify that the request was made by the account owner.
              </p>
            </div>
          </section>

          {/* Section: What Happens After Your Request */}
          <section className="deletion-card">
            <div className="section-card-header">
              <div className="section-badge-icon" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                <FiClock size={22} />
              </div>
              <h2 className="section-card-title">What Happens After Your Request</h2>
            </div>

            <div className="section-card-body">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                After receiving and verifying your request, we will process the account deletion request in accordance with our applicable policies and legal obligations.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Account deletion may result in the removal of information associated with your NEXSAI One account, including account-related data stored in our systems.
              </p>

              <div className="subcard-info">
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem' }}>
                  Some information may need to be retained for a limited period where required for:
                </h4>
                <ul className="deletion-bullet-list">
                  <li>Legal or regulatory obligations</li>
                  <li>Fraud prevention and security</li>
                  <li>Dispute resolution</li>
                  <li>Enforcement of our Terms & Conditions</li>
                  <li>Other legitimate purposes permitted by applicable law</li>
                </ul>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1.25rem', margin: 0, fontSize: '0.94rem' }}>
                Where information is required to be retained, it will be retained only for the period reasonably necessary for the applicable purpose.
              </p>
            </div>
          </section>

          {/* Section: Data That May Be Deleted */}
          <section className="deletion-card">
            <div className="section-card-header">
              <div className="section-badge-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>
                <FiTrash2 size={22} />
              </div>
              <h2 className="section-card-title">Data That May Be Deleted</h2>
            </div>

            <div className="section-card-body">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Depending on the information associated with your account, deletion may include:
              </p>

              <div className="data-tags-grid">
                {[
                  "Display name",
                  "Username",
                  "User ID and account-related information",
                  "Account activity information",
                  "XP and learning progress",
                  "Likes and bookmarks",
                  "Notification-related account information",
                  "Other personal information associated with your NEXSAI One account"
                ].map((item, idx) => (
                  <div key={idx} className="data-tag-item">
                    <FiCheckCircle size={15} style={{ color: '#EF4444', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="local-storage-note">
                <FiHardDrive size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Information stored locally on your device, such as cached content or device-specific settings, may need to be removed from your device separately (for example, by clearing the app cache or uninstalling the app).
                </p>
              </div>
            </div>
          </section>

          {/* Section: Subscriptions and Purchases */}
          <section className="deletion-card warning-card">
            <div className="section-card-header">
              <div className="section-badge-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>
                <FiCreditCard size={22} />
              </div>
              <h2 className="section-card-title">Subscriptions and Purchases</h2>
            </div>

            <div className="section-card-body">
              <div className="deletion-warning-box">
                <FiAlertTriangle size={20} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Deleting your NEXSAI One account does not automatically cancel an active Google Play subscription.
                </p>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                If you have an active <strong>Spark</strong> or <strong>Pro</strong> subscription, you must cancel it separately through your Google Play account to prevent future subscription charges.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                Previous purchases and payment records handled by Google Play may remain subject to Google's applicable policies and legal or financial record-retention requirements.
              </p>
            </div>
          </section>

          {/* Section: Contact */}
          <section className="deletion-card">
            <div className="section-card-header">
              <div className="section-badge-icon" style={{ background: 'rgba(0, 123, 255, 0.1)', color: 'var(--accent-blue)' }}>
                <FiUser size={22} />
              </div>
              <h2 className="section-card-title">Contact</h2>
            </div>

            <div className="section-card-body">
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                For account deletion requests or questions regarding your personal data, contact:
              </p>

              <div className="contact-details-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div className="contact-icon-pill">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Email</div>
                    <a href="mailto:nexsaicommunity@gmail.com" className="contact-link">
                      nexsaicommunity@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="contact-icon-pill">
                    <FiShield size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Application & Developer</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      NEXSAI One — Viswanath Sai Sandeep
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.75rem', textAlign: 'right' }}>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Last Updated: October 23, 2026
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Standalone Minimalist Footer */}
      <footer className="deletion-footer">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logo} alt="NEXSAI Community Logo" style={{ height: '24px', width: '24px', borderRadius: '4px' }} />
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              NEXSAI Community
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
            &copy; 2026 NEXSAI One. All Rights Reserved. Operated by{' '}
            <a href="https://vsaisandeep.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>
              VISWANATH SAI SANDEEP
            </a>
          </p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
            Official Contact: <a href="mailto:nexsaicommunity@gmail.com" style={{ color: 'var(--text-secondary)' }}>nexsaicommunity@gmail.com</a>
          </p>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            title="Scroll to Top"
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-blue)',
              color: '#FFFFFF',
              border: 'none',
              cursor: 'pointer',
              zIndex: 99,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .deletion-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          position: relative;
          overflow-x: hidden;
          font-family: var(--font-sans);
        }

        .deletion-header {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 68px;
          display: flex;
          align-items: center;
          background-color: var(--nav-scrolled-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--m3-outline);
        }

        .deletion-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .deletion-brand-link:hover {
          opacity: 0.85;
        }

        .brand-text {
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          font-family: 'Outfit', sans-serif;
        }

        .app-badge {
          background-color: rgba(0, 123, 255, 0.1);
          color: var(--accent-blue);
          border: 1px solid rgba(0, 123, 255, 0.25);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.35rem 0.85rem;
          border-radius: var(--m3-radius-full);
          letter-spacing: 0.3px;
        }

        .theme-switch-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--m3-outline);
          background-color: var(--surface-container);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .theme-switch-btn:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
          transform: rotate(15deg);
        }

        .deletion-hero {
          margin-bottom: 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          padding: 0.4rem 1rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .deletion-hero-title {
          font-size: clamp(2rem, 4.5vw, 3rem);
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -1px;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .deletion-meta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .meta-separator {
          color: var(--text-muted);
        }

        .preamble-card {
          width: 100%;
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 1.75rem 2rem;
          text-align: left;
          box-shadow: 0 8px 30px var(--m3-card-shadow);
        }

        .deletion-sections-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .deletion-card {
          background-color: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.25rem;
          transition: var(--transition-smooth);
        }

        .deletion-card:hover {
          border-color: var(--m3-outline-variant);
          box-shadow: 0 10px 30px var(--m3-card-shadow);
        }

        .deletion-card.highlight-card {
          border-color: rgba(0, 123, 255, 0.3);
          box-shadow: 0 8px 30px var(--accent-blue-glow);
        }

        .deletion-card.warning-card {
          border-color: rgba(239, 68, 68, 0.25);
        }

        .section-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--m3-outline);
        }

        .section-badge-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .section-card-title {
          font-size: clamp(1.25rem, 2.5vw, 1.55rem);
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          color: var(--text-primary);
          letter-spacing: -0.4px;
          margin: 0;
        }

        .email-action-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }

        .email-address-link {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-decoration: none;
          letter-spacing: -0.2px;
        }

        .email-address-link:hover {
          text-decoration: underline;
        }

        .copy-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          color: var(--text-secondary);
          padding: 0.35rem 0.75rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .copy-email-btn:hover {
          border-color: var(--accent-blue);
          color: var(--text-primary);
        }

        .launch-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-blue);
          color: #FFFFFF;
          padding: 0.65rem 1.25rem;
          border-radius: var(--m3-radius-full);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition-fast);
          box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
        }

        .launch-email-btn:hover {
          background: var(--accent-blue-hover);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.45);
        }

        .deletion-instruction-box {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .deletion-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .deletion-checklist li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
        }

        .subcard-info {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
        }

        .deletion-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .deletion-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .deletion-bullet-list li::before {
          content: "•";
          color: var(--accent-blue);
          font-size: 1.3rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .data-tags-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .data-tag-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          padding: 0.75rem 1rem;
          border-radius: var(--m3-radius-md);
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .local-storage-note {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: var(--m3-radius-md);
          background: var(--surface-container-high);
          border-left: 3px solid var(--accent-blue);
        }

        .deletion-warning-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: var(--m3-radius-md);
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          margin-bottom: 1.25rem;
        }

        .contact-details-box {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-icon-pill {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(0, 123, 255, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-link {
          color: var(--accent-blue);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .deletion-footer {
          border-top: 1px solid var(--m3-outline);
          background-color: var(--surface-container-low);
          padding: 3rem 1.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 640px) {
          .deletion-card {
            padding: 1.5rem;
          }
          .email-action-box {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
}
