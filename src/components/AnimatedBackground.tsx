import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [elements, setElements] = useState<Array<{
    id: number;
    text: string;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    direction: number;
    rotationSpeed: number;
    amplitude: number;
    frequency: number;
  }>>([]);

  const brandNames = [
    'Nike', 'Apple', 'Google', 'Tesla', 'Amazon', 'Meta', 'Netflix', 'Spotify',
    'Uber', 'Airbnb', 'Stripe', 'Discord', 'Figma', 'Notion', 'Slack', 'Zoom',
    'Shopify', 'Twilio', 'Vercel', 'GitHub', 'Linear', 'Framer', 'Webflow',
    'Microsoft', 'Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'Nvidia',
    'PayPal', 'Square', 'Coinbase', 'Robinhood', 'Canva', 'Dropbox', 'Atlassian',
    'MongoDB', 'Snowflake', 'Datadog', 'Okta', 'Zendesk', 'HubSpot', 'Mailchimp',
    'Asana', 'Trello', 'Miro', 'Loom', 'Calendly', 'Typeform', 'Intercom',
    'Segment', 'Amplitude', 'Mixpanel', 'Hotjar', 'Optimizely', 'Contentful'
  ];

  const reviews = [
    '★★★★★ "Amazing transformation!"',
    '★★★★★ "Best brand agency ever"',
    '★★★★★ "Incredible results"',
    '★★★★★ "Highly recommend"',
    '★★★★★ "Outstanding service"',
    '★★★★★ "Game-changing results"',
    '★★★★★ "Exceeded expectations"',
    '★★★★★ "Revolutionary approach"',
    '★★★★★ "Phenomenal growth"',
    '★★★★★ "Unmatched expertise"'
  ];

  const partners = [
    'Y Combinator', 'Techstars', 'Sequoia', 'A16z', 'Bessemer', 'Greylock',
    'First Round', 'Founders Fund', 'Kleiner Perkins', 'Accel', 'General Catalyst',
    'Index Ventures', 'Lightspeed', 'NEA', 'GV', 'CRV', 'Insight Partners',
    'Tiger Global', 'Coatue', 'DST Global', 'SoftBank Vision', 'Benchmark'
  ];

  const allTexts = [...brandNames, ...reviews, ...partners];

  useEffect(() => {
    const generateElements = () => {
      const newElements = [];
      for (let i = 0; i < 75; i++) {
        newElements.push({
          id: i,
          text: allTexts[Math.floor(Math.random() * allTexts.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 10,
          speed: Math.random() * 4 + 0.3,
          opacity: Math.random() * 0.4 + 0.05,
          direction: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          amplitude: Math.random() * 200 + 50,
          frequency: Math.random() * 0.02 + 0.005
        });
      }
      setElements(newElements);
    };

    generateElements();
    window.addEventListener('resize', generateElements);
    return () => window.removeEventListener('resize', generateElements);
  }, [allTexts]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ 
            x: element.x, 
            y: element.y,
            opacity: 0,
            rotate: 0
          }}
          animate={{
            x: [
              element.x, 
              element.x + Math.cos(element.direction) * element.amplitude,
              element.x + Math.cos(element.direction + Math.PI) * element.amplitude * 0.7,
              element.x + Math.cos(element.direction + Math.PI * 1.5) * element.amplitude * 0.4,
              element.x
            ],
            y: [
              element.y, 
              element.y + Math.sin(element.direction) * element.amplitude,
              element.y + Math.sin(element.direction + Math.PI) * element.amplitude * 0.7,
              element.y + Math.sin(element.direction + Math.PI * 1.5) * element.amplitude * 0.4,
              element.y
            ],
            opacity: [0, element.opacity * 0.3, element.opacity, element.opacity * 0.6, 0],
            rotate: [0, element.rotationSpeed * 180, element.rotationSpeed * 360, element.rotationSpeed * 540, element.rotationSpeed * 720],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8]
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1]
          }}
          className="absolute whitespace-nowrap"
          style={{
            fontSize: `${element.size}px`,
            color: element.text.includes('★') ? '#f59e0b' : '#374151',
            fontWeight: element.text.includes('★') ? 'normal' : '600'
          }}
        >
          {element.text}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;