import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Brands', key: 'brands' },
    { name: 'Our Team', key: 'team' },
    { name: 'Partner Up', key: 'contact' },
  ];

  const handleNavClick = (pageKey: string) => {
    setCurrentPage(pageKey);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'w-11/12 md:w-3/4' : 'w-11/12 md:w-5/6'
      }`}
    >
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl px-4 py-2 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img src="/company-logo.png" alt="Dolfyn Brands Logo" className="w-20 h-20 object-contain" />
            <span className="text-gray-900 font-bold text-2xl">Dolfyn Brands</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`transition-colors relative ${
                  currentPage === item.key 
                    ? 'text-gray-900 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                {currentPage === item.key && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={16} />
              <span className="text-sm">+1 (234) 567-890</span>
            </motion.a>
            <motion.a
                              href="mailto:contact@dolfynbrands.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={16} />
                              <span className="text-sm">contact@dolfynbrands.com</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="pt-4 pb-2">
            {navItems.map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.key 
                    ? 'text-gray-900 font-semibold' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;