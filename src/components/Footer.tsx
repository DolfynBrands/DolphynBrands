import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Send,
  Globe,
  Clock,
  Shield,
  Users,
  Award,
  Sparkles
} from 'lucide-react';

// Structured data for organization and contact information
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dolfyn Brands",
  "description": "Full-stack brand accelerator helping consumer brands scale globally through AI-powered strategies and creative excellence",
  "url": "https://dolfynbrands.com",
  "logo": "https://dolfynbrands.com/company-logo.webp",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61578568915484",
    "https://www.instagram.com/dolfyn_brands/",
    "https://www.linkedin.com/company/dolfyn-brands/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-248-3005",
    "contactType": "Customer Service",
    "email": "contact@dolfynbrands.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8 The Green, #22847",
    "addressLocality": "Dover",
    "addressRegion": "DE",
    "postalCode": "19901",
    "addressCountry": "US"
  },
  "foundingDate": "2023",
  "numberOfEmployees": "10-50",
  "industry": "Brand Development and Marketing"
};

// Enhanced interfaces
interface SocialLink {
  icon: React.ElementType;
  href: string;
  color: string;
  label: string;
  isExternal?: boolean;
}

interface QuickLink {
  name: string;
  path: string;
  icon?: React.ElementType;
  description?: string;
}

interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  href?: string;
  ariaLabel?: string;
}

interface Brand {
  name: string;
  category: string;
  path: string;
  description: string;
  isActive: boolean;
}

