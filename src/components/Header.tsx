import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const brandsHideTimeout = React.useRef<number | null>(null);
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
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Brands', path: '/brands' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  // Helper functions for mouse events with delay
  const handleBrandsMouseEnter = () => {
    if (brandsHideTimeout.current) clearTimeout(brandsHideTimeout.current);
    setIsBrandsOpen(true);
  };
  const handleBrandsMouseLeave = () => {
    brandsHideTimeout.current = window.setTimeout(() => setIsBrandsOpen(false), 150);
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
      <div className={'bg-white/90 border-gray-200 backdrop-blur-md rounded-3xl px-4 py-2 shadow-lg border'}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <div className="flex items-center space-x-3">
              <picture>
                <source srcSet="/company-logo.webp" type="image/webp" />
                <img src="/company-logo.png" alt="Dolfyn Brands Logo" className="w-16 h-16 object-contain" width={64} height={64} />
              </picture>
              <span className="text-gray-900 font-bold text-xl">Dolfyn Brands</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              item.name === 'Brands' ? (
                <div
                  key="brands"
                  className="relative"
                  onMouseEnter={handleBrandsMouseEnter}
                  onMouseLeave={handleBrandsMouseLeave}
                >
                  <motion.button
                    className={"transition-colors relative text-gray-600 hover:text-gray-900"}
                    whileHover={{ scale: 1.05 }}
                  >
                    Brands
                  </motion.button>
                  {isBrandsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50 py-4"
                    >
                      <ul className="space-y-2">
                        <li>
                          <button
                            className="w-full text-left px-6 py-2 hover:bg-blue-50 text-gray-900 font-medium"
                            onClick={() => handleNavClick('/vivaearth')}
                          >
                            Viva Earth Organics
                          </button>
                        </li>
                        <li>
                          <button
                            className="w-full text-left px-6 py-2 hover:bg-green-50 text-gray-900 font-medium"
                            onClick={() => handleNavClick('/vivabloom')}
                          >
                            Viva Bloom
                          </button>
                        </li>
                        <li>
                          <button
                            className="w-full text-left px-6 py-2 hover:bg-purple-50 text-gray-900 font-medium"
                            onClick={() => {}} // Placeholder, update with real path if available
                          >
                            My Garden Emporium
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`transition-colors relative ${
                    isCurrentPage(item.path) 
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {isCurrentPage(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              )
            ))}
          </nav>

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
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left py-2 transition-colors ${
                  isCurrentPage(item.path) 
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