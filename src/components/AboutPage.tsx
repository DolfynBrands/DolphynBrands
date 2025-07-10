import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Eye, Heart, Zap, Brain, Cpu, BarChart3, Sparkles, Users, Award } from 'lucide-react';

const AboutPage = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dolfyn</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge artificial intelligence to revolutionize brand transformation. 
              Our AI-first approach delivers unprecedented insights, optimization, and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
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
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div variants={containerVariants}>
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage cutting-edge artificial intelligence to revolutionize brand transformation. 
                Our AI-first approach delivers unprecedented insights, optimization, and results that 
                traditional methods simply cannot match.
              </p>
            </motion.div>

            {/* AI Features Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
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
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={containerVariants} className="text-center">
            <motion.h3 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">Impact</span>
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: '500+', label: 'Brands Transformed', color: 'text-blue-400' },
                { icon: Award, value: '98%', label: 'Client Satisfaction', color: 'text-green-400' },
                { icon: Target, value: '50+', label: 'Industry Awards', color: 'text-purple-400' },
                { icon: Zap, value: '2.5B+', label: 'Value Created', color: 'text-yellow-400' }
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center">
                  <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <stat.icon size={24} className={stat.color} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;