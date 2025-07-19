# Implementation Plan

- [x] 1. Install dependencies and setup router infrastructure
  - Install react-router-dom v6 and react-helmet-async packages
  - Create basic router configuration structure
  - _Requirements: 1.1, 2.1_

- [x] 2. Create SEO and Layout components
  - [x] 2.1 Create SEO component for dynamic meta tag management
    - Implement SEO component using React Helmet Async
    - Add props for title, description, keywords, and Open Graph data
    - Include structured data and canonical URL support
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 2.2 Create Layout component wrapper
    - Implement Layout component that wraps Header, main content, and Footer
    - Integrate SEO component into Layout
    - Maintain existing responsive design and styling
    - _Requirements: 4.1, 4.2_

- [x] 3. Configure application routing
  - [x] 3.1 Create route configuration with metadata
    - Define route configuration object with paths, components, and SEO metadata
    - Include all existing pages: home, about, brands, contact, principles, team, journey
    - Add 404 NotFound route configuration
    - _Requirements: 2.1, 2.2, 3.1, 3.2_

  - [x] 3.2 Update App.tsx to use React Router
    - Replace state-based navigation with BrowserRouter
    - Implement Routes and Route components with lazy loading
    - Remove currentPage state and setCurrentPage prop drilling
    - Maintain existing Suspense fallback for lazy-loaded components
    - _Requirements: 1.1, 2.1, 4.3_

- [x] 4. Create 404 Not Found page
  - Implement NotFound component with consistent design
  - Add navigation links back to main sections
  - Include proper error messaging and branding
  - _Requirements: 2.4_

- [x] 5. Update navigation components
  - [x] 5.1 Update Header component navigation
    - Replace setCurrentPage calls with useNavigate hook
    - Update navigation links to use proper route paths
    - Maintain existing mobile menu and scroll behavior
    - Update active page detection to use current location
    - _Requirements: 1.1, 1.4, 4.1_

  - [x] 5.2 Update Footer component navigation
    - Replace setCurrentPage calls with useNavigate hook
    - Update footer links to use proper route paths
    - Maintain existing styling and animations
    - _Requirements: 1.1, 4.1_

  - [x] 5.3 Update Hero component navigation
    - Replace setCurrentPage call with useNavigate hook
    - Update CTA button to navigate to contact route
    - Maintain existing animations and styling
    - _Requirements: 1.1, 4.1_

- [x] 6. Add route-level SEO metadata
  - [x] 6.1 Implement home page SEO metadata
    - Add unique title, description, and keywords for home page
    - Configure Open Graph and Twitter card data
    - Include structured data for organization
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 6.2 Implement SEO metadata for all other pages
    - Add unique SEO data for about, brands, contact, principles, team, journey pages
    - Ensure each page has descriptive titles and meta descriptions
    - Configure appropriate Open Graph images and data
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 7. Configure build and deployment for SPA routing
  - [x] 7.1 Update Vite configuration for SPA routing
    - Configure Vite to handle client-side routing properly
    - Add fallback routing for production builds
    - Ensure all routes work when accessed directly
    - _Requirements: 2.3, 5.1_

  - [x] 7.2 Update sitemap.xml with new URL structure
    - Replace hash-based URLs with proper route paths
    - Update all sitemap entries to match new routing structure
    - Maintain proper priority and change frequency settings
    - _Requirements: 2.1, 2.2_

- [x] 8. Add backward compatibility redirects
  - Implement hash-based URL redirects for existing bookmarks
  - Add redirect logic from old anchor URLs to new route paths
  - Ensure smooth transition for existing users and bookmarks
  - _Requirements: 1.2, 1.3_

- [ ] 9. Write tests for routing functionality
  - [x] 9.1 Create unit tests for SEO component
    - Test meta tag rendering with different props
    - Test Open Graph and Twitter card generation
    - Test structured data output
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 9.2 Create integration tests for routing
    - Test navigation between all routes
    - Test direct URL access to all pages
    - Test 404 handling for invalid routes
    - Test browser back/forward functionality
    - _Requirements: 1.1, 1.4, 2.3, 2.4_

- [x] 10. Performance optimization and cleanup
  - Remove unused state management code from components
  - Optimize bundle splitting with new routing structure
  - Add route-level preloading for performance
  - Verify lazy loading continues to work properly with router
  - _Requirements: 4.3, 4.4, 5.2, 5.3_