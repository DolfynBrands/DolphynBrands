import React from 'react';

const OurTeam: React.FC = () => {
  // Add loading state for mobile
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Set loaded after component mounts
    setIsLoaded(true);
  }, []);

  const teamMembers = [
    {
      name: 'Nithin C Hassan',
      role: 'Co-Founder / CEO',
      imageUrl: '/ourTeam/5.webp',
      linkedIn: 'https://www.linkedin.com/in/nithin-hassan/',
      bio: 'Visionary leader driving brand transformation through innovative AI strategies'
    },
    {
      name: 'Mousumi Das',
      role: 'Strategic Advisor - Pricing & Monetization',
      imageUrl: '/ourTeam/4.webp',
      linkedIn: 'https://www.linkedin.com/in/mousumidas/',
      bio: 'Expert in pricing strategies and revenue optimization for growing brands'
    },
    {
      name: 'Rohan Bhide',
      role: 'Influencer Strategy & Digital Growth Advisor',
      imageUrl: '/ourTeam/2.webp',
      linkedIn: 'https://www.linkedin.com/in/rohan-bhide/',
      bio: 'Specialist in influencer marketing and digital growth strategies'
    },
    {
      name: 'Ankitha Sadakale',
      role: 'Strategic Advisor - Performance Marketing & Marketplaces',
      imageUrl: '/ourTeam/ankita.webp',
      linkedIn: 'https://www.linkedin.com/in/ankitha-sadakale/',
      bio: 'Performance marketing expert with deep marketplace knowledge'
    },
    {
      name: 'Varun Nirmal',
      role: 'Financial Advisor',
      imageUrl: '/ourTeam/varun.webp',
      linkedIn: 'https://www.linkedin.com/in/varun-nirmal-93a159a/',
      bio: 'Financial strategist helping brands optimize their financial performance'
    },
    {
      name: 'Sai Rishi Gangarapu',
      role: 'Web Developer',
      imageUrl: '/ourTeam/rishi.webp',
      linkedIn: 'https://www.linkedin.com/in/sai-rishi/',
      bio: 'Full-stack developer building robust digital solutions'
    },
    {
      name: 'Priya Iyengar',
      role: 'Graphic Designer & Illustrator',
      imageUrl: '/ourTeam/priya.webp',
      linkedIn: 'https://www.linkedin.com/in/priya-iyengar-9b361a260/',
      bio: 'Creative designer bringing brands to life through visual storytelling'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans overflow-x-hidden">
      <main role="main">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-black/20 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center w-full">
            <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white drop-shadow-2xl shadow-black/50 text-center leading-tight">
              The Ones Who Make It Happen
            </h1>
            <p className="sr-only">
              Meet the expert team at Dolfyn Brands - leaders in AI marketing, brand transformation, and business growth
            </p>
          </div>
        </section>

        {/* Team Cards Section */}
        <section className="bg-white py-20 md:py-24" aria-labelledby="team-section-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 
                id="team-section-heading"
                className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight text-gray-900"
              >
                Meet Our Expert Team
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full" />
              
              {!isLoaded && (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Loading team members...</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-x-8 sm:gap-y-16 justify-items-center" role="list">
                {isLoaded && teamMembers.map((member, idx) => (
                  <article
                    key={`${member.name}-${idx}`}
                    className="team-card flex flex-col items-center text-center w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                    role="listitem"
                    aria-labelledby={`member-${idx}-name`}
                    aria-describedby={`member-${idx}-role member-${idx}-bio`}
                    tabIndex={0}
                    style={{ minHeight: '400px' }}
                  >
                    {/* Team Member Image */}
                    <div className="w-full mb-6">
                      <img
                        src={member.imageUrl}
                        alt={`Professional headshot of ${member.name}, ${member.role} at Dolfyn Brands`}
                        className="w-full h-64 sm:h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                        loading="lazy"
                        width="320"
                        height="320"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://placehold.co/400x400/e2e8f0/4a5568?text=${encodeURIComponent(member.name.split(' ')[0])}`;
                        }}
                      />
                    </div>

                    {/* Team Member Info */}
                    <div className="flex-1 flex flex-col">
                      <h3 
                        id={`member-${idx}-name`}
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        {member.name}
                      </h3>
                      <p 
                        id={`member-${idx}-role`}
                        className="text-lg text-blue-600 font-semibold mb-3"
                      >
                        {member.role}
                      </p>
                      {member.bio && (
                        <p 
                          id={`member-${idx}-bio`}
                          className="text-gray-700 text-base leading-relaxed mb-6 flex-1"
                        >
                          {member.bio}
                        </p>
                      )}
                      <a
                        target="_blank"
                        href={member.linkedIn}
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        aria-label={`View ${member.name}'s LinkedIn profile (opens in new tab)`}
                      >
                        <svg 
                          className="inline-block" 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label="LinkedIn icon"
                          focusable="false"
                        >
                          <title>LinkedIn</title>
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
                        </svg>
                        <span className="ml-2 text-blue-600">LinkedIn</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurTeam;
