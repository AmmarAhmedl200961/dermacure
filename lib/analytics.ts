/**
 * Analytics tracking utility for Google Analytics 4
 * 
 * This module provides a simple interface to track custom events
 * to Google Analytics using the gtag global function.
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: {
        event_category: string;
        event_label: string;
      }
    ) => void;
  }
}

/**
 * Track a custom event to Google Analytics
 * 
 * @param action - The action being tracked (e.g., 'click_whatsapp', 'click_booking')
 * @param category - The category of the event (e.g., 'conversion', 'engagement')
 * @param label - A label to provide additional context (e.g., 'header_button', 'hero_cta')
 */
export function trackEvent(action: string, category: string, label: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
}
