import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFileText, 
  FiUser, 
  FiCheckCircle, 
  FiXCircle, 
  FiAlertTriangle, 
  FiShield, 
  FiCpu, 
  FiCreditCard, 
  FiMail, 
  FiSun, 
  FiMoon, 
  FiArrowUp, 
  FiSearch, 
  FiInfo, 
  FiLayers, 
  FiExternalLink, 
  FiClock, 
  FiTrash2, 
  FiRefreshCw, 
  FiBell, 
  FiGlobe, 
  FiBookOpen, 
  FiAward, 
  FiHelpCircle
} from 'react-icons/fi';
import logo from '../assets/NexSai Logo.png';

export default function NexsaiTerms({ theme, setTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    document.title = "NEXSAI One Terms & Conditions | NEXSAI Community";
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

  const sections = [
    {
      id: "terms-1",
      num: "1",
      title: "About NEXSAI One",
      icon: <FiBookOpen size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One is an educational and technology platform that may provide features including:
          </p>
          <div className="terms-pill-grid">
            {[
              "Technology news",
              "Technology tips and learning content",
              "AI tools and tool information",
              "Lab sessions",
              "Prompts",
              "AI-powered features",
              "Quizzes and learning activities",
              "User progress and XP",
              "Leaderboards",
              "Bookmarks",
              "Content likes",
              "Notifications",
              "Other technology and educational features introduced in future versions"
            ].map((feature, idx) => (
              <div key={idx} className="terms-pill-item">
                <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1.25rem', margin: 0 }}>
            The features available to you may depend on your account type or subscription plan.
          </p>
        </>
      )
    },
    {
      id: "terms-2",
      num: "2",
      title: "Eligibility",
      icon: <FiUser size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not currently impose a specific minimum age requirement.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            However, users are expected to have the legal capacity required under applicable laws to agree to these Terms.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If you are using NEXSAI One on behalf of another person or organization, you represent that you have the authority to accept these Terms on their behalf.
          </p>
        </>
      )
    },
    {
      id: "terms-3",
      num: "3",
      title: "User Accounts",
      icon: <FiShield size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Certain features require you to create an account.
          </p>

          <div className="terms-subcard" style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              You may register using:
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="terms-chip">Google Sign-In</span>
              <span className="terms-chip">Email and password</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              You agree to provide information that is reasonably accurate and to keep your account information up to date.
            </p>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            You are responsible for maintaining the security of your account and for activities performed through your account.
          </p>

          <div className="terms-subcard" style={{ borderColor: 'rgba(239, 68, 68, 0.25)', backgroundColor: 'var(--surface-container-high)' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#EF4444', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FiXCircle size={18} /> You should not:
            </h4>
            <ul className="terms-bullet-list prohibited">
              <li>Share your account credentials with another person.</li>
              <li>Allow another person to use your paid subscription account.</li>
              <li>Attempt to access another user's account.</li>
              <li>Use another person's account without authorization.</li>
            </ul>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1.25rem', margin: 0 }}>
            If you believe your account has been accessed without authorization, you should contact us as soon as reasonably possible.
          </p>
        </>
      )
    },
    {
      id: "terms-4",
      num: "4",
      title: "Account Information",
      icon: <FiUser size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            You may be able to change certain account information, including your name and username.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Your account email address cannot currently be changed through the application.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Authentication and password management are provided through <strong>Firebase Authentication</strong>.
          </p>
        </>
      )
    },
    {
      id: "terms-5",
      num: "5",
      title: "Acceptable Use",
      icon: <FiAlertTriangle size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            You agree to use NEXSAI One only for lawful purposes and in accordance with these Terms.
          </p>

          <div className="terms-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              You must not:
            </h4>
            <div className="prohibited-grid">
              {[
                "Attempt to hack, compromise, or disrupt NEXSAI One.",
                "Attempt to gain unauthorized access to accounts, databases, systems, or services.",
                "Reverse engineer, decompile, disassemble, or modify the application except where such activity cannot legally be restricted.",
                "Circumvent subscription, credit, access, or usage restrictions.",
                "Exploit AI features through abusive, fraudulent, or automated activity.",
                "Manipulate XP, streaks, likes, leaderboard rankings, credits, or other application data.",
                "Use automated scraping, bots, or unauthorized automated systems to extract content or data.",
                "Copy or republish substantial amounts of NEXSAI One's original content without permission.",
                "Misrepresent NEXSAI One content as your own.",
                "Use NEXSAI One for unlawful, fraudulent, abusive, or harmful activities.",
                "Attempt to interfere with another user's use of the service.",
                "Upload malicious, harmful, unlawful, or abusive material through available user-submission features.",
                "Circumvent security controls or exploit vulnerabilities.",
                "Use the service in a manner that could damage, overload, or impair the service or its infrastructure."
              ].map((item, idx) => (
                <div key={idx} className="prohibited-item">
                  <FiXCircle size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We may take reasonable action, including restricting access or terminating an account, if we believe these rules have been violated.
          </p>
        </>
      )
    },
    {
      id: "terms-6",
      num: "6",
      title: "NEXSAI One Content",
      icon: <FiBookOpen size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Unless otherwise stated, News, Learn, Tools, Labs, Prompts, graphics, interface elements, written materials, and other original content created and published by NEXSAI One are developed by or for NEXSAI One.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Users are granted a limited, non-exclusive, non-transferable right to access and use NEXSAI One content for personal and educational purposes.
          </p>

          <div className="terms-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              You may not, without permission:
            </h4>
            <ul className="terms-bullet-list">
              <li>Reproduce entire articles or substantial portions of NEXSAI One content.</li>
              <li>Republish NEXSAI One content on another platform.</li>
              <li>Sell or commercially redistribute NEXSAI One content.</li>
              <li>Systematically scrape or extract NEXSAI One content.</li>
              <li>Present NEXSAI One's original content as your own.</li>
              <li>Create a competing content database using substantial amounts of NEXSAI One content.</li>
            </ul>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You may share links to NEXSAI One content where the relevant feature permits sharing, provided that you do not misrepresent the source.
          </p>
        </>
      )
    },
    {
      id: "terms-7",
      num: "7",
      title: "Intellectual Property",
      icon: <FiShield size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One's name, branding, logo, application design, software, original written content, graphics, and other original materials are intended to remain the property of Viswanath Sai Sandeep and/or NEXSAI One, as applicable.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We may rely on intellectual-property rights available under applicable law to protect our original work.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Nothing in these Terms grants you ownership of NEXSAI One, its software, branding, original content, or other intellectual property.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            You receive only the limited rights necessary to use the service in accordance with these Terms.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            NEXSAI One does not represent that it currently holds registered patents, registered trademarks, or registered copyrights for every element of the service.
          </p>
        </>
      )
    },
    {
      id: "terms-8",
      num: "8",
      title: "AI-Powered Features",
      icon: <FiCpu size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One may provide AI-powered functionality using Google Gemini and other AI technology that may be introduced in the future.
          </p>

          <div className="terms-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              AI features may be used for tasks including:
            </h4>
            <ul className="terms-bullet-list" style={{ marginBottom: '1rem' }}>
              <li>Question answering</li>
              <li>Explanations</li>
              <li>Summaries</li>
              <li>Educational assistance</li>
              <li>Technology-related assistance</li>
              <li>Other AI-powered functionality available within the application</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              AI-generated responses are provided for informational and educational purposes.
            </p>
          </div>

          <div className="terms-subcard">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              AI Accuracy
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.6rem' }}>
              AI systems can produce responses that are:
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="terms-chip danger">Incorrect</span>
              <span className="terms-chip danger">Incomplete</span>
              <span className="terms-chip danger">Outdated</span>
              <span className="terms-chip danger">Misleading</span>
              <span className="terms-chip danger">Inappropriate for a particular situation</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              You are responsible for independently verifying important information before relying on AI-generated output.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              NEXSAI One does not guarantee that AI-generated information is accurate, complete, current, unique, or suitable for a particular purpose.
            </p>
            <div className="terms-highlight-note" style={{ borderColor: 'var(--accent-blue)' }}>
              <FiInfo style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                AI output should not be treated as professional legal, medical, financial, or other specialized professional advice.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "terms-9",
      num: "9",
      title: "AI-Generated Output",
      icon: <FiCpu size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Where permitted by applicable law and the policies of the underlying AI provider, you may use AI-generated output provided to you through NEXSAI One for your personal and educational purposes.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not guarantee that AI-generated output is unique. Similar or substantially similar output may be generated for other users.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            You remain responsible for reviewing AI-generated content before using, publishing, sharing, or relying on it.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You should also ensure that your intended use of AI-generated content complies with applicable law and the terms of any third-party service involved.
          </p>
        </>
      )
    },
    {
      id: "terms-10",
      num: "10",
      title: "Subscriptions",
      icon: <FiCreditCard size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One may provide paid subscription plans through Google Play Billing.
          </p>

          <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Current planned subscription plans include:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {/* Spark Tier */}
            <div className="terms-tier-card">
              <span className="tier-badge">Spark</span>
              <div className="tier-price">₹49<span className="tier-period">/month</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> 50 AI credits per billing period</li>
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> Ad-free experience</li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="terms-tier-card featured">
              <span className="tier-badge popular">Pro</span>
              <div className="tier-price">₹99<span className="tier-period">/month</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> 100 AI credits per billing period</li>
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> Ad-free experience</li>
              </ul>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Subscription prices, features, limits, and benefits may change in the future.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            The specific price and subscription terms displayed through Google Play at the time of purchase will apply.
          </p>
        </>
      )
    },
    {
      id: "terms-11",
      num: "11",
      title: "Free Access",
      icon: <FiUser size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One may provide a free version of the service.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Free users may access available non-AI features and may receive interstitial advertisements.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            The free tier currently does not include subscription-based AI access.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            NEXSAI One may change the features or limitations of the free tier in future versions.
          </p>
        </>
      )
    },
    {
      id: "terms-12",
      num: "12",
      title: "AI Credits",
      icon: <FiAward size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One may use a credit system for AI-powered features.
          </p>

          <div className="terms-subcard" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              Subscription Credits
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Spark and Pro subscriptions include a specified number of AI credits per billing period:
            </p>
            <ul className="terms-bullet-list" style={{ marginBottom: '0.75rem' }}>
              <li><strong>Spark</strong> includes 50 credits per billing period.</li>
              <li><strong>Pro</strong> includes 100 credits per billing period.</li>
            </ul>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Unused subscription-included credits expire when the applicable billing period ends.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              If a subscription is cancelled, subscription-included credits remain usable until the current billing period ends.
            </p>
          </div>

          <div className="terms-subcard" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              Additional Top-Up Credits
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Users may be able to purchase additional AI credits through Google Play Billing.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Purchased top-up credits do not expire solely because a subscription period ends and remain available until they are used, subject to applicable service terms.
            </p>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Credit balances are associated with the user's NEXSAI One account.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We may introduce reasonable limits or restrictions to prevent fraud, abuse, or misuse of the credit system.
          </p>
        </>
      )
    },
    {
      id: "terms-13",
      num: "13",
      title: "Payments",
      icon: <FiCreditCard size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            All digital purchases within NEXSAI One are processed through Google Play Billing.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not directly process or store your payment card details or other payment credentials used by Google Play.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            By making a purchase, you also agree to the applicable Google Play terms and payment policies.
          </p>
        </>
      )
    },
    {
      id: "terms-14",
      num: "14",
      title: "Refunds and Reversed Transactions",
      icon: <FiRefreshCw size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Refunds are handled according to applicable Google Play policies and procedures.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If a purchase is refunded, reversed, cancelled due to a payment issue, or subject to a chargeback, NEXSAI One may revoke or adjust the subscription benefits, credits, or other entitlements associated with that transaction.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            This may include removing credits that were granted as a result of a reversed or refunded purchase.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Nothing in these Terms is intended to restrict any consumer rights or refund rights that cannot legally be excluded.
          </p>
        </>
      )
    },
    {
      id: "terms-15",
      num: "15",
      title: "Subscription Cancellation",
      icon: <FiXCircle size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Users can manage or cancel Spark and Pro subscriptions through their Google Play account.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Uninstalling NEXSAI One does not necessarily cancel a Google Play subscription.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If you cancel a subscription, you may generally continue using applicable subscription benefits until the end of the current billing period, subject to Google Play's applicable subscription rules.
          </p>
        </>
      )
    },
    {
      id: "terms-16",
      num: "16",
      title: "Account Deletion and Subscriptions",
      icon: <FiTrash2 size={20} />,
      content: (
        <>
          <div className="terms-highlight-note" style={{ borderColor: '#EF4444', marginBottom: '1.25rem' }}>
            <FiInfo style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <strong>Important Notice:</strong> Deleting your NEXSAI One account does not automatically cancel an active Google Play subscription.
            </p>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you have an active subscription and wish to stop future subscription charges, you must separately cancel the subscription through Google Play.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If an account is deleted, NEXSAI One may remove or anonymize associated account information in accordance with its Privacy Policy.
          </p>
        </>
      )
    },
    {
      id: "terms-17",
      num: "17",
      title: "Feedback and Suggestions",
      icon: <FiMail size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One allows users to submit feedback, suggestions, and ideas through the application. By submitting feedback or suggestions, you understand that:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>We may review and use the submitted information to improve NEXSAI One.</li>
            <li>We are not required to implement any suggestion.</li>
            <li>We are not required to provide compensation for using a suggestion.</li>
            <li>We may independently develop similar features or ideas.</li>
            <li>You should not submit confidential information that you do not want us to receive.</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            To the extent permitted by law, you grant NEXSAI One a non-exclusive, worldwide, royalty-free right to use, reproduce, modify, and incorporate feedback and suggestions for the purpose of improving or developing NEXSAI One and related services.
          </p>
        </>
      )
    },
    {
      id: "terms-18",
      num: "18",
      title: "Likes, Bookmarks, XP and Leaderboards",
      icon: <FiAward size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One may provide engagement and progress features such as:
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span className="terms-chip">Likes</span>
            <span className="terms-chip">Bookmarks</span>
            <span className="terms-chip">XP</span>
            <span className="terms-chip">Streaks</span>
            <span className="terms-chip">Leaderboards</span>
            <span className="terms-chip">Learning progress</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            These features are provided for application functionality and engagement.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            You must not manipulate or artificially increase XP, likes, streaks, rankings, or other progress metrics.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We may correct, reset, remove, or adjust activity or rankings that we reasonably believe resulted from abuse, technical errors, fraud, or manipulation.
          </p>
        </>
      )
    },
    {
      id: "terms-19",
      num: "19",
      title: "Notifications",
      icon: <FiBell size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One may send notifications about:
          </p>
          <div className="terms-pill-grid" style={{ marginBottom: '1.25rem' }}>
            {["News", "Tools", "Labs", "Learn content", "Prompts", "Announcements", "Recommendations"].map((item, idx) => (
              <div key={idx} className="terms-pill-item">
                <FiBell size={14} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Notification preferences can be controlled through the application where available.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We may modify notification categories or functionality as the application evolves.
          </p>
        </>
      )
    },
    {
      id: "terms-20",
      num: "20",
      title: "Third-Party Services",
      icon: <FiLayers size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One depends on third-party services including Google Firebase, Google Gemini, Google AdMob, and Google Play.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            These services may be changed, interrupted, limited, or discontinued by their respective providers.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One is not responsible for failures, outages, policy changes, or limitations of third-party services that are outside our reasonable control.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Your use of third-party services may also be subject to their own terms and policies.
          </p>
        </>
      )
    },
    {
      id: "terms-21",
      num: "21",
      title: "External Links",
      icon: <FiExternalLink size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One may provide links to third-party websites, applications, tools, products, or services.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            A link or reference does not necessarily constitute an endorsement or guarantee by NEXSAI One.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            We do not control third-party websites or services and are not responsible for their:
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {["Content", "Accuracy", "Availability", "Security", "Privacy practices", "Terms", "Products or services"].map((attr, idx) => (
              <span key={idx} className="terms-chip">{attr}</span>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You access third-party services at your own discretion.
          </p>
        </>
      )
    },
    {
      id: "terms-22",
      num: "22",
      title: "Service Availability and Changes",
      icon: <FiClock size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We may modify, update, suspend, or discontinue NEXSAI One or any part of the service at any time. This may include:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Adding or removing features</li>
            <li>Changing the application design</li>
            <li>Changing content</li>
            <li>Changing AI models or providers</li>
            <li>Changing AI usage limits</li>
            <li>Changing credit allocations</li>
            <li>Changing subscription features</li>
            <li>Changing pricing</li>
            <li>Removing or replacing third-party services</li>
            <li>Performing maintenance</li>
            <li>Temporarily suspending services for technical or security reasons</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Where required by applicable law or Google Play policies, we will provide appropriate notice or follow applicable procedures.
          </p>
        </>
      )
    },
    {
      id: "terms-23",
      num: "23",
      title: "Pricing Changes",
      icon: <FiCreditCard size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We may change subscription pricing in the future.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Price changes will be handled in accordance with applicable Google Play subscription rules.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Existing subscribers may be subject to Google's applicable procedures for price changes and renewal notifications.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Where required, users will receive appropriate notice and may have the opportunity to cancel before a new price takes effect.
          </p>
        </>
      )
    },
    {
      id: "terms-24",
      num: "24",
      title: "Account Suspension or Termination",
      icon: <FiXCircle size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We may temporarily suspend, restrict, or permanently terminate an account if we reasonably believe that the user:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Violated these Terms</li>
            <li>Engaged in fraud or abuse</li>
            <li>Manipulated credits or application data</li>
            <li>Attempted to compromise the service</li>
            <li>Misused AI functionality</li>
            <li>Shared or misused a paid account</li>
            <li>Accessed another user's information without authorization</li>
            <li>Used the service for illegal purposes</li>
            <li>Created a security or operational risk</li>
            <li>Otherwise seriously violated these Terms</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Where appropriate, we may provide notice before taking action.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            However, we may suspend or terminate access without prior notice when reasonably necessary to protect NEXSAI One, its users, its infrastructure, or third-party services.
          </p>
        </>
      )
    },
    {
      id: "terms-25",
      num: "25",
      title: "Effect of Termination",
      icon: <FiTrash2 size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If your account is terminated because of serious violations, fraud, abuse, manipulation, or other prohibited activity, unused credits and subscription benefits may be forfeited to the extent permitted by applicable law and Google Play policies.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you voluntarily stop using NEXSAI One without violating these Terms, valid purchased benefits remain associated with your account subject to the applicable product terms.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If NEXSAI One discontinues a paid service, we will handle affected purchases and subscriptions in accordance with applicable law and Google Play policies.
          </p>
        </>
      )
    },
    {
      id: "terms-26",
      num: "26",
      title: "Disclaimer of Warranties",
      icon: <FiAlertTriangle size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            To the maximum extent permitted by applicable law, NEXSAI One is provided "as is" and "as available." We do not guarantee that:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>NEXSAI One will always be available.</li>
            <li>The application will always be error-free.</li>
            <li>Every feature will function without interruption.</li>
            <li>Content will always be completely accurate or current.</li>
            <li>AI-generated information will always be accurate or complete.</li>
            <li>Third-party services will always be available.</li>
            <li>The service will meet every user's specific requirements.</li>
            <li>Data or content will never be lost due to circumstances outside our reasonable control.</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You use NEXSAI One at your own discretion and risk.
          </p>
        </>
      )
    },
    {
      id: "terms-27",
      num: "27",
      title: "Educational and Informational Disclaimer",
      icon: <FiInfo size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One provides educational and technology-related information.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Information available through NEXSAI One is intended for general informational and educational purposes and should not automatically be treated as professional advice.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            You are responsible for independently verifying information before making important decisions based on it.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            This is particularly important for AI-generated information and information that may change rapidly.
          </p>
        </>
      )
    },
    {
      id: "terms-28",
      num: "28",
      title: "Limitation of Liability",
      icon: <FiShield size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            To the maximum extent permitted by applicable law, Viswanath Sai Sandeep and NEXSAI One will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the service. This may include losses arising from:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Inability to access the service</li>
            <li>Service interruptions</li>
            <li>AI-generated errors</li>
            <li>Reliance on information provided through NEXSAI One</li>
            <li>Third-party service failures</li>
            <li>Loss of data</li>
            <li>Unauthorized access resulting from circumstances outside our reasonable control</li>
            <li>Changes or discontinuation of features</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.
          </p>
        </>
      )
    },
    {
      id: "terms-29",
      num: "29",
      title: "Indemnification",
      icon: <FiShield size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            To the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Viswanath Sai Sandeep and NEXSAI One from claims, losses, liabilities, damages, costs, and reasonable expenses arising from:
          </p>
          <ul className="terms-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Your violation of these Terms</li>
            <li>Your unlawful or unauthorized use of NEXSAI One</li>
            <li>Your misuse of the service</li>
            <li>Your fraudulent or abusive activity</li>
            <li>Your infringement of another person's rights</li>
            <li>Your violation of applicable laws or regulations</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            This obligation applies only to the extent that the relevant claim or loss results from your actions or omissions.
          </p>
        </>
      )
    },
    {
      id: "terms-30",
      num: "30",
      title: "Governing Law",
      icon: <FiGlobe size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            These Terms are governed by and interpreted in accordance with the laws of India, without regard to conflict-of-law principles.
          </p>
          <div className="terms-highlight-note" style={{ borderColor: 'var(--accent-blue)' }}>
            <FiGlobe style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Subject to applicable law, disputes relating to these Terms or NEXSAI One will be subject to the jurisdiction of the appropriate courts in <strong>Tamil Nadu, India</strong>.
            </p>
          </div>
        </>
      )
    },
    {
      id: "terms-31",
      num: "31",
      title: "Dispute Resolution",
      icon: <FiHelpCircle size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you have a dispute, complaint, or concern regarding NEXSAI One, you should first contact us at:
          </p>
          <p style={{ marginBottom: '1rem' }}>
            <a href="mailto:nexsaicommunity@gmail.com" className="terms-link-highlight" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
              nexsaicommunity@gmail.com
            </a>
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We encourage users to give us a reasonable opportunity to understand and resolve the issue in good faith before pursuing formal legal proceedings, where permitted by applicable law.
          </p>
        </>
      )
    },
    {
      id: "terms-32",
      num: "32",
      title: "Changes to These Terms",
      icon: <FiRefreshCw size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We may update these Terms from time to time.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            When changes are made, we will update the Last Updated date at the beginning of this document.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            For significant changes, we may provide additional notice through NEXSAI One or another reasonable communication method where appropriate.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Your continued use of NEXSAI One after updated Terms become effective constitutes acceptance of the revised Terms, to the extent permitted by applicable law.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If you do not agree with updated Terms, you should stop using NEXSAI One.
          </p>
        </>
      )
    },
    {
      id: "terms-33",
      num: "33",
      title: "Severability",
      icon: <FiFileText size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will continue to apply to the extent permitted by law.
          </p>
        </>
      )
    },
    {
      id: "terms-34",
      num: "34",
      title: "Entire Agreement",
      icon: <FiFileText size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            These Terms, together with the NEXSAI One Privacy Policy and any additional terms presented for specific features or purchases, constitute the agreement between you and NEXSAI One regarding your use of the service, except where applicable law requires otherwise.
          </p>
        </>
      )
    },
    {
      id: "terms-35",
      num: "35",
      title: "Contact Us",
      icon: <FiMail size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            For questions, concerns, feedback regarding these Terms, or other legal matters, contact:
          </p>

          <div className="terms-contact-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div className="contact-icon-wrapper">
                <FiMail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</div>
                <a href="mailto:nexsaicommunity@gmail.com" className="terms-link-highlight" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                  nexsaicommunity@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="contact-icon-wrapper">
                <FiUser size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Application & Developer</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
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
        </>
      )
    }
  ];

  const filteredSections = searchQuery.trim() === ''
    ? sections
    : sections.filter(sec => {
        const query = searchQuery.toLowerCase();
        return (
          sec.title.toLowerCase().includes(query) ||
          sec.num.includes(query)
        );
      });

  return (
    <div className="terms-page-wrapper">
      {/* Dynamic Glow Blobs */}
      <div 
        className="glow-blob" 
        style={{ top: '0', left: '10%', opacity: 0.12, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} 
      />
      <div 
        className="glow-blob" 
        style={{ top: '800px', right: '5%', opacity: 0.08, background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)' }} 
      />

      {/* Standalone Header */}
      <header className="terms-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="terms-brand-link" title="Return to NEXSAI Community">
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
      <main className="container" style={{ padding: '3rem 1.5rem 5rem 1.5rem', maxWidth: '1020px' }}>
        {/* Hero Section */}
        <div className="terms-hero">
          <div className="hero-tag-badge">
            <FiFileText size={14} />
            <span>Official Legal Agreement</span>
          </div>

          <h1 className="terms-hero-title">
            Terms & Conditions
          </h1>

          <div className="terms-meta-row">
            <span className="meta-item">
              <strong>Application:</strong> NEXSAI One
            </span>
            <span className="meta-separator">•</span>
            <span className="meta-item">
              <strong>Effective Date:</strong> October 23, 2026
            </span>
            <span className="meta-separator">•</span>
            <span className="meta-item">
              <strong>Last Updated:</strong> October 23, 2026
            </span>
          </div>

          {/* Introductory Preamble Card */}
          <div className="preamble-card">
            <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
              Welcome to <strong>NEXSAI One</strong>, an educational and technology-focused application developed and operated by <strong>Viswanath Sai Sandeep</strong> ("we", "us", "our", or "NEXSAI One").
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              These Terms & Conditions ("Terms") govern your access to and use of the NEXSAI One mobile application and related services.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              By creating an account, accessing, or using NEXSAI One, you agree to these Terms. If you do not agree with these Terms, please do not use the service.
            </p>
          </div>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="search-filter-box">
          <div className="search-input-wrapper">
            <FiSearch size={18} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="Search terms (e.g., Subscriptions, Credits, AI, Cancellation, Refunds, Prohibited)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="terms-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <FiXCircle size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Table of Contents Quick Nav */}
        <div className="toc-chips-scroll">
          {sections.map((sec) => (
            <a 
              key={sec.id} 
              href={`#${sec.id}`}
              className="toc-chip"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(sec.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              <span className="toc-chip-num">{sec.num}</span>
              <span className="toc-chip-title">{sec.title}</span>
            </a>
          ))}
        </div>

        {/* Section List */}
        <div className="sections-container">
          {filteredSections.length === 0 ? (
            <div className="no-results-card">
              <FiSearch size={32} style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }} />
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                No sections matched "<strong>{searchQuery}</strong>"
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
              >
                Reset Search Filter
              </button>
            </div>
          ) : (
            filteredSections.map((sec) => (
              <section 
                key={sec.id} 
                id={sec.id} 
                className="terms-section-card"
              >
                <div className="section-card-header">
                  <div className="section-num-badge">
                    {sec.icon}
                    <span>Section {sec.num}</span>
                  </div>
                  <h2 className="section-card-title">
                    {sec.num}. {sec.title}
                  </h2>
                </div>
                <div className="section-card-body">
                  {sec.content}
                </div>
              </section>
            ))
          )}
        </div>
      </main>

      {/* Standalone Minimalist Footer */}
      <footer className="terms-footer">
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
        .terms-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          position: relative;
          overflow-x: hidden;
          font-family: var(--font-sans);
        }

        .terms-header {
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

        .terms-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .terms-brand-link:hover {
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

        .terms-hero {
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
          background: rgba(0, 123, 255, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.2);
          color: var(--accent-blue);
          padding: 0.4rem 1rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .terms-hero-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -1px;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .terms-meta-row {
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

        .search-filter-box {
          margin-bottom: 1.5rem;
        }

        .search-input-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-full);
          padding: 0.75rem 1.25rem;
          transition: var(--transition-fast);
        }

        .search-input-wrapper:focus-within {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 3px var(--accent-blue-glow);
        }

        .terms-search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: inherit;
        }

        .terms-search-input::placeholder {
          color: var(--text-muted);
        }

        .toc-chips-scroll {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 1.25rem;
          margin-bottom: 2rem;
          scrollbar-width: thin;
        }

        .toc-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.9rem;
          background: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-full);
          text-decoration: none;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          white-space: nowrap;
          transition: var(--transition-fast);
        }

        .toc-chip:hover {
          border-color: var(--accent-blue);
          color: var(--text-primary);
          background: var(--surface-container-high);
          transform: translateY(-2px);
        }

        .toc-chip-num {
          color: var(--accent-blue);
          font-weight: 700;
        }

        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .terms-section-card {
          background-color: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.25rem;
          transition: var(--transition-smooth);
        }

        .terms-section-card:hover {
          border-color: var(--m3-outline-variant);
          box-shadow: 0 10px 30px var(--m3-card-shadow);
        }

        .section-card-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--m3-outline);
        }

        .section-num-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-blue);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .section-card-title {
          font-size: clamp(1.3rem, 2.8vw, 1.65rem);
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          color: var(--text-primary);
          letter-spacing: -0.4px;
        }

        .terms-subcard {
          background-color: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .terms-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .terms-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .terms-bullet-list li::before {
          content: "•";
          color: var(--accent-blue);
          font-size: 1.3rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .terms-bullet-list.prohibited li::before {
          content: "✕";
          color: #EF4444;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .prohibited-grid {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .prohibited-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .terms-chip {
          background: rgba(0, 123, 255, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.2);
          color: var(--accent-blue);
          padding: 0.35rem 0.8rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .terms-chip.danger {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.25);
          color: var(--text-primary);
        }

        .terms-highlight-note {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.9rem 1.15rem;
          border-radius: var(--m3-radius-md);
          background: var(--surface-container);
          border-left: 3px solid;
          margin-top: 0.75rem;
        }

        .terms-pill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem;
        }

        .terms-pill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          padding: 0.75rem 1rem;
          border-radius: var(--m3-radius-md);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .terms-tier-card {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          position: relative;
        }

        .terms-tier-card.featured {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 20px var(--accent-blue-glow);
        }

        .tier-badge {
          align-self: flex-start;
          padding: 0.25rem 0.65rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          background: var(--surface-container);
          color: var(--text-secondary);
        }

        .tier-badge.popular {
          background: var(--accent-blue);
          color: #FFFFFF;
        }

        .tier-price {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: 'Outfit', sans-serif;
        }

        .tier-period {
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .tier-features {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .tier-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .terms-contact-box {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(0, 123, 255, 0.1);
          color: var(--accent-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .terms-link-highlight {
          color: var(--accent-blue);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .terms-link-highlight:hover {
          color: var(--accent-blue-hover);
          text-decoration: underline;
        }

        .no-results-card {
          text-align: center;
          padding: 3.5rem 1.5rem;
          background: var(--surface-container);
          border: 1px dashed var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .clear-search-btn {
          margin-top: 1rem;
          background: var(--accent-blue);
          color: #fff;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: var(--m3-radius-full);
          cursor: pointer;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .terms-footer {
          border-top: 1px solid var(--m3-outline);
          background-color: var(--surface-container-low);
          padding: 3rem 1.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 640px) {
          .terms-section-card {
            padding: 1.5rem;
          }
          .preamble-card {
            padding: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
