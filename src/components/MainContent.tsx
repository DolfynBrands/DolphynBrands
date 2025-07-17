import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import AnimatedBackground from './AnimatedBackground'; // Adjust the import based on your file structure

const MainContent = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const services = [
    {
      icon: Target,
      title: 'Brand Acquisition',
      description: 'We identify and acquire high-potential digital brands with proven market fit.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Advanced analytics and AI-driven strategies to accelerate brand growth.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Operational Excellence',
      description: 'Streamlined operations and supply chain optimization for maximum efficiency.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Strategic market expansion to unlock new revenue opportunities worldwide.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Animated background only for What We Do section */}
      <div className="relative">
        <AnimatedBackground />
        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  What We Do
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We specialize in acquiring, optimizing, and scaling digital brands 
                  to create lasting value and market leadership.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

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