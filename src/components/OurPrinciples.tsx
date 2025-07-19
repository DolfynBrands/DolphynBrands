import React from 'react';
import { User, Users, BarChart3, Zap, CheckCircle2, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Founder Obsession',
    description: 'We start with the founder’s vision and pain points.',
    points: [
      'Deep empathy: We invest time to truly understand your challenges and ambitions.',
      'Co-creation: We partner shoulder-to-shoulder, not from the sidelines.'
    ],
    icon: User,
    color: 'from-blue-400 to-purple-600'
  },
  {
    title: 'Customer-First Focus',
    description: 'The consumer’s voice is our compass.',
    points: [
      'Behavioral insights: We blend quantitative data with qualitative research to anticipate needs.',
      'Constant feedback loops: Surveys, interviews, and community forums shape our roadmaps.'
    ],
    icon: Users,
    color: 'from-green-400 to-emerald-400'
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Gut instinct lights the spark. Data fuses the rocket fuel.',
    points: [
      'Metric obsession: We define the north-star metrics that matter, then relentlessly optimize.',
      'Real‐time insights: AI-powered dashboards guide rapid, informed pivots.'
    ],
    icon: BarChart3,
    color: 'from-purple-400 to-pink-400'
  },
  {
    title: 'Moving Quick',
    description: 'Speed trumps perfection.',
    points: [
      'Two-day sprint cycles: Test, learn, and iterate on a cadence that keeps momentum high.',
      'Minimum-viable everything: Ship early, gather feedback, then scale with confidence.'
    ],
    icon: Zap,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'High Agency',
    description: 'Every outcome is someone’s responsibility.',
    points: [
      'End-to-end stewardship: From strategy to supply chain, our teams own the full lifecycle.',
      'Clear commitments: We set transparent goals—and we deliver.'
    ],
    icon: CheckCircle2,
    color: 'from-blue-500 to-green-500'
  },
  {
    title: 'Collaborative Integrity',
    description: 'Great brands are built on great partnerships.',
    points: [
      'Transparent teamwork: We build trust through radical transparency and cross-functional collaboration.',
      'Long-term value: We prioritize sustainable growth and ethical partnerships over quick wins.'
    ],
    icon: Handshake,
    color: 'from-pink-500 to-purple-500'
  }
];

const OurPrinciples: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen pt-40 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-14 text-center tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Our Leadership Principles</span>
        </h1>
        <p className="text-xl text-gray-700 mb-20 text-center max-w-3xl mx-auto leading-relaxed">
          At Dolfyn Brands, our success is built on a foundation of guiding principles that empower our people, our partners—and ultimately, the brands we accelerate.
        </p>
        <div className="space-y-16">
          {principles.map((principle, idx) => (
            <motion.div
              key={principle.title}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${principle.color} flex items-center justify-center shadow-lg mb-6 md:mb-0`}>
                <principle.icon size={40} className="text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                  <span className="text-blue-500 font-extrabold">{idx + 1}.</span> {principle.title}
                </h2>
                <p className="text-lg text-gray-800 mb-4">{principle.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                  {principle.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPrinciples; 