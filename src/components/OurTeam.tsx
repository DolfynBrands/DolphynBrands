import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Pradeep',
    role: 'Founder',
    imageUrl: '',
    webpUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/janedoe-example/',
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Nithin C Hassan',
    role: 'Founder',
    imageUrl: '/ourTeam/nithin-hassan.jpg',
    webpUrl: '/ourTeam/nithin-hassan.webp',
    linkedinUrl: 'https://www.linkedin.com/in/nithin-hassan/',
    color: 'from-blue-500 to-purple-600',
  },
  {
    name: 'Sai Rishi Gangarapu',
    role: 'Web Developer',
    imageUrl: '/ourTeam/sair-rishi.jpg',
    webpUrl: '/ourTeam/sair-rishi.webp',
    linkedinUrl: 'https://www.linkedin.com/in/sai-rishi-gangarapu-770a08321/',
    color: 'from-green-400 to-blue-500',
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic Designer',
    imageUrl: '',
    webpUrl: '',
    linkedinUrl: 'https://www.linkedin.com/in/priya-iyengar-9b361a260/',
    color: 'from-pink-400 to-yellow-400',
  },
];

const roleTagColors: Record<string, string> = {
  'Founder': 'bg-gradient-to-br from-blue-500 to-purple-600',
  'Web Developer': 'bg-gradient-to-br from-green-400 to-blue-500',
  'Graphic Designer': 'bg-gradient-to-br from-pink-400 to-yellow-400',
};

const OurTeam: React.FC = () => {
  const founders = teamMembers.filter((m) => m.role === 'Founder');
  const others = teamMembers.filter((m) => m.role !== 'Founder');

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-24 px-4 flex flex-col items-center">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight text-gray-900 font-sans">
        Meet the Team
      </h2>
      <div className="w-full max-w-3xl mx-auto relative flex flex-col items-center">
        {/* Vertical Timeline (continuous) */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200 rounded-full" style={{ left: 56, zIndex: 0 }}></div>
        <div className="flex flex-col w-full z-10">
          {/* Founders Row */}
          <div className="flex flex-row items-center w-full mb-12" style={{ minHeight: 120 }}>
            {/* Timeline and Role Bubble */}
            <div className="relative flex flex-col items-center" style={{ width: 112, minWidth: 112 }}>
              <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                <span className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow ${roleTagColors['Founder']} whitespace-nowrap`}>
                  Founder
                </span>
              </div>
            </div>
            {/* Founders' Images and Names */}
            <div className="flex flex-row items-center ml-8 gap-12">
              {founders.map((member) => (
                <div key={member.name} className="flex flex-row items-center">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-full overflow-hidden shadow-xl w-28 h-28 bg-gray-100 flex items-center justify-center group hover:ring-4 hover:ring-blue-300 transition-all duration-200"
                    title={`View ${member.name}'s LinkedIn`}
                  >
                    {member.imageUrl ? (
                      <picture>
                        {member.webpUrl && <source srcSet={member.webpUrl} type="image/webp" />}
                        <img src={member.imageUrl} alt={member.name} width={112} height={112} className="object-cover w-28 h-28" />
                      </picture>
                    ) : (
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                        <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                        <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                      </svg>
                    )}
                    <span className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Linkedin size={18} className="text-blue-600" />
                    </span>
                  </a>
                  <div className="ml-6 flex flex-col items-start">
                    <span className="text-lg font-semibold text-gray-900 mt-2">{member.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Other Members Rows */}
          {others.map((member) => (
            <div key={member.name} className="flex flex-row items-center w-full mb-12 last:mb-0" style={{ minHeight: 120 }}>
              {/* Timeline and Role Bubble */}
              <div className="relative flex flex-col items-center" style={{ width: 112, minWidth: 112 }}>
                <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)', zIndex: 2 }}>
                  <span className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow ${roleTagColors[member.role] || 'bg-blue-400'} whitespace-nowrap`}>
                    {member.role}
                  </span>
                </div>
              </div>
              {/* Profile image and name */}
              <div className="flex flex-row items-center ml-8">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-full overflow-hidden shadow-xl w-28 h-28 bg-gray-100 flex items-center justify-center group hover:ring-4 hover:ring-blue-300 transition-all duration-200"
                  title={`View ${member.name}'s LinkedIn`}
                >
                  {member.imageUrl ? (
                    <picture>
                      {member.webpUrl && <source srcSet={member.webpUrl} type="image/webp" />}
                      <img src={member.imageUrl} alt={member.name} width={112} height={112} className="object-cover w-28 h-28" />
                    </picture>
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="#E5E7EB" />
                      <circle cx="40" cy="32" r="16" fill="#D1D5DB" />
                      <ellipse cx="40" cy="60" rx="24" ry="12" fill="#D1D5DB" />
                    </svg>
                  )}
                  <span className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Linkedin size={18} className="text-blue-600" />
                  </span>
                </a>
                <div className="ml-6 flex flex-col items-start">
                  <span className="text-lg font-semibold text-gray-900 mt-2">{member.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam; 