interface LegalLink {
  name: string;
  href: string;
  description?: string;
}

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks: SocialLink[] = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/profile.php?id=61578568915484&sk=about', 
      color: 'hover:text-blue-400',
      label: 'Follow us on Facebook',
      isExternal: true
    },
    { 
      icon: Twitter, 
      href: '#', 
      color: 'hover:text-sky-400',
      label: 'Follow us on Twitter',
      isExternal: true
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/dolfyn_brands/', 
      color: 'hover:text-pink-400',
      label: 'Follow us on Instagram',
      isExternal: true
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/dolfyn-brands/about/?viewAsMember=true', 
      color: 'hover:text-blue-600',
      label: 'Connect with us on LinkedIn',
      isExternal: true
    },
    { 
      icon: Youtube, 
      href: '#', 
      color: 'hover:text-red-500',
      label: 'Subscribe to our YouTube channel',
      isExternal: true
    }
  ];

  const quickLinks: QuickLink[] = [
    { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our mission and vision' },
    { name: 'Our Journey', path: '/journey', icon: Clock, description: 'Discover our company timeline' },
    { name: 'Our Brands', path: '/brands', icon: Award, description: 'Explore our brand portfolio' },
    { name: 'Contact Us', path: '/contact', icon: Mail, description: 'Get in touch with our team' },
    { name: 'Our Team', path: '/team', icon: Users, description: 'Meet the people behind Dolfyn' },
    { name: 'Our Principles', path: '/principles', icon: Shield, description: 'Our core values and principles' }
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 302 248 3005',
      color: 'text-blue-400',
      href: 'tel:+13022483005',
      ariaLabel: 'Call us at +1 302 248 3005'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@dolfynbrands.com',
      color: 'text-purple-400',
      href: 'mailto:contact@dolfynbrands.com',
      ariaLabel: 'Send us an email'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '8 The Green, #22847, Dover, DE 19901, USA',
      color: 'text-yellow-400',
      href: 'https://maps.google.com/?q=8+The+Green+Dover+DE+19901+USA',
      ariaLabel: 'View our location on Google Maps'
    }
  ];

  const brands: Brand[] = [
    { 
      name: 'Viva Earth Organics', 
      category: 'Health and Wellness',
      path: '/vivaearth',
      description: 'Premium organic essential oils and wellness products',
      isActive: true
    },
    { 
      name: 'Viva Bloom', 
      category: 'Garden Supplies',
      path: '/vivabloom',
      description: 'Sustainable gardening solutions and plant care',
      isActive: true
    },
    { 
      name: 'My Garden Emporium', 
      category: 'Plants and Sustainability',
      path: '#',
      description: 'Curated collection of rare plants and tools',
      isActive: false
    }
  ];

  const legalLinks: LegalLink[] = [
    { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we protect your data' },
    { name: 'Terms of Service', href: '/terms-of-service', description: 'Terms and conditions of use' },
    { name: 'Cookie Policy', href: '/cookie-policy', description: 'How we use cookies' },
    { name: 'GDPR', href: '/gdpr', description: 'Your data protection rights' }
  ];

  // Newsletter subscription handler
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');

    // Reset success state after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer 
      className="bg-gray-900 border-t border-gray-700 relative overflow-hidden"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <picture>
                      <source srcSet="/company-logo.webp" type="image/webp" />
                      <img 
                        src="/company-logo.png" 
                        alt="Dolfyn Brands Logo" 
                        className="w-8 h-8 object-contain filter brightness-0 invert" 
                        width={32} 
                        height={32} 
                      />
                    </picture>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl" />
                </div>
                <span className="font-bold text-2xl text-white">Dolfyn Brands</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-base">
                Transforming brands through AI-powered strategies and creative excellence. 
                We make brands unforgettable and help them scale globally.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Building the future of brand acceleration</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target={social.isExternal ? "_blank" : undefined}
                      rel={social.isExternal ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-lg bg-gray-800/50 text-gray-400 ${social.color} transition-all duration-300 hover:bg-gray-700/50 hover:shadow-lg`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div variants={itemVariants}>
              <h3 
                id="footer-heading"
                className="text-white font-bold text-xl mb-6 flex items-center gap-2"
              >
                <Globe className="w-5 h-5 text-blue-400" />
                Quick Links
              </h3>
              <nav className="space-y-4" role="navigation" aria-label="Footer navigation">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.path)}
                      className="group flex items-center gap-3 text-left text-gray-300 hover:text-white transition-all duration-300 w-full"
                      whileHover={{ x: 5 }}
                      aria-label={link.description}
                    >
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      )}
                      <span className="group-hover:underline">{link.name}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>

            {/* Featured Brands */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                Featured Brands
              </h3>
              <div className="space-y-4">
                {brands.map((brand) => (
                  <motion.div
                    key={brand.name}
                    className={`group ${brand.isActive ? 'cursor-pointer' : 'cursor-default'}`}
                    whileHover={brand.isActive ? { x: 5 } : {}}
                    onClick={() => brand.isActive && handleNavClick(brand.path)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        brand.isActive ? 'bg-green-400' : 'bg-gray-500'
                      }`} />
                      <div>
                        <div className={`font-medium transition-colors ${
                          brand.isActive 
                            ? 'text-gray-200 group-hover:text-white group-hover:underline' 
                            : 'text-gray-400'
                        }`}>
                          {brand.name}
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                          {brand.category}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {brand.description}
                        </div>
                      </div>
                      {brand.isActive && (
                        <ExternalLink className="w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity mt-2" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-green-400" />
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Get the latest insights on brand transformation and AI innovation delivered to your inbox.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting || isSubscribed}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                    aria-label="Email address for newsletter subscription"
                  />
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubscribed}
                  whileHover={{ scale: isSubmitting || isSubscribed ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubscribed ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                  ) : isSubscribed ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                  <span>
                    {isSubmitting ? 'Subscribing...' : isSubscribed ? 'Subscribed!' : 'Subscribe'}
                  </span>
                </motion.button>
              </form>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-green-400 mt-3 flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
                <Shield className="w-3 h-3" />
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-700 mt-16 pt-12"
          >
            <h4 className="text-white font-bold text-lg mb-8 text-center lg:text-left">
              Get in Touch
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group"
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={contact.ariaLabel}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group-hover:shadow-lg"
                      >
                        <div className={`p-2 rounded-lg bg-gray-800 ${contact.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-white font-semibold group-hover:text-gray-200 transition-colors">
                            {contact.label}
                          </div>
                          <div className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30">
                        <div className={`p-2 rounded-lg bg-gray-800 ${contact.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-white font-semibold">{contact.label}</div>
                          <div className="text-gray-300 text-sm leading-relaxed">{contact.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-700 mt-16 pt-8"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-gray-400 text-center lg:text-left">
                <p className="flex items-center gap-2 justify-center lg:justify-start">
                  <span>© 2025 Dolfyn Brands. All rights reserved.</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm">Built with ❤️ for entrepreneurs</span>
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-end gap-6">
                {legalLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ y: -2 }}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 hover:underline"
                    title={link.description}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;