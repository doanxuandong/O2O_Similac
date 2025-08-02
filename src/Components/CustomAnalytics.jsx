// Custom Analytics component sử dụng Google Sheets
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxz6BMnRcLTNCx8nZrCLMA1iBpOf8GLWciUkWM6tBVDD6GuY1KuKNGYkeqNh3zJaquI/exec";

export const trackPageView = (pageTitle = 'O2O Similac Landing Page') => {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'direct';
  const medium = params.get('utm_medium') || 'unknown';
  const campaign = params.get('utm_campaign') || 'unknown';
  const ua = navigator.userAgent;
  const timestamp = new Date().toISOString();
  const url = window.location.href;
  const referrer = document.referrer || 'direct';

  const data = {
    event_type: 'page_view',
    page_title: pageTitle,
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua,
    timestamp: timestamp,
    url: url,
    referrer: referrer,
    device: getDeviceType(),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
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
  const timestamp = new Date().toISOString();

  const data = {
    event_type: 'link_click',
    link_name: linkName,
    link_url: linkUrl,
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua,
    timestamp: timestamp,
    url: window.location.href,
    referrer: document.referrer || 'direct',
    device: getDeviceType(),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
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
  const timestamp = new Date().toISOString();

  const data = {
    event_type: 'button_click',
    button_name: buttonName,
    source: source,
    medium: medium,
    campaign: campaign,
    ua: ua,
    timestamp: timestamp,
    url: window.location.href,
    referrer: document.referrer || 'direct',
    device: getDeviceType(),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
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

// Helper function để xác định loại thiết bị
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
};

// Initialize tracking khi page load
export const initializeCustomAnalytics = () => {
  // Track page view khi component mount
  trackPageView();
  
  // Track session start
  const sessionData = {
    event_type: 'session_start',
    source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
    medium: new URLSearchParams(window.location.search).get('utm_medium') || 'unknown',
    campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'unknown',
    ua: navigator.userAgent,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    referrer: document.referrer || 'direct',
    device: getDeviceType(),
    screen_resolution: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language
  };
  
  sendToGoogleSheets(sessionData);
  console.log('📊 Custom Analytics - Session Start:', sessionData);
}; 