import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import { useRouteMetadata } from '../hooks/useRouteMetadata';
import { preloadLikelyRoutes } from '../utils/routePreloader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const routeMetadata = useRouteMetadata();

  // Preload likely next routes for better performance
  useEffect(() => {
    preloadLikelyRoutes(location.pathname);
  }, [location.pathname]);

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
    </div>
  );
};

export default Layout;