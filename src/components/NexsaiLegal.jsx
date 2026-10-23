import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiShield,
  FiUser,
  FiDatabase,
  FiActivity,
  FiBookmark,
  FiMessageSquare,
  FiCpu,
  FiBell,
  FiSmartphone,
  FiHardDrive,
  FiTag,
  FiCreditCard,
  FiCloud,
  FiLayers,
  FiExternalLink,
  FiClock,
  FiTrash2,
  FiSliders,
  FiHeart,
  FiRefreshCw,
  FiMail,
  FiCheckCircle,
  FiSun,
  FiMoon,
  FiArrowUp,
  FiSearch,
  FiXCircle,
  FiInfo,
  FiAlertTriangle
} from 'react-icons/fi';
import logo from '../assets/NexSai Logo.png';

export default function NexsaiLegal({ theme, setTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    document.title = "NEXSAI One Privacy Policy | NEXSAI Community";
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
      id: "sec-1",
      num: "1",
      title: "Information We Collect",
      icon: <FiDatabase size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We collect and process information necessary to provide and improve NEXSAI One.
          </p>

          <div className="policy-subcard">
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              1.1 Account Information
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              When you create or access a NEXSAI One account, we may collect and store:
            </p>
            <ul className="policy-bullet-list">
              <li>Your name</li>
              <li>Email address</li>
              <li>NEXSAI One user ID</li>
              <li>Username</li>
              <li>A normalized version of your username used to manage account functionality</li>
              <li>Account creation information</li>
              <li>Last active information</li>
            </ul>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--m3-outline)' }}>
              <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                You may sign in using:
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <span className="policy-chip">Google Sign-In</span>
                <span className="policy-chip">Email and password</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Authentication and password management are handled through <strong>Firebase Authentication</strong>. We do not store your account password in our own Firestore database.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                You can change your name and username within the application. Your email address cannot currently be changed through the application.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "sec-2",
      num: "2",
      title: "Profile and Public Information",
      icon: <FiUser size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One currently does not provide a public profile-picture feature.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Certain information may be displayed to other NEXSAI One users through features such as the leaderboard.
          </p>

          <div className="policy-subcard">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              The leaderboard may display:
            </h4>
            <ul className="policy-bullet-list" style={{ marginBottom: '1rem' }}>
              <li>Your name</li>
              <li>Your username</li>
              <li>Your XP points</li>
            </ul>
            <div className="policy-highlight-note" style={{ borderColor: 'var(--accent-blue)' }}>
              <FiShield style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                Your email address and internal user ID are <strong>not</strong> publicly displayed through the leaderboard.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "sec-3",
      num: "3",
      title: "App Usage and Progress Information",
      icon: <FiActivity size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            To provide features such as progress tracking and the leaderboard, NEXSAI One may store information associated with your account, including:
          </p>
          <div className="policy-pill-grid">
            {[
              "Articles read",
              "Labs completed",
              "Tools tested",
              "XP points",
              "Streak information",
              "Membership/subscription information",
              "AI credit balance",
              "Relevant account activity timestamps"
            ].map((item, idx) => (
              <div key={idx} className="policy-pill-item">
                <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginTop: '1.25rem', margin: 0 }}>
            NEXSAI One does not currently maintain a detailed server-side history of every article, tool, lesson, or prompt that you have viewed.
          </p>
        </>
      )
    },
    {
      id: "sec-4",
      num: "4",
      title: "Bookmarks and Likes",
      icon: <FiBookmark size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One allows users to bookmark content and like certain content.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            <div className="policy-subcard">
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Bookmarks
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Bookmarks are associated with your NEXSAI One account and are stored in Firebase. Your bookmarks are private and are not intended to be visible to other users.
              </p>
            </div>
            <div className="policy-subcard">
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Likes
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                Likes are currently available for News and Learn content. When you like content, information associated with the like may be stored in Firebase, including information necessary to associate the interaction with your account and the relevant content.
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      id: "sec-5",
      num: "5",
      title: "Feedback and Suggestions",
      icon: <FiMessageSquare size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One allows users to submit feedback and suggestions through the application.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Information submitted through the feedback or suggestion feature is stored in Firebase Firestore and can be viewed by the NEXSAI One administrator through an administrative dashboard.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Feedback may be associated with your account so that we can understand and respond to the submission appropriately.
          </p>
          <div className="policy-highlight-note" style={{ borderColor: 'rgba(255, 180, 0, 0.4)' }}>
            <FiInfo style={{ color: '#FFB800', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Please avoid including sensitive personal information in feedback unless it is necessary for your request.
            </p>
          </div>
        </>
      )
    },
    {
      id: "sec-6",
      num: "6",
      title: "AI Features and Google Gemini",
      icon: <FiCpu size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One provides AI-powered features using the Google Gemini API.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              When you use an AI-powered feature, NEXSAI One sends:
            </h4>
            <ul className="policy-bullet-list" style={{ marginBottom: '1rem' }}>
              <li>The prompt or request you provide</li>
              <li>Context necessary to generate the requested response</li>
            </ul>
            <div className="policy-highlight-note" style={{ borderColor: 'var(--accent-blue)' }}>
              <FiShield style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                NEXSAI One does <strong>not</strong> intentionally send your name, email address, NEXSAI One user ID, or other account-identifying information to Gemini as part of the AI request.
              </p>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            AI features may be used for various supported functions, including AI assistance, summaries, explanations, and other AI-powered tasks available within the application.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              AI Conversation History
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              NEXSAI One does not store your AI prompts or AI conversation history in our Firebase database or other NEXSAI One server-side storage.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              Conversation information may be temporarily stored in the application's local device cache to provide the conversation experience.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              This locally cached information may be removed when the application cache is cleared or according to the application's local data management behavior.
            </p>
          </div>

          <div className="policy-subcard">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              AI Accuracy
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
              AI-generated responses may be inaccurate, incomplete, outdated, or unsuitable for a particular situation.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              You should independently verify important information before relying on AI-generated content, particularly for decisions involving financial, legal, medical, educational, technical, or other important matters.
            </p>
          </div>
        </>
      )
    },
    {
      id: "sec-7",
      num: "7",
      title: "Notifications",
      icon: <FiBell size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One uses Firebase Cloud Messaging (FCM) to deliver notifications.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            An FCM/device notification token may be stored in Firebase to enable notification delivery.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              Notifications may include:
            </h4>
            <div className="policy-pill-grid">
              {[
                "New News content",
                "New Tools",
                "New Labs",
                "New Learn content",
                "New Prompts",
                "Announcements",
                "Recommendations"
              ].map((item, idx) => (
                <div key={idx} className="policy-pill-item">
                  <FiBell size={14} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            These notifications are generally sent to eligible users rather than being based on individual user activity.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You can control available notification preferences through the notification settings within NEXSAI One.
          </p>
        </>
      )
    },
    {
      id: "sec-8",
      num: "8",
      title: "Device and Network Information",
      icon: <FiSmartphone size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            NEXSAI One does not intentionally collect or use your precise or approximate location.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            NEXSAI One does not intentionally collect or use your IP address as user profile information.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            The application may check network connectivity or network-related information to determine whether an internet connection is available and to support application functionality.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              NEXSAI One currently does not request access to:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem' }}>
              {[
                "Camera",
                "Microphone",
                "Contacts",
                "Phone calls",
                "SMS",
                "Location",
                "Photos or media",
                "Files"
              ].map((perm, idx) => (
                <div key={idx} className="permission-chip denied">
                  <FiXCircle size={15} style={{ color: '#EF4444' }} />
                  <span>{perm}</span>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            The application may request permission to send notifications.
          </p>
        </>
      )
    },
    {
      id: "sec-9",
      num: "9",
      title: "Local Device Storage",
      icon: <FiHardDrive size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Some information is stored locally on your device to provide the application experience.
          </p>
          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              This may include:
            </h4>
            <ul className="policy-bullet-list">
              <li>Login/session state</li>
              <li>Theme preferences</li>
              <li>Application settings</li>
              <li>Temporarily cached AI conversation information</li>
            </ul>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Your login session may remain active until you explicitly log out.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Bookmarks and likes are stored in Firebase rather than being treated as device-only data.
          </p>
        </>
      )
    },
    {
      id: "sec-10",
      num: "10",
      title: "Advertising",
      icon: <FiTag size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One uses Google AdMob to display interstitial advertisements to users of the free version of the application.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Advertising services may process certain information according to Google's applicable policies and the configuration of the advertising service.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Paid subscription tiers are intended to provide an ad-free experience.
          </p>
          <div className="policy-highlight-note" style={{ borderColor: 'var(--accent-blue)', marginBottom: '1rem' }}>
            <FiShield style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              NEXSAI One does not currently use Firebase Analytics for behavioral analytics or event tracking.
            </p>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Advertising consent and personalization settings may depend on the user's region, applicable requirements, and the configuration of Google advertising services.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            For more information about how Google handles information for its advertising services, users should review Google's applicable privacy documentation.
          </p>
        </>
      )
    },
    {
      id: "sec-11",
      num: "11",
      title: "Subscriptions and In-App Purchases",
      icon: <FiCreditCard size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One may offer digital subscriptions and in-app purchases through Google Play Billing.
          </p>

          <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Current planned subscription options include:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {/* Spark Tier */}
            <div className="policy-tier-card">
              <span className="tier-badge">Spark</span>
              <div className="tier-price">₹49 <span className="tier-period">per month</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> 50 NEX per billing period</li>
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> Ad-free experience</li>
              </ul>
            </div>

            {/* Pro Tier */}
            <div className="policy-tier-card featured">
              <span className="tier-badge popular">Pro</span>
              <div className="tier-price">₹99 <span className="tier-period">per month</span></div>
              <ul className="tier-features">
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> 100 NEX per billing period</li>
                <li><FiCheckCircle size={14} style={{ color: 'var(--accent-blue)' }} /> Ad-free experience</li>
              </ul>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            NEXSAI One may also offer additional AI credit top-ups.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            The availability, pricing, features, and terms of products may change over time. The price and applicable terms displayed through Google Play at the time of purchase will apply.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Subscription Credits
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Credits included with a Spark or Pro subscription are associated with the applicable subscription billing period.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Unused subscription-included credits remain available during the current billing period and expire when that billing period ends.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Cancelling a subscription does not immediately remove subscription-included credits. They remain usable until the end of the current billing period.
            </p>
          </div>

          <div className="policy-subcard" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Purchased Top-Up Credits
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Additional purchased top-up credits do not expire solely because a subscription period ends and remain available until they are used, subject to applicable account and service terms.
            </p>
          </div>

          <div className="policy-subcard" style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Subscription Management
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Subscriptions can be managed or cancelled through the user's Google Play account.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Deleting a NEXSAI One account does not automatically cancel an active Google Play subscription. Users should cancel an active subscription through Google Play separately.
            </p>
          </div>

          <div className="policy-subcard">
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              Payments and Refunds
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Payments for NEXSAI One digital products are processed through Google Play Billing.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              NEXSAI One does not directly handle the user's payment card or other payment credentials used by Google Play.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Refund requests are handled according to Google's applicable Google Play refund policies and procedures.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Google Play may provide us with information necessary to confirm purchases, subscriptions, entitlements, and related transaction status.
            </p>
          </div>
        </>
      )
    },
    {
      id: "sec-12",
      num: "12",
      title: "Firebase Services",
      icon: <FiCloud size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One uses Google Firebase to provide core application functionality.
          </p>

          <div className="policy-subcard" style={{ marginBottom: '1.25rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
              Firebase services may include:
            </h4>
            <ul className="policy-bullet-list">
              <li>Firebase Authentication</li>
              <li>Firebase Firestore</li>
              <li>Firebase Cloud Messaging</li>
              <li>Firebase Storage infrastructure where applicable</li>
            </ul>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Firebase Authentication is used to manage user authentication.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Firestore is used to store application and account-related information such as user profiles, progress, credits, subscription information, bookmarks, likes, and feedback.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            Firebase Cloud Messaging is used to deliver notifications.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Firebase Storage is currently available as part of the application's Firebase environment but is not currently used for user-uploaded files.
          </p>

          <div className="policy-highlight-note" style={{ borderColor: 'var(--accent-blue)', marginBottom: '1rem' }}>
            <FiCloud style={{ color: 'var(--accent-blue)', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Our primary Firebase data location is configured in <strong>Mumbai, India (asia-south1)</strong>.
            </p>
          </div>

          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Firebase services are operated by Google and may process information in accordance with Google's applicable policies and service terms.
          </p>
        </>
      )
    },
    {
      id: "sec-13",
      num: "13",
      title: "Third-Party Services",
      icon: <FiLayers size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            NEXSAI One uses third-party services to provide application functionality. These currently include:
          </p>
          <div className="policy-pill-grid" style={{ marginBottom: '1.25rem' }}>
            <div className="policy-pill-item">
              <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <span><strong>Google Firebase</strong> — authentication, database, notifications, and related application infrastructure</span>
            </div>
            <div className="policy-pill-item">
              <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <span><strong>Google Gemini API</strong> — AI processing</span>
            </div>
            <div className="policy-pill-item">
              <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <span><strong>Google AdMob</strong> — advertising</span>
            </div>
            <div className="policy-pill-item">
              <FiCheckCircle size={15} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
              <span><strong>Google Play Billing</strong> — subscriptions and in-app purchases</span>
            </div>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
            These third-party services may process information according to their own privacy policies and applicable terms.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            We recommend reviewing the relevant Google privacy documentation for additional information about Google's processing practices.
          </p>
        </>
      )
    },
    {
      id: "sec-14",
      num: "14",
      title: "External Websites and Links",
      icon: <FiExternalLink size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One may contain links to third-party websites or services.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            When you follow an external link, you may leave NEXSAI One and interact with a service operated by another organization.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not control the privacy practices, security, content, or policies of third-party websites.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You should review the privacy policy and terms of any third-party website or service you choose to access.
          </p>
        </>
      )
    },
    {
      id: "sec-15",
      num: "15",
      title: "Data Security",
      icon: <FiShield size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            We take reasonable measures to protect information handled by NEXSAI One. NEXSAI One uses:
          </p>
          <ul className="policy-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Firebase Authentication for account authentication</li>
            <li>Firebase Security Rules to restrict access to Firebase resources</li>
            <li>Standard secure communication provided by the services used by the application</li>
          </ul>
          <div className="policy-highlight-note" style={{ borderColor: 'rgba(255, 180, 0, 0.4)', marginBottom: '1rem' }}>
            <FiAlertTriangle style={{ color: '#FFB800', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              However, no internet-connected application or storage system can be guaranteed to be completely secure.
            </p>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You should use a strong password and protect access to your Google account and NEXSAI One account.
          </p>
        </>
      )
    },
    {
      id: "sec-16",
      num: "16",
      title: "Data Retention",
      icon: <FiClock size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We retain information for as long as reasonably necessary to provide NEXSAI One's services, maintain user accounts, provide requested functionality, process subscriptions and transactions, prevent abuse, resolve disputes, comply with legal obligations, and for other legitimate operational purposes.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not currently have a fixed automatic deletion period for all categories of user data.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            Retention practices may be updated as the application and its data-management systems develop.
          </p>
        </>
      )
    },
    {
      id: "sec-17",
      num: "17",
      title: "Account and Data Deletion",
      icon: <FiTrash2 size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not currently provide an automated in-app account deletion feature.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            If you want your NEXSAI One account and associated personal information deleted, you may submit a deletion request using the contact information provided below.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We may manually delete or anonymize personal information associated with your account where appropriate.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Certain information may need to be retained where required or permitted by applicable law, for legitimate business purposes, to maintain transaction records, prevent fraud or abuse, resolve disputes, or comply with legal obligations.
          </p>
          <div className="policy-highlight-note" style={{ borderColor: '#EF4444' }}>
            <FiInfo style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} size={18} />
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <strong>Important:</strong> Deleting your NEXSAI One account does not automatically cancel an active Google Play subscription. You must separately cancel the subscription through Google Play.
            </p>
          </div>
        </>
      )
    },
    {
      id: "sec-18",
      num: "18",
      title: "User Choices and Controls",
      icon: <FiSliders size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Depending on the feature, you may have control over certain information and settings. You can:
          </p>
          <ul className="policy-bullet-list" style={{ marginBottom: '1.25rem' }}>
            <li>Change your name</li>
            <li>Change your username</li>
            <li>Manage notification preferences</li>
            <li>Log out of your account</li>
            <li>Manage or cancel subscriptions through Google Play</li>
            <li>Request deletion of your account and associated personal information</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You cannot currently change your account email address through NEXSAI One.
          </p>
        </>
      )
    },
    {
      id: "sec-19",
      num: "19",
      title: "Children's Privacy",
      icon: <FiHeart size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One is an educational and technology-focused application intended for a general audience.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            NEXSAI One does not intentionally target children as its primary audience and does not knowingly request unnecessary personal information from children.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            If you believe that a child has provided personal information to NEXSAI One in circumstances where such collection was not appropriate, please contact us so that we can review the situation and take appropriate action.
          </p>
        </>
      )
    },
    {
      id: "sec-20",
      num: "20",
      title: "Changes to This Privacy Policy",
      icon: <FiRefreshCw size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            We may update this Privacy Policy from time to time as NEXSAI One's features, services, technologies, or legal requirements change.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            When we make changes, we will update the Last Updated date at the top of this Privacy Policy.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            For significant changes, we may provide additional notice through the application or other appropriate communication methods.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            You should periodically review this Privacy Policy to remain informed about how your information is handled.
          </p>
        </>
      )
    },
    {
      id: "sec-21",
      num: "21",
      title: "Contact Us",
      icon: <FiMail size={20} />,
      content: (
        <>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If you have questions about this Privacy Policy, want to request deletion of your account or personal information, or have privacy-related concerns, you can contact us at:
          </p>

          <div className="policy-contact-box">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
              <div className="contact-icon-wrapper">
                <FiMail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email</div>
                <a href="mailto:nexsaicommunity@gmail.com" className="policy-link-highlight" style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                  nexsaicommunity@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="contact-icon-wrapper">
                <FiUser size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Developer/Operator</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Viswanath Sai Sandeep
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "sec-22",
      num: "22",
      title: "Summary",
      icon: <FiCheckCircle size={20} />,
      content: (
        <>
          <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            In short:
          </p>
          <div className="policy-summary-grid">
            {[
              "We collect account information needed to provide NEXSAI One.",
              "Firebase is used for authentication, data storage, and notifications.",
              "Your AI prompts are sent to Google Gemini when you use AI features.",
              "We do not store your AI prompts or conversation history on our servers.",
              "Temporary AI conversation information may be stored locally on your device.",
              "Free users may receive interstitial advertisements through Google AdMob.",
              "Google Play handles subscriptions and in-app purchases.",
              "Your name, username, and XP may appear on the NEXSAI One leaderboard.",
              "Bookmarks and likes are stored with your account in Firebase.",
              "You can request account/data deletion by contacting us.",
              "An active Google Play subscription must be cancelled separately through Google Play.",
              "We do not intentionally collect your location.",
              "We do not currently use Firebase Analytics for behavioral tracking."
            ].map((point, idx) => (
              <div key={idx} className="summary-point-card">
                <div className="summary-point-bullet">
                  <FiCheckCircle size={16} />
                </div>
                <span style={{ fontSize: '0.94rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  {point}
                </span>
              </div>
            ))}
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
    <div className="privacy-page-wrapper">
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
      <header className="privacy-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className="privacy-brand-link" title="Return to NEXSAI Community">
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
        <div className="privacy-hero">
          <div className="hero-tag-badge">
            <FiShield size={14} />
            <span>Official Legal Document</span>
          </div>

          <h1 className="privacy-hero-title">
            Privacy Policy
          </h1>

          <div className="privacy-meta-row">
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
              <strong>NEXSAI One</strong> is developed and operated by <strong>Viswanath Sai Sandeep</strong>.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
              This Privacy Policy explains how NEXSAI One collects, uses, stores, processes, and protects information when you use the NEXSAI One mobile application and related services.
            </p>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              By using NEXSAI One, you acknowledge the practices described in this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Search & Quick Filter Bar */}
        <div className="search-filter-box">
          <div className="search-input-wrapper">
            <FiSearch size={18} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search sections (e.g., Information, Gemini, AdMob, Subscriptions, Deletion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="privacy-search-input"
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
                className="policy-section-card"
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
      <footer className="privacy-footer">
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
        .privacy-page-wrapper {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          position: relative;
          overflow-x: hidden;
          font-family: var(--font-sans);
        }

        .privacy-header {
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

        .privacy-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .privacy-brand-link:hover {
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

        .privacy-hero {
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

        .privacy-hero-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          letter-spacing: -1px;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        .privacy-meta-row {
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

        .privacy-search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-family: inherit;
        }

        .privacy-search-input::placeholder {
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

        .policy-section-card {
          background-color: var(--surface-container);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-xl);
          padding: 2.25rem;
          transition: var(--transition-smooth);
        }

        .policy-section-card:hover {
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

        .policy-subcard {
          background-color: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          margin-top: 1rem;
        }

        .policy-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .policy-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .policy-bullet-list li::before {
          content: "•";
          color: var(--accent-blue);
          font-size: 1.3rem;
          line-height: 1;
          flex-shrink: 0;
        }

        .policy-chip {
          background: rgba(0, 123, 255, 0.08);
          border: 1px solid rgba(0, 123, 255, 0.2);
          color: var(--accent-blue);
          padding: 0.35rem 0.8rem;
          border-radius: var(--m3-radius-full);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .policy-highlight-note {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.9rem 1.15rem;
          border-radius: var(--m3-radius-md);
          background: var(--surface-container);
          border-left: 3px solid;
          margin-top: 0.75rem;
        }

        .policy-pill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.75rem;
        }

        .policy-pill-item {
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

        .permission-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 0.85rem;
          border-radius: var(--m3-radius-md);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .permission-chip.denied {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: var(--text-primary);
        }

        .policy-tier-card {
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-lg);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          position: relative;
        }

        .policy-tier-card.featured {
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

        .policy-contact-box {
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

        .policy-link-highlight {
          color: var(--accent-blue);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .policy-link-highlight:hover {
          color: var(--accent-blue-hover);
          text-decoration: underline;
        }

        .policy-summary-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .summary-point-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: var(--surface-container-high);
          border: 1px solid var(--m3-outline);
          border-radius: var(--m3-radius-md);
          padding: 0.85rem 1.15rem;
          transition: var(--transition-fast);
        }

        .summary-point-card:hover {
          border-color: var(--accent-blue);
          transform: translateX(4px);
        }

        .summary-point-bullet {
          color: var(--accent-blue);
          margin-top: 2px;
          flex-shrink: 0;
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

        .privacy-footer {
          border-top: 1px solid var(--m3-outline);
          background-color: var(--surface-container-low);
          padding: 3rem 1.5rem;
          margin-top: 4rem;
        }

        @media (max-width: 640px) {
          .policy-section-card {
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
