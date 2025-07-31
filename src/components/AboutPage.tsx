import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sparkles, Cpu, Brain, Target, Heart, Eye, Zap } from 'lucide-react';

// Define structured data for SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Dolfyn Brands - AI-Powered Brand Transformation",
  "description": "Learn about Dolfyn Brands, the growth engine behind successful brand transformations. We combine AI technology, creative excellence, and strategic innovation.",
  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/about`,
  "mainEntity": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "description": "AI-powered brand transformation company specializing in performance marketing, digital branding, and business growth.",
    "foundingDate": "2020",
    "industry": "Brand Marketing and Digital Transformation",
    "serviceArea": "Global",
    "knowsAbout": ["Brand Transformation", "AI Marketing", "Performance Marketing", "Digital Branding", "Supply Chain Management"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Brand Transformation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "description": "AI-driven advertising and marketing campaigns for faster, smarter growth"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Branding",
            "description": "Comprehensive brand design and digital presence development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Supply Chain Management",
            "description": "End-to-end supply chain optimization and logistics solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & Automation",
            "description": "Smart business automation and predictive analytics solutions"
          }
        }
      ]
    }
  }
};

// --- Helper function to get color classes based on theme with improved contrast ---
const getColorClasses = (theme: string) => {
    switch (theme) {
        case 'purple':
            return {
                bg: 'from-purple-600 to-purple-700',
                hoverBorder: 'hover:border-purple-500',
                hoverText: 'group-hover:text-purple-800',
                hoverBg: 'from-purple-50',
                iconShadow: 'shadow-purple-600/40',
                textColor: 'text-purple-800'
            };
        case 'blue':
            return {
                bg: 'from-blue-600 to-blue-700',
                hoverBorder: 'hover:border-blue-500',
                hoverText: 'group-hover:text-blue-800',
                hoverBg: 'from-blue-50',
                iconShadow: 'shadow-blue-600/40',
                textColor: 'text-blue-800'
            };
        case 'teal':
            return {
                bg: 'from-teal-600 to-teal-700',
                hoverBorder: 'hover:border-teal-500',
                hoverText: 'group-hover:text-teal-800',
                hoverBg: 'from-teal-50',
                iconShadow: 'shadow-teal-600/40',
                textColor: 'text-teal-800'
            };
        case 'amber':
             return {
                bg: 'from-amber-600 to-amber-700',
                hoverBorder: 'hover:border-amber-500',
                hoverText: 'group-hover:text-amber-800',
                hoverBg: 'from-amber-50',
                iconShadow: 'shadow-amber-600/40',
                textColor: 'text-amber-800'
            };
        case 'pink':
             return {
                bg: 'from-pink-600 to-rose-600',
                hoverBorder: 'hover:border-pink-500',
                hoverText: 'group-hover:text-pink-800',
                hoverBg: 'from-pink-50',
                iconShadow: 'shadow-pink-600/40',
                textColor: 'text-pink-800'
            };
        case 'green':
             return {
                bg: 'from-green-600 to-emerald-600',
                hoverBorder: 'hover:border-green-500',
                hoverText: 'group-hover:text-green-800',
                hoverBg: 'from-green-50',
                iconShadow: 'shadow-green-600/40',
                textColor: 'text-green-800'
            };
        default:
            return {
                bg: 'from-gray-600 to-gray-700',
                hoverBorder: 'hover:border-gray-500',
                hoverText: 'group-hover:text-gray-800',
                hoverBg: 'from-gray-50',
                iconShadow: 'shadow-gray-600/40',
                textColor: 'text-gray-800'
            };
    }
};


// --- Main App Component ---
export default function AboutPage() {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // --- DATA FOR SECTIONS ---
  const growthEnginePillars = [
    { icon: BarChart3, title: 'Performance Marketing', subtitle: 'Grow Faster, Smarter', description: 'We use AI to run ads that reach the right people and boost your sales, fast.', bullets: ['Expert in Meta, Google, Amazon', 'Smart ad strategy', 'Creative that sells'] },
    { icon: Sparkles, title: 'Digital Branding', subtitle: 'Stand Out Online', description: 'We design your brand and website to look great and turn visitors into fans.', bullets: ['Cool websites & logos', 'Eye-catching packaging', 'Stories that connect'] },
    { icon: Cpu, title: 'Supply Chain', subtitle: 'Deliver With Ease', description: 'We help you get products made, stocked, and delivered on time, every time.', bullets: ['No wasted stock', 'Fast delivery', 'Trusted partners'] },
    { icon: Brain, title: 'AI & Automation', subtitle: 'Smarter Business', description: 'We build smart tools that save time, predict trends, and help you grow.', bullets: ['Smart pricing', 'Customer insights', 'Easy automation'] },
    { icon: Target, title: 'Sales Expansion', subtitle: 'Reach More People', description: 'We get your brand on top sites and in stores, so more people can buy.', bullets: ['Amazon, Flipkart, Nykaa', 'Retail & online', 'More sales channels'] },
    { icon: Heart, title: 'Founder Coaching', subtitle: 'Grow With Us', description: 'We guide founders and teams to make smart choices and build strong brands.', bullets: ['1:1 mentoring', 'Team building', 'Community support'] },
  ];

  const aiFeatures = [
    { icon: Brain, title: 'Intelligent Brand Analysis', description: 'AI-powered deep analysis of brand positioning, market sentiment, and competitive landscape.' },
    { icon: Cpu, title: 'Predictive Modeling', description: 'Advanced algorithms predict brand performance and optimize strategies for maximum impact.' },
    { icon: BarChart3, title: 'Real-time Analytics', description: 'Continuous monitoring and optimization of brand metrics with instant insights.' },
    { icon: Sparkles, title: 'Creative AI Enhancement', description: 'AI-assisted creative processes that amplify human creativity and design innovation.' }
  ];

  const colorThemes = ['blue', 'purple', 'teal', 'amber', 'pink', 'green'];

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema)
        }}
      />
      
      <style>{`
        .hero-text-gradient-light {
          background: linear-gradient(90deg, #2563eb 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-heading-gradient {
          background: linear-gradient(90deg, #2563eb 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Enhanced focus styles for accessibility */
        .group:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        .group:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-700 { color: #000000; }
          .text-gray-800 { color: #000000; }
          .border-gray-200 { border-color: #000000; }
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans">
        <main role="main">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center px-4" aria-labelledby="hero-heading">
            {/* Hero Background Image with optimizations */}
            <picture>
              <source 
                srcSet="aboutPageImages/about.jpg" 
                type="image/webp"
                media="(min-width: 768px)"
              />
              <img
                src="aboutPageImages/about.jpg"
                alt="Dolfyn Brands team collaborating on innovative brand transformation strategies in a modern workspace"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                style={{ filter: 'brightness(0.85)', opacity: 1 }}
                loading="eager"
                width="1920"
                height="1080"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            {/* Enhanced overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-black/20 z-10" />
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 flex flex-col items-center justify-center w-full"
            >
            <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white drop-shadow-2xl shadow-black/50 text-center leading-tight">
                Meet the Growth Engine
              </h1>
              <p className="sr-only">
                Dolfyn Brands - Your AI-powered partner for brand transformation, performance marketing, and business growth
              </p>
            </motion.div>
          </section>
          {/* Our Story Section */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white" aria-labelledby="our-story-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
              className="container mx-auto px-6 text-center max-w-4xl"
            >
          <motion.h2 
            id="our-story-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-800"
          >
            Our Story
          </motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"
            ></motion.div>             
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-800 leading-relaxed">
                Born from the intersection of creativity and technology, Dolfyn Brands emerged to solve the most challenging brand transformation problems. We believe every brand has the potential to become extraordinary – it just needs the right transformation.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
                Our culture? <span className="text-blue-800 font-semibold">Founder Obsession + Execution Excellence.</span> We hire doers, builders, and believers. Every Dolfyn team member is laser-focused on one mission: making your brand unstoppable.
              </motion.p>
            </motion.div>
          </section>

          {/* Vision & Mission Section - Clean Grid Layout */}
          <section className="py-20 md:py-24 bg-white" aria-labelledby="vision-mission-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
              <motion.h2 
                id="vision-mission-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-900"
              >
                Our Foundation
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
              />
              {/* Enhanced grid with better accessibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {[
                  {icon: Eye, title: 'Vision', content: "To become the world's most trusted brand transformation partner, empowering businesses to achieve unprecedented growth through innovative AI-driven strategies and creative excellence.", theme: 'blue', size:32, ariaLabel: 'Our Vision: Becoming the world\'s most trusted brand transformation partner'},
                  {icon: Target, title: 'Mission', content: 'We transform brands through cutting-edge AI technology, strategic innovation, and creative excellence, delivering measurable results that drive sustainable business growth.', theme: 'green', size:28, ariaLabel: 'Our Mission: Transforming brands through AI technology and innovation'},
                  {icon: Heart, title: 'Values', content: (<ul className="list-disc list-inside text-left space-y-2"><li>Innovation-first approach</li><li>Transparent partnerships</li><li>Measurable results</li><li>Creative excellence</li></ul>), theme: 'pink', size:28, ariaLabel: 'Our Values: Innovation, transparency, results, and excellence'},
                  {icon: Zap, title: 'Strategy', content: 'Our three-pillar approach combines AI-powered insights, creative innovation, and strategic implementation to deliver transformative results.', theme: 'amber', size:28, ariaLabel: 'Our Strategy: Three-pillar approach with AI insights and creative innovation'}
                ].map((card) => {
                    const colors = getColorClasses(card.theme);
                    return (
                        <motion.article 
                            key={card.title} 
                            variants={itemVariants} 
                            className={`group bg-white border-2 border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden h-full ${colors.hoverBorder} shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-blue-500/20`}
                            role="region"
                            aria-labelledby={`${card.title.toLowerCase()}-heading`}
                            aria-describedby={`${card.title.toLowerCase()}-content`}
                            tabIndex={0}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex flex-col items-center h-full w-full">
                                <div className={`p-4 rounded-xl mb-6 bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 shadow-lg ${colors.iconShadow}`}>
                                    <card.icon 
                                      className="text-white" 
                                      size={card.size} 
                                      aria-hidden="true"
                                      role="img"
                                      aria-label={`${card.title} icon`}
                                    />
                                </div>
                                <h3 
                                  id={`${card.title.toLowerCase()}-heading`}
                                  className={`text-3xl font-bold mb-4 text-gray-900 ${colors.hoverText} transition-colors`}
                                >
                                    {card.title}
                                </h3>
                                <div 
                                  id={`${card.title.toLowerCase()}-content`}
                                  className="text-gray-800 text-lg leading-relaxed"
                                >
                                    {card.content}
                                </div>
                            </div>
                        </motion.article>
                    )
                })}
              </div>
            </motion.div>
          </section>

          {/* The Growth Engine Section */}
          <section className="py-20 md:py-32 bg-gray-50" aria-labelledby="growth-engine-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
          <motion.h2 
            id="growth-engine-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-900"
          >
            The Growth Engine
          </motion.h2>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
              ></motion.div>
              <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-xl text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-16"
              >
                From performance marketing to digital branding, from supply chain to AI-driven automation — our in-house talent is what sets your brand apart.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {growthEnginePillars.map((item, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  const colors = getColorClasses(theme);
                  return (
                    <motion.article 
                        key={item.title} 
                        variants={itemVariants} 
                        className={`group bg-white border-2 border-gray-200 rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative overflow-hidden ${colors.hoverBorder} shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-blue-500/20`}
                        role="listitem"
                        aria-labelledby={`pillar-${index}-title`}
                        aria-describedby={`pillar-${index}-description pillar-${index}-features`}
                        tabIndex={0}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start mb-6">
                                <div className={`p-4 rounded-xl mr-4 bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 shadow-lg ${colors.iconShadow} flex-shrink-0`}>
                                    <item.icon 
                                      className="text-white" 
                                      size={32} 
                                      aria-hidden="true"
                                      role="img"
                                      aria-label={`${item.title} service icon`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 
                                      id={`pillar-${index}-title`}
                                      className={`text-2xl font-bold text-gray-900 ${colors.hoverText} transition-colors mb-2`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className={`font-semibold ${colors.textColor} text-lg`}>{item.subtitle}</p>
                                </div>
                            </div>
                            <p 
                              id={`pillar-${index}-description`}
                              className="text-gray-800 mb-6 flex-grow text-left text-lg leading-relaxed"
                            >
                              {item.description}
                            </p>
                            <div id={`pillar-${index}-features`}>
                              <h4 className="sr-only">Key Features</h4>
                              <ul className="text-gray-800 list-disc list-inside space-y-2 text-left text-lg" role="list">
                                  {item.bullets.map((bullet, bulletIndex) => 
                                    <li key={bulletIndex} role="listitem">{bullet}</li>
                                  )}
                              </ul>
                            </div>
                        </div>
                    </motion.article>
                  )
                })}
              </div>
            </motion.div>
          </section>
          
          {/* AI-Powered Innovation Section */}
          <section className="py-20 md:py-32 bg-white" aria-labelledby="ai-innovation-heading">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
            <motion.h2 
            id="ai-innovation-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-900"
          >
            AI Powered Innovation
          </motion.h2>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"
              ></motion.div>
              <motion.p 
                variants={itemVariants} 
                className="text-lg md:text-xl text-gray-800 leading-relaxed text-center max-w-4xl mx-auto mb-16"
              >
                AI is at the core of what we do. Our tech team builds automations, dashboards, and predictive tools to give your brand an unfair advantage. Our AI-first approach delivers unprecedented insights, optimization, and results that traditional methods simply cannot match.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
                {aiFeatures.map((feature, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  const colors = getColorClasses(theme);
                  return (
                    <motion.article
                        key={feature.title}
                        variants={itemVariants}
                        className={`group bg-white border-2 border-gray-200 rounded-2xl p-8 flex h-full flex-col items-center justify-start text-center overflow-hidden transition-all duration-300 cursor-pointer relative ${colors.hoverBorder} shadow-lg hover:shadow-xl focus-within:ring-4 focus-within:ring-blue-500/20`}
                        role="listitem"
                        aria-labelledby={`ai-feature-${index}-title`}
                        aria-describedby={`ai-feature-${index}-description`}
                        tabIndex={0}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <div className={`mb-6 inline-block rounded-xl p-4 shadow-lg bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 ${colors.iconShadow}`}>
                                <feature.icon 
                                  className="text-white" 
                                  size={40} 
                                  aria-hidden="true"
                                  role="img"
                                  aria-label={`${feature.title} AI feature icon`}
                                />
                            </div>
                            <h3 
                              id={`ai-feature-${index}-title`}
                              className={`text-2xl font-bold mb-4 text-gray-900 ${colors.hoverText} transition-colors`}
                            >
                              {feature.title}
                            </h3>
                            <p 
                              id={`ai-feature-${index}-description`}
                              className="text-gray-800 text-lg leading-relaxed"
                            >
                              {feature.description}
                            </p>
                        </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </section>
        </main>
        
        {/* Skip to top link for accessibility */}
        <a 
          href="#hero-heading" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 hover:bg-blue-700"
          aria-label="Skip to top of page"
        >
          Skip to top
        </a>
      </div>
    </>
  );
}