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

      {/* Background Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-900 mb-4 md:mb-6 font-serif">Our Roots</h2>
          <p className="text-base sm:text-lg md:text-xl text-green-800 max-w-xl md:max-w-2xl mx-auto">
            VivaEarth was born from a simple idea: that wellness should be real, responsible, and regenerative. We’re not just another essential oils brand—we’re a movement to restore the land, empower farmers, and bring you nature’s purest gifts. Every bottle is a story of soil, care, and purpose.
          </p>
        </div>
      </section>

      {/* Tiled Section: Image + Text */}
      <section className="w-full min-h-screen h-screen flex flex-col items-center justify-center px-0 md:px-0 max-w-none mx-0 relative overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/VivaEarthImages/viva_Earth.png" 
            alt="VivaEarth" 
            className="absolute inset-0 w-full h-full object-cover max-h-none min-h-full min-w-full z-0"
            draggable={false}
            style={{filter: 'brightness(0.85)'}}
          />
          {/* Overlayed White Text with mobile-friendly background */}
          <div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start pt-10 sm:pt-16 md:pt-24 px-2 sm:px-4 z-10"
          >
            {/* Mobile dark overlay for text readability */}
            <div className="block md:hidden absolute top-0 left-0 w-full h-40 bg-black/40 z-[-1]" />
            <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-3 md:mb-6 font-sans text-center text-white drop-shadow-lg max-w-xs sm:max-w-lg" style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
              Organics Re-Imagined
            </h3>
            <p className="text-sm sm:text-base md:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl text-center font-sans text-white drop-shadow-md" style={{fontFamily: 'Helvetica, Arial, sans-serif'}}>
              Experience a new era of organic wellness. Our products are crafted with a vision for purity, sustainability, and innovation—blending ancient wisdom with modern science. Discover essential oils that are as good for the earth as they are for you, and join us in redefining what it means to be truly organic.
            </p>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-b from-white to-lime-50">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-900 mb-4 md:mb-6 font-serif">Sourced with Integrity</h2>
          <p className="text-base sm:text-lg md:text-xl text-green-800 max-w-xl md:max-w-2xl mx-auto">
            Our ingredients are grown on regenerative farms and wild-harvested in pristine regions. We partner directly with farmers who share our values—ensuring every drop is traceable, ethical, and supports healthy ecosystems. Transparency is our promise, from seed to bottle.
          </p>
        </div>
      </section>

      {/* Unique Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-b from-lime-50 to-amber-100">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-900 mb-4 md:mb-6 font-serif">What Makes Us Different</h2>
          <p className="text-base sm:text-lg md:text-xl text-green-800 max-w-xl md:max-w-2xl mx-auto">
            We go beyond organic. Our mission is to heal the earth as we heal ourselves—using science-backed purity, regenerative agriculture, and a commitment to honest, beautiful wellness. VivaEarth is a living ecosystem brand, rooted in care for people and planet.
          </p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-10 md:py-20 px-2 sm:px-4 bg-gradient-to-b from-amber-100 to-white">
        <div className="max-w-2xl md:max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-900 mb-4 md:mb-6 font-serif">Our Promise to You</h2>
          <p className="text-base sm:text-lg md:text-xl text-green-800 max-w-xl md:max-w-2xl mx-auto">
            Every time you choose VivaEarth, you’re supporting ethical ingredient procurement, empowering farmers, and investing in your own well-being. Together, we’re building a future where wellness uplifts communities and restores the earth—one bottle at a time.
          </p>
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