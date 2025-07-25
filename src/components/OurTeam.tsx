import React from 'react';

const teamMembers = [
  {
    name: 'Nithin C Hassan',
    role: 'Co-Founder / Managing Partner',
    imageUrl: '/ourTeam/nithin-hassan.webp',
    linkedIn: 'https://www.linkedin.com/in/nithin-hassan/',
  },
  {
    name: 'Sai Rishi',
    role: 'Web Developer',
    imageUrl: '/ourTeam/sair-rishi.webp',
    linkedIn: 'https://www.linkedin.com/in/sai-rishi/',
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic Designer and Illustrator',
    imageUrl: '/ourTeam/Priya.png',
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar/',
  },
  // Add more members as needed
];

const LinkedInIcon = () => (
  <svg
    className="inline-block ml-1 mb-1"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
  </svg>
);

const OurTeam: React.FC = () => (
  <section className="bg-white min-h-screen py-24 px-4 flex flex-col items-center">
    <div className="w-full flex justify-center mb-16 mt-10">
      <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-sans tracking-tight">
        Meet the dolfyns
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
      {teamMembers.map((member) => (
        <div key={member.name} className="flex flex-col items-center">
          <div className="w-full aspect-square bg-gray-200 overflow-hidden mb-6 rounded-xl shadow-md">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-semibold text-gray-900 mb-2 text-center">{member.name}</span>
          <span className="text-lg text-gray-700 text-center mb-2">{member.role}</span>
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center"
          >
            LinkedIn <LinkedInIcon />
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default OurTeam;