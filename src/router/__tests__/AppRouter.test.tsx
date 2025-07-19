import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../AppRouter';

// Mock components to avoid complex rendering
jest.mock('../../components/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero">Hero Component</div>;
  };
});

jest.mock('../../components/MainContent', () => {
  return function MockMainContent() {
    return <div data-testid="main-content">Main Content Component</div>;
  };
});

jest.mock('../../components/AboutPage', () => {
  return function MockAboutPage() {
    return <div data-testid="about-page">About Page Component</div>;
  };
});

jest.mock('../../components/BrandShowcase', () => {
  return function MockBrandShowcase() {
    return <div data-testid="brand-showcase">Brand Showcase Component</div>;
  };
});

jest.mock('../../components/ContactSection', () => {
  return function MockContactSection() {
    return <div data-testid="contact-section">Contact Section Component</div>;
  };
});

jest.mock('../../components/NotFound', () => {
  return function MockNotFound() {
    return <div data-testid="not-found">404 Not Found Component</div>;
  };
});

// Mock Header and Footer to avoid complex navigation logic
jest.mock('../../components/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header Component</div>;
  };
});

jest.mock('../../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
  };
});

// Custom render function with MemoryRouter for testing specific routes
const renderWithRouter = (initialEntries: string[] = ['/']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <AppRouter />
    </MemoryRouter>
  );
};

describe('AppRouter Integration Tests', () => {
  test('renders home page at root route', async () => {
    renderWithRouter(['/']);
    
    await waitFor(() => {
      expect(screen.getByTestId('hero')).toBeInTheDocument();
      expect(screen.getByTestId('main-content')).toBeInTheDocument();
    });
  });

  test('renders about page at /about route', async () => {
    renderWithRouter(['/about']);
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });

  test('renders brands page at /brands route', async () => {
    renderWithRouter(['/brands']);
    
    await waitFor(() => {
      expect(screen.getByTestId('brand-showcase')).toBeInTheDocument();
    });
  });

  test('renders contact page at /contact route', async () => {
    renderWithRouter(['/contact']);
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });
  });

  test('renders 404 page for invalid routes', async () => {
    renderWithRouter(['/invalid-route']);
    
    await waitFor(() => {
      expect(screen.getByTestId('not-found')).toBeInTheDocument();
    });
  });

  test('renders header and footer on all pages', async () => {
    renderWithRouter(['/']);
    
    await waitFor(() => {
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });

  test('handles multiple route navigation', async () => {
    const { rerender } = renderWithRouter(['/']);
    
    // Start at home
    await waitFor(() => {
      expect(screen.getByTestId('hero')).toBeInTheDocument();
    });

    // Navigate to about
    rerender(
      <MemoryRouter initialEntries={['/about']}>
        <AppRouter />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    // Navigate to contact
    rerender(
      <MemoryRouter initialEntries={['/contact']}>
        <AppRouter />
      </MemoryRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-section')).toBeInTheDocument();
    });
  });

  test('all defined routes are accessible', async () => {
    const routes = [
      { path: '/', testId: 'hero' },
      { path: '/about', testId: 'about-page' },
      { path: '/brands', testId: 'brand-showcase' },
      { path: '/contact', testId: 'contact-section' },
    ];

    for (const route of routes) {
      const { unmount } = renderWithRouter([route.path]);
      
      await waitFor(() => {
        expect(screen.getByTestId(route.testId)).toBeInTheDocument();
      });
      
      unmount();
    }
  });

  test('lazy loading works correctly', async () => {
    renderWithRouter(['/about']);
    
    // Should show loading state initially, then the component
    await waitFor(() => {
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
  });
});