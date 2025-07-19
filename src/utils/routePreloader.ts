// Route preloader for performance optimization
export const preloadRoute = (routePath: string) => {
  // Preload route components based on user interaction patterns
  const routeComponentMap: Record<string, () => Promise<any>> = {
    '/about': () => import('../components/AboutPage'),
    '/brands': () => import('../components/BrandShowcase'),
    '/contact': () => import('../components/ContactSection'),
    '/principles': () => import('../components/OurPrinciples'),
    '/team': () => import('../components/OurTeam'),
    '/journey': () => import('../components/OurJourney'),
  };

  const preloader = routeComponentMap[routePath];
  if (preloader) {
    // Preload with low priority to avoid blocking main thread
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        preloader().catch(() => {
          // Silently handle preload failures
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        preloader().catch(() => {
          // Silently handle preload failures
        });
      }, 100);
    }
  }
};

// Preload likely next routes based on current route
export const preloadLikelyRoutes = (currentPath: string) => {
  const likelyNextRoutes: Record<string, string[]> = {
    '/': ['/about', '/contact'], // From home, users likely go to about or contact
    '/about': ['/team', '/journey'], // From about, users likely want to know more about team/journey
    '/brands': ['/contact'], // From brands, users likely want to contact
    '/contact': ['/about'], // From contact, users might want to learn more
    '/team': ['/journey', '/principles'], // From team, users might want journey/principles
    '/journey': ['/team', '/principles'], // From journey, users might want team/principles
    '/principles': ['/team', '/about'], // From principles, users might want team/about
  };

  const routes = likelyNextRoutes[currentPath] || [];
  routes.forEach(route => preloadRoute(route));
};