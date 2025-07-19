import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HashRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based redirects for backward compatibility
    const hash = location.hash;
    
    if (hash) {
      const hashToRoute: Record<string, string> = {
        '#about': '/about',
        '#brands': '/brands',
        '#contact': '/contact',
        '#partner-up': '/contact',
        '#team': '/team',
        '#principles': '/principles',
        '#journey': '/journey',
      };

      const newRoute = hashToRoute[hash];
      if (newRoute) {
        navigate(newRoute, { replace: true });
      }
    }
  }, [location.hash, navigate]);

  return null;
};

export default HashRedirect;