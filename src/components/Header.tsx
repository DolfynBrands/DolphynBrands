import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Mock hooks for a standalone environment. In a real app, you'd use react-router-dom.
const useNavigate = () => (path: string | URL | null | undefined) => {
  // Remove console.log for production
  // console.log(`Navigating to: ${path}`);
  // In a real app, this would change the URL.
  // For this example, we'll just log it.
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate')); // Manually trigger a re-render
};

const useLocation = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { pathname };
};


const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State to manage which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hideTimeout = useRef<number | null>(null);

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

  // Updated navItems structure to use original URLs from the first prompt.
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Brands', 
      path: '/brands', // Main navigation path
      subItems: [
        { name: 'Viva Earth Organics', path: '/vivaearth', hoverBg: 'hover:bg-blue-50' },
        { name: 'Viva Bloom', path: '/vivabloom', hoverBg: 'hover:bg-green-50' },
        // This item has no path and will be disabled.
        { name: 'My Garden Emporium', path: undefined, hoverBg: 'hover:bg-purple-50' },
      ] 
    },
    { 
      name: 'Company', 
      path: '/team', // Main navigation path
      subItems: [
        { name: 'Our Team', path: '/team', hoverBg: 'hover:bg-gray-50' },
        { name: 'Our Principles', path: '/principles', hoverBg: 'hover:bg-gray-50' },
        { name: 'Our Journey', path: '/journey', hoverBg: 'hover:bg-gray-50' },
        { name: 'Careers', path: '/careers', hoverBg: 'hover:bg-gray-50' },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentPage = (path: string | undefined) => {
    if (!path) return false;
    // Check if the current page is the main path or one of its sub-items
    const mainItem = navItems.find(item => item.path === location.pathname || item.subItems?.some(sub => sub.path === location.pathname));
    if (mainItem?.subItems) {
        return mainItem.path === path || mainItem.subItems.some(sub => sub.path === path);
    }
    return location.pathname === path;
  };
  

  // Generic handlers for dropdowns
  const handleMouseEnter = (dropdownName: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur.get()}px)`,
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
            role="button"
            tabIndex={0}
            aria-label="Go to Dolfyn Brands homepage"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleNavClick('/');
              }
            }}
          >
            <div className="flex items-center space-x-3">
              <picture>
                <img src="/company-logo.webp" alt="Dolfyn Brands Logo" className="w-16 h-16 object-contain rounded-full" width={64} height={64} />
              </picture>
              <span className="text-gray-900 font-bold text-xl hidden sm:inline">Dolfyn Brands</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 mr-8">
            {navItems.map((item) => (
              item.subItems ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    onClick={() => item.path && handleNavClick(item.path)}
                    className={`transition-colors relative ${
                        isCurrentPage(item.path) 
                          ? 'text-gray-900 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                    {isCurrentPage(item.path) && !openDropdown && (
                       <motion.div
                         className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                         layoutId="activeTab"
                       />
                    )}
                  </motion.button>
                  <AnimatePresence>
                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50 py-4"
                    >
                      <ul className="space-y-2">
                        {item.subItems.map(subItem => (
                           <li key={subItem.name}>
                             <button
                               className={`w-full text-left px-6 py-2 ${subItem.hoverBg} ${!subItem.path ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900 font-medium'}`}
                               onClick={() => subItem.path && handleNavClick(subItem.path)}
                               disabled={!subItem.path}
                             >
                               {subItem.name}
                             </button>
                           </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  key={item.path}
                  onClick={() => handleNavClick(item.path!)}
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
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <nav className="pt-4 pb-2 border-t border-gray-200 mt-4">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <motion.button
                    onClick={() => item.path && handleNavClick(item.path)}
                    className={`block w-full text-left py-3 px-4 transition-colors text-lg ${
                      isCurrentPage(item.path) 
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                  {item.subItems && (
                     <div className="pl-8 pb-2">
                       {item.subItems.map(subItem => (
                         <motion.button
                           key={subItem.name}
                           onClick={() => subItem.path && handleNavClick(subItem.path)}
                           disabled={!subItem.path}
                           className={`block w-full text-left py-2 transition-colors ${
                            isCurrentPage(subItem.path) ? 'text-blue-500 font-medium' : 'text-gray-600 hover:text-gray-900'
                           } ${!subItem.path ? 'text-gray-400 cursor-not-allowed' : ''}`}
                           whileHover={subItem.path ? { x: 5 } : {}}
                         >
                           {subItem.name}
                         </motion.button>
                       ))}
                     </div>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

