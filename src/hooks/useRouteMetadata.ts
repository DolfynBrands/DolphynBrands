import { useLocation } from 'react-router-dom';
import { routes, RouteMetadata } from '../router/routes';

export const useRouteMetadata = (): RouteMetadata => {
  const location = useLocation();
  
  // Find the current route based on pathname
  const currentRoute = routes.find(route => {
    if (route.path === '*') return false;
    if (route.path === '/') return location.pathname === '/';
    return location.pathname === route.path;
  });

  // Return metadata for current route or default for 404
  return currentRoute?.meta || routes[routes.length - 1].meta;
};