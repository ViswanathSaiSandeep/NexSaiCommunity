import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCpu,
  FiBookOpen,
  FiZap,
  FiCode,
  FiAward,
  FiLayers,
  FiCheckCircle,
  FiShield,
  FiCreditCard,
  FiRefreshCw,
  FiTrash2,
  FiFileText,
  FiMail,
  FiSun,
  FiMoon,
  FiArrowUp,
  FiArrowLeft,
  FiExternalLink,
  FiSmartphone,
  FiClock,
  FiStar,
  FiTrendingUp
} from 'react-icons/fi';
import communityLogo from '../assets/NexSai Logo.png';
import appLogo from '../assets/nexsai_one_logo.png';
import parisLogo from '../assets/paris_ai_logo.png';
import nexCreditLogo from '../assets/nex_credit_logo.png';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexsai.one';

const coreModules = [
  {
    icon: <FiTrendingUp size={22} />,
    badge: 'Real-Time Feed',
    title: 'AI & Tech News Briefings',
    description:
      'Curated daily coverage of breakthrough AI models, smartphone hardware, mobile OS updates, and emerging technology—complete with instant PARIS AI executive summaries.'
  },
  {
    icon: <FiCpu size={22} />,
    badge: '50+ Curated Tools',
    title: 'AI Tools Directory',
    description:
      'Explore, compare, and bookmark leading AI tools across productivity, coding, design, research, and automation with transparent pricing tiers and direct launch links.'
  },
  {
    icon: <FiCode size={22} />,
    badge: 'Step-by-Step',
    title: 'Hands-On AI Labs',
    description:
      'Practical engineering workshops, workflow blueprints, and copy-ready code implementations that take you from theory to working AI builds.'
  },
  {
    icon: <FiZap size={22} />,
    badge: '1-Tap Copy & Run',
    title: 'Prompt Engineering Vault',
    description:
      'Handcrafted system prompts, reasoning templates, and domain-specific frameworks ready to copy or test directly inside PARIS AI.'
  },
  {
    icon: <FiBookOpen size={22} />,
    badge: 'Interactive Curriculum',
    title: 'NEXSAI Learn',
    description:
      'Structured learning paths covering Transformers, Self-Attention, LLM architectures, and modern AI fundamentals with interactive concept quizzes.'
  },
  {
    icon: <FiAward size={22} />,
    badge: 'Gamified Growth',
    title: 'Daily Quizzes, XP & Leaderboard',
    description:
      'Build your daily learning streak, answer technical challenges to earn XP, and compete on the live NEXSAI One community leaderboard.'
  }
];

const subscriptionPlans = [
  {
    id: 'free',
    tier: 'Free',
    title: 'NEXSAI ONE Free',
    price: '₹0',
    period: '/ month',
    badge: 'STARTER',
    featured: false,
    creditsLabel: '0 Monthly Plan NEX',
    description: 'Essential access to curated tech journalism, AI tools catalog, labs, and learning modules.',
    features: [
      '0 monthly subscription PARIS AI NEX',
      'Access to curated AI News, Tools & Labs',
      'Community Prompt Library & NEXSAI Learn access',
      'Daily Quizzes, Streaks & Leaderboard',
      'Standard in-app banner advertisements'
    ]
  },
  {
    id: 'spark',
    tier: 'Spark',
    title: 'NEXSAI ONE Spark',
    price: '₹49',
    period: '/ month',
    badge: 'POPULAR',
    featured: false,
    creditsLabel: '50 PARIS AI NEX / month',
    description: 'Built for regular learners who want an ad-free experience and monthly PARIS AI assistance.',
    features: [
      '100% Ad-Free Experience across the app',
      '50 PARIS AI NEX allocated every billing month',
      'Everything included in the Free Plan',
      'Full access to AI tool prompts & code snippets',
      'Interactive Lab code & resource downloads'
    ]
  },
  {
    id: 'pro',
    tier: 'Pro',
    title: 'NEXSAI ONE Pro',
    price: '₹99',
    period: '/ month',
    badge: 'BEST VALUE',
    featured: true,
    creditsLabel: '100 PARIS AI NEX / month',
    description: 'Maximum AI power, priority capabilities, exclusive resources, and accelerated XP progression.',
    features: [
      '100% Ad-Free Experience across the app',
      '100 PARIS AI NEX allocated every billing month',
      'Unlimited AI model & agent workflow integrations',
      'Priority Prompt Generator & AI Sandbox',
      'Exclusive AI Cheatsheets & 4K Tech Wallpapers',
      '2x XP Boost on Daily Quizzes & Challenges'
    ]
  }
];

