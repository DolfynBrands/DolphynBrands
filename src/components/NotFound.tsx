import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  ArrowLeft, 
  Search, 
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Clock,
  Users,
  Award,
  Mail,
  Sparkles,
  Navigation
} from 'lucide-react';

// Structured data for error page
const errorPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Page Not Found - 404 Error",
  "description": "The requested page could not be found. Navigate back to Dolfyn Brands homepage or explore our featured content.",
  "url": "https://dolfynbrands.com/404",
  "mainEntity": {
    "@type": "ErrorPage",
    "name": "404 Not Found",
    "description": "The page you're looking for doesn't exist or has been moved."
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dolfynbrands.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "404 Error"
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "url": "https://dolfynbrands.com"
  }
};

// Enhanced interfaces
interface QuickLink {
  name: string;
  path: string;
  icon: React.ElementType;
  description: string;
  category: string;
}

interface HelpOption {
  title: string;
  description: string;
  icon: React.ElementType;
  action: () => void;
  color: string;
}

interface SuggestionCard {
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  gradient: string;
  isExternal?: boolean;
}

const NotFound: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Extract attempted path for better error context
  const attemptedPath = location.pathname;

  useEffect(() => {
    // Track 404 errors for analytics (if implemented)
    console.warn(`404 Error: Attempted to access ${attemptedPath}`);
  }, [attemptedPath]);

  const quickLinks: QuickLink[] = [
    { 
      name: 'About Us', 
      path: '/about', 
      icon: Users, 
      description: 'Learn about our mission and vision',
      category: 'Company'
    },
    { 
      name: 'Our Brands', 
      path: '/brands', 
      icon: Award, 
      description: 'Explore our brand portfolio',
      category: 'Portfolio'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: Mail, 
      description: 'Get in touch with our team',
      category: 'Support'
    },
    { 
      name: 'Our Team', 
      path: '/team', 
      icon: Users, 
      description: 'Meet the people behind Dolfyn',
      category: 'Company'
    },
    { 
      name: 'Our Journey', 
      path: '/journey', 
      icon: Clock, 
      description: 'Discover our company timeline',
      category: 'Company'
    },
    { 
      name: 'Our Principles', 
      path: '/principles', 
      icon: Navigation, 
      description: 'Our core values and principles',
      category: 'Company'
    }
  ];

  const suggestionCards: SuggestionCard[] = [
    {
      title: 'Viva Earth Organics',
      description: 'Discover our premium organic wellness brand',
      path: '/vivaearth',
      icon: Sparkles,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Viva Bloom',
      description: 'Explore sustainable gardening solutions',
      path: '/vivabloom', 
      icon: Sparkles,
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Get Support',
      description: 'Contact our team for assistance',
      path: '/contact',
      icon: Mail,
      gradient: 'from-blue-500 to-purple-600'
    }
  ];

  const helpOptions: HelpOption[] = [
    {
      title: 'Go Back',
      description: 'Return to the previous page',
      icon: ArrowLeft,
      action: () => window.history.back(),
      color: 'border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      title: 'Refresh Page',
      description: 'Try reloading this page',
      icon: RefreshCw,
      action: () => window.location.reload(),
      color: 'border-blue-300 text-blue-700 hover:bg-blue-50'
    },
    {
      title: 'Report Issue',
      description: 'Let us know about this problem',
      icon: AlertTriangle,
      action: () => window.open('/contact', '_blank'),
      color: 'border-orange-300 text-orange-700 hover:bg-orange-50'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simulate search redirect (you can implement actual search)
      window.location.href = `/?search=${encodeURIComponent(searchQuery)}`;
    }
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

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(errorPageSchema) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number with Enhanced Design */}
          <motion.div 
            variants={numberVariants}
            className="relative mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent select-none">
              404
            </h1>
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 bg-clip-text text-transparent"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              404
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 px-4 py-2 rounded-full text-red-700 font-medium mb-6 border border-red-200"
            >
              <AlertTriangle className="w-4 h-4" />
              Page Not Found
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Oops! This page has gone missing
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. 
              Don&apos;t worry, we&apos;ll help you find what you&apos;re looking for.
            </p>

            {attemptedPath !== '/' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 p-3 bg-gray-100 rounded-lg text-sm text-gray-500 max-w-md mx-auto"
              >
                <span className="font-medium">Attempted URL:</span> {attemptedPath}
              </motion.div>
            )}
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={itemVariants} className="mb-12">
            <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for content..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Search
                </motion.button>
              </div>
              
              {/* Search Suggestions */}
              <AnimatePresence>
                {showSuggestions && searchQuery.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10"
                  >
                    <div className="p-2">
                      {quickLinks
                        .filter(link => 
                          link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          link.description.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .slice(0, 3)
                        .map((link, index) => {
                          const IconComponent = link.icon;
                          return (
                            <Link
                              key={index}
                              to={link.path}
                              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setShowSuggestions(false)}
                            >
                              <IconComponent className="w-4 h-4 text-gray-500" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{link.name}</div>
                                <div className="text-xs text-gray-500">{link.description}</div>
                              </div>
                            </Link>
                          );
                        })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center space-x-3 hover:shadow-lg transition-all duration-300 w-full sm:w-auto group"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Go Home</span>
              </motion.button>
            </Link>
            
            <motion.button
              onClick={() => window.history.back()}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center space-x-3 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 w-full sm:w-auto group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </motion.button>
          </motion.div>

          {/* Help Options */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {helpOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={option.action}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 group ${option.color}`}
                  >
                    <IconComponent className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="font-medium">{option.title}</div>
                    <div className="text-xs opacity-70 mt-1">{option.description}</div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Suggestion Cards */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {suggestionCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <Link key={index} to={card.path}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        {card.description}
                      </p>
                      {card.isExternal && (
                        <ExternalLink className="w-4 h-4 text-gray-400 mt-2" />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            variants={itemVariants}
            className="pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-6">Or explore these popular pages:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link 
                    key={index}
                    to={link.path}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-center"
                    >
                      <IconComponent className="w-5 h-5 mx-auto mb-2 text-gray-500 group-hover:text-gray-700 transition-colors" />
                      <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {link.category}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Still Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our team is here to assist you. Get in touch and we&apos;ll help you find what you&apos;re looking for.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;