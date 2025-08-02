// Analytics component để theo dõi các sự kiện
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('🔍 Tracking event:', eventName, parameters);
    window.gtag('event', eventName, parameters);
  } else {
    console.log('❌ gtag not available for event:', eventName);
  }
};

export const trackPageView = (pageTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('🔍 Tracking page view:', pageTitle);
    window.gtag('config', 'G-19EHY206N6', {
      page_title: pageTitle,
      page_location: window.location.href
    });
  } else {
    console.log('❌ gtag not available for page view');
  }
};

export const trackLinkClick = (linkName, linkUrl) => {
  console.log('🔍 Link clicked:', linkName, linkUrl);
  trackEvent('link_click', {
    link_name: linkName,
    link_url: linkUrl,
    event_category: 'engagement',
    event_label: linkName
  });
};

export const trackButtonClick = (buttonName) => {
  console.log('🔍 Button clicked:', buttonName);
  trackEvent('button_click', {
    button_name: buttonName,
    event_category: 'engagement',
    event_label: buttonName
  });
}; 