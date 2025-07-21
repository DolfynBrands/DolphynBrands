import React from 'react';
import { motion } from 'framer-motion';

const faqSections = [
  {
    title: 'GENERAL OVERVIEW',
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
    faqs: [
      { q: 'Do you provide coaching to founders?', a: 'Yes, we provide founder coaching on capital efficiency, hiring, decision-making, and mental resilience — because scaling a brand starts with scaling the founder.' },
      { q: 'What kind of founders do you typically work with?', a: 'We work with ethical, mission-driven founders — whether first-time entrepreneurs or returnees with global experience — who are obsessed with quality and community.' },
      { q: 'Is founder alignment really that important?', a: 'Absolutely. We only work with brands where we can deeply align with the founder’s values, ambition, and long-term intent.' },
      { q: 'Do you offer a community or peer network?', a: 'Yes. Dolfyn brands benefit from a private founder network to exchange learnings, best practices, and potential collaborations.' },
    ]
  },
  {
    title: 'OPERATIONS & STRUCTURE',
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
    faqs: [
      { q: 'What is the Dolfyn Insights Layer™?', a: 'It’s our proprietary dashboard that gives brands SKU-level profitability, inventory alerts, and margin intelligence in real time.' },
      { q: 'Do you offer tech integrations with marketplaces?', a: 'Yes. We enable end-to-end integrations for platforms like Amazon, Flipkart, Shopify, WooCommerce, Nykaa, and more.' },
      { q: 'Do you use visual AI for product discovery?', a: 'Yes. We enable AI-powered visual search and recommendation engines that help with D2C product engagement and upsell.' },
      { q: 'What kind of automation tools do you offer?', a: 'We build chatbots, email/SMS automation workflows, cohort analysis dashboards, and more — all customized per brand.' },
    ]
  },
  {
    title: 'SCALE, FUNDING & CAPITAL',
    faqs: [
      { q: 'Can Dolfyn help me raise capital?', a: 'Yes. While we provide our own capital in some models, we also help with capital strategy, pitch building, and connecting to aligned investors.' },
      { q: 'Is Dolfyn an investor or an operator?', a: 'We’re both. We don’t just cut a cheque and vanish — we work side-by-side with founders, often owning and executing critical brand functions.' },
      { q: 'Do you help with grants or government funding?', a: 'Yes. We have partnerships and frameworks to help eligible brands apply for export grants and startup schemes.' },
    ]
  },
  {
    title: 'CULTURE & VALUES',
    faqs: [
      { q: 'What are your leadership principles?', a: 'Our core principles include: Founder Obsession, Data-Driven Decisions, Bias for Action, Ownership, Relentless Innovation, Customer-First Focus, Integrity, and Sustainability.' },
      { q: 'What’s your work culture like at Dolfyn?', a: 'We hire builders, doers, and believers. Our team is built on collaboration, innovation, and ruthless focus on founder success.' },
      { q: 'How do you ensure sustainability?', a: 'We champion eco-conscious sourcing, waste-free inventory practices, and responsible packaging. Growth shouldn’t cost the planet.' },
      { q: 'Are you open to partnerships with NGOs or cause-driven brands?', a: 'Yes. We believe brands with purpose are the future, and we welcome collaborations that drive social and environmental impact.' },
    ]
  },
  {
    title: 'GLOBAL REACH & STRATEGY',
    faqs: [
      { q: 'Do you work with brands outside India?', a: 'Yes. We actively support brands in the US, UK, UAE, Australia, and Southeast Asia through decentralized pods.' },
      { q: 'What’s your expansion strategy?', a: 'We’re building local pods across major regions to provide global strategies with regional execution.' },
      { q: 'How does Dolfyn handle cross-border e-commerce?', a: 'We provide technical and operational support to launch and scale brands globally using platforms like Amazon Global and TikTok Shop.' },
      { q: 'What is micro-export and why does it matter?', a: 'Micro-export allows brands to scale globally without setting up foreign offices. Dolfyn helps brands leverage this for rapid international scale.' },
    ]
  },
  {
    title: 'ONBOARDING & ENGAGEMENT',
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
    faqs: [
      { q: 'Who are the key people in Dolfyn’s team?', a: 'Our team includes leaders from e-commerce, AI, brand strategy, creative, and operations — each with 10–15+ years of experience scaling brands.' },
      { q: 'Will I get a dedicated team?', a: 'Yes. You’ll have a cross-functional squad assigned to your brand, including performance marketers, brand designers, tech leads, and operations managers.' },
      { q: 'How often do we interact with the Dolfyn team?', a: 'We operate on weekly sprints and real-time dashboards. Founders interact with the team on strategic reviews, war rooms, and daily task cycles.' },
      { q: 'Is the Dolfyn model scalable for large enterprise brands too?', a: 'Yes. Our modular model suits fast-scaling startups and large enterprises seeking agile brand units.' },
      { q: 'What’s next for Dolfyn Brands?', a: 'We’re building the future of ethical, scalable brand-building. Expect more tech tools, cross-border pods, and a vibrant, founder-first community globally.' },
    ]
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const FAQ: React.FC = () => {
  return (
    <section className="min-h-screen pt-40 pb-24 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-12">
          {faqSections.map((section, sIdx) => (
            <div key={section.title}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-6 text-blue-700 tracking-wide"
              >
                <span className="mr-2">🔹</span>{section.title}
              </motion.h2>
              <div className="space-y-6">
                {section.faqs.map((faq) => (
                  <motion.div
                    key={faq.q}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.04, y: -8, boxShadow: '0 8px 32px 0 rgba(60, 80, 180, 0.15)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white border border-blue-200 rounded-2xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 cursor-pointer"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">{faq.q}</h3>
                    <p className="text-gray-700 text-base whitespace-pre-line">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 