import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  ArrowRight, 
  Sparkles,
  Leaf,
  Flower2,
  ShoppingBag
} from 'lucide-react';

// Structured data for brand portfolio
const brandPortfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Dolfyn Brands Portfolio",
  "description": "Discover how we've transformed brands across industries, delivering exceptional results through our AI-powered approach and creative excellence.",
  "url": "https://dolfynbrands.com/#brands",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Brand Portfolio",
    "numberOfItems": 3,
    "itemListElement": [
      {
        "@type": "Brand",
        "name": "Viva Earth Organics",
        "description": "Health and wellness brand with 340% growth",
        "industry": "Health and Wellness",
        "url": "https://dolfynbrands.com/vivaearth"
      },
      {
        "@type": "Brand", 
        "name": "Viva Bloom",
        "description": "Garden supplies brand with 275% growth",
        "industry": "Garden Supplies",
        "url": "https://dolfynbrands.com/vivabloom"
      },
      {
        "@type": "Brand",
        "name": "My Garden Emporium", 
        "description": "Plants and sustainability brand with 420% growth",
        "industry": "Plants and Sustainability"
      }
    ]
  },
  "about": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "description": "Full-stack brand accelerator helping consumer brands scale globally"
  }
};

// Enhanced brand interface with additional properties
interface Brand {
  name: string;
  industry: string;
  growth: string;
  color: string;
  icon: React.ElementType;
  description: string;
  achievements: string[];
  link?: string;
  ariaLabel?: string;
}

const BrandShowcase = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const brands: Brand[] = [
    {
      name: 'Viva Earth Organics',
      industry: 'Health and Wellness',
      color: 'from-green-500 to-emerald-600',
      icon: Leaf,
      description: 'Premium organic essential oils and natural wellness products',
      achievements: ['340% Revenue Growth', '50K+ Happy Customers', 'Carbon Neutral Operations'],
      link: '/vivaearth',
      ariaLabel: 'Visit Viva Earth Organics brand page',
      growth: ''
    },
    {
      name: 'Viva Bloom',
      industry: 'Garden Supplies',
      color: 'from-pink-500 to-rose-600',
      icon: Flower2,
      description: 'Sustainable gardening solutions and eco-friendly plant care',
      achievements: ['275% Sales Increase', 'Zero Waste Packaging', 'Community of 25K+ Gardeners'],
      link: '/vivabloom',
      ariaLabel: 'Visit Viva Bloom brand page',
      growth: ''
    },
    {
      name: 'My Garden Emporium',
      industry: 'Plants and Sustainability',
      color: 'from-purple-500 to-violet-600',
      icon: ShoppingBag,
      description: 'Curated collection of rare plants and sustainable gardening tools',
      achievements: ['420% Market Expansion', 'Rare Plant Specialist', 'Sustainability Leader'],
      ariaLabel: 'Learn about My Garden Emporium success story',
      growth: ''
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    }
  };

  return (
    <section 
      id="brands" 
      className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandPortfolioSchema) }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full text-blue-700 font-medium mb-6 border border-blue-200"
            >
              <Sparkles className="w-4 h-4" />
              Portfolio Showcase
            </motion.div>
            
            <h2 
              id="portfolio-heading"
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Brand{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
                  Portfolio
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how we&apos;ve transformed brands across industries, delivering exceptional results 
              through our AI-powered approach and creative excellence.
            </p>
          </motion.div>

          {/* Brand Cards */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {brands.map((brand, index) => {
              const IconComponent = brand.icon;
              const isClickable = Boolean(brand.link);
              
              const cardContent = (
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className={`group relative overflow-hidden rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 transition-all duration-500 shadow-lg hover:shadow-2xl ${
                    isClickable ? 'cursor-pointer' : ''
                  }`}
                  role={isClickable ? "button" : "article"}
                  tabIndex={isClickable ? 0 : undefined}
                  aria-label={brand.ariaLabel || `${brand.name} brand showcase`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Brand Info */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium mb-4 uppercase tracking-wide">
                      {brand.industry}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {brand.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {brand.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${brand.color}`} />
                          <span className="text-sm text-gray-600 font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link Indicator */}
                    {isClickable && (
                      <motion.div
                        className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ x: 10 }}
                        animate={{ x: hoveredCard === index ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 text-gray-600" />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20`}
                    initial={false}
                    animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );

              if (isClickable) {
                return (
                  <motion.a
                    key={brand.name}
                    href={brand.link}
                    className="block focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-3xl transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  >
                    {cardContent}
                  </motion.a>
                );
              }

              return <div key={brand.name}>{cardContent}</div>;
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              <span>Ready to Transform Your Brand?</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

BrandShowcase.displayName = "BrandShowcase";

export default BrandShowcase;