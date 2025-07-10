import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const CompanySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Story Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-24"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Born from the intersection of creativity and technology, Dolfyn Brands emerged to solve the most 
              challenging brand transformation problems. We believe every brand has the potential to become 
              extraordinary – it just needs the right transformation.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision, Mission, Values, Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-sm border border-blue-200 rounded-3xl p-8 hover:border-blue-300 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <Eye size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the world's most trusted brand transformation partner, empowering businesses 
              to achieve unprecedented growth through innovative AI-driven strategies and creative excellence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 hover:border-purple-300 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We transform brands through cutting-edge AI technology, strategic innovation, and creative 
              excellence, delivering measurable results that drive sustainable business growth.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 backdrop-blur-sm border border-yellow-200 rounded-3xl p-8 hover:border-yellow-300 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
              <Heart size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Values</h3>
            <ul className="text-gray-700 text-lg space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Innovation-first approach</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Transparent partnerships</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Measurable results</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Creative excellence</span>
              </li>
            </ul>
          </motion.div>

          {/* Strategy */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-green-50 to-teal-50 backdrop-blur-sm border border-green-200 rounded-3xl p-8 hover:border-green-300 transition-colors shadow-lg"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-600 rounded-full flex items-center justify-center mb-6">
              <Zap size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategy</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our three-pillar approach combines AI-powered insights, creative innovation, and strategic 
              implementation to deliver transformative results for brands across all industries.
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Process</span>
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Deep brand analysis and market research' },
              { step: '02', title: 'Design', desc: 'Creative strategy and visual identity' },
              { step: '03', title: 'Develop', desc: 'AI-powered implementation and optimization' },
              { step: '04', title: 'Deploy', desc: 'Launch and continuous improvement' }
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanySection;