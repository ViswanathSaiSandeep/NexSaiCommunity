import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import YoutubeShowcase from './components/YoutubeShowcase';
import Founder from './components/Founder';
import SocialLinks from './components/SocialLinks';
import BlogComingSoon from './components/BlogComingSoon';
import Contact from './components/Contact';
import Footer from './components/Footer';

const NexsaiLegal = lazy(() => import('./components/NexsaiLegal'));
const NexsaiTerms = lazy(() => import('./components/NexsaiTerms'));
const NexsaiAccountDeletion = lazy(() => import('./components/NexsaiAccountDeletion'));

const checkIsPrivacyPolicyRoute = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');

  return (
    path === '/nexsaicommunity/nexsaione/privacypolicy' ||
    path === '/nexsaione/privacypolicy' ||
    path === '/privacypolicy' ||
    path === '/privacy-policy' ||
    path.endsWith('/nexsaione/privacypolicy') ||
    path.endsWith('/privacypolicy') ||
    path.endsWith('/privacy-policy') ||
    hash === '#/nexsaicommunity/nexsaione/privacypolicy' ||
    hash === '#/nexsaione/privacypolicy' ||
    hash === '#/privacypolicy' ||
    hash === '#/privacy-policy' ||
    hash.includes('privacypolicy') ||
    hash.includes('privacy-policy')
  );
};

const checkIsTermsRoute = () => {
  if (typeof window === 'undefined') return false;
  const rawPath = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  let decodedPath = rawPath;
  try {
    decodedPath = decodeURIComponent(rawPath);
  } catch {
    // ignore decode error
  }

  const rawHash = window.location.hash.toLowerCase().replace(/\/+$/, '');
  let decodedHash = rawHash;
  try {
    decodedHash = decodeURIComponent(rawHash);
  } catch {
    // ignore decode error
  }

  const isMatch = (str) => {
    return (
      str.includes('terms&conditins') ||
      str.includes('terms&conditions') ||
      str.includes('terms-and-conditions') ||
      str.includes('termsandconditions') ||
      str.endsWith('/nexsaione/terms') ||
      str.endsWith('/terms') ||
      str === '/nexsaione/terms&conditins' ||
      str === '/nexsaione/terms&conditions' ||
      str === '/nexsaicommunity/nexsaione/terms&conditins' ||
      str === '/nexsaicommunity/nexsaione/terms&conditions'
    );
  };

  return isMatch(rawPath) || isMatch(decodedPath) || isMatch(rawHash) || isMatch(decodedHash);
};

const checkIsDeleteAccountRoute = () => {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');

  const isMatch = (str) => {
    return (
      str === '/delete-account' ||
      str === '/deleteaccount' ||
      str.endsWith('/delete-account') ||
      str.endsWith('/deleteaccount') ||
      str.includes('delete-account') ||
      str.includes('deleteaccount')
    );
  };

  return isMatch(path) || isMatch(hash);
};

export default function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isPrivacyPolicy, setIsPrivacyPolicy] = useState(() => checkIsPrivacyPolicyRoute());
  const [isTerms, setIsTerms] = useState(() => checkIsTermsRoute());
  const [isDeleteAccount, setIsDeleteAccount] = useState(() => checkIsDeleteAccountRoute());
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsPrivacyPolicy(checkIsPrivacyPolicyRoute());
      setIsTerms(checkIsTermsRoute());
      setIsDeleteAccount(checkIsDeleteAccountRoute());
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      if (window.scrollY > 600) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScrollBtnVisibility);
    return () => window.removeEventListener('scroll', handleScrollBtnVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isDeleteAccount) {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }} />}>
        <NexsaiAccountDeletion theme={theme} setTheme={setTheme} />
      </Suspense>
    );
  }

  if (isTerms) {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }} />}>
        <NexsaiTerms theme={theme} setTheme={setTheme} />
      </Suspense>
    );
  }

  if (isPrivacyPolicy) {
    return (
      <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }} />}>
        <NexsaiLegal theme={theme} setTheme={setTheme} />
      </Suspense>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation Header */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <FocusAreas />
        <YoutubeShowcase />
        <Founder />
        <SocialLinks theme={theme} />
        <BlogComingSoon />
        <Contact />
      </main>

      {/* Footer Content */}
      <Footer />

      {/* Floating Scroll to Top Button */}
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
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 123, 255, 0.9)',
              color: 'var(--text-primary)',
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
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .scroll-to-top-btn:hover {
          background-color: var(--accent-blue-hover) !important;
          transform: translateY(-3px) scale(1.05) !important;
        }
        .scroll-to-top-btn:active {
          transform: translateY(0) scale(0.95) !important;
        }
      `}</style>
    </div>
  );
}
