import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Sample gardening product images - these would need to be replaced with actual Viva Bloom images
const VIVA_BLOOM_TOOLS = [
  '/VivaBloomImages/Tools/garden-trowel.jpg',
  '/VivaBloomImages/Tools/pruning-shears.jpg',
  '/VivaBloomImages/Tools/garden-fork.jpg',
  '/VivaBloomImages/Tools/watering-can.jpg',
  '/VivaBloomImages/Tools/garden-gloves.jpg',
  '/VivaBloomImages/Tools/rake.jpg',
  '/VivaBloomImages/Tools/spade.jpg',
  '/VivaBloomImages/Tools/hoe.jpg',
];

const VIVA_BLOOM_SEEDS = [
  '/VivaBloomImages/Seeds/tomato-seeds.jpg',
  '/VivaBloomImages/Seeds/herb-seeds.jpg',
  '/VivaBloomImages/Seeds/flower-seeds.jpg',
  '/VivaBloomImages/Seeds/vegetable-seeds.jpg',
];

const VIVA_BLOOM_PLANTERS = [
  '/VivaBloomImages/Planters/ceramic-planter.jpg',
  '/VivaBloomImages/Planters/hanging-planter.jpg',
  '/VivaBloomImages/Planters/wooden-planter.jpg',
  '/VivaBloomImages/Planters/terracotta-planter.jpg',
];

const PRODUCT_CATEGORIES = [
  { name: 'Premium Tools', image: '/VivaBloomImages/Tools/garden-trowel.jpg', description: 'Crafted for durability and precision' },
  { name: 'Organic Seeds', image: '/VivaBloomImages/Seeds/tomato-seeds.jpg', description: 'Non-GMO, heirloom varieties' },
  { name: 'Designer Planters', image: '/VivaBloomImages/Planters/ceramic-planter.jpg', description: 'Elegant designs for any space' },
  { name: 'Garden Essentials', image: '/VivaBloomImages/Tools/watering-can.jpg', description: 'Everything your garden needs' },
];

