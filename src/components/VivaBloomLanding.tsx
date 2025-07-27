import React, { useRef } from 'react';

const VIVA_BLOOM_Fertilizers = [
  '/VivaBloomImages/Fertilizers/Fertilizer1.jpg',
  '/VivaBloomImages/Fertilizers/Fertilizer3.jpg',
  '/VivaBloomImages/Fertilizers/Fertilizer2.jpg',
];

const VIVA_BLOOM_PLANTERS = [
  '/VivaBloomImages/Planters/1.png',
  '/VivaBloomImages/Planters/2.png',
  '/VivaBloomImages/Planters/3.png',
  '/VivaBloomImages/Planters/4.png',
  '/VivaBloomImages/Planters/5.png',
  '/VivaBloomImages/Planters/6.png',
  '/VivaBloomImages/Planters/7.png',
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
    [...VIVA_BLOOM_Fertilizers, ...VIVA_BLOOM_Fertilizers, ...VIVA_BLOOM_Fertilizers],
    [...shuffle(VIVA_BLOOM_PLANTERS), ...shuffle(VIVA_BLOOM_PLANTERS)],
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/VivaBloomImages/hero.png"
            alt="Viva Bloom Gardening Supplies Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Horizontal Carousel Section */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden py-8 md:py-16 bg-gradient-to-b from-green-50 to-white"
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
            className={`flex gap-4 md:gap-8 mb-6 md:mb-8 ${idx % 2 === 0 ? 'vivabloom-scroll-left' : 'vivabloom-scroll-right'}`}
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
                className="flex-none w-36 h-44 sm:w-48 sm:h-60 md:w-64 md:h-80 relative group overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt="Viva Bloom Gardening Product"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Tiled Section: Fullscreen Image with Arc-styled Text Overlay */}
      {/* Section 1: Our Why */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Why We Began</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700 text-justify">Viva Bloom is a purpose-driven gardening brand built on the principles of sustainability, quality, and conscious living. Every product is crafted with care—sourced from sustainable materials and rooted in traditional gardening wisdom. By partnering with local artisans, Viva Bloom supports ethical sourcing, fair trade practices, and sustainable livelihoods, while delivering premium gardening products that honor both people and planet.</p>
          <div className="flex gap-4 mb-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold">Our Story</button>
            <a className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-bold"
            href="/team">Meet the Founders</a>
          </div>
          <div className="flex gap-8">
            <div>
              <span className="text-2xl font-bold text-green-800">2020</span>
              <span className="block text-xs text-gray-700">Founded</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-green-800">100%</span>
              <span className="block text-xs text-gray-700">Sustainable</span>
            </div>
          </div>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-600 to-teal-700 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/products.jpg" alt="Why We Began" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 2: Background */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10 bg-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Background</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-green-800 text-justify">
            Viva Bloom champions sustainable, conscious gardening through carefully sourced, premium-grade tools and supplies. Rooted in traditional craftsmanship and environmental stewardship, our mission is to foster a regenerative bond with the earth and its communities. We needed more than design—a unified brand voice that instantly conveys our purpose, earning trust and inspiring belief in every touchpoint.
          </p>
          <div className="flex gap-8">
            <div>
              <span className="text-2xl font-bold text-green-800">20+</span>
              <span className="block text-xs text-green-800">Product Categories</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-green-800">100%</span>
              <span className="block text-xs text-green-800">Eco-friendly</span>
            </div>
          </div>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-600 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/mission.jpg" alt="Background" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 3: Our Craft */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">We Make What You Trust</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700 text-justify">From design to packaging, every step is handled with care. Sustainable materials, eco-friendly packaging, and product traceability are our standards.</p>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-green-900 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/sustainable.jpg" alt="Our Craft" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 4: Sustainability Impact */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Sustainability is Not a Buzzword Here</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700 text-justify">Your purchase directly supports local artisans and sustainable practices through our fair and eco-friendly partnership model.
          <br/>Experience the difference of premium gardening tools, meticulously crafted from materials sourced from the best suppliers worldwide.
          <br/> Making a positive impact with every choice, from our sustainable operations to our low-waste packaging.</p>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-700 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/community.jpg" alt="Impact" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 5: Global Footprint */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Crafted with Care.<br/> Trusted Worldwide.
          </h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700 text-justify">Our products uphold the highest standards of quality and sustainability—resonating with conscious gardeners across the globe.</p>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-emerald-700 to-green-900 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/advice.jpg" alt="Global Map" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 6: B2B/What Makes Us Different */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-green-800">Experience Quality. Build a Legacy.</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-700"></p>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-900 to-teal-700 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaBloomImages/products.jpg" alt="B2B Services" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
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
    </div>
  );
};

export default VivaBloomLanding;