import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-9xl font-bold text-gray-200 mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>
          
          {/* Error Message */}
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                <Home size={20} />
                <span>Go Home</span>
              </motion.button>
            </Link>
            
            <Link to="/" onClick={() => window.history.back()}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-900 hover:text-white transition-colors w-full sm:w-auto"
              >
                <ArrowLeft size={20} />
                <span>Go Back</span>
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-gray-500 mb-4">Or explore these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/brands" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Our Brands
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/team" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Our Team
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;