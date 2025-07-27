import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sparkles, Cpu, Brain, Target, Heart, Eye, Zap } from 'lucide-react';

// --- Helper function to get color classes based on theme ---
const getColorClasses = (theme: string) => {
    switch (theme) {
        case 'purple':
            return {
                bg: 'from-purple-500 to-purple-600',
                hoverBorder: 'hover:border-purple-400',
                hoverText: 'group-hover:text-purple-600',
                hoverBg: 'from-purple-100',
                iconShadow: 'shadow-purple-500/30'
            };
        case 'blue':
            return {
                bg: 'from-blue-500 to-blue-600',
                hoverBorder: 'hover:border-blue-400',
                hoverText: 'group-hover:text-blue-600',
                hoverBg: 'from-blue-100',
                iconShadow: 'shadow-blue-500/30'
            };
        case 'teal':
            return {
                bg: 'from-teal-400 to-teal-500',
                hoverBorder: 'hover:border-teal-400',
                hoverText: 'group-hover:text-teal-600',
                hoverBg: 'from-teal-100',
                iconShadow: 'shadow-teal-500/30'
            };
        case 'amber':
             return {
                bg: 'from-amber-400 to-amber-500',
                hoverBorder: 'hover:border-amber-400',
                hoverText: 'group-hover:text-amber-600',
                hoverBg: 'from-amber-100',
                iconShadow: 'shadow-amber-500/30'
            };
        case 'pink':
             return {
                bg: 'from-pink-500 to-rose-500',
                hoverBorder: 'hover:border-pink-400',
                hoverText: 'group-hover:text-pink-600',
                hoverBg: 'from-pink-100',
                iconShadow: 'shadow-pink-500/30'
            };
        case 'green':
             return {
                bg: 'from-green-500 to-emerald-500',
                hoverBorder: 'hover:border-green-400',
                hoverText: 'group-hover:text-green-600',
                hoverBg: 'from-green-100',
                iconShadow: 'shadow-green-500/30'
            };
        default:
            return {
                bg: 'from-gray-500 to-gray-600',
                hoverBorder: 'hover:border-gray-400',
                hoverText: 'group-hover:text-gray-600',
                hoverBg: 'from-gray-100',
                iconShadow: 'shadow-gray-500/30'
            };
    }
};


