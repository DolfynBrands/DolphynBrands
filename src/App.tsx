import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Lazy load components with higher priority for likely next pages
const ContactSection = lazy(() => import('./components/ContactSection'));
const AboutPage = lazy(() => import('./components/AboutPage'));
const BrandShowcase = lazy(() => import('./components/BrandShowcase'));
const OurPrinciples = lazy(() => import('./components/OurPrinciples'));
const OurTeam = lazy(() => import('./components/OurTeam'));
const OurJourney = lazy(() => import('./components/OurJourney'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'brands':
        return <BrandShowcase />;
      case 'contact':
        return <ContactSection />;
      case 'principles':
        return <OurPrinciples />;
      case 'team':
        return <OurTeam />;
      case 'journey':
        return <OurJourney />;
      default:
        return (
            <>
              <Hero setCurrentPage={setCurrentPage} />
              <MainContent />
            </>
          );
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div></div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;