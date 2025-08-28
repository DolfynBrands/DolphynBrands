import React from 'react';
import { motion } from 'framer-motion';

// Define structured data for SEO
const teamPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Our Team - Dolfyn Brands Leadership & Experts",
  "description": "Meet the talented team behind Dolfyn Brands - industry experts in AI marketing, brand transformation, and business growth.",
  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/team`,
  "mainEntity": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "employee": [
      {
        "@type": "Person",
        "name": "Nithin C Hassan",
        "jobTitle": "Co-Founder / CEO",
        "sameAs": "https://www.linkedin.com/in/nithin-hassan/"
      },
      {
        "@type": "Person", 
        "name": "Mousumi Das",
        "jobTitle": "Strategic Advisor - Pricing & Monetization",
        "sameAs": "https://www.linkedin.com/in/mousumidas/"
      },
      {
        "@type": "Person",
        "name": "Rohan Bhide", 
        "jobTitle": "Influencer Strategy & Digital Growth Advisor",
        "sameAs": "https://www.linkedin.com/in/rohan-bhide/"
      },
      {
        "@type": "Person",
        "name": "Ankitha Sadakale",
        "jobTitle": "Strategic Advisor - Performance Marketing & Marketplaces", 
        "sameAs": "https://www.linkedin.com/in/ankitha-sadakale/"
      },
      {
        "@type": "Person",
        "name": "Varun Nirmal",
        "jobTitle": "Financial Advisor",
        "sameAs": "https://www.linkedin.com/in/varun-nirmal-93a159a/"
      },
      {
        "@type": "Person",
        "name": "Sai Rishi Gangarapu", 
        "jobTitle": "Web Developer",
        "sameAs": "https://www.linkedin.com/in/sai-rishi/"
      },
      {
        "@type": "Person",
        "name": "Priya Iyengar",
        "jobTitle": "Graphic Designer & Illustrator",
        "sameAs": "https://www.linkedin.com/in/priya-iyengar-9b361a260/"
      }
    ]
  }
};

// 1. Define a type for a team member object
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedIn: string;
  bio?: string;
}

// 2. Team member data with enhanced accessibility information
const teamMembers: TeamMember[] = [
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
    bio: 'Financial strategist helping brands achieve sustainable growth'
  },
  {
    name: 'Sai Rishi Gangarapu',
    role: 'Web Developer',
    imageUrl: '/ourTeam/rishi.webp',
    linkedIn: 'https://www.linkedin.com/in/sai-rishi/',
    bio: 'Full-stack developer creating cutting-edge web experiences'
  },
  {
    name: 'Priya Iyengar',
    role: 'Graphic Designer & Illustrator',
    imageUrl: '/ourTeam/priya.webp',
    linkedIn: 'https://www.linkedin.com/in/priya-iyengar-9b361a260/',
    bio: 'Creative designer bringing brands to life through visual storytelling'
  },
];

// 3. Enhanced LinkedIn Icon Component with better accessibility
const LinkedInIcon = ({ ariaLabel }: { ariaLabel?: string }) => (
  <svg 
    className="inline-block" 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    role="img"
    aria-label={ariaLabel || "LinkedIn icon"}
    focusable="false"
  >
    <title>LinkedIn</title>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
  </svg>
);

// 4. Enhanced main component with comprehensive optimizations
const OurTeam: React.FC = () => {
  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamPageSchema)
        }}
      />

      <style>{`
        /* Enhanced focus styles for accessibility */
        .team-card:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        .team-card:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-600 { color: #000000; }
          .text-gray-900 { color: #000000; }
          .text-teal-100 { color: #ffffff; }
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* Enhanced hover states */
        .team-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>

      {/* Using the gradient background from the original hero section design */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white text-gray-800 font-sans">
        <main role="main">
          {/* Enhanced Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20" aria-labelledby="hero-heading">
            {/* Hero Background Image with optimization */}
            <picture>
              <source 
                srcSet="/ourTeam/team.jpg" 
                type="image/webp"
                media="(min-width: 768px)"
              />
              <img
                src="/ourTeam/team.jpg"
                alt="Dolfyn Brands team members collaborating in a modern workspace, showcasing our diverse and talented professionals"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                style={{ filter: 'brightness(0.85)', opacity: 1 }}
                loading="eager"
                width="1920"
                height="1080"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // prevent infinite loop
                    target.src = `https://placehold.co/1920x1080/cccccc/ffffff?text=Team`;
                  }}
              />
            </picture>
            {/* Enhanced overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-black/20 z-10" />
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-20 flex flex-col items-center justify-center w-full"
            >
              <h1 id="hero-heading" className="text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white drop-shadow-2xl shadow-black/50 text-center leading-tight">
                The Ones Who Make It Happen
              </h1>
              <p className="sr-only">
                Meet the expert team at Dolfyn Brands - leaders in AI marketing, brand transformation, and business growth
              </p>
            </motion.div>
          </section>

          {/* Enhanced Team Cards Section */}
          <section className="bg-white py-20 md:py-24" aria-labelledby="team-section-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
              >
                <motion.h2 
                  id="team-section-heading"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight text-gray-900"
                >
                  Meet Our Expert Team
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-16 rounded-full"
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 justify-items-center" role="list">
                  {teamMembers.map((member, idx) => (
                    <motion.article
                      key={`${member.name}-${idx}`}
                      className="team-card flex flex-col items-center text-center w-full max-w-sm bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-200 focus-within:ring-4 focus-within:ring-blue-500/20"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      role="listitem"
                      aria-labelledby={`member-${idx}-name`}
                      aria-describedby={`member-${idx}-role member-${idx}-bio`}
                      tabIndex={0}
                    >
                      {/* Team Member Image with enhanced accessibility */}
                      <div className="w-full mb-6">
                        <picture>
                          <source 
                            srcSet={member.imageUrl.replace('.webp', '.webp')} 
                            type="image/webp"
                          />
                          <img
                            src={member.imageUrl}
                            alt={`Professional headshot of ${member.name}, ${member.role} at Dolfyn Brands`}
                            className="w-full h-80 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                            draggable={false}
                            loading="lazy"
                            width="320"
                            height="320"
                            decoding="async"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.onerror = null; // prevent infinite loop
                              target.src = `https://placehold.co/400x400/e2e8f0/4a5568?text=${encodeURIComponent(member.name.split(' ')[0])}`;
                            }}
                          />
                        </picture>
                      </div>

                      {/* Team Member Info with enhanced structure */}
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
                          <LinkedInIcon ariaLabel={`${member.name} LinkedIn`} />
                          <span className="ml-2 text-blue-600">LinkedIn</span>
                        </a>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        {/* Skip to top link for accessibility */}
        <a 
          href="#hero-heading" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 hover:bg-blue-700"
          aria-label="Skip to top of page"
        >
          Skip to top
        </a>
      </div>
    </>
  );
};

// 5. Exporting the main component with proper naming
export default function OurTeamPage() {
  return <OurTeam />;
}
