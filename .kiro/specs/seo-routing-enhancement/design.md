# Design Document

## Overview

This design transforms the existing state-based navigation system into a proper URL routing system using React Router v6, while adding dynamic meta tag management with React Helmet. The solution maintains the current lazy loading architecture and component structure while enabling proper SEO indexing and user navigation experience.

## Architecture

### Current State
- State-based navigation using `useState('home')`
- Switch statement for component rendering
- Props drilling for `setCurrentPage` function
- Static meta tags in index.html

### Target State
- URL-based routing with React Router v6
- Route-based component rendering
- Navigation through `useNavigate` hook
- Dynamic meta tags per route using React Helmet

## Components and Interfaces

### 1. Router Configuration
```typescript
// src/router/AppRouter.tsx
interface RouteConfig {
  path: string;
  element: React.ComponentType;
  meta: {
    title: string;
    description: string;
    keywords?: string;
  };
}
```

### 2. Layout Component
```typescript
// src/components/Layout.tsx
interface LayoutProps {
  children: React.ReactNode;
}
```

### 3. SEO Component
```typescript
// src/components/SEO.tsx
interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}
```

### 4. Updated Navigation Components
- Header: Replace `setCurrentPage` with `useNavigate`
- Footer: Replace `setCurrentPage` with `useNavigate`
- Hero: Replace `setCurrentPage` with `useNavigate`

## Data Models

### Route Configuration Model
```typescript
type RouteMetadata = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
};

type AppRoute = {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  meta: RouteMetadata;
  exact?: boolean;
};
```

### Navigation State Model
```typescript
// Remove currentPage state management
// Navigation state will be managed by React Router
```

## Implementation Strategy

### Phase 1: Dependencies and Setup
1. Install React Router v6 and React Helmet Async
2. Create router configuration structure
3. Set up base routing infrastructure

### Phase 2: Component Refactoring
1. Create Layout component wrapper
2. Create SEO component for meta tag management
3. Update App.tsx to use BrowserRouter
4. Replace state-based navigation in components

### Phase 3: Route Definition
1. Define all application routes with metadata
2. Implement lazy loading with React Router
3. Add 404 error page handling
4. Configure route-specific SEO data

### Phase 4: Navigation Updates
1. Update Header component navigation
2. Update Footer component navigation  
3. Update Hero component navigation
4. Remove all `setCurrentPage` prop drilling

## Route Structure

```
/ (Home)
├── /about (About Page)
├── /brands (Brand Showcase)
├── /contact (Contact Section)
├── /principles (Our Principles)
├── /team (Our Team)
├── /journey (Our Journey)
└── * (404 Not Found)
```

## SEO Meta Tag Strategy

### Home Page
- Title: "Dolfyn Brands - AI-Powered Brand Transformation"
- Description: "Transform your brand with AI-powered strategies and creative excellence. Dolfyn Brands delivers exceptional results for global brand transformation."

### About Page
- Title: "About Us - Dolfyn Brands"
- Description: "Learn about Dolfyn Brands' mission to transform digital brands through AI-powered strategies and innovative solutions."

### Brands Page
- Title: "Our Brands - Dolfyn Brands Portfolio"
- Description: "Explore our portfolio of successfully transformed digital brands and see how we drive growth through strategic optimization."

### Contact Page
- Title: "Contact Us - Dolfyn Brands"
- Description: "Get in touch with Dolfyn Brands to discuss your brand transformation needs and discover how we can help you grow."

### Additional Pages
- Similar pattern for Principles, Team, and Journey pages
- Each with unique, descriptive titles and meta descriptions

## Error Handling

### 404 Page Handling
- Create NotFound component for invalid routes
- Implement proper 404 HTTP status (handled by server)
- Provide navigation back to main sections
- Maintain consistent design with rest of application

### Route Loading States
- Maintain existing Suspense fallback for lazy-loaded components
- Add error boundaries for route-level error handling
- Graceful degradation for JavaScript-disabled users

## Testing Strategy

### Unit Testing
- Test route configuration and metadata
- Test SEO component meta tag rendering
- Test navigation component updates
- Test lazy loading with new router setup

### Integration Testing
- Test full navigation flow between pages
- Test browser back/forward functionality
- Test direct URL access to all routes
- Test 404 handling for invalid routes

### SEO Testing
- Verify unique meta tags per route
- Test Open Graph tags for social sharing
- Validate structured data compatibility
- Test sitemap URL alignment with new routes

## Performance Considerations

### Bundle Optimization
- Maintain existing code splitting with lazy loading
- Router adds minimal bundle size (~13KB gzipped)
- React Helmet adds ~3KB gzipped
- No impact on existing chunk strategy

### Loading Performance
- Preserve existing lazy loading behavior
- Add route-level preloading for likely next pages
- Maintain current Suspense fallback patterns
- No additional network requests for navigation

### SEO Performance
- Dynamic meta tags update without page refresh
- Faster perceived navigation (no full page reloads)
- Better Core Web Vitals scores
- Improved crawlability for search engines

## Migration Strategy

### Backward Compatibility
- Implement hash-based redirects for existing bookmarks
- Add redirect rules for old anchor-based URLs (#about → /about)
- Maintain existing component interfaces during transition
- Gradual rollout with feature flags if needed

### Deployment Considerations
- Update server configuration for SPA routing (catch-all rule)
- Update sitemap.xml with new URL structure
- Configure proper HTTP status codes for routes
- Test all routes in production environment