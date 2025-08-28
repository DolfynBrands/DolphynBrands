import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, Leaf, Sprout, Globe } from 'lucide-react';

// Define structured data for SEO
const journeyPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Our Journey - Dolfyn Brands Timeline & Milestones",
  "description": "Discover the key milestones in Dolfyn Brands' journey from inception to becoming a global force in brand transformation.",
  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/journey`,
  "mainEntity": {
    "@type": "Organization",
    "name": "Dolfyn Brands",
    "description": "Global brand transformation company with a timeline of growth and innovation",
    "foundingDate": "2025-01",
    "location": "USA",
    "event": [
      {
        "@type": "Event",
        "name": "Inception of MyGardenEmporium",
        "startDate": "2024-06",
        "description": "E-commerce platform for plant lovers",
        "organizer": {
          "@type": "Organization",
          "name": "Dolfyn Brands"
        }
      },
      {
        "@type": "Event",
        "name": "Inception of Dolfyn Brands in the USA",
        "startDate": "2025-01",
        "description": "Official founding of Dolfyn Brands in the United States",
        "organizer": {
          "@type": "Organization",
          "name": "Dolfyn Brands"
        }
      },
      {
        "@type": "Event",
        "name": "Inception of Dolfyn VEO",
        "startDate": "2025-04",
        "description": "Indian subsidiary of Dolfyn Brands",
        "organizer": {
          "@type": "Organization",
          "name": "Dolfyn Brands"
        }
      },
      {
        "@type": "Event",
        "name": "Viva Earth Organics joins the Dolfyn Brands portfolio",
        "startDate": "2025-06",
        "description": "Strategic acquisition expanding our organic product offerings",
        "organizer": {
          "@type": "Organization",
          "name": "Dolfyn Brands"
        }
      },
      {
        "@type": "Event",
        "name": "Inception of Viva Bloom",
        "startDate": "2025-07",
        "description": "Garden supplies brand launch",
        "organizer": {
          "@type": "Organization",
          "name": "Dolfyn Brands"
        }
      }
    ]
  }
};

// Enhanced timeline event interface
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  ariaLabel?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'June 2024',
    title: 'Inception of MyGardenEmporium',
    description: 'E-commerce platform for plant lovers',
    icon: Sprout,
    color: 'from-green-600 to-emerald-600',
    ariaLabel: 'MyGardenEmporium launch - E-commerce platform for plant enthusiasts'
  },
  {
    date: 'January 2025',
    title: 'Inception of Dolfyn Brands in the USA',
    description: 'Official founding of Dolfyn Brands in the United States',
    icon: Building2,
    color: 'from-blue-600 to-purple-600',
    ariaLabel: 'Dolfyn Brands founding - Official company establishment in USA'
  },
  {
    date: 'April 2025',
    title: 'Inception of Dolfyn VEO',
    description: 'Indian subsidiary of Dolfyn Brands',
    icon: Globe,
    color: 'from-orange-600 to-red-600',
    ariaLabel: 'Dolfyn VEO launch - International expansion to India'
  },
  {
    date: 'June 2025',
    title: 'Viva Earth Organics joins the Dolfyn Brands portfolio',
    description: 'Strategic acquisition expanding our organic product offerings',
    icon: Leaf,
    color: 'from-teal-600 to-cyan-600',
    ariaLabel: 'Viva Earth Organics acquisition - Portfolio expansion into organic products'
  },
  {
    date: 'July 2025',
    title: 'Inception of Viva Bloom',
    description: 'Garden supplies brand',
    icon: Calendar,
    color: 'from-pink-600 to-purple-600',
    ariaLabel: 'Viva Bloom launch - Garden supplies brand development'
  }
];

const subtitle = 'From our inception to becoming a global force in brand transformation, here are some of the key milestones that define our story.';

const OurJourney = () => {
  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(journeyPageSchema)
        }}
      />

      <style>{`
        /* Enhanced focus styles for accessibility */
        .timeline-item:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        .timeline-item:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 3px;
          border-radius: 0.75rem;
        }
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .text-gray-500 { color: #000000; }
          .text-gray-700 { color: #000000; }
          .text-gray-900 { color: #000000; }
          .bg-blue-500 { background-color: #000000; }
          .text-blue-600 { color: #000000; }
        }
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        /* Enhanced timeline line */
        .timeline-line {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #3b82f6);
        }
        /* Responsive timeline adjustments */
        @media (max-width: 768px) {
          .timeline-desktop { display: none; }
          .timeline-mobile { display: block; }
        }
        @media (min-width: 769px) {
          .timeline-desktop { display: block; }
          .timeline-mobile { display: none; }
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
              id="journey-heading"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Our Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.header>

          <motion.main
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            role="main"
            aria-labelledby="journey-heading"
          >
            {/* Desktop Timeline */}
            <div className="timeline-desktop relative">
              {/* Vertical timeline line */}
              <div className="timeline-line absolute left-1/2 top-0 w-1 h-full transform -translate-x-1/2 z-0 rounded" />
              
              <div className="space-y-0" role="list" aria-label="Company timeline events">
                {timelineEvents.map((event, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <motion.article
                      key={idx}
                      variants={isLeft ? leftVariants : rightVariants}
                      className="timeline-item relative flex items-center mb-16 focus-within:ring-4 focus-within:ring-blue-500/20"
                      style={{ minHeight: '140px' }}
                      role="listitem"
                      aria-labelledby={`event-${idx}-title`}
                      aria-describedby={`event-${idx}-date event-${idx}-description`}
                      tabIndex={0}
                    >
                      {isLeft ? (
                        <>
                          {/* Content on left */}
                          <div className="w-1/2 px-8 flex justify-end text-right">
                            <div className="inline-block max-w-md bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                              <div 
                                id={`event-${idx}-date`}
                                className="mb-2 text-sm font-bold text-blue-600 uppercase tracking-wide"
                              >
                                {event.date}
                              </div>
                              <h3 
                                id={`event-${idx}-title`}
                                className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight"
                              >
                                {event.title}
                              </h3>
                              {event.description && (
                                <p 
                                  id={`event-${idx}-description`}
                                  className="text-gray-700 leading-relaxed"
                                >
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Enhanced Dot with Icon */}
                          <div className="w-0 flex flex-col items-center z-10">
                            <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center`}>
                              <event.icon 
                                size={24} 
                                className="text-white" 
                                aria-hidden="true"
                                role="img"
                                aria-label={event.ariaLabel}
                              />
                            </div>
                          </div>
                          {/* Empty right side */}
                          <div className="w-1/2" />
                        </>
                      ) : (
                        <>
                          {/* Empty left side */}
                          <div className="w-1/2" />
                          {/* Enhanced Dot with Icon */}
                          <div className="w-0 flex flex-col items-center z-10">
                            <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center`}>
                              <event.icon 
                                size={24} 
                                className="text-white" 
                                aria-hidden="true"
                                role="img"
                                aria-label={event.ariaLabel}
                              />
                            </div>
                          </div>
                          {/* Content on right */}
                          <div className="w-1/2 px-8 flex justify-start text-left">
                            <div className="inline-block max-w-md bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300">
                              <div 
                                id={`event-${idx}-date-mobile`}
                                className="mb-2 text-sm font-bold text-blue-600 uppercase tracking-wide"
                              >
                                {event.date}
                              </div>
                              <h3 
                                id={`event-${idx}-title-mobile`}
                                className="text-xl md:text-2xl font-bold mb-3 text-gray-900 leading-tight"
                              >
                                {event.title}
                              </h3>
                              {event.description && (
                                <p 
                                  id={`event-${idx}-description-mobile`}
                                  className="text-gray-700 leading-relaxed"
                                >
                                  {event.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="timeline-mobile">
              <div className="relative">
                {/* Mobile timeline line */}
                <div className="timeline-line absolute left-8 top-0 w-1 h-full z-0 rounded" />
                
                <div className="space-y-8" role="list" aria-label="Company timeline events">
                  {timelineEvents.map((event, idx) => (
                    <motion.article
                      key={idx}
                      variants={itemVariants}
                      className="timeline-item relative flex items-start pl-20 focus-within:ring-4 focus-within:ring-blue-500/20"
                      role="listitem"
                      aria-labelledby={`mobile-event-${idx}-title`}
                      aria-describedby={`mobile-event-${idx}-date mobile-event-${idx}-description`}
                      tabIndex={0}
                    >
                      {/* Mobile Dot with Icon */}
                      <div className="absolute left-0 flex flex-col items-center z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full border-4 border-white shadow-2xl flex items-center justify-center`}>
                          <event.icon 
                            size={24} 
                            className="text-white" 
                            aria-hidden="true"
                            role="img"
                            aria-label={event.ariaLabel}
                          />
                        </div>
                      </div>
                      
                      {/* Mobile Content */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 w-full">
                        <div 
                          id={`mobile-event-${idx}-date`}
                          className="mb-2 text-sm font-bold text-blue-600 uppercase tracking-wide"
                        >
                          {event.date}
                        </div>
                        <h3 
                          id={`mobile-event-${idx}-title`}
                          className="text-xl font-bold mb-3 text-gray-900 leading-tight"
                        >
                          {event.title}
                        </h3>
                        {event.description && (
                          <p 
                            id={`mobile-event-${idx}-description`}
                            className="text-gray-700 leading-relaxed"
                          >
                            {event.description}
                          </p>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </motion.main>
        </div>
        
        {/* Skip to top link for accessibility */}
        <a 
          href="#journey-heading" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200 hover:bg-blue-700"
          aria-label="Skip to top of page"
        >
          Skip to top
        </a>
      </div>
    </>
  );
};

export default OurJourney; 