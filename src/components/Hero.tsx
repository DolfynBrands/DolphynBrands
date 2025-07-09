import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="text-white font-bold text-2xl">D</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Dolfyn <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Brands</span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gray-900">Transform</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Your Brand
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We leverage AI and cutting-edge strategies to transform brands into global powerhouses. 
            From startups to enterprises, we make brands unforgettable.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-gray-600 text-sm">Brands Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">2.5B</div>
            <div className="text-gray-600 text-sm">Brand Value Created</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-shadow"
          >
            <span>Transform Your Brand</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-12 mt-16"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-3">
              <Zap size={24} className="text-white" />
            </div>
            <span className="text-gray-600 text-sm">AI-Powered</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mb-3">
              <Globe size={24} className="text-white" />
            </div>
            <span className="text-gray-600 text-sm">Global Reach</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mb-3">
              <TrendingUp size={24} className="text-white" />
            </div>
            <span className="text-gray-600 text-sm">Proven Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;