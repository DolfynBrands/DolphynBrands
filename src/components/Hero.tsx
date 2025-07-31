import React, { useRef} from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}



// eslint-disable-next-line no-empty-pattern
const Hero: React.FC<HeroProps> = ({}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();



  // Typing effect for the polymorphic headline (adjective only)


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
          preload="auto"
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
        {/* Main Headline */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 flex flex-col items-center justify-center w-full"
            >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_4px_32px_rgba(0,0,0,0.9)] ">
            {/*
            <span className="text-transparent font-black uppercase bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] transition-all duration-700 ease-in-out">
              Transforming Brands into
            </span>
            <br />
            */}
            <span className="text-transparent font-black uppercase bg-clip-text bg-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] transition-all duration-700 ease-in-out">
              Accelerate Brand Success
            </span>
            <br />
            {/*
            <span className="text-transparent font-black uppercase bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]">
              Powerhouses
            </span>
            */}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Building the world’s most valuable digital brand portfolio with AI-driven optimization and global expansion.
          </p>
          <p className="text-lg opacity-80 mb-5 mt-5">
            Let&apos;s build your brand&apos;s future together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
            aria-label="Partner with Dolfyn Brands - Contact us to start your brand transformation journey"
          >
            <span>Partner With Us</span>
            <ArrowRight size={20} aria-hidden="true" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            onClick={() => navigate('/faq')}
            aria-label="Learn more about Dolfyn Brands services and brand transformation process"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Key Stats */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
        */}
      </div>
    </section>
  );
};

export default Hero;