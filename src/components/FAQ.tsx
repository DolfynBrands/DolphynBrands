import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Users, Settings, Globe, DollarSign, Heart, Briefcase, UserPlus } from 'lucide-react';

// Define structured data for SEO
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions - Dolfyn Brands",
  "description": "Get answers to common questions about Dolfyn Brands' services, processes, team, and how we help scale consumer brands globally.",
  "url": `${typeof window !== 'undefined' ? window.location.origin : ''}/faq`,
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Dolfyn Brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dolfyn Brands is a full-stack accelerator built to scale consumer brands globally with intelligence, empathy, and execution. We help founders tackle the biggest startup challenges: clarity, capability, and capital."
      }
    },
    {
      "@type": "Question",
      "name": "How is Dolfyn Brands different from traditional VCs or incubators?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional VCs that focus only on capital, Dolfyn Brands combines strategic funding with executional support across marketing, operations, tech, and retail — all under one roof."
      }
    },
    {
      "@type": "Question",
      "name": "What are the key pillars of Dolfyn's growth engine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate on five core pillars: Performance Marketing, Digital Branding, Supply Chain Optimization, AI & Automation, and Omnichannel Sales Expansion."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide coaching to founders?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide founder coaching on capital efficiency, hiring, decision-making, and mental resilience — because scaling a brand starts with scaling the founder."
      }
    }
  ]
};

// Enhanced FAQ section interface with icons
interface FAQSection {
  title: string;
  icon: React.ElementType;
  color: string;
  faqs: {
    q: string;
    a: string;
  }[];
  ariaLabel?: string;
}

