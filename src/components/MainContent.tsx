import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Globe, 
  ArrowRight,
  Diamond,
  BarChart3,
  Sparkles
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
    <div className="bg-gray-50 text-gray-800">
      {/* What We Do Section - Luxury Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-3 text-center tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600">What We Do</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"
          ></motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Acquisition */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-blue-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-4 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Diamond className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-gray-800 group-hover:text-blue-600 transition-colors">Brand Acquisition</h3>
                <p className="text-gray-600 text-center text-sm">We identify and acquire high-potential digital brands with proven market fit.</p>
              </div>
            </motion.div>
            {/* Growth Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-purple-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-4 mb-6 transition-all duration-500 group-hover:scale-110">
                  <BarChart3 className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-gray-800 group-hover:text-purple-600 transition-colors">Growth Optimization</h3>
                <p className="text-gray-600 text-center text-sm">Advanced analytics and AI-driven strategies to accelerate brand growth.</p>
              </div>
            </motion.div>
            {/* Operational Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-teal-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg p-4 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Sparkles className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-gray-800 group-hover:text-teal-600 transition-colors">Operational Excellence</h3>
                <p className="text-gray-600 text-center text-sm">Streamlined operations and supply chain optimization for maximum efficiency.</p>
              </div>
            </motion.div>
            {/* Global Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-8 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-amber-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg p-4 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Globe className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center text-gray-800 group-hover:text-amber-600 transition-colors">Global Expansion</h3>
                <p className="text-gray-600 text-center text-sm">Strategic market expansion to unlock new revenue opportunities worldwide.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Dolfyn Section - Premium Grid */}
      <section className="py-28 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-3 text-center tracking-tight"
          >
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Dolfyn</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mb-16 rounded-full"
          ></motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* AI-First Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-10 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-purple-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-5 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Zap className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 group-hover:text-purple-600 transition-colors">AI-First Philosophy</h3>
                <p className="text-gray-600 text-center">We blend advanced AI with human creativity to unlock new brand possibilities.</p>
              </div>
            </motion.div>
            {/* Data-Driven Decisions */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-10 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-blue-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-5 mb-6 transition-all duration-500 group-hover:scale-110">
                  <BarChart3 className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 group-hover:text-blue-600 transition-colors">Data-Driven Decisions</h3>
                <p className="text-gray-600 text-center">Every strategy is backed by data, ensuring measurable and sustainable growth.</p>
              </div>
            </motion.div>
            {/* Ethical & Sustainable Growth */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-10 flex flex-col items-center hover:bg-gray-50 transition-all duration-500 hover:border-teal-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg p-5 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Globe className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 group-hover:text-teal-600 transition-colors">Ethical & Sustainable Growth</h3>
                <p className="text-gray-600 text-center">We are committed to responsible, ethical, and sustainable business practices.</p>
              </div>
            </motion.div>
            {/* About Us Card */}
            <motion.a
              href="/about"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="group bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-sm border border-blue-200 rounded-lg p-10 flex flex-col items-center hover:bg-blue-50 transition-all duration-500 hover:border-blue-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-5 mb-6 transition-all duration-500 group-hover:scale-110">
                  <ArrowRight className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 group-hover:text-blue-600 transition-colors">About Us</h3>
                <p className="text-gray-600 text-center">Learn about our story, vision, and the team driving Dolfyn forward.</p>
                <span className="mt-6 inline-block px-6 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 group-hover:bg-blue-200 group-hover:border-blue-300 transition-all duration-300">Explore &rarr;</span>
              </div>
            </motion.a>
            {/* Our Principles Card */}
            <motion.a
              href="/principles"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="group bg-gradient-to-br from-purple-50 to-purple-100 backdrop-blur-sm border border-purple-200 rounded-lg p-10 flex flex-col items-center hover:bg-purple-50 transition-all duration-500 hover:border-purple-300 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg p-5 mb-6 transition-all duration-500 group-hover:scale-110">
                  <Sparkles className="text-white text-3xl" />
                </div>
                <h3 className="font-bold text-2xl mb-4 text-center text-gray-800 group-hover:text-purple-600 transition-colors">Our Principles</h3>
                <p className="text-gray-600 text-center">Discover the values and philosophies that shape our approach.</p>
                <span className="mt-6 inline-block px-6 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-600 group-hover:bg-purple-200 group-hover:border-purple-300 transition-all duration-300">See Principles &rarr;</span>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={containerVariants}>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            >
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
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