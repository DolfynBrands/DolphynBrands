// Google Analytics (gtag.js) utilities for React Router integration

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'G-S6G6R20R05';

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', { form_name: formName, success });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', { button_name: buttonName, click_location: location });
};
