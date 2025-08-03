// App Script của Sheet
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbw-jEwuWoh6ZWt2-Ec4kXkF2tCnejGrnzaLKCWrj8SAJsn-zwI3iUoT5HbQfJ6uqTyE/exec";

export const trackPageView = (pageTitle = 'Vu Lan') => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const logUrl = GOOGLE_SHEETS_URL
    + `?source=${encodeURIComponent(source)}`
    + `&medium=${encodeURIComponent(medium)}`
    + `&campaign=${encodeURIComponent(campaign)}`
    + `&ua=${encodeURIComponent(ua)}`
    + `&action=`; // Action trống cho page view

  fetch(logUrl)
    .then(response => {
      if (response.ok) {
        // console.log('✅ Data sent to Google Sheets successfully');
      } else {
        // console.error('❌ Failed to send data to Google Sheets:', response.status);
      }
    })
    .catch(err => {
      // console.error("❌ Error sending data to Google Sheets:", err);
    });

  // console.log('📊 Custom Analytics - Page View:', { source, medium, campaign, ua });
};

export const trackLinkClick = (linkName, linkUrl) => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const logUrl = GOOGLE_SHEETS_URL
    + `?source=${encodeURIComponent(source)}`
    + `&medium=${encodeURIComponent(medium)}`
    + `&campaign=${encodeURIComponent(campaign)}`
    + `&ua=${encodeURIComponent(ua)}`
    + `&action=${encodeURIComponent(linkName)}`; // Thêm action cho button click

  fetch(logUrl)
    .then(response => {
      if (response.ok) {
        // console.log('✅ Link click data sent to Google Sheets successfully');
      } else {
        // console.error('❌ Failed to send link click data:', response.status);
      }
    })
    .catch(err => {
      // console.error("❌ Error sending link click data:", err);
    });

  // console.log('📊 Custom Analytics - Link Click:', { linkName, linkUrl, source, medium, campaign });
};

// Commented out - không track button clicks
/*
export const trackButtonClick = (buttonName) => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const logUrl = GOOGLE_SHEETS_URL
    + `?source=${encodeURIComponent(source)}`
    + `&medium=${encodeURIComponent(medium)}`
    + `&campaign=${encodeURIComponent(campaign)}`
    + `&ua=${encodeURIComponent(ua)}`;

  fetch(logUrl)
    .then(response => {
      if (response.ok) {
        // console.log('✅ Button click data sent to Google Sheets successfully');
      } else {
        // console.error('❌ Failed to send button click data:', response.status);
      }
    })
    .catch(err => {
      // console.error("❌ Error sending button click data:", err);
    });

  // console.log('📊 Custom Analytics - Button Click:', { buttonName, source, medium, campaign });
};
*/

export const initializeCustomAnalytics = () => {
  trackPageView();
  
  // console.log('📊 Custom Analytics initialized');
}; 