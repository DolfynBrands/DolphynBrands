import React from 'react';
import { User, Users, BarChart3, Zap, CheckCircle2, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

// Define structured data for SEO
const principlesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Leadership Principles - Dolfyn Brands",
  "description": "Discover the core principles that guide Dolfyn Brands: Founder Obsession, Customer-First Focus, Data-Driven Decisions, and more.",
  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/principles`,
  "mainEntity": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "description": "AI-powered brand transformation company guided by six core leadership principles",
    "organizationalCredential": [
      {
        "@type": "OrganizationalRole",
        "roleName": "Founder Obsession",
        "description": "We start with the founder's vision and pain points, investing in deep empathy and co-creation"
      },
      {
        "@type": "OrganizationalRole", 
        "roleName": "Customer-First Focus",
        "description": "The consumer's voice is our compass, using behavioral insights and feedback loops"
      },
      {
        "@type": "OrganizationalRole",
        "roleName": "Data-Driven Decisions", 
        "description": "Gut instinct lights the spark, data fuels decisions with metric obsession and real-time insights"
      },
      {
        "@type": "OrganizationalRole",
        "roleName": "Moving Quick",
        "description": "Speed trumps perfection with two-day sprint cycles and minimum-viable approaches"
      },
      {
        "@type": "OrganizationalRole",
        "roleName": "High Agency",
        "description": "Every outcome is someone's responsibility with end-to-end stewardship and clear commitments"
      },
      {
        "@type": "OrganizationalRole",
        "roleName": "Collaborative Integrity",
        "description": "Great brands are built on partnerships through transparent teamwork and long-term value"
      }
    ]
  }
};

// Enhanced principle interface with accessibility information
interface Principle {
  title: string;
  description: string;
  points: string[];
  icon: React.ElementType;
  color: string;
  ariaLabel?: string;
}

const principles: Principle[] = [
  {
    title: 'Founder Obsession',
    description: 'We start with the founder’s vision and pain points.',
    points: [
      'Deep empathy: We invest time to truly understand your challenges and ambitions.',
      'Co-creation: We partner shoulder-to-shoulder, not from the sidelines.'
    ],
    icon: User,
    color: 'from-blue-600 to-purple-700',
    ariaLabel: 'Founder Obsession - Understanding founder vision and challenges'
  },
  {
    title: 'Customer-First Focus',
    description: 'The consumer’s voice is our compass.',
    points: [
      'Behavioral insights: We blend quantitative data with qualitative research to anticipate needs.',
      'Constant feedback loops: Surveys, interviews, and community forums shape our roadmaps.'
    ],
    icon: Users,
    color: 'from-green-600 to-emerald-600',
    ariaLabel: 'Customer-First Focus - Prioritizing consumer voice and feedback'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Gut instinct lights the spark. Data fuses the rocket fuel.',
    points: [
      'Metric obsession: We define the north-star metrics that matter, then relentlessly optimize.',
      'Real‐time insights: AI-powered dashboards guide rapid, informed pivots.'
    ],
    icon: BarChart3,
    color: 'from-purple-600 to-pink-600',
    ariaLabel: 'Data-Driven Decisions - Using metrics and analytics for optimization'
  },
  {
    title: 'Moving Quick',
    description: 'Speed trumps perfection.',
    points: [
      'Two-day sprint cycles: Test, learn, and iterate on a cadence that keeps momentum high.',
      'Minimum-viable everything: Ship early, gather feedback, then scale with confidence.'
    ],
    icon: Zap,
    color: 'from-yellow-600 to-orange-600',
    ariaLabel: 'Moving Quick - Fast iteration and rapid testing cycles'
  },
  {
    title: 'High Agency',
    description: 'Every outcome is someone’s responsibility.',
    points: [
      'End-to-end stewardship: From strategy to supply chain, our teams own the full lifecycle.',
      'Clear commitments: We set transparent goals—and we deliver.'
    ],
    icon: CheckCircle2,
    color: 'from-blue-600 to-green-600',
    ariaLabel: 'High Agency - Taking ownership and responsibility for outcomes'
  },
  {
    title: 'Collaborative Integrity',
    description: 'Great brands are built on great partnerships.',
    points: [
      'Transparent teamwork: We build trust through radical transparency and cross-functional collaboration.',
      'Long-term value: We prioritize sustainable growth and ethical partnerships over quick wins.'
    ],
    icon: Handshake,
    color: 'from-pink-600 to-purple-600',
    ariaLabel: 'Collaborative Integrity - Building trust through transparent partnerships'
  }
];

const OurPrinciples: React.FC = () => {
  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(principlesPageSchema)
        }}
      />

      <style>{`
        /* Enhanced focus styles for accessibility */
        .principle-card:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 1.5rem;
        }
        .principle-card:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 1.5rem;
        }
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-700 { color: #000000; }
          .text-gray-800 { color: #000000; }
          .text-gray-900 { color: #000000; }
          .bg-gradient-to-br { background: #ffffff; }
          .border-gray-200 { border-color: #000000; }
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .principle-card {
            transform: none !important;
          }
        }
        /* Enhanced hover states */
        .principle-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .principle-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>

      <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-28 md:pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 
              id="principles-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Leadership Principles
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
              At Dolfyn Brands, our success is built on a foundation of guiding principles that empower our people, our partners—and ultimately, the brands we accelerate.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.header>

          <motion.main
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            role="main"
            aria-labelledby="principles-heading"
          >
            <div className="space-y-12 md:space-y-16" role="list">
              {principles.map((principle, idx) => (
                <motion.article
                  key={principle.title}
                  variants={itemVariants}
                  className="principle-card bg-white border-2 border-gray-200 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 focus-within:ring-4 focus-within:ring-blue-500/20"
                  role="listitem"
                  aria-labelledby={`principle-${idx}-title`}
                  aria-describedby={`principle-${idx}-description principle-${idx}-points`}
                  tabIndex={0}
                >
                  <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center shadow-2xl`}>
                    <principle.icon 
                      size={48} 
                      className="text-white" 
                      aria-hidden="true"
                      role="img"
                      aria-label={principle.ariaLabel}
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 
                      id={`principle-${idx}-title`}
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-4"
                    >
                      <span className="text-blue-600 font-extrabold text-4xl md:text-5xl lg:text-6xl">
                        {String(idx + 1).padStart(2, '0')}.
                      </span> 
                      {principle.title}
                    </h2>
                    <p 
                      id={`principle-${idx}-description`}
                      className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed"
                    >
                      {principle.description}
                    </p>
                    <div id={`principle-${idx}-points`}>
                      <h3 className="sr-only">Key aspects of {principle.title}</h3>
                      <ul className="text-gray-700 space-y-3" role="list">
                        {principle.points.map((point, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 text-lg leading-relaxed"
                            role="listitem"
                          >
                            <span 
                              className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"
                              aria-hidden="true"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.main>
        </div>
        
        {/* Skip to top link for accessibility */}
        <a 
          href="#principles-heading" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 hover:bg-blue-700"
          aria-label="Skip to top of page"
        >
          Skip to top
        </a>
      </div>
    </>
  );
};

export default OurPrinciples; 