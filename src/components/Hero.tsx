import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, simpleHover } from '../utils/motionConfig';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play on mobile devices
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Autoplay failed:', error);
          // Fallback: try to play on user interaction
          const handleUserInteraction = () => {
            video.play().catch(console.log);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('scroll', handleUserInteraction);
          };
          document.addEventListener('touchstart', handleUserInteraction);
          document.addEventListener('click', handleUserInteraction);
          window.addEventListener('scroll', handleUserInteraction);
        }
      };
      playVideo();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/video.mp4"
          // eslint-disable-next-line react/no-unknown-property
          webkit-playsinline="true"
          // eslint-disable-next-line react/no-unknown-property
          x5-playsinline="true"
        >
          <source src="/video.webm" type="video/webm" />
          <source src="/video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900"></div>
        </video>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      {/* Main Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-4 text-white">
        {/* Main Headline - No animation for LCP optimization */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.9)]">
            Transforming Ambitious
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
              Brands into Global Powerhouses
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Building the world’s most valuable digital brand portfolio with AI-driven optimization and global expansion.
          </p>
          <p className="text-lg opacity-80">
            Let&apos;s build your brand&apos;s future together.
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            {...simpleHover}
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <span>Partner With Us</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            {...simpleHover}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="text-white/80 text-sm">Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">$2.5B</div>
            <div className="text-white/80 text-sm">Portfolio Value</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-white/80 text-sm">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;