// --- Main App Component ---
export default function App() {
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
        /* Removed old card styles, as they are now handled by Tailwind classes */
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center px-4">
            {/* Hero Background Image */}
            <img
              src="/about.jpg"
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
              style={{ filter: 'brightness(0.85)', opacity: 1 }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-50/20 to-white/20 z-10" />
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 flex flex-col items-top justify-center w-full"
            >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white drop-shadow-lg">
                Meet the Growth Engine
              </h1>
            </motion.div>
          </section>
          {/* Our Story Section */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={containerVariants}
              className="container mx-auto px-6 text-center max-w-4xl"
            >
          <motion.h2 
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
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Born from the intersection of creativity and technology, Dolfyn Brands emerged to solve the most challenging brand transformation problems. We believe every brand has the potential to become extraordinary – it just needs the right transformation.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                Our culture? <span className="text-blue-700 font-semibold">Founder Obsession + Execution Excellence.</span> We hire doers, builders, and believers. Every Dolfyn team member is laser-focused on one mission: making your brand unstoppable.
              </motion.p>
            </motion.div>
          </section>

          {/* Vision & Mission Section - Clean Grid Layout */}
          <section className="py-20 md:py-24 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
              {/* MODIFIED: Changed to a clean 2x2 grid on medium screens and up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {[
                  {icon: Eye, title: 'Vision', content: "To become the world's most trusted brand transformation partner, empowering businesses to achieve unprecedented growth through innovative AI-driven strategies and creative excellence.", theme: 'blue', size:32},
                  {icon: Target, title: 'Mission', content: 'We transform brands through cutting-edge AI technology, strategic innovation, and creative excellence, delivering measurable results that drive sustainable business growth.', theme: 'green', size:28},
                  {icon: Heart, title: 'Values', content: (<ul className="list-disc list-inside text-left"><li>Innovation-first approach</li><li>Transparent partnerships</li><li>Measurable results</li><li>Creative excellence</li></ul>), theme: 'pink', size:28},
                  {icon: Zap, title: 'Strategy', content: 'Our three-pillar approach combines AI-powered insights, creative innovation, and strategic implementation to deliver transformative results.', theme: 'amber', size:28}
                ].map((card) => {
                    const colors = getColorClasses(card.theme);
                    return (
                        <motion.div 
                            key={card.title} 
                            variants={itemVariants} 
                            // MODIFIED: Removed asymmetric layout classes
                            className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer relative overflow-hidden h-full ${colors.hoverBorder}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <div className="relative z-10 flex flex-col items-center h-full w-full">
                                <span className={`p-3 rounded-xl mb-4 bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 shadow-lg ${colors.iconShadow}`}>
                                    <card.icon className="text-white" size={card.size} />
                                </span>
                                <h3 className={`text-2xl font-bold mb-3 text-gray-800 ${colors.hoverText} transition-colors`}>
                                    {card.title}
                                </h3>
                                <div className="text-gray-600 text-base">
                                    {card.content}
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
              </div>
            </motion.div>
          </section>

          {/* The Growth Engine Section */}
          <section className="py-20 md:py-32 bg-gray-50">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-800"
          >
            The Growth Engine
          </motion.h2>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"
              ></motion.div>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16">
                From performance marketing to digital branding, from supply chain to AI-driven automation — our in-house talent is what sets your brand apart.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {growthEnginePillars.map((item, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  const colors = getColorClasses(theme);
                  return (
                    <motion.div 
                        key={item.title} 
                        variants={itemVariants} 
                        // MODIFIED: Removed the specific 'spanClass' for a uniform grid
                        className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-pointer relative overflow-hidden ${colors.hoverBorder}`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center mb-4">
                                <span className={`p-3 rounded-xl mr-4 bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 shadow-lg ${colors.iconShadow}`}>
                                    <item.icon className="text-white" size={28} />
                                </span>
                                <div>
                                    <h3 className={`text-xl font-bold text-gray-800 ${colors.hoverText} transition-colors`}>
                                        {item.title}
                                    </h3>
                                    <p className="font-semibold text-gray-500 text-sm">{item.subtitle}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4 flex-grow text-left text-base">{item.description}</p>
                            <ul className="text-gray-600 list-disc list-inside space-y-1 text-left text-base">
                                {item.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </section>
          
          {/* AI-Powered Innovation Section */}
          <section className="py-20 md:py-32 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-3 text-center tracking-tight text-gray-800"
          >
            AI Powered Innovation
          </motion.h2>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12 rounded-full"
              ></motion.div>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16">
                AI is at the core of what we do. Our tech team builds automations, dashboards, and predictive tools to give your brand an unfair advantage. Our AI-first approach delivers unprecedented insights, optimization, and results that traditional methods simply cannot match.
              </motion.p>
              {/* MODIFIED: Changed grid to md:grid-cols-2 and lg:grid-cols-4 for a clean layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiFeatures.map((feature, index) => {
                  const theme = colorThemes[index % colorThemes.length];
                  const colors = getColorClasses(theme);
                  return (
                    <motion.div
                        key={feature.title}
                        variants={itemVariants}
                        // MODIFIED: Removed the col-span function for a uniform grid
                        className={`group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 flex h-full flex-col items-center justify-start text-center overflow-hidden transition-all duration-300 cursor-pointer relative ${colors.hoverBorder}`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.hoverBg} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <div className="relative z-10 flex flex-col items-center h-full w-full">
                            <span className={`mb-4 inline-block rounded-xl p-4 shadow-lg bg-gradient-to-br ${colors.bg} transition-all duration-500 group-hover:scale-110 ${colors.iconShadow}`}>
                                <feature.icon className="text-white" size={32} />
                            </span>
                            <h3 className={`text-xl font-bold mb-2 text-gray-800 ${colors.hoverText} transition-colors`}>{feature.title}</h3>
                            <p className="text-gray-600 text-base">{feature.description}</p>
                        </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}