import React, { useState } from 'react';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import AboutPage from './components/AboutPage';
import BrandShowcase from './components/BrandShowcase';
import ContactSection from './components/ContactSection';
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
      default:
        return (
          <>
            <Hero />
            <MainContent />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <AnimatedBackground />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;