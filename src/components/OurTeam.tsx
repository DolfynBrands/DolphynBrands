import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Pradeep',
    role: 'Chief Executive Officer',
    imageUrl: '', // No image
    linkedinUrl: 'https://www.linkedin.com/in/janedoe-example/'
  },
  {
    name: 'Nithin C Hassan',
    role: 'Founder and CEO',
    imageUrl: '/ourTeam/nithin-hassan.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/nithin-hassan/'
  },
  {
    name: 'Sai Rishi Gangarapu',
    role: 'Web Developer',
    imageUrl: '/ourTeam/sair-rishi.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/sai-rishi-gangarapu-770a08321/'
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic designer and illustrator',
    imageUrl: '', // No image
    linkedinUrl: 'https://www.linkedin.com/in/priya-iyengar-9b361a260/'
  }
];

const founders = teamMembers.slice(0, 2);
const others = teamMembers.slice(2);

const subtitle = 'Our team is our competitive edge. Fueled by passion and a relentless drive for excellence, our people transform creative ideas into remarkable success';

const cardHover = {
  whileHover: { scale: 1.05, y: -10 },
  transition: { type: "spring" as const, stiffness: 300, damping: 20 }
};

const OurTeam: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-40 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">The People Behind the Progress</span>
        </h1>
        <p className="text-xl text-gray-700 mb-14 text-center max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        {/* Founders/CEOs Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16 mb-16 justify-center">
          {founders.map((member) => (
            <motion.div
              key={member.name}
              whileHover={cardHover.whileHover}
              transition={cardHover.transition}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {member.imageUrl ? (
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block mb-6 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-32 h-32">
                  <picture>
                    {member.name === 'Nithin C Hassan' && <source srcSet="/ourTeam/nithin-hassan.webp" type="image/webp" />}
                    {member.name === 'Sai Rishi Gangarapu' && <source srcSet="/ourTeam/sair-rishi.webp" type="image/webp" />}
                    <img src={member.imageUrl} alt={member.name} width={200} height={200} />
                  </picture>
                </a>
              ) : (
                <div className="mb-6 rounded-full overflow-hidden shadow-lg w-32 h-32 bg-gray-200 flex items-center justify-center">
                  {/* Simple SVG placeholder */}
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                    <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                    <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                  </svg>
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{member.name}</h2>
              <p className="text-blue-600 text-lg text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
        {/* Other Team Members Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
          {others.map((member) => (
            <motion.div
              key={member.name}
              whileHover={cardHover.whileHover}
              transition={cardHover.transition}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {member.imageUrl ? (
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block mb-6 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-32 h-32">
                  <picture>
                    <source srcSet="/ourTeam/sair-rishi.webp" type="image/webp" />
                    <img src={member.imageUrl} alt={member.name} width={200} height={200} />
                  </picture>
                </a>
              ) : (
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block mb-6 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-32 h-32">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* Simple SVG placeholder */}
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                      <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                      <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                    </svg>
                  </div>
                </a>
              )}
              <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">{member.name}</h2>
              <p className="text-blue-600 text-lg text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam; 