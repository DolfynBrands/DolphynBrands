import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = 'https://dolfynbrands.com/og-image.jpg',
  ogType = 'website',
  canonicalUrl
}) => {
  const currentUrl = canonicalUrl || `https://dolfynbrands.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Dolfyn Brands" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dolfyn Brands" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data for Organization (only on home page) */}
      {window.location.pathname === '/' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dolfyn Brands",
            "url": "https://dolfynbrands.com",
            "logo": "https://dolfynbrands.com/logo.png",
            "description": "AI-powered brand transformation company delivering exceptional results for global brands",
            "sameAs": [
              "https://www.facebook.com/dolfynbrands",
              "https://www.twitter.com/dolfynbrands",
              "https://www.linkedin.com/company/dolfynbrands",
              "https://www.instagram.com/dolfynbrands"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-248-3005",
              "contactType": "customer service",
              "email": "contact@dolfynbrands.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Innovation Drive",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105",
              "addressCountry": "US"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;