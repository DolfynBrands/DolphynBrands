import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BrandShowcase = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const brands = [
    { name: 'Viva Earth Organics', industry: 'Health and Wellness', growth: '+340%', color: 'from-blue-400 to-cyan-400' },
    { name: 'Viva Bloom', industry: 'Garden Supplies', growth: '+275%', color: 'from-green-400 to-emerald-400' },
    { name: 'My Garden Emporium', industry: 'Plants and Sustainability', growth: '+420%', color: 'from-purple-400 to-pink-400' },
  ];

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
    <section id="brands" className="pt-32 py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we&apos;ve transformed brands across industries, delivering exceptional results 
              through our AI-powered approach and creative excellence.
            </p>
          </motion.div>

          {/* Stats Grid */}
          {/*
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {[
              { icon: TrendingUp, value: '500+', label: 'Brands Transformed', color: 'text-blue-400' },
              { icon: Users, value: '98%', label: 'Client Satisfaction', color: 'text-green-400' },
              { icon: Award, value: '50+', label: 'Industry Awards', color: 'text-purple-400' },
              { icon: Zap, value: '2.5B+', label: 'Value Created', color: 'text-yellow-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon size={24} className={stat.color} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          */}

          {/* Brand Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {brands.map((brand) => {
              const isVivaEarth = brand.name === 'Viva Earth Organics';
              const cardContent = (
                <motion.div
                  key={brand.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${brand.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{brand.name[0]}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{brand.industry}</p>
                  </div>
                </motion.div>
              );
              return isVivaEarth ? (
                <a href="/vivaearth" key={brand.name} className="block focus:outline-none focus:ring-2 focus:ring-green-400 rounded-2xl">
                  {cardContent}
                </a>
              ) : cardContent;
            })}
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-shadow">
              View All Case Studies
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

BrandShowcase.displayName = "BrandShowcase";

export default BrandShowcase;