const faqSections: FAQSection[] = [
  {
    title: 'GENERAL OVERVIEW',
    icon: HelpCircle,
    color: 'from-blue-600 to-purple-600',
    ariaLabel: 'General overview and company information',
    faqs: [
      { q: 'What is Dolfyn Brands?', a: 'Dolfyn Brands is a full-stack accelerator built to scale consumer brands globally with intelligence, empathy, and execution. We help founders tackle the biggest startup challenges: clarity, capability, and capital.' },
      { q: 'How is Dolfyn Brands different from traditional VCs or incubators?', a: 'Unlike traditional VCs that focus only on capital, Dolfyn Brands combines strategic funding with executional support across marketing, operations, tech, and retail — all under one roof.' },
      { q: 'Why are you called “Dolfyn” and not “shark”?', a: 'Sharks chase control; dolphins build community. At Dolfyn, we collaborate, protect, and help brands grow with agility and empathy. We\'re intelligent, fast-moving, and deeply founder-aligned.' },
      { q: 'Who are the founders of Dolfyn Brands?', a: 'Dolfyn Brands was co-founded by industry veterans with experience across performance marketing, digital commerce, supply chain, and brand building. Their collective vision is to empower founders without early dilution or burnout.' },
      { q: 'What is the mission of Dolfyn Brands?', a: 'To empower founders with conviction, capability, and capital to build sustainable, scalable brands globally.' },
      { q: 'What is the vision of Dolfyn Brands?', a: 'To become the world’s most trusted brand accelerator — helping ethical, founder-led brands rise from every corner of the globe.' },
      { q: 'What industries does Dolfyn focus on?', a: 'We focus on fast-growing consumer sectors like beauty, wellness, personal care, food, fashion, home, and lifestyle.' },
      { q: 'Is Dolfyn only for Indian brands?', a: 'No. We operate globally. Our decentralized model supports founders from India, UAE, US, UK, and other emerging consumer hubs.' },
    ]
  },
  {
    title: 'SERVICES & OFFERINGS',
    icon: Briefcase,
    color: 'from-green-600 to-emerald-600',
    ariaLabel: 'Services and business offerings',
    faqs: [
      { q: 'What does a full-stack accelerator mean?', a: 'We go beyond funding. Dolfyn offers services across brand strategy, performance marketing, supply chain, automation, creative production, and retail expansion.' },
      { q: 'What are the key pillars of Dolfyn’s growth engine?', a: 'We operate on five core pillars: Performance Marketing, Digital Branding, Supply Chain Optimization, AI & Automation, and Omnichannel Sales Expansion.' },
      { q: 'How do you help with performance marketing?', a: 'Our AI-powered marketing teams drive high-ROI campaigns across Meta, Google, Amazon, and more. We run full-funnel strategies with real-time performance dashboards.' },
      { q: 'What creative services do you offer?', a: 'From visual identity to conversion-optimized landing pages, reels, and short videos — our creative teams build brand stories that convert.' },
      { q: 'Can Dolfyn support offline retail expansion?', a: 'Absolutely. We help brands with GTM strategies, pricing, bundling, distributor networks, and onboarding to retail formats like Modern Trade.' },
      { q: 'How does Dolfyn support supply chain optimization?', a: 'Using AI and automation, we enable smart demand forecasting, zero dead stock inventory planning, and efficient multi-channel fulfillment.' },
      { q: 'What role does AI play at Dolfyn?', a: 'AI is at our core — driving product recommendations, customer behavior predictions, chat automation, and dynamic pricing for smarter, faster decisions.' },
      { q: 'Do you offer international logistics and export support?', a: 'Yes. We help brands navigate global selling via Amazon Global, TikTok Shop, and cross-border commerce infrastructure.' },
    ]
  },
  {
    title: 'FOUNDER SUPPORT & COMMUNITY',
    icon: Users,
    color: 'from-purple-600 to-pink-600',
    ariaLabel: 'Founder support and community programs',
    faqs: [
      { q: 'Do you provide coaching to founders?', a: 'Yes, we provide founder coaching on capital efficiency, hiring, decision-making, and mental resilience — because scaling a brand starts with scaling the founder.' },
      { q: 'What kind of founders do you typically work with?', a: 'We work with ethical, mission-driven founders — whether first-time entrepreneurs or returnees with global experience — who are obsessed with quality and community.' },
      { q: 'Is founder alignment really that important?', a: 'Absolutely. We only work with brands where we can deeply align with the founder’s values, ambition, and long-term intent.' },
      { q: 'Do you offer a community or peer network?', a: 'Yes. Dolfyn brands benefit from a private founder network to exchange learnings, best practices, and potential collaborations.' },
    ]
  },
  {
    title: 'OPERATIONS & STRUCTURE',
    icon: Settings,
    color: 'from-orange-600 to-red-600',
    ariaLabel: 'Operations and business structure',
    faqs: [
      { q: 'What is the Dolfyn Acceleration Quadrant™?', a: 'It’s our 4-model engagement framework based on brand maturity and capital preference — ranging from advisory and execution to capital investment and co-building.' },
      { q: 'Do you take equity in the brands you support?', a: 'In some models, yes. We tailor the engagement to what’s best for the founder. Options include equity, revenue share, or flat-fee + performance commission.' },
      { q: 'Can I work with Dolfyn without giving up equity?', a: 'Yes. We have flexible non-equity engagement models based on the brand’s goals and stage.' },
      { q: 'How long is a typical engagement period?', a: 'It ranges from 6 to 24 months, depending on the growth roadmap and objectives.' },
      { q: 'How quickly can I see results?', a: 'Our sprint-based execution cycle kicks off in the first 14 days. Brands usually see tangible growth impact within 60–90 days.' },
    ]
  },
  {
    title: 'TECHNOLOGY & INNOVATION',
    icon: Globe,
    color: 'from-teal-600 to-cyan-600',
    ariaLabel: 'Technology and innovation solutions',
    faqs: [
      { q: 'What is the Dolfyn Insights Layer™?', a: 'It’s our proprietary dashboard that gives brands SKU-level profitability, inventory alerts, and margin intelligence in real time.' },
      { q: 'Do you offer tech integrations with marketplaces?', a: 'Yes. We enable end-to-end integrations for platforms like Amazon, Flipkart, Shopify, WooCommerce, Nykaa, and more.' },
      { q: 'Do you use visual AI for product discovery?', a: 'Yes. We enable AI-powered visual search and recommendation engines that help with D2C product engagement and upsell.' },
      { q: 'What kind of automation tools do you offer?', a: 'We build chatbots, email/SMS automation workflows, cohort analysis dashboards, and more — all customized per brand.' },
    ]
  },
  {
    title: 'SCALE, FUNDING & CAPITAL',
    icon: DollarSign,
    color: 'from-yellow-600 to-orange-600',
    ariaLabel: 'Funding and capital services',
    faqs: [
      { q: 'Can Dolfyn help me raise capital?', a: 'Yes. While we provide our own capital in some models, we also help with capital strategy, pitch building, and connecting to aligned investors.' },
      { q: 'Is Dolfyn an investor or an operator?', a: 'We’re both. We don’t just cut a cheque and vanish — we work side-by-side with founders, often owning and executing critical brand functions.' },
      { q: 'Do you help with grants or government funding?', a: 'Yes. We have partnerships and frameworks to help eligible brands apply for export grants and startup schemes.' },
    ]
  },
  {
    title: 'CULTURE & VALUES',
    icon: Heart,
    color: 'from-pink-600 to-purple-600',
    ariaLabel: 'Company culture and values',
    faqs: [
      { q: 'What are your leadership principles?', a: 'Our core principles include: Founder Obsession, Data-Driven Decisions, Bias for Action, Ownership, Relentless Innovation, Customer-First Focus, Integrity, and Sustainability.' },
      { q: 'What’s your work culture like at Dolfyn?', a: 'We hire builders, doers, and believers. Our team is built on collaboration, innovation, and ruthless focus on founder success.' },
      { q: 'How do you ensure sustainability?', a: 'We champion eco-conscious sourcing, waste-free inventory practices, and responsible packaging. Growth shouldn’t cost the planet.' },
      { q: 'Are you open to partnerships with NGOs or cause-driven brands?', a: 'Yes. We believe brands with purpose are the future, and we welcome collaborations that drive social and environmental impact.' },
    ]
  },
  {
    title: 'GLOBAL REACH & STRATEGY',
    icon: Globe,
    color: 'from-indigo-600 to-blue-600',
    ariaLabel: 'Global reach and strategy',
    faqs: [
      { q: 'Do you work with brands outside India?', a: 'Yes. We actively support brands in the US, UK, UAE, Australia, and Southeast Asia through decentralized pods.' },
      { q: 'What’s your expansion strategy?', a: 'We’re building local pods across major regions to provide global strategies with regional execution.' },
      { q: 'How does Dolfyn handle cross-border e-commerce?', a: 'We provide technical and operational support to launch and scale brands globally using platforms like Amazon Global and TikTok Shop.' },
      { q: 'What is micro-export and why does it matter?', a: 'Micro-export allows brands to scale globally without setting up foreign offices. Dolfyn helps brands leverage this for rapid international scale.' },
    ]
  },
  {
    title: 'ONBOARDING & ENGAGEMENT',
    icon: UserPlus,
    color: 'from-emerald-600 to-green-600',
    ariaLabel: 'Onboarding and engagement process',
    faqs: [
      { q: 'How can I apply to join Dolfyn Brands?', a: 'You can apply via our website. We review applications on a rolling basis and reach out if there’s alignment.' },
      { q: 'What are the selection criteria?', a: 'We evaluate vision, market opportunity, traction, and most importantly — the founder’s conviction and openness to partnership.' },
      { q: 'Do I need a minimum revenue to work with Dolfyn?', a: 'Not always. Some of our brands are in pre-revenue stage with strong product-market fit. Others are scaling past ₹1 crore/month in revenue.' },
      { q: 'Do you work with D2C-only brands?', a: 'We love D2C, but we also scale omnichannel — including B2B, modern trade, export, and retail.' },
      { q: 'Can existing brands pivot with Dolfyn’s help?', a: 'Absolutely. We help reposition brands, rebrand, or relaunch products when it aligns with market trends and growth potential.' },
    ]
  },
  {
    title: 'TEAM & SUPPORT',
    icon: Users,
    color: 'from-slate-600 to-gray-600',
    ariaLabel: 'Team and support information',
    faqs: [
      { q: 'Who are the key people in Dolfyn’s team?', a: 'Our team includes leaders from e-commerce, AI, brand strategy, creative, and operations — each with 10–15+ years of experience scaling brands.' },
      { q: 'Will I get a dedicated team?', a: 'Yes. You’ll have a cross-functional squad assigned to your brand, including performance marketers, brand designers, tech leads, and operations managers.' },
      { q: 'How often do we interact with the Dolfyn team?', a: 'We operate on weekly sprints and real-time dashboards. Founders interact with the team on strategic reviews, war rooms, and daily task cycles.' },
      { q: 'Is the Dolfyn model scalable for large enterprise brands too?', a: 'Yes. Our modular model suits fast-scaling startups and large enterprises seeking agile brand units.' },
      { q: 'What’s next for Dolfyn Brands?', a: 'We’re building the future of ethical, scalable brand-building. Expect more tech tools, cross-border pods, and a vibrant, founder-first community globally.' },
    ]
  },
];

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (sectionTitle: string, questionIndex: number) => {
    const key = `${sectionTitle}-${questionIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about partnering with Dolfyn Brands to scale your consumer brand globally.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, sectionIndex) => {
            const IconComponent = section.icon;
            
            return (
              <motion.div
                key={section.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={itemVariants}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden"
              >
                {/* Section Header */}
                <div className={`bg-gradient-to-r ${section.color} p-6 sm:p-8`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <IconComponent 
                        className="w-6 h-6 text-white" 
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="p-6 sm:p-8 space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const itemKey = `${section.title}-${faqIndex}`;
                    const isExpanded = expandedItems[itemKey];

                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleExpanded(section.title, faqIndex)}
                          className="w-full p-4 sm:p-6 text-left flex items-center justify-between bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          aria-expanded={isExpanded}
                          aria-controls={`faq-answer-${itemKey}`}
                          aria-label={`${section.ariaLabel}: ${faq.q}`}
                        >
                          <span className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                            {faq.q}
                          </span>
                          <motion.div
                            variants={iconVariants}
                            animate={isExpanded ? "expanded" : "collapsed"}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-600" />
                            )}
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              id={`faq-answer-${itemKey}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                  {faq.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Our team is here to help you understand how Dolfyn can accelerate your brand&apos;s growth.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            Get in Touch
            <HelpCircle className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
export default FAQ; 