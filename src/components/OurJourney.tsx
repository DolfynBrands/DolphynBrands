import React from 'react';

const timelineEvents = [
  {
    date: 'June 2024',
    title: 'Inception of MyGardenEmporium',
    description: 'E-commerce platform for plant lovers'
  },
  {
    date: 'January 2025',
    title: 'Inception of Dolfyn Brands in the USA',
    description: ''
  },
  {
    date: 'April 2025',
    title: 'Inception of Dolfyn VEO',
    description: 'Indian subsidiary of Dolfyn Brands'
  },
  {
    date: 'June 2025',
    title: 'Viva Earth Organics joins the Dolfyn Brands portfolio',
    description: ''
  },
  {
    date: 'July 2025',
    title: 'Inception of Viva Bloom',
    description: 'Garden supplies brand'
  }
];

const subtitle = 'From our inception to becoming a global force in brand transformation, here are some of the key milestones that define our story.';

const OurJourney = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-40 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 text-center tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Our Journey</span>
        </h1>
        <p className="text-xl text-gray-700 mb-14 text-center max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 w-1 bg-blue-500 h-full transform -translate-x-1/2 z-0 rounded"></div>
          <div className="space-y-0">
            {timelineEvents.map((event, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex items-center mb-16" style={{ minHeight: '120px' }}>
                  {isLeft ? (
                    <>
                      {/* Content on left */}
                      <div className="w-1/2 px-6 flex justify-end text-right">
                        <div className="inline-block max-w-md">
                          <div className="mb-1 text-sm text-blue-600 font-semibold">{event.date}</div>
                          <div className="text-xl font-bold mb-1">{event.title}</div>
                          {event.description && <div className="text-gray-500">{event.description}</div>}
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="w-0 flex flex-col items-center z-10">
                        <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      {/* Empty right side */}
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      {/* Empty left side */}
                      <div className="w-1/2"></div>
                      {/* Dot */}
                      <div className="w-0 flex flex-col items-center z-10">
                        <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                      </div>
                      {/* Content on right */}
                      <div className="w-1/2 px-6 flex justify-start text-left">
                        <div className="inline-block max-w-md">
                          <div className="mb-1 text-sm text-blue-600 font-semibold">{event.date}</div>
                          <div className="text-xl font-bold mb-1">{event.title}</div>
                          {event.description && <div className="text-gray-500">{event.description}</div>}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney; 