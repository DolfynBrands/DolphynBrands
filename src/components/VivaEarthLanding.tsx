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
        {/* Text overlay (desktop) */}
        <div
          className="hidden md:flex flex-col justify-center items-start absolute right-0 top-0 h-full w-full md:w-[45vw] p-8 md:p-16 z-10"
          style={{
            background: 'rgba(255,255,255,0.96)',
            minHeight: '60vh',
          }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold mb-4 font-serif text-green-900 leading-tight z-10">
            Organics Re-Imagined
          </h3>
          <p className="text-base md:text-xl text-green-800/90 mb-0 font-sans leading-relaxed z-10">
            Experience a new era of organic wellness. Our products are crafted with a vision for purity, sustainability, and innovation—blending ancient wisdom with modern science. Discover essential oils that are as good for the earth as they are for you, and join us in redefining what it means to be truly organic.
          </p>
        </div>
        {/* Mobile: text below image, full width, solid background, centered */}
        <div className="block md:hidden w-full bg-white/95 p-6 sm:p-8 mx-4 sm:mx-8 z-10 relative text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 font-serif text-green-900 leading-tight">
            Organics Re-Imagined
          </h3>
          <p className="text-base sm:text-lg text-green-800/90 mb-0 font-sans leading-relaxed">
            Experience a new era of organic wellness. Our products are crafted with a vision for purity, sustainability, and innovation—blending ancient wisdom with modern science. Discover essential oils that are as good for the earth as they are for you, and join us in redefining what it means to be truly organic.
          </p>
        </div>
      </section>

      {/* --- Tactile Tiled Theme Sections Start Here (after carousel) --- */}
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center px-0 md:px-0">
        {/* Section 2 & 3: Asymmetric, comic-style layout, no card backgrounds, full width */}
        <div className="w-full flex flex-col gap-y-16 my-16">
          {/* Asymmetric comic-style: tall image left, text below; right: text top, image below */}
          <div className="w-full flex flex-col md:flex-row gap-0 md:gap-x-0 min-h-[400px] md:min-h-[600px]">
            {/* Left column: Tall image, then text below */}
            <div className="flex-1 flex flex-col items-center md:items-start mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[420px] md:h-[600px] flex items-center justify-center mb-6 md:mb-8" style={{background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle1.jpg" 
                  alt="Leaf in hands" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full mt-2 px-4 md:px-0">
                <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-2">Why We Began</h2>
                <p className="font-sans text-base md:text-lg text-[#333] mb-2">There was a disconnect between purity and mass-market beauty. We wanted to bridge that gap with honesty and care.</p>
                <blockquote className="border-l-4 border-[#C0A062] pl-4 italic text-[#6B4F4F] mb-2">“We started Viva Earth because clean, honest, and ethically crafted wellness products weren’t easily accessible.”</blockquote>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#2A4E44] font-semibold">Built in India. Trusted globally.</span>
                  <span className="inline-block w-6 h-4 bg-[url('/public/ourTeam/sair-rishi.jpg')] bg-cover rounded-sm border border-[#C0A062]" title="India" />
                </div>
              </div>
            </div>
            {/* Right column: Text at top, then wide image below */}
            <div className="flex-1 flex flex-col justify-between mx-6 md:mx-12">
              <div className="mb-6 md:mb-8 px-4 md:px-0">
                <h3 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-2">Bridging Ancient Wisdom and Modern Formulation</h3>
                <p className="font-sans text-base md:text-lg text-[#333] mb-2">Every drop is backed by both Ayurveda and analytical precision.</p>
                <div className="flex flex-row gap-4 mb-2 flex-wrap">
                  <div className="flex flex-col items-center mb-2">
                    <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">🔬</span>
                    <span className="font-sans text-xs text-[#333]">In-house R&D</span>
                  </div>
                  <div className="flex flex-col items-center mb-2">
                    <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">🌿</span>
                    <span className="font-sans text-xs text-[#333]">Ayurvedic Formulation</span>
                  </div>
                  <div className="flex flex-col items-center mb-2">
                    <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">📊</span>
                    <span className="font-sans text-xs text-[#333]">Scientific Validation</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-48 md:h-[260px] md:h-[320px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'}}>
                <img 
                  src="/VivaEarthImages/BottleCartons/Carton Box- Lavender 1oz.jpg" 
                  alt="Herbs" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Comic-style: It Starts in the Soil (image right, text left) */}
          <div className="w-full flex flex-col md:flex-row-reverse gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
            {/* Right: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle2.jpg" 
                  alt="Soil Map" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">It Starts in the Soil</h2>
              <p className="font-sans text-base md:text-lg text-[#333] mb-4">Our ingredients are grown on regenerative farms and wild-harvested in pristine regions. We partner directly with farmers who share our values—ensuring every drop is traceable, ethical, and supports healthy ecosystems. Transparency is our promise, from seed to bottle.</p>
              <div className="text-[#2A4E44] font-semibold mt-2">No middlemen. Just trusted hands.</div>
            </div>
          </div>

          {/* Comic-style: We Make What You Trust (image left, text right) */}
          <div className="w-full flex flex-col md:flex-row gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
            {/* Left: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle3.jpg" 
                  alt="Process Flow" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">We Make What You Trust</h2>
              <p className="font-sans text-base md:text-lg text-[#333] mb-4">From distillation to packaging, every step is handled with care. Clean-room facilities, eco-friendly packaging, and batch traceability are our standards.</p>
              <div className="flex flex-row gap-4 mt-2 flex-wrap">
                <div className="flex flex-col items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">⚗️</span>
                  <span className="font-sans text-xs text-[#333]">Distillation</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">🧉</span>
                  <span className="font-sans text-xs text-[#333]">Formulation</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">🔬</span>
                  <span className="font-sans text-xs text-[#333]">Testing</span>
                </div>
                <div className="flex flex-col items-center mb-2">
                  <span className="inline-block w-8 h-8 bg-[#C0A062] rounded-full flex items-center justify-center mb-1">🧴</span>
                  <span className="font-sans text-xs text-[#333]">Packaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comic-style: Sustainability Impact (image right, text left) */}
          <div className="w-full flex flex-col md:flex-row-reverse gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
            {/* Right: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle4.jpg" 
                  alt="Impact" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Sustainability is Not a Buzzword Here</h2>
              <p className="font-sans text-base md:text-lg text-[#333] mb-4">+1200 Rural Livelihoods Supported<br/>+50,000 Liters of Oil Distilled<br/>+8,000 kg of Plastic Saved</p>
            </div>
          </div>

          {/* Comic-style: Global Footprint (image left, text right) */}
          <div className="w-full flex flex-col md:flex-row gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
            {/* Left: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle1.jpg" 
                  alt="Global Map" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Right: Text */}
            <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Proudly Made in India. Loved Around the World.</h2>
              <p className="font-sans text-base md:text-lg text-[#333] mb-4">Our products reach customers in the USA, UAE, EU, and beyond. Small-batch purity, global standards.</p>
              <blockquote className="italic text-[#6B4F4F] mb-2">“Small-batch purity, global standards.”</blockquote>
            </div>
          </div>

          {/* Comic-style: B2B/What Makes Us Different (image right, text left) */}
          <div className="w-full flex flex-col md:flex-row-reverse gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
            {/* Right: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle2.jpg" 
                  alt="B2B Services" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Why Conscious Brands Choose Viva Earth</h2>
              <p className="font-sans text-base md:text-lg text-[#333] mb-4">Our CAAS Model – Cosmetics as a Service: Private Labeling, Bulk Ingredients, White-Label Formulation. Launch your own brand or source pure, traceable ingredients with us.</p>
            </div>
          </div>

          {/* Comic-style: Final CTA (image left, text right) */}
          <div className="w-full flex flex-col md:flex-row gap-0 md:gap-x-0 min-h-[300px] md:min-h-[400px]">
            {/* Left: Big image */}
            <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
              <div className="w-full h-48 md:h-[220px] md:h-[320px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'}}>
                <img 
                  src="/VivaEarthImages/Bottle/Bottle3.jpg" 
                  alt="Final CTA" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Right: Text and CTA */}
            <div className="flex-1 flex flex-col justify-center items-start mx-6 md:mx-12 px-4 md:px-0">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Experience Purity. Build a Legacy.</h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 w-full">
                <button className="bg-[#C0A062] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#a88a4a] transition w-full sm:w-auto">Shop Now</button>
                <button className="bg-[#C0A062] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#a88a4a] transition w-full sm:w-auto">Build Your Brand With Us</button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Grounded in Sourcing */}
        <section className="w-full max-w-5xl rounded-2xl shadow-lg bg-white flex flex-col items-center p-8 my-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">It Starts in the Soil</h3>
          {/* Placeholder for interactive map */}
          <div className="w-full h-64 bg-[#EADFC9] rounded-xl flex items-center justify-center mb-4">
            <span className="text-[#6B4F4F] font-sans">[Interactive Map of India Placeholder]</span>
          </div>
          <div className="text-[#2A4E44] font-semibold mt-2">No middlemen. Just trusted hands.</div>
        </section>

        {/* Section 5: Our Craft – From Leaf to Label */}
        <section className="w-full max-w-5xl rounded-2xl shadow-lg bg-white flex flex-col items-center p-8 my-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-6">We Make What You Trust</h3>
          <div className="flex flex-row items-center justify-between w-full max-w-3xl mb-4">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <span className="inline-block w-12 h-12 bg-[#EADFC9] rounded-full flex items-center justify-center text-2xl">⚗️</span>
              <span className="font-sans text-xs text-[#333] mt-2">Distillation</span>
            </div>
            <span className="w-8 h-1 border-dotted border-b-2 border-[#C0A062] mx-2" />
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <span className="inline-block w-12 h-12 bg-[#EADFC9] rounded-full flex items-center justify-center text-2xl">🧉</span>
              <span className="font-sans text-xs text-[#333] mt-2">Formulation</span>
            </div>
            <span className="w-8 h-1 border-dotted border-b-2 border-[#C0A062] mx-2" />
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <span className="inline-block w-12 h-12 bg-[#EADFC9] rounded-full flex items-center justify-center text-2xl">🔬</span>
              <span className="font-sans text-xs text-[#333] mt-2">Testing</span>
            </div>
            <span className="w-8 h-1 border-dotted border-b-2 border-[#C0A062] mx-2" />
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <span className="inline-block w-12 h-12 bg-[#EADFC9] rounded-full flex items-center justify-center text-2xl">🧴</span>
              <span className="font-sans text-xs text-[#333] mt-2">Packaging</span>
            </div>
          </div>
          <div className="flex flex-row gap-6 mt-4">
            <div className="flex items-center gap-2"><span className="text-[#C0A062]">🏭</span><span className="font-sans text-xs text-[#333]">Clean-Room Facilities</span></div>
            <div className="flex items-center gap-2"><span className="text-[#C0A062]">♻️</span><span className="font-sans text-xs text-[#333]">Eco-Friendly Packaging</span></div>
            <div className="flex items-center gap-2"><span className="text-[#C0A062]">🔗</span><span className="font-sans text-xs text-[#333]">Batch Traceability</span></div>
          </div>
        </section>

        {/* Section 6: Global Footprint, Indian Soul */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {/* Left Column */}
          <div className="rounded-2xl shadow-lg bg-white flex flex-col justify-center p-8">
            <h3 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Proudly Made in India. Loved Around the World.</h3>
            <div className="w-full h-40 bg-[#EADFC9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-[#6B4F4F] font-sans">[World Map with Glowing Dots Placeholder]</span>
            </div>
            <blockquote className="italic text-[#6B4F4F] mb-2">“Small-batch purity, global standards.”</blockquote>
          </div>
          {/* Right Column: Carousel of testimonials */}
          <div className="rounded-2xl shadow-lg bg-white flex flex-col justify-center p-8">
            <div className="w-full h-40 bg-[#EADFC9] rounded-xl flex items-center justify-center mb-4">
              <span className="text-[#6B4F4F] font-sans">[Auto-scrolling Testimonials Carousel Placeholder]</span>
            </div>
          </div>
        </section>

        {/* Section 7: What Makes Us Different (B2B) */}
        <section className="w-full max-w-5xl rounded-2xl shadow-lg bg-[#2A4E44] flex flex-col items-center p-8 my-12">
          <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">Why Conscious Brands Choose Viva Earth</h3>
          <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
            {/* Tab 1 */}
            <div className="flex-1 bg-white/90 rounded-xl p-6 flex flex-col items-center">
              <span className="font-serif text-lg text-[#2A4E44] font-bold mb-2">Private Labeling</span>
              <img src="/VivaEarthImages/Bottle/Bottle2.jpg" alt="Private Labeling" className="rounded-lg object-cover w-full h-32 mb-2" />
              <span className="font-sans text-sm text-[#333]">Launch your own brand with our proven formulations and packaging expertise.</span>
            </div>
            {/* Tab 2 */}
            <div className="flex-1 bg-white/90 rounded-xl p-6 flex flex-col items-center">
              <span className="font-serif text-lg text-[#2A4E44] font-bold mb-2">Bulk Ingredients</span>
              <img src="/VivaEarthImages/Bottle/Bottle3.jpg" alt="Bulk Ingredients" className="rounded-lg object-cover w-full h-32 mb-2" />
              <span className="font-sans text-sm text-[#333]">Source pure, traceable essential oils and extracts for your business needs.</span>
            </div>
            {/* Tab 3 */}
            <div className="flex-1 bg-white/90 rounded-xl p-6 flex flex-col items-center">
              <span className="font-serif text-lg text-[#2A4E44] font-bold mb-2">White-Label Formulation</span>
              <img src="/VivaEarthImages/Bottle/Bottle4.jpg" alt="White-Label Formulation" className="rounded-lg object-cover w-full h-32 mb-2" />
              <span className="font-sans text-sm text-[#333]">Customize our science-backed formulas with your brand’s unique touch.</span>
            </div>
          </div>
        </section>

        {/* Section 9: Our Impact */}
        <section className="w-full max-w-5xl flex flex-col items-center my-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-6">Sustainability is Not a Buzzword Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Tile 1 */}
            <div className="rounded-2xl shadow-lg bg-white flex flex-col items-center p-8">
              <span className="text-4xl font-bold text-[#C0A062]">+1200</span>
              <span className="font-sans text-sm text-[#333] mt-2 flex items-center gap-1"><span>👥</span>Rural Livelihoods Supported</span>
            </div>
            {/* Tile 2 */}
            <div className="rounded-2xl shadow-lg bg-white flex flex-col items-center p-8">
              <span className="text-4xl font-bold text-[#C0A062]">+50,000</span>
              <span className="font-sans text-sm text-[#333] mt-2 flex items-center gap-1"><span>💧</span>Liters of Oil Distilled</span>
            </div>
            {/* Tile 3 */}
            <div className="rounded-2xl shadow-lg bg-white flex flex-col items-center p-8">
              <span className="text-4xl font-bold text-[#C0A062]">+8,000</span>
              <span className="font-sans text-sm text-[#333] mt-2 flex items-center gap-1"><span>♻️</span>kg of Plastic Saved</span>
            </div>
          </div>
        </section>

        {/* Comic-style: B2B/What Makes Us Different (image right, text left) */}
        <div className="w-full flex flex-col md:flex-row-reverse gap-0 md:gap-x-0 min-h-[400px] md:min-h-[500px]">
          {/* Right: Big image */}
          <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
            <div className="w-full h-[320px] md:h-[420px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)'}}>
              <img 
                src="/VivaEarthImages/Bottle/Bottle2.jpg" 
                alt="B2B Services" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center mx-6 md:mx-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Why Conscious Brands Choose Viva Earth</h2>
            <p className="font-sans text-base md:text-lg text-[#333] mb-4">Our CAAS Model – Cosmetics as a Service: Private Labeling, Bulk Ingredients, White-Label Formulation. Launch your own brand or source pure, traceable ingredients with us.</p>
          </div>
        </div>

        {/* Comic-style: Final CTA (image left, text right) */}
        <div className="w-full flex flex-col md:flex-row gap-0 md:gap-x-0 min-h-[300px] md:min-h-[400px]">
          {/* Left: Big image */}
          <div className="flex-1 flex items-center justify-center mx-6 md:mx-12">
            <div className="w-full h-[220px] md:h-[320px] flex items-center justify-center" style={{background: 'linear-gradient(135deg, #f7971e 0%, #ffd200 100%)'}}>
              <img 
                src="/VivaEarthImages/Bottle/Bottle3.jpg" 
                alt="Final CTA" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* Right: Text and CTA */}
          <div className="flex-1 flex flex-col justify-center items-start mx-6 md:mx-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2A4E44] font-bold mb-4">Experience Purity. Build a Legacy.</h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2 w-full">
              <button className="bg-[#C0A062] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#a88a4a] transition w-full sm:w-auto">Shop Now</button>
              <button className="bg-[#C0A062] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#a88a4a] transition w-full sm:w-auto">Build Your Brand With Us</button>
            </div>
          </div>
        </div>
      </div>

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