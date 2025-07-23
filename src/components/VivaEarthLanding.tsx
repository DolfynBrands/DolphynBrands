import React, { useRef } from 'react';

const VIVA_EARTH_BOTTLEDROPPER = [
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Lavender 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Peppermint 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Tea Tree 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Eucalyptus 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Lemongrass 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Rosemary 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Clove 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Spearmint 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Lemon 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Brazilian Orange 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Cedarwood 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Frankincense 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Clary Sage 4oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Oregano 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Patchouli 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Rose 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Sandalwood 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Ylang ylang 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Bergamot 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Geranium 1oz.jpg',
  '/VivaEarthImages/BottleDropper/Amazon content bottel- Helichrysum 1oz.jpg',
];
const VIVA_EARTH_BOTTLE = [
  '/VivaEarthImages/Bottle/Bottle1.jpg',
  '/VivaEarthImages/Bottle/Bottle2.jpg',
  '/VivaEarthImages/Bottle/Bottle3.jpg',
  '/VivaEarthImages/Bottle/Bottle4.jpg'
];
const VIVA_EARTH_BOTTLE_CARTONS = [
  '/VivaEarthImages/BottleCartons/Carton Box- Bergamot 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Cedarwood 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Clove 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Frankincense 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Geranium 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Lavender 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Oregano 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Patchouli 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Peppermint 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Sandalwood 1oz.jpg',
  '/VivaEarthImages/BottleCartons/Carton Box- Ylang ylang 1oz.jpg'
];
function shuffle(arr: string[]): string[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const VivaEarthLanding: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Prepare shuffled and duplicated images for each row
  const rows = [
    [...shuffle(VIVA_EARTH_BOTTLEDROPPER), ...shuffle(VIVA_EARTH_BOTTLEDROPPER)],
    [...shuffle(VIVA_EARTH_BOTTLE), ...shuffle(VIVA_EARTH_BOTTLE)],
    [...shuffle(VIVA_EARTH_BOTTLE_CARTONS), ...shuffle(VIVA_EARTH_BOTTLE_CARTONS)],
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/VivaEarthImages/hero.png"
            alt="VivaEarth Essential Oils Hero"
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
            className={`flex gap-4 md:gap-8 mb-6 md:mb-8 ${idx % 2 === 0 ? 'vivaearth-scroll-left' : 'vivaearth-scroll-right'}`}
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
                  alt="VivaEarth Essential Oil"
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
      <section className="relative w-full min-h-[60vh] md:min-h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* Fullscreen background image (desktop) */}
        <img
          src="/VivaEarthImages/viva_Earth.png"
          alt="VivaEarth"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
          style={{filter: 'brightness(0.92)'}}
          draggable={false}
        />
        {/* Mobile image on top */}
        <img
          src="/VivaEarthImages/viva_Earth.png"
          alt="VivaEarth"
          className="block md:hidden w-full h-56 sm:h-72 object-cover z-0"
          style={{filter: 'brightness(0.92)'}}
          draggable={false}
        />
        {/* Text overlay (all screens) */}
        <div
          className="flex flex-col justify-start items-center absolute right-0 top-0 h-1/2 w-full p-8 md:p-16 z-10"
          style={{
            minHeight: '60vh',
          }}
        >
          <h3 className="text-3xl md:text-7xl font-extrabold mb-4 font-serif leading-tight z-10 text-center bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            Purity from the Source
          </h3>
        </div>
      </section>

      {/* Section 1: Our Why */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2A4E44]">Why We Began</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#333] text-justify">Viva Earth Organics is a purpose-driven wellness brand built on the principles of regeneration, sustainability, and conscious living. Every product is crafted with care—sourced from organically grown farms and rooted in traditional botanical wisdom. By partnering with rural farming communities, Viva Earth supports ethical sourcing, fair trade practices, and sustainable livelihoods, while delivering therapeutic-grade wellness products that honor both people and planet.</p>
          <div className="flex gap-4 mb-8">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold">Our Story</button>
            <a className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-bold"
            href="/team">Meet the Founders</a>
          </div>
          <div className="flex gap-8">
            <div>
              <span className="text-2xl font-bold text-[#2A4E44]">2019</span>
              <span className="block text-xs text-[#333]">Founded</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#2A4E44]">100%</span>
              <span className="block text-xs text-[#333]">Ethical Sourcing</span>
            </div>
          </div>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-purple-600 to-green-700 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/1.png" alt="Why We Began" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 2: It Starts in the Soil */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10 bg-white">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#204B2A]">  Background</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#204B2A] text-justify">
            Viva Earth Organics champions clean, conscious wellness through sustainably sourced, therapeutic-grade skincare and essential oils. Rooted in organic farming and rural empowerment, our mission is to foster a regenerative bond with the earth and its communities. We needed more than design—a unified brand voice that instantly conveys our purpose, earning trust and inspiring belief in every touchpoint.
          </p>
          <div className="flex gap-8">
            <div>
              <span className="text-2xl font-bold text-[#204B2A]">20+</span>
              <span className="block text-xs text-[#204B2A]">Sourcing Regions</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#204B2A]">100%</span>
              <span className="block text-xs text-[#204B2A]">Traceable Supply</span>
            </div>
          </div>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-green-700 to-yellow-600 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/2.png" alt="Soil Map" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 3: Our Craft */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2A4E44]">We Make What You Trust</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#333] text-justify">From distillation to packaging, every step is handled with care. Clean-room facilities, eco-friendly packaging, and batch traceability are our standards.</p>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-yellow-600 to-blue-900 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/3.png" alt="Our Craft" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 4: Sustainability Impact */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2A4E44]">Sustainability is Not a Buzzword Here</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#333] text-justify">Your purchase directly supports 1,200+ livelihoods through our fair and sustainable partnership model.
          <br/>Experience the difference of premium essential oils, meticulously crafted from botanicals sourced from the best growers worldwide.
          <br/> Making a positive impact with every choice, from our sustainable operations to our low-waste packaging.</p>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-blue-900 to-pink-700 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/4.png" alt="Impact" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 5: Global Footprint */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-stretch overflow-hidden bg-white">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2A4E44]">Crafted with Care.<br/> Trusted Worldwide.
          </h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#333] text-justify">Our formulations uphold the highest standards of purity and sustainability—resonating with conscious customers across the globe.</p>
        </div>
        {/* Right: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-pink-700 to-purple-900 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M0,0 Q400,100 600,400 Q400,700 0,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/5.png" alt="Global Map" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Section 6: B2B/What Makes Us Different */}
      <section className="relative w-full min-h-[500px] flex flex-col md:flex-row-reverse items-stretch overflow-hidden bg-white">
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 z-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#2A4E44]">Experience Purity. Build a Legacy.</h2>
          <p className="text-lg md:text-2xl mb-6 max-w-xl text-[#333]"></p>
        </div>
        {/* Left: Cutout with image */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-purple-900 to-yellow-700 overflow-hidden">
          <svg className="absolute right-0 top-0 h-full w-full hidden md:block" viewBox="0 0 600 800" preserveAspectRatio="none">
            <path d="M600,0 Q200,100 0,400 Q200,700 600,800 Z" fill="white" />
          </svg>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full py-8">
            <img src="/VivaEarthImages/Transparent/6.png" alt="B2B Services" className="w-3/4 max-w-xs md:max-w-md object-contain drop-shadow-xl" />
          </div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes vivaearth-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes vivaearth-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .vivaearth-scroll-left {
          animation-name: vivaearth-scroll-left;
        }
        .vivaearth-scroll-right {
          animation-name: vivaearth-scroll-right;
        }
      `}</style>
    </div>
  );
};

export default VivaEarthLanding;