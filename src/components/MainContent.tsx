import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Globe, 
  Users, 
  Award,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Shield
} from 'lucide-react';

const MainContent = () => {
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

  const metrics = [
    {
      icon: BarChart3,
      value: '$2.5B+',
      label: 'Portfolio Value',
      description: 'Total value of our brand portfolio'
    },
    {
      icon: Users,
      value: '500+',
      label: 'Brands Acquired',
      description: 'Successfully acquired and optimized'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      description: 'Brands showing positive growth'
    },
    {
      icon: Lightbulb,
      value: '300%',
      label: 'Avg Growth',
      description: 'Average revenue growth post-acquisition'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze market trends and consumer behavior.',
      icon: BarChart3
    },
    {
      title: 'Strategic Partnerships',
      description: 'Building long-term relationships with brand founders and key stakeholders.',
      icon: Users
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive due diligence and risk assessment for every acquisition.',
      icon: Shield
    }
  ];

  return (
    <div className="bg-white">
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

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Numbers that speak to our commitment to building exceptional digital brands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={containerVariants}>
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to brand transformation that delivers consistent results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center mb-6">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Join the world's most successful digital brands. Let's discuss how we can 
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
};

export default MainContent;