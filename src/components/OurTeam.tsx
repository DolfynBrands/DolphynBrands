import React, { useState, useEffect, useRef } from 'react';

// 1. Define a type for a team member object
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
}

// 2. Apply the 'TeamMember' type to the array
const teamMembers: TeamMember[] = [
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
<<<<<<< HEAD
    role: 'Graphic Designer and Illustator',
    imageUrl: '/ourTeam/3.png',
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar/',
  },
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
    role: 'Graphic Designer and Illustator',
    imageUrl: '/ourTeam/3.png',
=======
    role: 'Graphic Designer and Illustrator',
    imageUrl: '/ourTeam/Priya.png',
>>>>>>> 65a26fa2ad6501f3c6f933294baf9b12f09c9215
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar/',
  },
];

const LinkedInIcon = () => (
  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#5f19e6" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
  </svg>
);

const OurTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  // 3. Use the browser-safe type for the timeout ref
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // TypeScript now correctly infers 'loopedMembers' as 'TeamMember[]'
  const loopedMembers = [teamMembers[teamMembers.length - 1], ...teamMembers, teamMembers[0]];

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === loopedMembers.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex === 0 ? loopedMembers.length - 2 : 1);
      }, 500);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentIndex, loopedMembers.length]);

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div className="min-h-screen bg-[#5f19e6] py-16 px-4 flex flex-col justify-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-white mb-10 font-serif tracking-tight text-center">
          Our Team
        </h2>
      </div>
      <div className="relative w-full max-w-lg mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
            }}
          >
            {loopedMembers.map((member, idx) => (
              <div
                key={`${member.name}-${idx}`}
                className="flex-shrink-0 w-full flex justify-center"
              >
                <div className="w-72 md:w-80 flex flex-col items-center">
                  <div className="mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-80 object-cover rounded-xl"
                      draggable={false}
                    />
                  </div>
                  <div className="team-item__name text-3xl font-bold text-white text-center mb-2 font-serif leading-tight">
                    {member.name}
                  </div>
                  <div className="team-item__para text-lg text-white text-center mb-2 leading-snug">
                    {member.role}
                  </div>
                  <a
                    target="_blank"
                    href={member.linkedIn}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                    style={{ width: 40, height: 40 }}
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 z-10 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-colors"
          aria-label="Previous Team Member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 z-10 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 transition-colors"
          aria-label="Next Team Member"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OurTeam;