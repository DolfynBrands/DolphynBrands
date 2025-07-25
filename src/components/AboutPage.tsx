import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Sparkles, Cpu, Brain, Target, Heart, Eye, Zap } from 'lucide-react';

// --- Define team member types and data ---
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Nithin C Hassan',
    role: 'Co-Founder / Managing Partner',
    imageUrl: '/ourTeam/1.png',
    linkedIn: 'https://www.linkedin.com/in/nithin-hassan/',
  },
  {
    name: 'Sai Rishi',
    role: 'Web Developer',
    imageUrl: '/ourTeam/2.png',
    linkedIn: 'https://www.linkedin.com/in/sai-rishi/',
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic Designer and Illustrator',
    imageUrl: '/ourTeam/3.png',
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar/',
  },
  {
    name: 'Jane Doe',
    role: 'Chief Operating Officer',
    imageUrl: 'https://placehold.co/400x400/E2E8F0/4A5568?text=Jane',
    linkedIn: '#',
  },
  {
    name: 'John Smith',
    role: 'Head of Marketing',
    imageUrl: 'https://placehold.co/400x400/E2E8F0/4A5568?text=John',
    linkedIn: '#',
  },
];


// --- Main App Component ---
export default function AboutPage() {
  // --- CAROUSEL LOGIC ---
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust this value based on your card width + gap
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust this value based on your card width + gap
        behavior: 'smooth',
      });
    }
  };


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

    const getColSpanClassForAIFeatures = (index: number) => {
    const patternIndex = index % 4;
    switch (patternIndex) {
      case 0: return 'md:col-span-1';
      case 1: return 'md:col-span-2';
      case 2: return 'md:col-span-2';
      case 3: return 'md:col-span-1';
      default: return 'md:col-span-1';
    }
  };

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
        .playbook-card-light {
          background: linear-gradient(135deg, #f0f7ff 60%, #f3e8ff 100%);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        .playbook-card-light:hover {
          border-color: #a5b4fc;
          box-shadow: 0 10px 15px -3px rgb(59 130 246 / 0.08), 0 4px 6px -4px rgb(139 92 246 / 0.08);
          transform: translateY(-5px) scale(1.03);
        }
        .team-member-card-light {
          background: linear-gradient(135deg, #e0f2fe 60%, #f3e8ff 100%);
          border: 1px solid #e0e7ff;
          transition: transform 0.3s ease, box-shadow 0.3s;
        }
        .team-member-card-light:hover {
          transform: translateY(-10px) scale(1.04);
          border-color: #818cf8;
          box-shadow: 0 8px 24px 0 rgb(59 130 246 / 0.10);
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans">
        <main>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center text-center px-4">
            {/* Hero Background Image */}
            <img
              src="/image.jpg "
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover object-center z-0"
              style={{ filter: 'brightness(0.85)',opacity:1}}
            />
            {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-50/20 to-white/20 z-10" />             {/* Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 flex flex-col items-center justify-center w-full"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase hero-text-black drop-shadow-lg text-white">
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
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 section-heading-gradient">Our Story</motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Born from the intersection of creativity and technology, Dolfyn Brands emerged to solve the most challenging brand transformation problems. We believe every brand has the potential to become extraordinary – it just needs the right transformation.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4">
                Our culture? <span className="text-blue-700 font-semibold">Founder Obsession + Execution Excellence.</span> We hire doers, builders, and believers. Every Dolfyn team member is laser-focused on one mission: making your brand unstoppable.
              </motion.p>
            </motion.div>
          </section>

          {/* Vision & Mission Section - Asymmetric Layout */}
          <section className="py-20 md:py-24 bg-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Vision Card */}
                <motion.div variants={itemVariants} className="playbook-card-light min-h-[260px] p-8 rounded-lg flex flex-col items-center group relative overflow-hidden h-full">
                  {/* Default: Icon + Gradient Header */}
                  <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                    <span className="p-3 rounded-lg mb-4 bg-gradient-to-br from-blue-400 to-purple-400">
                      <Eye className="text-white" size={32}/>
                    </span>
                    <h3 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      Vision
                    </h3>
                  </div>
                  {/* On Hover: Show Content */}
                  <div className="flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute inset-0 bg-white/90 rounded-lg p-6">
                    <p className="text-gray-700 text-3xl text-center">
                      To become the world&apos;s most trusted brand transformation partner, empowering businesses to achieve unprecedented growth through innovative AI-driven strategies and creative excellence.
                    </p>
                  </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-8">
                  {/* Mission Card */}
                  <motion.div variants={itemVariants} className="playbook-card-light min-h-[180px] p-6 rounded-lg flex flex-col items-center group relative overflow-hidden">
                    <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                      <span className="p-2 rounded-lg mb-4 bg-gradient-to-br from-green-400 to-blue-400">
                        <Target className="text-white" size={28}/>
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                        Mission
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute inset-0 bg-white/90 rounded-lg p-4">
                      <p className="text-gray-700 text-center text-2xl">
                        We transform brands through cutting-edge AI technology, strategic innovation, and creative excellence, delivering measurable results that drive sustainable business growth.
                      </p>
                    </div>
                  </motion.div>
                  {/* Values Card */}
                  <motion.div variants={itemVariants} className="playbook-card-light min-h-[180px] p-6 rounded-lg flex flex-col items-center group relative overflow-hidden">
                    <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                      <span className="p-2 rounded-lg mb-4 bg-gradient-to-br from-pink-400 to-purple-400">
                        <Heart className="text-white" size={28}/>
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                        Values
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute inset-0 bg-white/90 rounded-lg p-4">
                      <ul className="text-gray-700 list-disc list-inside text-left text-2xl">
                        <li>Innovation-first approach</li>
                        <li>Transparent partnerships</li>
                        <li>Measurable results</li>
                        <li>Creative excellence</li>
                      </ul>
                    </div>
                  </motion.div>
                  {/* Strategy Card */}
                  <motion.div variants={itemVariants} className="playbook-card-light min-h-[180px] p-6 rounded-lg flex flex-col items-center group relative overflow-hidden">
                    <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                      <span className="p-2 rounded-lg mb-4 bg-gradient-to-br from-yellow-400 to-pink-400">
                        <Zap className="text-white" size={28}/>
                      </span>
                      <h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                        Strategy
                      </h3>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute inset-0 bg-white/90 rounded-lg p-4">
                      <p className="text-gray-700 text-center text-2xl">
                        Our three-pillar approach combines AI-powered insights, creative innovation, and strategic implementation to deliver transformative results.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Growth Engine Section */}
          <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-white">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-6 section-heading-gradient">The Growth Engine</motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16">
                From performance marketing to digital branding, from supply chain to AI-driven automation — our in-house talent is what sets your brand apart.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {growthEnginePillars.map((item, index) => {
                  const spanClass = index === 0 || index === 3 ? 'lg:col-span-2' : 'lg:col-span-1';
                  const iconBg =
                    index % 2 === 0
                      ? "bg-gradient-to-br from-blue-400 to-purple-400"
                      : "bg-gradient-to-br from-purple-400 to-blue-400";
                  return (
                    <motion.div key={item.title} variants={itemVariants} className={`playbook-card-light min-h-[260px] p-8 rounded-lg flex flex-col items-center group relative overflow-hidden ${spanClass}`}>
                      {/* Default: Icon + Gradient Header */}
                      <div className="flex flex-col items-center justify-center w-full h-full transition-all duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                        <span className={`p-3 rounded-lg mb-4 ${iconBg}`}>
                          <item.icon className="text-white" size={32} />
                        </span>
                        <h3 className="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      </div>
                      {/* On Hover: Show Content */}
                      <div className="flex flex-col items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute inset-0 bg-white/90 rounded-lg p-6">
                        <p className="font-semibold text-blue-600 mb-2 text-2xl">{item.subtitle}</p>
                        <p className="text-gray-700 mb-2 flex-grow text-center text-2xl">{item.description}</p>
                        <ul className="text-gray-700 list-disc list-inside space-y-1 text-left text-2xl">
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
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-6 section-heading-gradient">AI-Powered Innovation</motion.h2>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-16">
                AI is at the core of what we do. Our tech team builds automations, dashboards, and predictive tools to give your brand an unfair advantage. Our AI-first approach delivers unprecedented insights, optimization, and results that traditional methods simply cannot match.
              </motion.p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiFeatures.map((feature, index) => {
                  const iconBg = index % 2 === 0 ? "bg-gradient-to-br from-blue-500 to-green-400" : "bg-gradient-to-br from-purple-500 to-blue-400";
                  const headingGradient = "bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent";
                  return (
                    <motion.div
                      key={feature.title}
                      variants={itemVariants}
                      className={`${getColSpanClassForAIFeatures(index)} group relative flex h-full min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white/60 p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-2xl border border-gray-200/50`}
                    >
                      <div className="flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-95">
                        <span className={`mb-6 inline-block rounded-2xl p-4 shadow-md ${iconBg}`}>
                          <feature.icon className="text-white" size={40} />
                        </span>
                        <h3 className={`text-2xl font-bold ${headingGradient}`}>{feature.title}</h3>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <p className="text-gray-700 text-lg md:text-3xl">{feature.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>


          {/* Our Leadership Section -- NOW WITH INTEGRATED CAROUSEL */}
          <section className="py-20 md:py-32 bg-gray-50">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="container mx-auto px-6"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Our Leadership</motion.h2>
              
              <motion.div variants={itemVariants} className="relative w-full max-w-6xl mx-auto flex items-center">
                {/* Left Scroll Button */}
                <button
                  onClick={scrollLeft}
                  className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white focus:outline-none transition-transform transform hover:scale-110"
                  aria-label="Scroll Left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4 py-4 w-full"
                  style={{ scrollbarWidth: 'none' }} // Hides scrollbar
                >
                  {leadershipTeam.map((member, index) => (
                    <div key={index} className="flex-shrink-0 snap-start">
                      <motion.div
                        variants={itemVariants}
                        key={member.name}
                        className="team-member-card-light flex flex-col items-center bg-white rounded-xl shadow-lg border border-gray-200 p-6 transition-transform duration-300 hover:-translate-y-2 w-72" // Fixed width for each card
                      >
                        <div className="w-40 h-40 bg-gray-100 overflow-hidden mb-6 rounded-full shadow-md flex items-center justify-center">
                          <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                        <p className="text-lg text-gray-700 text-center mb-4">{member.role}</p>
                        <a
                          href={member.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center font-medium"
                        >
                          <span>LinkedIn</span>
                          <svg
                            className="inline-block ml-1 mb-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="#2563eb"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                          </svg>
                        </a>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Right Scroll Button */}
                <button
                  onClick={scrollRight}
                  className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white focus:outline-none transition-transform transform hover:scale-110"
                  aria-label="Scroll Right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>

            </motion.div>
          </section>
        </main>
      </div>
    </>
  );
}
