import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Pradeep',
    role: 'Founders',
    imageUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/janedoe-example/'
  },
  {
    name: 'Nithin C Hassan',
    role: 'Founders',
    imageUrl: '/ourTeam/nithin-hassan.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/nithin-hassan/'
  },
  {
    name: 'Sai Rishi Gangarapu',
    role: 'Web Dev',
    imageUrl: '/ourTeam/sair-rishi.jpg',
    linkedinUrl: 'https://www.linkedin.com/in/sai-rishi-gangarapu-770a08321/'
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphics Designer',
    imageUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/priya-iyengar-9b361a260/'
  }
];

const OurTeam: React.FC = () => {
  // Group members by role for bubble alignment
  // Removed unused 'grouped' variable

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-32 pb-24 px-4">
      <section className="max-w-5xl mx-auto flex flex-row">
        {/* Vertical line and bubbles */}
        <div className="relative flex flex-col items-center mr-10 pt-8" style={{ minWidth: 80 }}>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 rounded-full" style={{ transform: 'translateX(-50%)' }}></div>
          {/* Founders bubble */}
          <div className="flex flex-col items-center z-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full text-white font-semibold text-sm shadow-lg mb-2 bg-gradient-to-br from-blue-500 to-purple-600 text-center">
              <span className="w-full text-center">Founders</span>
            </div>
          </div>
          {/* Spacer for grid alignment */}
          <div style={{ height: 80 }}></div>
          {/* Web Dev bubble and Rishi */}
          <div className="flex flex-row items-center z-10 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-br from-green-400 to-blue-500 text-center">
              <span className="w-full text-center">Web Dev</span>
            </div>
            <div className="ml-6 flex flex-col items-center">
              <a
                href={teamMembers[2].linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full overflow-hidden shadow-lg w-28 h-28 bg-gray-100 flex items-center justify-center group hover:ring-4 hover:ring-blue-300 transition-all duration-200"
                title={`View ${teamMembers[2].name}'s LinkedIn`}
              >
                <picture>
                  <source srcSet="/ourTeam/sair-rishi.webp" type="image/webp" />
                  <img src={teamMembers[2].imageUrl} alt={teamMembers[2].name} width={112} height={112} className="object-cover w-28 h-28" />
                </picture>
                <span className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin size={18} className="text-blue-600" />
                </span>
              </a>
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold text-gray-900">{teamMembers[2].name}</div>
              </div>
            </div>
          </div>
          {/* Spacer for grid alignment */}
          <div style={{ height: 80 }}></div>
          {/* Graphics Designer bubble and Priya */}
          <div className="flex flex-row items-center z-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-full text-white font-semibold text-sm shadow-lg bg-gradient-to-br from-pink-400 to-yellow-400 text-center">
              <span className="w-full text-center">Graphics Designer</span>
            </div>
            <div className="ml-6 flex flex-col items-center">
              <a
                href={teamMembers[3].linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full overflow-hidden shadow-lg w-28 h-28 bg-gray-100 flex items-center justify-center group hover:ring-4 hover:ring-blue-300 transition-all duration-200"
                title={`View ${teamMembers[3].name}'s LinkedIn`}
              >
                <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                  <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                  <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                </svg>
                <span className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin size={18} className="text-blue-600" />
                </span>
              </a>
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold text-gray-900">{teamMembers[3].name}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Images and Names for Founders only */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-10 items-start">
          {teamMembers.slice(0, 2).map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full overflow-hidden shadow-lg w-28 h-28 bg-gray-100 flex items-center justify-center group hover:ring-4 hover:ring-blue-300 transition-all duration-200"
                title={`View ${member.name}'s LinkedIn`}
              >
                {member.imageUrl ? (
                  <picture>
                    {member.name === 'Nithin C Hassan' && <source srcSet="/ourTeam/nithin-hassan.webp" type="image/webp" />}
                    <img src={member.imageUrl} alt={member.name} width={112} height={112} className="object-cover w-28 h-28" />
                  </picture>
                ) : (
                  <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                    <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                    <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                  </svg>
                )}
                <span className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <Linkedin size={18} className="text-blue-600" />
                </span>
              </a>
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold text-gray-900">{member.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam; 