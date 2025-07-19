import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from '../SEO';

// Mock window.location
const mockLocation = {
  pathname: '/test',
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

const renderSEOWithProvider = (props: Record<string, unknown>) => {
  return render(
    <HelmetProvider>
      <SEO {...props} />
    </HelmetProvider>
  );
};

describe('SEO Component', () => {
  beforeEach(() => {
    // Clear any existing helmet tags
    document.head.innerHTML = '';
  });

  test('renders basic meta tags correctly', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      keywords: 'test, keywords',
    };

    renderSEOWithProvider(props);

    // Check if title is set
    expect(document.title).toBe('Test Title');
    
    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription?.getAttribute('content')).toBe('Test Description');
    
    // Check meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords?.getAttribute('content')).toBe('test, keywords');
  });

  test('renders Open Graph meta tags correctly', () => {
    const props = {
      title: 'OG Test Title',
      description: 'OG Test Description',
      ogImage: 'https://example.com/image.jpg',
      ogType: 'article',
    };

    renderSEOWithProvider(props);

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    expect(ogTitle?.getAttribute('content')).toBe('OG Test Title');
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    expect(ogDescription?.getAttribute('content')).toBe('OG Test Description');
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute('content')).toBe('https://example.com/image.jpg');
    
    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute('content')).toBe('article');
  });

  test('renders Twitter Card meta tags correctly', () => {
    const props = {
      title: 'Twitter Test Title',
      description: 'Twitter Test Description',
      ogImage: 'https://example.com/twitter-image.jpg',
    };

    renderSEOWithProvider(props);

    // Check Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    expect(twitterTitle?.getAttribute('content')).toBe('Twitter Test Title');
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    expect(twitterDescription?.getAttribute('content')).toBe('Twitter Test Description');
    
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    expect(twitterImage?.getAttribute('content')).toBe('https://example.com/twitter-image.jpg');
    
    const twitterCard = document.querySelector('meta[property="twitter:card"]');
    expect(twitterCard?.getAttribute('content')).toBe('summary_large_image');
  });

  test('renders canonical URL correctly', () => {
    const props = {
      title: 'Canonical Test',
      description: 'Canonical Description',
      canonicalUrl: 'https://example.com/canonical',
    };

    renderSEOWithProvider(props);

    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute('href')).toBe('https://example.com/canonical');
  });

  test('uses default values when optional props are not provided', () => {
    const props = {
      title: 'Default Test',
      description: 'Default Description',
    };

    renderSEOWithProvider(props);

    // Check default OG image
    const ogImage = document.querySelector('meta[property="og:image"]');
    expect(ogImage?.getAttribute('content')).toBe('https://dolfynbrands.com/og-image.jpg');
    
    // Check default OG type
    const ogType = document.querySelector('meta[property="og:type"]');
    expect(ogType?.getAttribute('content')).toBe('website');
  });

  test('renders structured data on home page only', () => {
    // Mock home page
    mockLocation.pathname = '/';
    
    const props = {
      title: 'Home Page',
      description: 'Home Description',
    };

    renderSEOWithProvider(props);

    const structuredData = document.querySelector('script[type="application/ld+json"]');
    expect(structuredData).toBeTruthy();
    
    // Parse and check structured data
    const jsonData = JSON.parse(structuredData?.textContent || '{}');
    expect(jsonData['@type']).toBe('Organization');
    expect(jsonData.name).toBe('Dolfyn Brands');
  });

  test('does not render structured data on non-home pages', () => {
    // Mock non-home page
    mockLocation.pathname = '/about';
    
    const props = {
      title: 'About Page',
      description: 'About Description',
    };

    renderSEOWithProvider(props);

    const structuredData = document.querySelector('script[type="application/ld+json"]');
    expect(structuredData).toBeFalsy();
  });
});