import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import CookieConsent from './CookieConsent';
import { useRouteMetadata } from '../hooks/useRouteMetadata';
import { preloadLikelyRoutes } from '../utils/routePreloader';
import { trackPageView, initializeGTM } from '../utils/ga';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const routeMetadata = useRouteMetadata();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Initialize GTM
  useEffect(() => {
    initializeGTM();
  }, []);

  // Preload likely next routes for better performance
  useEffect(() => {
    preloadLikelyRoutes(location.pathname);
  }, [location.pathname]);

  // Track page views for Google Analytics (only if consent given)
  useEffect(() => {
    if (analyticsEnabled) {
      trackPageView(location.pathname, routeMetadata.title);
    }
  }, [location.pathname, routeMetadata.title, analyticsEnabled]);

  const handleCookieAccept = () => {
    setAnalyticsEnabled(true);
    // Enable analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_accepted',
        consent_type: 'all'
      });
    }
  };

  const handleCookieDecline = () => {
    setAnalyticsEnabled(false);
    // Disable analytics tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'cookie_consent_declined'
      });
    }
  };



  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <SEO
        title={routeMetadata.title}
        description={routeMetadata.description}
        keywords={routeMetadata.keywords}
        ogImage={routeMetadata.ogImage}
        ogType={routeMetadata.ogType}
      />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <CookieConsent
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />
    </div>
  );
};

export default Layout;