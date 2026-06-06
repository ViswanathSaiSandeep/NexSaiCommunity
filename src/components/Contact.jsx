import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please provide a valid email address.';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success state
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" style={{ position: 'relative' }}>
      {/* Static Glow Blob to avoid scroll lag */}
      <div className="glow-blob" style={{ right: '-5%', bottom: '-5%', opacity: 0.08, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Questions, collaborations, partnerships, or community inquiries are always welcome.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-wrapper">
          {/* Left Column: Direct Info */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="contact-info"
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.3px' }}>Let's Build the Future</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Whether you are a developer, brand seeking collaboration, or reader with feedback, we would love to hear from you. Reach out directly or use our channels.
            </p>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="contact-icon-box">
                  <FiMail size={18} />
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Email Address</span>
                  <a href="mailto:nexsaicommunity@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition-fast)' }} className="email-link">
                    nexsaicommunity@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons for Telegram & Instagram */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '320px' }}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialClick('https://t.me/nexsaicommunity')}
                className="btn btn-accent"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FaTelegramPlane size={16} /> Telegram Channel
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSocialClick('https://instagram.com/nexsaicommunity')}
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FaInstagram size={16} /> Instagram Direct
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="contact-form-container"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="contact-form-card"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  {/* Name field */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name"><FiUser style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder="Your name..." 
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.name && <span className="field-error">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email"><FiMail style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message"><FiMessageSquare style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Message</label>
                    <textarea 
                      id="message"
                      name="message" 
                      placeholder="How can we help you..." 
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    <FiSend /> Send Message
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="contact-form-card"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    gap: '1.5rem',
                    borderColor: 'var(--accent-blue)',
                    boxShadow: '0 10px 40px rgba(0, 123, 255, 0.15)'
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0, 123, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    border: '1px solid rgba(0, 123, 255, 0.15)'
                  }}>
                    <FiCheckCircle size={36} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      Thank you for contacting NEXSAI Community. We have received your inquiry and will respond to you shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-secondary"
                    style={{ marginTop: '1rem', width: '150px' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background-color: var(--surface-container-low);
          border: 1px solid var(--m3-outline);
          color: var(--accent-blue);
        }

        .email-link:hover {
          color: var(--accent-blue) !important;
        }

        .field-error {
          color: #FF3B30;
          font-size: 0.8rem;
          margin-top: 0.25rem;
          padding-left: 2px;
        }

        @media (max-width: 850px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .contact-info button {
            align-self: center !important;
          }
        }
      `}</style>
    </section>
  );
}
