import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
const AboutPage = lazy(() => import('./components/AboutPage'));
const BrandShowcase = lazy(() => import('./components/BrandShowcase'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const OurPrinciples = lazy(() => import('./components/OurPrinciples'));
const OurTeam = lazy(() => import('./components/OurTeam'));
const OurJourney = lazy(() => import('./components/OurJourney'));
import Footer from './components/Footer';

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
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;