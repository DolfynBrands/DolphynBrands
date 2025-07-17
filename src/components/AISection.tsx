import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, BarChart3, Sparkles, Target, Zap } from 'lucide-react';

const AISection = React.memo(() => {
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
        duration: 0.8
      }
    }
  };

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Intelligent Brand Analysis',
      description: 'AI-powered deep analysis of brand positioning, market sentiment, and competitive landscape',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Cpu,
      title: 'Predictive Modeling',
      description: 'Advanced algorithms predict brand performance and optimize strategies for maximum impact',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Continuous monitoring and optimization of brand metrics with instant insights',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Sparkles,
      title: 'Creative AI Enhancement',
      description: 'AI-assisted creative processes that amplify human creativity and design innovation',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Machine learning identifies and targets the most valuable audience segments',
      color: 'from-red-400 to-pink-400'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Self-learning systems continuously improve brand performance across all channels',
      color: 'from-indigo-400 to-purple-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Transformation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge artificial intelligence to revolutionize brand transformation. 
              Our AI-first approach delivers unprecedented insights, optimization, and results that 
              traditional methods simply cannot match.
            </p>
          </motion.div>

          {/* Why AI Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 backdrop-blur-sm border border-purple-200 rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why We Use AI to Transform Brands
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-4">Unmatched Insights</h4>
                  <p className="text-gray-700 leading-relaxed">
                    AI processes millions of data points to uncover hidden patterns, consumer behaviors, 
                    and market opportunities that human analysis alone would miss.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-400 mb-4">Predictive Power</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI models predict future trends, consumer preferences, and market shifts, 
                    allowing brands to stay ahead of the competition.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-4">Continuous Optimization</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike traditional approaches, our AI continuously learns and optimizes brand 
                    strategies in real-time, ensuring peak performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-400 mb-4">Measurable Results</h4>
                  <p className="text-gray-700 leading-relaxed">
                    AI provides precise, data-driven metrics that clearly demonstrate ROI and 
                    brand transformation success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Features Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {aiFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Proposition */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-gray-50 to-white backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Partner with the Future of Brand Transformation
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Join leading brands that trust our AI-powered platform to drive growth, 
                engagement, and market dominance. The future of branding is here.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Start Your AI Transformation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-500 text-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors"
                >
                  Learn More About Our AI
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AISection.displayName = "AISection";

export default AISection;