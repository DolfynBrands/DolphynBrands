import React from "react";
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Zap, Brain, Cpu, BarChart3, Sparkles } from 'lucide-react';

const AboutPage = React.memo(() => {
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

  const growthPillars = [
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      subtitle: 'Grow Faster, Smarter',
      description: 'We use AI to run ads that reach the right people and boost your sales, fast.',
      bullets: [
        'Expert in Meta, Google, Amazon',
        'Smart ad strategy',
        'Creative that sells',
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Digital Branding',
      subtitle: 'Stand Out Online',
      description: 'We design your brand and website to look great and turn visitors into fans.',
      bullets: [
        'Cool websites & logos',
        'Eye-catching packaging',
        'Stories that connect',
      ],
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: Cpu,
      title: 'Supply Chain',
      subtitle: 'Deliver With Ease',
      description: 'We help you get products made, stocked, and delivered on time, every time.',
      bullets: [
        'No wasted stock',
        'Fast delivery',
        'Trusted partners',
      ],
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      subtitle: 'Smarter Business',
      description: 'We build smart tools that save time, predict trends, and help you grow.',
      bullets: [
        'Smart pricing',
        'Customer insights',
        'Easy automation',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Target,
      title: 'Sales Expansion',
      subtitle: 'Reach More People',
      description: 'We get your brand on top sites and in stores, so more people can buy.',
      bullets: [
        'Amazon, Flipkart, Nykaa',
        'Retail & online',
        'More sales channels',
      ],
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Heart,
      title: 'Founder Coaching',
      subtitle: 'Grow With Us',
      description: 'We guide founders and teams to make smart choices and build strong brands.',
      bullets: [
        '1:1 mentoring',
        'Team building',
        'Community support',
      ],
      color: 'from-blue-400 to-purple-500',
    },
  ];

  AboutPage.displayName = "AboutPage";

  // Card class for plain by default, colored border, shadow, and lift on hover (like MainContent)
  const cardBase = "group bg-white border rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer -translate-y-0 hover:-translate-y-2";

  // Helper to get color classes for border and icon
  const colorMap = {
    blue: {
      border: 'border-blue-200 hover:border-blue-400',
      text: 'text-blue-500 group-hover:text-blue-700',
    },
    purple: {
      border: 'border-purple-200 hover:border-purple-400',
      text: 'text-purple-500 group-hover:text-purple-700',
    },
    yellow: {
      border: 'border-yellow-200 hover:border-yellow-400',
      text: 'text-yellow-500 group-hover:text-yellow-700',
    },
    green: {
      border: 'border-green-200 hover:border-green-400',
      text: 'text-green-500 group-hover:text-green-700',
    },
    pink: {
      border: 'border-pink-200 hover:border-pink-400',
      text: 'text-pink-500 group-hover:text-pink-700',
    },
    orange: {
      border: 'border-orange-200 hover:border-orange-400',
      text: 'text-orange-500 group-hover:text-orange-700',
    },
    cyan: {
      border: 'border-cyan-200 hover:border-cyan-400',
      text: 'text-cyan-500 group-hover:text-cyan-700',
    },
    emerald: {
      border: 'border-emerald-200 hover:border-emerald-400',
      text: 'text-emerald-500 group-hover:text-emerald-700',
    },
    red: {
      border: 'border-red-200 hover:border-red-400',
      text: 'text-red-500 group-hover:text-red-700',
    },
  };

  // Add gradient backgrounds for icon circles
  const iconBgMap = {
    blue: 'bg-gradient-to-br from-blue-400 to-blue-600',
    purple: 'bg-gradient-to-br from-purple-400 to-purple-600',
    yellow: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    green: 'bg-gradient-to-br from-green-400 to-green-600',
    pink: 'bg-gradient-to-br from-pink-400 to-pink-600',
    orange: 'bg-gradient-to-br from-orange-400 to-orange-600',
  };

  // Assign colorKey for each pillar: blue, purple, green, yellow, pink, blue
  const pillarColorKeys: Array<keyof typeof colorMap & keyof typeof iconBgMap> = ['blue', 'purple', 'green', 'yellow', 'pink', 'blue'];
  // Assign colorKey for each feature: purple, blue, green, yellow
  const featureColorKeys: Array<keyof typeof colorMap & keyof typeof iconBgMap> = ['purple', 'blue', 'green', 'yellow'];

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
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Growth Engine</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a data-driven, AI-first accelerator powering the next generation of consumer brands. Our team blends deep domain expertise with bleeding-edge technology to craft scale-ready solutions across every brand touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story, Mission, Culture Section */}
      <section className="pt-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-24"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Story</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Born from the intersection of creativity and technology, Dolfyn Brands emerged to solve the most challenging brand transformation problems. We believe every brand has the potential to become extraordinary – it just needs the right transformation.<br /><br />
                Our culture? <span className="font-semibold text-blue-700">Founder Obsession + Execution Excellence.</span> We hire doers, builders, and believers. Every Dolfyn team member is laser-focused on one mission: making your brand unstoppable.
              </p>
            </motion.div>
          </motion.div>
          {/* Vision, Mission, Values, Strategy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className={`${cardBase} ${colorMap.blue.border}`}
            >
              <div className={`w-16 h-16 rounded-full ${iconBgMap.blue} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world&apos;s most trusted brand transformation partner, empowering businesses to achieve unprecedented growth through innovative AI-driven strategies and creative excellence.
              </p>
            </motion.div>
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className={`${cardBase} ${colorMap.purple.border}`}
            >
              <div className={`w-16 h-16 rounded-full ${iconBgMap.purple} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Target size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We transform brands through cutting-edge AI technology, strategic innovation, and creative excellence, delivering measurable results that drive sustainable business growth.
              </p>
            </motion.div>
            {/* Values */}
            <motion.div
              variants={itemVariants}
              className={`${cardBase} ${colorMap.yellow.border}`}
            >
              <div className={`w-16 h-16 rounded-full ${iconBgMap.yellow} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors">Values</h3>
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
              className={`${cardBase} ${colorMap.green.border}`}
            >
              <div className={`w-16 h-16 rounded-full ${iconBgMap.green} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Strategy</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our three-pillar approach combines AI-powered insights, creative innovation, and strategic implementation to deliver transformative results for brands across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Engine Pillars Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Growth Engine</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From performance marketing to digital branding, from supply chain to AI-driven automation — our in-house talent is what sets your brand apart.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {growthPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -8 }}
                  className={`${cardBase} ${colorMap[pillarColorKeys[idx]].border}`}
                >
                  <div className={`w-16 h-16 rounded-full ${iconBgMap[pillarColorKeys[idx]]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <pillar.icon size={32} className="text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-2 group-hover:text-${pillarColorKeys[idx]}-700 transition-colors`}>{pillar.title}</h3>
                  <div className="text-sm font-semibold text-gray-500 mb-2">{pillar.subtitle}</div>
                  <p className="text-gray-700 mb-4">{pillar.description}</p>
                  <ul className="text-gray-600 text-sm space-y-2 pl-4 list-disc">
                    {pillar.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Section (condensed) */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                AI is at the core of what we do. Our tech team builds automations, dashboards, and predictive tools to give your brand an unfair advantage. Our AI-first approach delivers unprecedented insights, optimization, and results that traditional methods simply cannot match.
              </p>
            </motion.div>
            {/* AI Features Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
              {aiFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`${cardBase} ${colorMap[featureColorKeys[idx]].border}`}
                >
                  <div className={`w-16 h-16 rounded-full ${iconBgMap[featureColorKeys[idx]]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${featureColorKeys[idx]}-700 transition-colors`}>{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
            >
              Ready to Transform Your Brand?
            </motion.h2>
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re passionate about helping brands reach their full potential.
            </p>
            <motion.div
              variants={itemVariants}
              className="inline-flex rounded-full shadow-md"
            >
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full text-lg transition-all duration-300 hover:shadow-lg"
              >
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
});

export default AboutPage;