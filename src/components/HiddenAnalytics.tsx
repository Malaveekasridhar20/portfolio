import { useEffect } from 'react';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  screenResolution: string;
  language: string;
  timezone: string;
  sessionId: string;
  pageViews: number;
  timeOnSite: number;
}

const HiddenAnalytics = () => {
  useEffect(() => {
    const trackVisitor = () => {
      try {
        // Generate unique session ID
        const sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
        
        // Get visitor information
        const visitorData: VisitorData = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer || 'Direct',
          screenResolution: `${screen.width}x${screen.height}`,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          sessionId: sessionId,
          pageViews: 1,
          timeOnSite: 0
        };

        // Store in localStorage (for your private viewing)
        const existingData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
        existingData.push(visitorData);
        
        // Keep only last 1000 visits to prevent storage overflow
        if (existingData.length > 1000) {
          existingData.splice(0, existingData.length - 1000);
        }
        
        localStorage.setItem('portfolio_analytics', JSON.stringify(existingData));

        // Track time on site
        const startTime = Date.now();
        
        const trackTimeOnSite = () => {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);
          const updatedData = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
          if (updatedData.length > 0) {
            updatedData[updatedData.length - 1].timeOnSite = timeSpent;
            localStorage.setItem('portfolio_analytics', JSON.stringify(updatedData));
          }
        };

        // Update time on site every 30 seconds
        const timeInterval = setInterval(trackTimeOnSite, 30000);

        // Track when user leaves
        const handleBeforeUnload = () => {
          trackTimeOnSite();
          clearInterval(timeInterval);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup
        return () => {
          clearInterval(timeInterval);
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };

      } catch (error) {
        console.log('Analytics tracking disabled');
      }
    };

    // Track after a small delay to ensure page is loaded
    const timer = setTimeout(trackVisitor, 1000);

    return () => clearTimeout(timer);
  }, []);

  // This component renders nothing - completely hidden
  return null;
};

export default HiddenAnalytics;