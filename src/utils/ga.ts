// Google Tag Manager utilities for React Router integration

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GTM_ID = 'GTM-M6PFK45R';

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: url,
      page_title: title,
    });
  }
};

export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', { form_name: formName, success });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', { button_name: buttonName, click_location: location });
};

export const trackCustomEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  trackEvent(eventName, parameters);
};

// Initialize GTM dataLayer if not exists
export const initializeGTM = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};
