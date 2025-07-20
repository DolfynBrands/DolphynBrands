import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  ArrowRight
} from 'lucide-react';

const MainContent = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="bg-white">
      {/* What We Do Section - Fluid Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Acquisition */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-3xl mb-3"><Target /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Brand Acquisition</h3>
              <p className="text-gray-600 text-center">We identify and acquire high-potential digital brands with proven market fit.</p>
            </div>
            {/* Growth Optimization */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-green-500 text-3xl mb-3"><TrendingUp /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Growth Optimization</h3>
              <p className="text-gray-600 text-center">Advanced analytics and AI-driven strategies to accelerate brand growth.</p>
            </div>
            {/* Operational Excellence */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-purple-500 text-3xl mb-3"><Zap /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Operational Excellence</h3>
              <p className="text-gray-600 text-center">Streamlined operations and supply chain optimization for maximum efficiency.</p>
            </div>
            {/* Global Expansion */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-orange-500 text-3xl mb-3"><Globe /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Global Expansion</h3>
              <p className="text-gray-600 text-center">Strategic market expansion to unlock new revenue opportunities worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dolfyn Section - Fluid Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            Why <span className="text-gradient">Dolfyn</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI-First Philosophy */}
            <div className="bg-white border border-purple-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-purple-500 text-3xl mb-3"><Zap /></span>
              <h3 className="font-bold text-xl mb-2 text-center">AI-First Philosophy</h3>
              <p className="text-gray-600 text-center">We blend advanced AI with human creativity to unlock new brand possibilities.</p>
            </div>
            {/* Data-Driven Decisions */}
            <div className="bg-white border border-blue-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-blue-500 text-3xl mb-3"><TrendingUp /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Data-Driven Decisions</h3>
              <p className="text-gray-600 text-center">Every strategy is backed by data, ensuring measurable and sustainable growth.</p>
            </div>
            {/* Ethical & Sustainable Growth */}
            <div className="bg-white border border-green-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-green-500 text-3xl mb-3"><Globe /></span>
              <h3 className="font-bold text-xl mb-2 text-center">Ethical & Sustainable Growth</h3>
              <p className="text-gray-600 text-center">We are committed to responsible, ethical, and sustainable business practices.</p>
            </div>
            {/* About Us Card */}
            <a href="/about" className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition group">
              <span className="text-blue-500 text-3xl mb-3"><ArrowRight /></span>
              <h3 className="font-bold text-xl mb-2 text-center group-hover:text-blue-700">About Us</h3>
              <p className="text-gray-600 text-center">Learn about our story, vision, and the team driving Dolfyn forward.</p>
              <span className="mt-2 text-blue-400 group-hover:text-blue-700 font-semibold">Explore &rarr;</span>
            </a>
            {/* Our Principles Card */}
            <a href="/principles" className="bg-purple-50 border border-purple-200 rounded-2xl p-6 flex flex-col items-center shadow hover:shadow-lg transition group">
              <span className="text-purple-500 text-3xl mb-3"><Zap /></span>
              <h3 className="font-bold text-xl mb-2 text-center group-hover:text-purple-700">Our Principles</h3>
              <p className="text-gray-600 text-center">Discover the values and philosophies that shape our approach.</p>
              <span className="mt-2 text-purple-400 group-hover:text-purple-700 font-semibold">See Principles &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={containerVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join the world&apos;s most successful digital brands. Let&apos;s discuss how we can 
              accelerate your growth and market presence.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

MainContent.displayName = "MainContent";

export default MainContent;