import React from 'react';
import { motion } from 'framer-motion';

// 1. Define a type for a team member object
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
}

// 2. Team member data (using the structure from the newer design)
const teamMembers: TeamMember[] = [
  {
    name: 'Nithin C Hassan',
    role: 'Co-Founder / CEO',
    imageUrl: '/ourTeam/5.png',
    linkedIn: 'https://www.linkedin.com/in/nithin-hassan/',
  },
  {
    name: 'Mousumi Das',
    role: 'Strategic Advisor - Pricing & Monetization',
    imageUrl: '/ourTeam/4.png',
    linkedIn: 'https://www.linkedin.com/in/mousumidas/',
  },
  {
    name: 'Rohan Bhide',
    role: 'Influencer Strategy & Digital Growth Advisor',
    imageUrl: '/ourTeam/2.png',
    linkedIn: 'https://www.linkedin.com/in/rohan-bhide/',
  },
  {
    name: 'Ankitha Sadakale',
    role: 'Strategic Advisor - Performance Marketing & Marketplaces',
    imageUrl: '/ourTeam/ankita.png',
    linkedIn: 'https://www.linkedin.com/in/ankitha-sadakale/',
  },
  {
    name: 'Sai Rishi Gangarapu',
    role: 'Web Developer',
    imageUrl: '/ourTeam/rishi.png',
    linkedIn: 'https://www.linkedin.com/in/sai-rishi/',
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic Designer & Illustrator',
    imageUrl: '/ourTeam/Priya.png',
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar/',
  },
];

// 3. LinkedIn Icon Component - Uses `currentColor` to inherit color from its parent `<a>` tag.
const LinkedInIcon = () => (
  <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
  </svg>
);

// 4. Main component with the merged hero section and new card design
const OurTeam: React.FC = () => {
  return (
    // Using the gradient background from the original hero section design
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans">
      <main>
        {/* Hero Section from the original code */}
        <section className="relative h-screen flex items-center justify-center text-center px-4">
          {/* Hero Background Image */}
          <img
            src="ourTeam/team.jpg"
            alt="Our Team"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            style={{ filter: 'brightness(0.85)', opacity: 1 }}
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // prevent infinite loop
                target.src = `https://placehold.co/1920x1080/cccccc/ffffff?text=Team`;
              }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-50/20 to-white/20 z-10" />
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-20 flex flex-col items-center justify-center w-full"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-teal-100 drop-shadow-lg">
              The Ones Who Make It Happen
            </h1>
          </motion.div>
        </section>

        {/* Team Cards Section with new design */}
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
                {teamMembers.map((member, idx) => (
                    <motion.div
                    key={`${member.name}-${idx}`}
                    className="flex flex-col items-center text-center w-full max-w-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                    {/* Team Member Image */}
                    <div className="w-full">
                        <img
                        src={member.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        className="w-full h-80 object-cover rounded-xl shadow-lg"
                        draggable={false}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // prevent infinite loop
                            target.src = `https://placehold.co/400x400/e2e8f0/4a5568?text=${member.name.split(' ')[0]}`;
                        }}
                        />
                    </div>

                    {/* Team Member Info */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                        </h3>
                        <p className="text-md text-gray-600 mt-1">
                        {member.role}
                        </p>
                        <a
                        target="_blank"
                        href={member.linkedIn}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                        <LinkedInIcon />
                        <span className="ml-2 font-semibold">LinkedIn</span>
                        </a>
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

// 5. Exporting the main component as App for the preview environment
export default function App() {
  return <OurTeam />;
}
