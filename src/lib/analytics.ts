import { TrackingEvents } from '@/types/partner';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Google Analytics tracking
export function trackEvent<T extends keyof TrackingEvents>(
  eventName: T,
  parameters: TrackingEvents[T]
) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters);
  }
}

// Convenience functions for common events
export const analytics = {
  pageView: (partnerCode: string) => {
    trackEvent('page_view', {
      partner_code: partnerCode,
      page_type: 'affiliate_landing',
    });
  },

  formStart: (partnerCode: string, location: 'hero' | 'sticky') => {
    trackEvent('form_start', {
      partner_code: partnerCode,
      form_location: location,
    });
  },

  formSubmit: (partnerCode: string, homeSize: string, zipCode: string) => {
    trackEvent('form_submit', {
      partner_code: partnerCode,
      home_size: homeSize,
      zip_code: zipCode,
    });
  },

  partnerLogoClick: (partnerCode: string) => {
    trackEvent('partner_logo_click', {
      partner_code: partnerCode,
    });
  },
};

// Initialize tracking scripts
export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  // Google Analytics 4
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  if (GA_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  // Facebook Pixel
  const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  if (FB_PIXEL_ID) {
    window.fbq = function (...args: unknown[]) {
      if (window.fbq.callMethod) {
        window.fbq.callMethod(...args);
      } else {
        window.fbq.queue.push(args);
      }
    };
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }
}