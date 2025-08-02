// Analytics component để theo dõi các sự kiện
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-19EHY206N6', {
      page_title: pageTitle,
      page_location: window.location.href
    });
  }
};

export const trackLinkClick = (linkName, linkUrl) => {
  trackEvent('link_click', {
    link_name: linkName,
    link_url: linkUrl,
    event_category: 'engagement',
    event_label: linkName
  });
};

export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName,
    event_category: 'engagement',
    event_label: buttonName
  });
}; 