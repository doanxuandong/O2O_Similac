// Custom Analytics component sử dụng Google Sheets
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzxu30KnaBmVbsY5860EjZob-jNp4VFi4bO5QoJxsTB1P-p0f8rslF3dASS8fqtq_lE/exec";

export const trackPageView = (pageTitle = 'Vu Lan') => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const data = {
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua
  };

  sendToGoogleSheets(data);
  console.log('📊 Custom Analytics - Page View:', data);
};

export const trackLinkClick = (linkName, linkUrl) => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const data = {
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua
  };

  sendToGoogleSheets(data);
  console.log('📊 Custom Analytics - Link Click:', data);
};

export const trackButtonClick = (buttonName) => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;

  const data = {
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua
  };

  sendToGoogleSheets(data);
  console.log('📊 Custom Analytics - Button Click:', data);
};

// Helper function để gửi data đến Google Sheets
const sendToGoogleSheets = (data) => {
  fetch(GOOGLE_SHEETS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('✅ Data sent to Google Sheets successfully');
    } else {
      console.error('❌ Failed to send data to Google Sheets:', response.status);
    }
  })
  .catch(err => {
    console.error("❌ Error sending data to Google Sheets:", err);
  });
};

// Initialize tracking khi page load
export const initializeCustomAnalytics = () => {
  // Track page view khi component mount
  trackPageView();
  
  console.log('📊 Custom Analytics initialized');
}; 