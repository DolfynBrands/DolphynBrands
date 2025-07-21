import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MainContent = React.memo(() => {
  const navigate = useNavigate();
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
      <section className="py-16 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Acquisition */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="group bg-white border border-blue-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Target className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-blue-700 transition-colors">Brand Acquisition</h3>
              <p className="text-gray-600 text-center">We identify and acquire high-potential digital brands with proven market fit.</p>
            </motion.div>
            {/* Growth Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group bg-white border border-green-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-green-700 transition-colors">Growth Optimization</h3>
              <p className="text-gray-600 text-center">Advanced analytics and AI-driven strategies to accelerate brand growth.</p>
            </motion.div>
            {/* Operational Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group bg-white border border-purple-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-purple-700 transition-colors">Operational Excellence</h3>
              <p className="text-gray-600 text-center">Streamlined operations and supply chain optimization for maximum efficiency.</p>
            </motion.div>
            {/* Global Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group bg-white border border-orange-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-orange-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-orange-700 transition-colors">Global Expansion</h3>
              <p className="text-gray-600 text-center">Strategic market expansion to unlock new revenue opportunities worldwide.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Dolfyn Section - Fluid Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            Why <span className="text-gradient">Dolfyn</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-First Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="group bg-white border border-purple-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-purple-700 transition-colors">AI-First Philosophy</h3>
              <p className="text-gray-600 text-center">We blend advanced AI with human creativity to unlock new brand possibilities.</p>
            </motion.div>
            {/* Data-Driven Decisions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group bg-white border border-blue-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-blue-700 transition-colors">Data-Driven Decisions</h3>
              <p className="text-gray-600 text-center">Every strategy is backed by data, ensuring measurable and sustainable growth.</p>
            </motion.div>
            {/* Ethical & Sustainable Growth */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group bg-white border border-green-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-green-700 transition-colors">Ethical & Sustainable Growth</h3>
              <p className="text-gray-600 text-center">We are committed to responsible, ethical, and sustainable business practices.</p>
            </motion.div>
            {/* About Us Card */}
            <motion.a
              href="/about"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group bg-blue-50 border border-blue-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <ArrowRight className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-blue-700 transition-colors">About Us</h3>
              <p className="text-gray-600 text-center">Learn about our story, vision, and the team driving Dolfyn forward.</p>
              <span className="mt-2 text-blue-400 group-hover:text-blue-700 font-semibold">Explore &rarr;</span>
            </motion.a>
            {/* Our Principles Card */}
            <motion.a
              href="/principles"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="group bg-purple-50 border border-purple-200 rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-purple-400 hover:-translate-y-2 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-4 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <Zap className="text-white text-4xl" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-center group-hover:text-purple-700 transition-colors">Our Principles</h3>
              <p className="text-gray-600 text-center">Discover the values and philosophies that shape our approach.</p>
              <span className="mt-2 text-purple-400 group-hover:text-purple-700 font-semibold">See Principles &rarr;</span>
            </motion.a>
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
                onClick={() => navigate('/faq')}
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