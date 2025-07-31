import React, { lazy } from 'react';

// Lazy load components
const AboutPage = lazy(() => import('../components/AboutPage'));
const BrandShowcase = lazy(() => import('../components/BrandShowcase'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const OurPrinciples = lazy(() => import('../components/OurPrinciples'));
const OurTeam = lazy(() => import('../components/OurTeam'));
const OurJourney = lazy(() => import('../components/OurJourney'));
const NotFound = lazy(() => import('../components/NotFound'));
const FAQ = lazy(() => import('../components/FAQ'));
const VivaEarthLanding = lazy(() => import('../components/VivaEarthLanding'));
const VivaBloomLanding = lazy(() => import('../components/VivaBloomLanding'));
const Careers = lazy(() => import('../components/Careers'));

// Home page components
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';

// Route metadata type
export interface RouteMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

// Route configuration type
export interface AppRoute {
  path: string;
  component: React.ComponentType;
  meta: RouteMetadata;
  isHome?: boolean;
}

// Home page component wrapper
const HomePage: React.FC = () => {
  const handlePageChange = (_page: string) => {
    // Remove console.log for production
    // console.log('Page changed to:', page);
  };

  return (
    <>
      <Hero setCurrentPage={handlePageChange} />
      <MainContent />
    </>
  );
};

// Route configurations
export const routes: AppRoute[] = [
  {
    path: '/',
    component: HomePage,
    isHome: true,
    meta: {
      title: 'Dolfyn Brands - AI-Powered Brand Transformation',
      description: 'Transform your brand with AI-powered strategies and creative excellence. Dolfyn Brands delivers exceptional results for global brand transformation.',
      keywords: 'brand transformation, AI branding, brand strategy, creative agency, brand development',
      ogImage: 'https://dolfynbrands.com/og-image.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'About Us - Dolfyn Brands',
      description: 'Learn about Dolfyn Brands\' mission to transform digital brands through AI-powered strategies and innovative solutions.',
      keywords: 'about dolfyn brands, company mission, brand transformation team',
      ogImage: 'https://dolfynbrands.com/og-about.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/brands',
    component: BrandShowcase,
    meta: {
      title: 'Our Brands - Dolfyn Brands Portfolio',
      description: 'Explore our portfolio of successfully transformed digital brands and see how we drive growth through strategic optimization.',
      keywords: 'brand portfolio, digital brands, brand showcase, success stories',
      ogImage: 'https://dolfynbrands.com/og-brands.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/contact',
    component: ContactSection,
    meta: {
      title: 'Contact Us - Dolfyn Brands',
      description: 'Get in touch with Dolfyn Brands to discuss your brand transformation needs and discover how we can help you grow.',
      keywords: 'contact dolfyn brands, brand consultation, get in touch',
      ogImage: 'https://dolfynbrands.com/og-contact.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/principles',
    component: OurPrinciples,
    meta: {
      title: 'Our Principles - Dolfyn Brands',
      description: 'Discover the core principles that guide Dolfyn Brands in delivering exceptional brand transformation results.',
      keywords: 'brand principles, company values, transformation methodology',
      ogImage: 'https://dolfynbrands.com/og-principles.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/team',
    component: OurTeam,
    meta: {
      title: 'Our Team - Dolfyn Brands',
      description: 'Meet the expert team behind Dolfyn Brands\' successful brand transformations and innovative strategies.',
      keywords: 'dolfyn brands team, brand experts, transformation specialists',
      ogImage: 'https://dolfynbrands.com/og-team.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/journey',
    component: OurJourney,
    meta: {
      title: 'Our Journey - Dolfyn Brands',
      description: 'Follow Dolfyn Brands\' journey in revolutionizing brand transformation through AI-powered strategies and innovation.',
      keywords: 'company journey, brand transformation history, dolfyn brands story',
      ogImage: 'https://dolfynbrands.com/og-journey.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/faq',
    component: FAQ,
    meta: {
      title: 'FAQs - Dolfyn Brands',
      description: 'Frequently asked questions about Dolfyn Brands, our services, and how we help transform brands with AI.',
      keywords: 'faq, questions, help, dolfyn brands',
      ogImage: 'https://dolfynbrands.com/og-faq.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/careers',
    component: Careers,
    meta: {
      title: 'Careers - Join Our Team | Dolfyn Brands',
      description: 'Join the Dolfyn Brands team and be part of our mission to transform brands through innovation and creativity. Apply for exciting career opportunities.',
      keywords: 'careers, jobs, dolfyn brands careers, job opportunities, brand transformation careers',
      ogImage: 'https://dolfynbrands.com/og-careers.jpg',
      ogType: 'website'
    }
  },
  {
    path: '/vivaearth',
    component: VivaEarthLanding,
    meta: {
      title: 'VivaEarth Organic - Pure Essential Oils',
      description: 'VivaEarth Organic offers pure, ethically sourced essential oils with a focus on sustainability and holistic wellness. Discover our earthy, garden-inspired collection.',
      keywords: 'essential oils, organic, sustainable, wellness, vivaearth',
      ogImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      ogType: 'website'
    }
  },
  {
    path: '/vivabloom',
    component: VivaBloomLanding,
    meta: {
      title: 'Viva Bloom - Premium Gardening Supplies',
      description: 'Viva Bloom offers high-quality, sustainable gardening supplies for passionate gardeners. From tools to seeds, we help you cultivate beauty and abundance in your garden.',
      keywords: 'gardening supplies, sustainable gardening, garden tools, organic seeds, viva bloom',
      ogImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
      ogType: 'website'
    }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Page Not Found - Dolfyn Brands',
      description: 'The page you are looking for could not be found. Return to Dolfyn Brands homepage to explore our brand transformation services.',
      keywords: '404, page not found, dolfyn brands',
      ogType: 'website'
    }
  }
];