function shuffle(arr: string[]): string[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const VivaBloomLanding: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Prepare shuffled and duplicated images for each row
  const rows = [
    [...shuffle(VIVA_BLOOM_TOOLS), ...shuffle(VIVA_BLOOM_TOOLS)],
    [...shuffle(VIVA_BLOOM_SEEDS), ...shuffle(VIVA_BLOOM_SEEDS)],
    [...shuffle(VIVA_BLOOM_PLANTERS), ...shuffle(VIVA_BLOOM_PLANTERS)],
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section - Full-width with luxury feel */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/VivaBloomImages/hero.jpg"
            alt="Viva Bloom Gardening Supplies Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg font-serif tracking-wide">
            <span className="block mb-2">VIVA BLOOM</span>
            <span className="text-3xl md:text-4xl font-light block mt-4">PREMIUM GARDENING</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md font-light tracking-wider">
            Elevating the art of gardening with exceptional tools and supplies
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg tracking-widest uppercase font-light transition-colors">
            Discover Collection
          </button>
        </motion.div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </div>
      </section>

      {/* Brand Statement - Full-width luxury section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light text-green-800 mb-8 tracking-wide">THE ESSENCE OF VIVA BLOOM</h2>
            <p className="text-xl md:text-2xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Crafting exceptional gardening tools and supplies that blend artistry with functionality. 
              Each piece is designed with meticulous attention to detail, ensuring both beauty and performance.
            </p>
            <div className="w-24 h-0.5 bg-green-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid - Luxury style */}
      <section className="relative w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-green-800 mb-4 tracking-wide">CURATED COLLECTIONS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our meticulously crafted product lines</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif tracking-wide mb-2">{category.name}</h3>
                    <p className="text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Horizontal Carousel Section - Refined version */}
      <section 
        ref={containerRef}
        className="relative w-full overflow-hidden py-16 md:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-green-800 mb-4 tracking-wide">FEATURED PRODUCTS</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A glimpse of our exceptional collection</p>
          </motion.div>
        </div>
        
        <div className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          {rows.map((images, idx) => (
            <div
              key={idx}
              ref={rowRefs[idx]}
              id={`row-${idx + 1}`}
              className={`flex gap-4 md:gap-8 mb-6 md:mb-12 ${idx % 2 === 0 ? 'vivabloom-scroll-left' : 'vivabloom-scroll-right'}`}
              style={{ 
                animationDuration: '50s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationPlayState: 'running'
              }}
            >
              {images.map((src, imgIdx) => (
                <div 
                  key={imgIdx} 
                  className="flex-none w-48 h-60 sm:w-56 sm:h-72 md:w-72 md:h-96 relative group overflow-hidden"
                >
                  <img
                    src={src}
                    alt="Viva Bloom Gardening Product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif tracking-wide mb-1">Premium Product</h3>
                    <p className="text-sm font-light">Discover more</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Our Heritage - Full-width luxury section */}
      <section className="relative w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/VivaBloomImages/mission.jpg" 
                alt="Our Heritage" 
                className="w-full h-auto object-cover shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-green-800 mb-6 tracking-wide">OUR HERITAGE</h2>
              <div className="w-16 h-0.5 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Founded in 2020, Viva Bloom emerged from a passion for sustainable gardening and a vision to create tools that are both beautiful and functional. Our artisans combine traditional craftsmanship with innovative design to produce gardening implements of exceptional quality.
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Each Viva Bloom product represents our commitment to excellence, sustainability, and the timeless art of gardening. We believe that the tools you use should enhance your connection to nature and elevate your gardening experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-light text-green-800 block mb-1">2020</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Established</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-light text-green-800 block mb-1">100%</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Sustainable</span>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl font-light text-green-800 block mb-1">Global</span>
                  <span className="text-sm uppercase tracking-wider text-gray-600">Presence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Section - Full-width with parallax effect */}
      <section className="relative w-full py-32 bg-white overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-fixed" style={{ 
            backgroundImage: 'url("/VivaBloomImages/sustainable.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-8 tracking-wide">COMMITMENT TO SUSTAINABILITY</h2>
            <div className="w-24 h-0.5 bg-green-400 mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-16">
              Our dedication to environmental stewardship guides every aspect of our business, from sourcing raw materials to packaging and distribution.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-light mb-4">75%</div>
                <div className="text-sm uppercase tracking-widest mb-4">Recycled Materials</div>
                <p className="text-sm font-light opacity-80">Our products incorporate recycled materials without compromising quality or durability</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-light mb-4">Zero</div>
                <div className="text-sm uppercase tracking-widest mb-4">Plastic Packaging</div>
                <p className="text-sm font-light opacity-80">All our packaging is biodegradable and made from sustainable sources</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-light mb-4">1%</div>
                <div className="text-sm uppercase tracking-widest mb-4">For The Planet</div>
                <p className="text-sm font-light opacity-80">We donate 1% of annual sales to environmental nonprofits</p>
              </motion.div>
            </div>
            
            <button className="border border-white hover:bg-white hover:text-green-800 text-white px-10 py-4 text-lg tracking-widest uppercase font-light transition-colors duration-300">
              Our Sustainability Report
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Our Products */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Quality Products</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700 text-justify">
            From essential gardening tools to specialized equipment, organic seeds to premium soil amendments, we offer everything you need to create and maintain a beautiful, productive garden. Our products are designed for durability, functionality, and ease of use.
          </p>
          <div className="flex gap-4 mb-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold">Shop Now</button>
            <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-bold">Product Guide</button>
          </div>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-700 to-blue-600 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/products.jpg" alt="Our Products" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Expert Knowledge Section - Luxury style */}
      <section className="relative w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-serif font-light text-green-800 mb-6">EXPERT KNOWLEDGE</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of master gardeners and horticultural specialists bring decades of expertise to every consultation. We offer personalized guidance to help you create and maintain extraordinary gardens that reflect your unique vision.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-2">Personalized Consultations</h4>
                  <p className="text-gray-600">Tailored advice for your specific garden environment and goals</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-2">Seasonal Masterclasses</h4>
                  <p className="text-gray-600">Exclusive workshops led by renowned gardening experts</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-2">Digital Garden Planning</h4>
                  <p className="text-gray-600">Advanced visualization tools to design your perfect outdoor space</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-green-700 mb-2">Curated Resource Library</h4>
                  <p className="text-gray-600">Exclusive access to our comprehensive gardening knowledge base</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg tracking-wider uppercase font-light transition-colors duration-300">
                  Schedule Consultation
                </button>
                <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-3 text-lg tracking-wider uppercase font-light transition-colors duration-300">
                  Explore Resources
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-green-600"></div>
                <img 
                  src="/VivaBloomImages/advice.jpg" 
                  alt="Expert Gardening Knowledge" 
                  className="w-full h-auto object-cover shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-green-600"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section - Luxury style with testimonials */}
      <section className="relative w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-green-800 mb-4 tracking-wide">THE VIVA BLOOM SOCIETY</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join our exclusive community of garden enthusiasts and horticultural connoisseurs</p>
              <div className="w-24 h-0.5 bg-green-600 mx-auto mt-8"></div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/VivaBloomImages/community.jpg" 
                  alt="Community Member" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-green-800">Elizabeth Harmon</h4>
                  <p className="text-sm text-gray-500">Garden Designer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The quality of Viva Bloom's products has transformed my client projects. Their attention to detail and commitment to excellence is unmatched in the industry."
              </p>
              <div className="flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/VivaBloomImages/community.jpg" 
                  alt="Community Member" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-green-800">James Bennett</h4>
                  <p className="text-sm text-gray-500">Master Gardener</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "As someone who has been gardening for over 30 years, I can confidently say that Viva Bloom offers the finest gardening implements I've ever used."
              </p>
              <div className="flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gray-50 p-8 shadow-sm"
            >
              <div className="flex items-center mb-6">
                <img 
                  src="/VivaBloomImages/community.jpg" 
                  alt="Community Member" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-green-800">Sophia Chen</h4>
                  <p className="text-sm text-gray-500">Urban Garden Specialist</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">
                "The Viva Bloom community has been an invaluable resource for my urban gardening projects. The knowledge sharing and support are truly exceptional."
              </p>
              <div className="flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif font-light text-green-800 mb-8">BECOME A MEMBER</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              Join our exclusive community to access member-only events, early product releases, personalized gardening plans, and connect with fellow enthusiasts who share your passion for exceptional gardens.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 text-lg tracking-widest uppercase font-light transition-colors duration-300 mx-auto">
              Join The Society
            </button>
          </motion.div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes vivabloom-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes vivabloom-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .vivabloom-scroll-left {
          animation-name: vivabloom-scroll-left;
        }
        .vivabloom-scroll-right {
          animation-name: vivabloom-scroll-right;
        }
      `}</style>
      {/* Newsletter Section - Luxury style */}
      <section className="relative w-full py-24 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-wide">CURATED INSPIRATION</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
              Subscribe to receive our seasonal journal featuring exclusive gardening insights, new collection previews, and invitations to member-only events.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-8">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-transparent border border-white/30 px-6 py-4 text-white placeholder-white/50 flex-grow focus:outline-none focus:border-white"
              />
              <button className="bg-white text-green-900 px-8 py-4 uppercase tracking-widest font-light hover:bg-green-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm opacity-70">
              By subscribing, you agree to receive Viva Bloom communications and accept our privacy policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VivaBloomLanding;