import React from 'react';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import CompanySection from './components/CompanySection';
import BrandShowcase from './components/BrandShowcase';
import AISection from './components/AISection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <CompanySection />
        <BrandShowcase />
        <AISection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;