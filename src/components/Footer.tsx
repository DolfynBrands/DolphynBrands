import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61578568915484&sk=about', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { icon: Instagram, href: 'https://www.instagram.com/dolfyn_brands/', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/dolfyn-brands/about/?viewAsMember=true', color: 'hover:text-blue-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Journey', path: '/journey' },
    { name: 'Our Brands', path: '/brands' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Our Team', path: '/team' },
    { name: 'Our Principles', path: '/principles' }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    
    // Multiple scroll attempts for better mobile compatibility
    const scrollToTop = () => {
      // Immediate scroll (works on most devices)
      window.scrollTo(0, 0);
      
      // Smooth scroll with fallback
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        // Fallback for older browsers
        window.scrollTo(0, 0);
      }
      
      // Force scroll for mobile devices
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll to ensure navigation is complete
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 150);
  };

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' }
  ];

  const brandRecommendations = [
    { name: 'Viva Earth Organics', category: 'Health and Wellness' },
    { name: 'Viva Bloom', category: 'Garden Supplies' },
    { name: 'My Garden Emporium', category: 'Plants and Sustainability' }
  ];

  return (
    <footer className={'bg-gray-900 border-t border-gray-700'}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <picture>
                  <source srcSet="/company-logo.webp" type="image/webp" />
                  <img src="/company-logo.png" alt="Dolfyn Brands Logo" className="w-8 h-8 object-contain" width={32} height={32} />
                </picture>
              </span>
              <span className="font-bold text-xl text-white">Dolfyn Brands</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming brands through AI-powered strategies and creative excellence. We make brands unforgettable.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-gray-400 ${social.color} transition-colors`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="block text-left text-gray-400 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Brand Recommendations */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Featured Brands</h3>
            <div className="space-y-3">
              {brandRecommendations.map((brand) => (
                <motion.div
                  key={brand.name}
                  className="group"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-gray-400 group-hover:text-white underline transition-colors">
                    {brand.name}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {brand.category}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Get the latest insights on brand transformation and AI innovation.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border-gray-600 rounded-l-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-r-lg hover:shadow-lg transition-shadow"
                >
                  <ArrowRight size={20} />
                </motion.button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-400" />
              <div>
                <div className="text-white font-semibold">Phone</div>
                <div className="text-gray-400">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-purple-400" />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400">contact@dolfynbrands.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-yellow-400" />
              <div>
                <div className="text-white font-semibold">Address</div>
                <div className="text-gray-400">8 The Green, #22847, Dover,<br />DE 19901, USA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              © 2024 Dolfyn Brands. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;