const topupPacks = [
  {
    id: 'pack_50',
    credits: 50,
    price: '₹29',
    perCredit: '₹0.58 / NEX',
    badge: 'STARTER PACK',
    accent: '#64748B'
  },
  {
    id: 'pack_100',
    credits: 100,
    price: '₹69',
    perCredit: '₹0.69 / NEX',
    badge: 'POPULAR',
    accent: '#8B5CF6'
  },
  {
    id: 'pack_250',
    credits: 250,
    price: '₹149',
    perCredit: '₹0.60 / NEX',
    badge: 'SAVE 25%',
    accent: '#3B82F6'
  },
  {
    id: 'pack_500',
    credits: 500,
    price: '₹249',
    perCredit: '₹0.50 / NEX',
    badge: 'BEST VALUE',
    accent: '#10B981'
  }
];

export default function NexsaiOnePage({ theme, setTheme }) {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    document.title = 'NEXSAI One — AI Learning, Tech Briefings & PARIS AI Studio | Official App';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="nexsaione-page-wrapper">
      {/* Top Sticky Header */}
      <header className="nexsaione-header">
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="/" className="nexsaione-brand-link" title="Back to NEXSAI Community Home">
              <img
                src={communityLogo}
                alt="NEXSAI Community Logo"
                style={{ height: '36px', width: '36px', objectFit: 'contain', borderRadius: '8px' }}
              />
              <span className="brand-text">
                NEXSAI <span style={{ color: 'var(--accent-blue)', fontWeight: 500 }}>One</span>
              </span>
            </a>
          </div>

          <nav className="nexsaione-QuickNav">
            <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>
              Features
            </a>
            <a href="#paris-ai" onClick={(e) => scrollToSection(e, 'paris-ai')}>
              PARIS AI & NEX
            </a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')}>
              Pricing
            </a>
            <a href="#billing-policy" onClick={(e) => scrollToSection(e, 'billing-policy')}>
              Billing & Legal
            </a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="/" className="back-home-pill" title="NEXSAI Community Home">
              <FiArrowLeft size={15} />
              <span>Community</span>
            </a>
            <button
              onClick={toggleTheme}
              className="theme-switch-btn"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container" style={{ paddingTop: '3.5rem', paddingBottom: '5rem', maxWidth: '1080px' }}>
        {/* Hero Banner */}
        <section className="nexsaione-hero-card">
          <div className="hero-badge-row">
            <span className="official-app-pill">
              <FiSmartphone size={14} /> Official Android Application · v1.0.0
            </span>
            <span className="launch-offer-pill">
              <FiStar size={14} /> Introductory Launch Offer: 50 Free NEX / Month
            </span>
          </div>

          <div className="hero-main-grid">
            <div className="hero-copy-col">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <img
                  src={appLogo}
                  alt="NEXSAI One App Icon"
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '18px',
                    objectFit: 'cover',
                    boxShadow: '0 8px 24px rgba(0, 123, 255, 0.25)',
                    border: '1px solid var(--m3-outline)'
                  }}
                />
                <div>
                  <h1 className="nexsaione-title">NEXSAI One</h1>
                  <p className="nexsaione-subtitle">All-in-One AI Learning, Tech Intelligence & PARIS AI Studio</p>
                </div>
              </div>

              <p className="hero-description">
                <strong>NEXSAI One</strong> is a comprehensive educational and technology platform built for developers,
                students, creators, and tech enthusiasts. Stay ahead with curated AI & smartphone briefings, explore
                50+ AI tools, build with hands-on labs, master prompt engineering, complete interactive AI courses, and
                supercharge your learning with <strong>PARIS AI</strong>.
              </p>

              <div className="hero-cta-row">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-play"
                >
                  <FiSmartphone size={18} />
                  <span>Get it on Google Play</span>
                  <FiExternalLink size={15} style={{ opacity: 0.8 }} />
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="btn-outline-pricing"
                >
                  <FiCreditCard size={17} />
                  <span>View Plans & NEX Pricing</span>
                </a>
              </div>
            </div>

            {/* Quick Highlights Summary Box */}
            <div className="hero-stats-box">
              <div className="stat-tile">
                <span className="stat-val">6+</span>
                <span className="stat-lbl">Core AI & Tech Modules</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val">PARIS AI</span>
                <span className="stat-lbl">Built-In Multi-Mode Assistant</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val">₹49 / mo</span>
                <span className="stat-lbl">Affordable Spark Plan</span>
              </div>
              <div className="stat-tile">
                <span className="stat-val">Lifetime</span>
                <span className="stat-lbl">Non-Expiring Top-Up NEX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: 6 Core Modules */}
        <section id="features" style={{ marginTop: '4rem' }}>
          <div className="sec-heading-block">
            <span className="sec-eyebrow">
              <FiLayers size={14} /> Complete Product Ecosystem
            </span>
            <h2 className="sec-title">Everything Inside NEXSAI One</h2>
            <p className="sec-desc">
              Designed with a clean, distraction-free interface so you can read, experiment, and master artificial
              intelligence in one unified mobile application.
            </p>
          </div>

          <div className="modules-grid">
            {coreModules.map((mod, idx) => (
              <div key={idx} className="module-card">
                <div className="module-card-top">
                  <div className="module-icon-box">{mod.icon}</div>
                  <span className="module-badge">{mod.badge}</span>
                </div>
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-desc">{mod.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: PARIS AI & NEX Credit System */}
        <section id="paris-ai" style={{ marginTop: '4.5rem' }}>
          <div className="paris-showcase-card">
            <div className="paris-header-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={parisLogo}
                  alt="PARIS AI Logo"
                  style={{ width: '56px', height: '56px', borderRadius: '14px', objectFit: 'contain' }}
                />
                <div>
                  <span className="sec-eyebrow" style={{ marginBottom: '0.25rem' }}>
                    Powered by PARIS AI Studio
                  </span>
                  <h2 className="sec-title" style={{ margin: 0 }}>
                    How PARIS AI & NEX Credits Work
                  </h2>
                </div>
              </div>
              <div className="nex-token-pill">
                <img
                  src={nexCreditLogo}
                  alt="NEX Credit"
                  style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
                <span>1 AI Generation / Summary = 1 NEX</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.98rem', marginBottom: '1.75rem' }}>
              <strong>PARIS AI</strong> is NEXSAI One&apos;s integrated artificial intelligence engine. Whether you want
              an instant summary of a breaking tech article, a simplified explanation of a complex neural architecture,
              or custom prompt execution inside the studio, PARIS AI uses a transparent credit unit called{' '}
              <strong>NEX</strong>.
            </p>

            {/* Two-Part Credit Architecture Explanation */}
            <div className="credit-split-grid">
              <div className="credit-type-card">
                <div className="credit-type-header">
                  <FiClock size={20} style={{ color: 'var(--accent-blue)' }} />
                  <h4>1. Monthly Subscription NEX (30-Day Billing Cycle)</h4>
                </div>
                <p>
                  Included automatically with <strong>Spark (50 NEX / month)</strong> and{' '}
                  <strong>Pro (100 NEX / month)</strong> plans. Monthly credits are tracked with a dedicated usage bar
                  in PARIS AI Studio, are consumed first whenever you use AI features, and reset/expire at the end of
                  each 30-day billing period.
                </p>
              </div>

              <div className="credit-type-card">
                <div className="credit-type-header">
                  <FiZap size={20} style={{ color: '#10B981' }} />
                  <h4>2. Top-Up NEX Packs (Lifetime Validity)</h4>
                </div>
                <p>
                  Need extra credits? Purchase one-time <strong>Top-Up NEX Packs</strong> anytime. Unlike monthly
                  subscription credits, your Top-Up NEX balance <strong>never expires</strong>—it stays in your account
                  for life until you use all of it, and is only consumed after your monthly plan credits are used up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Pricing & Plans (INR) */}
        <section id="pricing" style={{ marginTop: '4.5rem' }}>
          <div className="sec-heading-block">
            <span className="sec-eyebrow">
              <FiCreditCard size={14} /> Transparent INR Pricing
            </span>
            <h2 className="sec-title">Subscription Plans & Top-Up NEX Packs</h2>
            <p className="sec-desc">
              Simple, student- and developer-friendly pricing in Indian Rupees (₹). Upgrade or cancel anytime.
            </p>
          </div>

          {/* Introductory Offer Callout */}
          <div className="intro-offer-banner">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
              <div className="intro-offer-icon">
                <FiStar size={20} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Introductory Launch Offer — Up to 50 Free PARIS AI NEX / Month
                </h4>
                <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  During our initial public release and onboarding phase, users can explore PARIS AI features with a
                  complimentary introductory allowance capped at <strong>50 NEX per month</strong> while full automated
                  in-app billing checkout rolls out across all regions.
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Subscriptions Grid */}
          <h3 className="sub-section-heading">Monthly Subscription Plans</h3>
          <div className="pricing-plans-grid">
            {subscriptionPlans.map((plan) => (
              <div key={plan.id} className={`plan-card ${plan.featured ? 'plan-featured' : ''}`}>
                <div className="plan-top-row">
                  <span className={`plan-badge ${plan.featured ? 'badge-featured' : ''}`}>{plan.badge}</span>
                  <span className="plan-credits-pill">{plan.creditsLabel}</span>
                </div>

                <h4 className="plan-name">{plan.title}</h4>
                <div className="plan-price-row">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>
                <p className="plan-short-desc">{plan.description}</p>

                <ul className="plan-feature-list">
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <FiCheckCircle
                        size={16}
                        style={{ color: plan.featured ? 'var(--accent-blue)' : '#10B981', flexShrink: 0, marginTop: '3px' }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* One-Time Top-Up NEX Packs Grid */}
          <div style={{ marginTop: '3rem' }}>
            <h3 className="sub-section-heading">One-Time Top-Up NEX Packs (Lifetime Validity · Never Expire)</h3>
            <div className="topup-packs-grid">
              {topupPacks.map((pack) => (
                <div key={pack.id} className="topup-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      className="topup-badge"
                      style={{
                        backgroundColor: `${pack.accent}18`,
                        color: pack.accent,
                        borderColor: `${pack.accent}40`
                      }}
                    >
                      {pack.badge}
                    </span>
                    <span className="topup-unit-rate">{pack.perCredit}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '0.85rem 0 0.35rem 0' }}>
                    <img
                      src={nexCreditLogo}
                      alt="NEX"
                      style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                    />
                    <span className="topup-credits-count">{pack.credits} NEX</span>
                  </div>

                  <div className="topup-price">{pack.price}</div>
                  <p className="topup-note">One-time purchase · Valid until fully used</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Billing, Refunds, Cancellation & Legal Compliance */}
        <section id="billing-policy" style={{ marginTop: '4.5rem' }}>
          <div className="sec-heading-block">
            <span className="sec-eyebrow">
              <FiShield size={14} /> Billing, Cancellation & Compliance
            </span>
            <h2 className="sec-title">Payment, Refund & Legal Information</h2>
            <p className="sec-desc">
              Clear and transparent policies governing subscriptions, digital NEX credits, cancellations, and user data
              rights.
            </p>
          </div>

          <div className="policy-cards-grid">
            <div className="policy-info-card">
              <div className="policy-icon-title">
                <FiCreditCard size={20} style={{ color: 'var(--accent-blue)' }} />
                <h4>Payment Processing</h4>
              </div>
              <p>
                All digital subscriptions and Top-Up NEX purchases in NEXSAI One are priced in Indian Rupees (INR) and
                processed securely through authorized payment channels and Google Play Billing. NEXSAI One does not
                store raw credit/debit card numbers or banking credentials on its servers.
              </p>
            </div>

            <div className="policy-info-card">
              <div className="policy-icon-title">
                <FiRefreshCw size={20} style={{ color: 'var(--accent-blue)' }} />
                <h4>Cancellation & Refunds</h4>
              </div>
              <p>
                Users can cancel monthly subscriptions (Spark or Pro) at any time. Upon cancellation, subscription
                benefits and remaining monthly NEX stay active until the end of the current 30-day billing period.
                Refund requests and reversed transactions are handled in accordance with applicable Google Play and
                statutory consumer protection policies.
              </p>
            </div>

            <div className="policy-info-card">
              <div className="policy-icon-title">
                <FiTrash2 size={20} style={{ color: '#EF4444' }} />
                <h4>Account Deletion & Data Control</h4>
              </div>
              <p>
                Users have full control over their personal data and may request permanent account deletion either
                directly inside the app or via our dedicated web portal. Please note that deleting an account does not
                automatically cancel an active Google Play subscription—active subscriptions must be cancelled in Google
                Play.
              </p>
            </div>
          </div>

          {/* Direct Official Legal Links */}
          <div className="legal-links-bar">
            <a href="/nexsaione/privacypolicy" className="legal-doc-card">
              <FiShield size={22} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <div>
                <h5>Privacy Policy</h5>
                <span>How we collect, protect, and handle user data</span>
              </div>
              <FiExternalLink size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
            </a>

            <a href="/nexsaione/terms&conditions" className="legal-doc-card">
              <FiFileText size={22} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <div>
                <h5>Terms & Conditions</h5>
                <span>Complete service agreement, rules & refund policy</span>
              </div>
              <FiExternalLink size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
            </a>

            <a href="/nexsaione/delete-account" className="legal-doc-card">
              <FiTrash2 size={22} style={{ color: '#EF4444', flexShrink: 0 }} />
              <div>
                <h5>Account Deletion</h5>
                <span>Request permanent removal of your account & data</span>
              </div>
              <FiExternalLink size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
            </a>
          </div>

          {/* Developer / Merchant Contact Box */}
          <div className="merchant-contact-card">
            <div>
              <h4 style={{ margin: '0 0 0.35rem 0', fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Developer & Support Contact
              </h4>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Developed & Operated by <strong>Viswanath Sai Sandeep</strong> (NEXSAI Community) · India
              </p>
            </div>
            <a href="mailto:nexsaicommunity@gmail.com" className="contact-email-pill">
              <FiMail size={16} />
              <span>nexsaicommunity@gmail.com</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="nexsaione-footer">
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={appLogo} alt="NEXSAI One Logo" style={{ height: '26px', width: '26px', borderRadius: '6px' }} />
            <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
              NEXSAI One · NEXSAI Community
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.86rem' }}>
            <a href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Home
            </a>
            <a href="/nexsaione/privacypolicy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="/nexsaione/terms&conditions" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Terms & Conditions
            </a>
            <a href="/nexsaione/delete-account" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Account Deletion
            </a>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
            &copy; 2026 NEXSAI One. All Rights Reserved. Founded by{' '}
            <a
              href="https://vsaisandeep.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}
            >
              VISWANATH SAI SANDEEP
            </a>
          </p>
        </div>
      </footer>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
              boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)'
            }}
          >
            <FiArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .nexsaione-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          overflow-x: hidden;
        }

        .nexsaione-header {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 70px;
          display: flex;
          align-items: center;
          background-color: var(--nav-scrolled-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--m3-outline);
        }

        .nexsaione-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-text {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          font-family: 'Outfit', sans-serif;
        }

        .nexsaione-QuickNav {
          display: flex;
          gap: 1.75rem;
          align-items: center;
        }

        .nexsaione-QuickNav a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .nexsaione-QuickNav a:hover {
          color: var(--accent-blue);
        }

        .back-home-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          border-radius: var(--m3-radius-full);
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .back-home-pill:hover {
          border-color: var(--accent-blue);
          color: var(--text-primary);
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
        }

        .nexsaione-hero-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.5rem;
          box-shadow: 0 12px 36px var(--m3-card-shadow);
        }

        .hero-badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }

        .official-app-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.38rem 0.9rem;
          border-radius: var(--m3-radius-full);
          background: rgba(0, 123, 255, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.25);
          color: var(--accent-blue);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .launch-offer-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.38rem 0.9rem;
          border-radius: var(--m3-radius-full);
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10B981;
          font-size: 0.8rem;
          font-weight: 700;
        }

        .hero-main-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .nexsaione-title {
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.8px;
          margin: 0;
          line-height: 1.1;
        }

        .nexsaione-subtitle {
          font-size: 0.98rem;
          color: var(--accent-blue);
          font-weight: 600;
          margin: 0.3rem 0 0 0;
        }

        .hero-description {
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-primary-play {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: var(--m3-radius-full);
          background: var(--accent-blue);
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(0, 123, 255, 0.35);
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .btn-primary-play:hover {
          transform: translateY(-2px);
          background: var(--accent-blue-hover);
        }

        .btn-outline-pricing {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.85rem 1.4rem;
          border-radius: var(--m3-radius-full);
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .btn-outline-pricing:hover {
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }

        .hero-stats-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.9rem;
        }

        .stat-tile {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .stat-val {
          font-size: 1.35rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          color: var(--accent-blue);
        }

        .stat-lbl {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .sec-heading-block {
          margin-bottom: 2rem;
        }

        .sec-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: var(--accent-blue);
          margin-bottom: 0.5rem;
        }

        .sec-title {
          font-size: clamp(1.6rem, 3.2vw, 2.2rem);
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -0.6px;
          margin: 0 0 0.6rem 0;
        }

        .sec-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.65;
          max-width: 680px;
          margin: 0;
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }

        .module-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 1.75rem;
          transition: var(--transition-smooth);
        }

        .module-card:hover {
          border-color: var(--accent-blue);
          transform: translateY(-3px);
          box-shadow: 0 10px 28px var(--m3-card-shadow);
        }

        .module-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.1rem;
        }

        .module-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 123, 255, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .module-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.28rem 0.7rem;
          border-radius: var(--m3-radius-full);
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          color: var(--text-secondary);
        }

        .module-title {
          font-size: 1.15rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          margin: 0 0 0.55rem 0;
        }

        .module-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .paris-showcase-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.25rem;
          box-shadow: 0 10px 30px var(--m3-card-shadow);
        }

        .paris-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .nex-token-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--m3-radius-full);
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .credit-split-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.25rem;
        }

        .credit-type-card {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
        }

        .credit-type-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.65rem;
        }

        .credit-type-header h4 {
          margin: 0;
          font-size: 1.02rem;
          font-weight: 700;
        }

        .credit-type-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .intro-offer-banner {
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--m3-radius-lg);
          padding: 1.35rem 1.5rem;
          margin-bottom: 2.25rem;
        }

        .intro-offer-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.18);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .sub-section-heading {
          font-size: 1.2rem;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          margin: 0 0 1.25rem 0;
        }

        .pricing-plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.25rem;
          align-items: stretch;
        }

        .plan-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .plan-card.plan-featured {
          border-color: var(--accent-blue);
          box-shadow: 0 10px 32px var(--accent-blue-glow);
        }

        .plan-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .plan-badge {
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.28rem 0.7rem;
          border-radius: var(--m3-radius-full);
          background: var(--surface-container-high);
          color: var(--text-secondary);
          letter-spacing: 0.4px;
        }

        .plan-badge.badge-featured {
          background: var(--accent-blue);
          color: #FFFFFF;
        }

        .plan-credits-pill {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--accent-blue);
        }

        .plan-name {
          font-size: 1.25rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          margin: 0 0 0.5rem 0;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.3rem;
          margin-bottom: 0.75rem;
        }

        .plan-price {
          font-size: 2.25rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          color: var(--text-primary);
        }

        .plan-period {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .plan-short-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0 0 1.25rem 0;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid var(--m3-outline);
        }

        .plan-feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .plan-feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        .topup-packs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }

        .topup-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.4rem;
          transition: var(--transition-fast);
        }

        .topup-card:hover {
          border-color: var(--accent-blue);
          transform: translateY(-2px);
        }

        .topup-badge {
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.22rem 0.6rem;
          border-radius: var(--m3-radius-full);
          border: 1px solid;
        }

        .topup-unit-rate {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .topup-credits-count {
          font-size: 1.35rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
        }

        .topup-price {
          font-size: 1.65rem;
          font-weight: 800;
          color: var(--accent-blue);
          font-family: 'Outfit', sans-serif;
          margin-bottom: 0.25rem;
        }

        .topup-note {
          margin: 0;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .policy-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.75rem;
        }

        .policy-info-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.6rem;
        }

        .policy-icon-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.65rem;
        }

        .policy-icon-title h4 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .policy-info-card p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .legal-links-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .legal-doc-card {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 1.15rem 1.35rem;
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          text-decoration: none;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .legal-doc-card:hover {
          border-color: var(--accent-blue);
          transform: translateY(-2px);
        }

        .legal-doc-card h5 {
          margin: 0 0 0.2rem 0;
          font-size: 0.96rem;
          font-weight: 700;
        }

        .legal-doc-card span {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .merchant-contact-card {
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .contact-email-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.15rem;
          border-radius: var(--m3-radius-full);
          background: rgba(0, 123, 255, 0.1);
          border: 1px solid rgba(0, 123, 255, 0.25);
          color: var(--accent-blue);
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
        }

        .nexsaione-footer {
          border-top: 1px solid var(--m3-outline);
          background-color: var(--surface-container-low);
          padding: 2.75rem 1.5rem;
        }

        @media (max-width: 860px) {
          .hero-main-grid {
            grid-template-columns: 1fr;
          }
          .nexsaione-QuickNav {
            display: none;
          }
          .nexsaione-hero-card {
            padding: 1.65rem;
          }
        }
      `}</style>
    </div>
  );
}
