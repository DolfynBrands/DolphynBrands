import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import AboutPage from './components/AboutPage';
import BrandShowcase from './components/BrandShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import OurPrinciples from './components/OurPrinciples';
import OurTeam from './components/OurTeam';
import OurJourney from './components/OurJourney';

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
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;