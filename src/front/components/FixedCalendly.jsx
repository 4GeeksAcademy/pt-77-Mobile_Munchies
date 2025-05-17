import { useEffect } from 'react';

export const FixedCalendly = ({ url }) => {
  // Load Calendly script and initialize widget
  useEffect(() => {
    // Create and load the Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    // When the script loads, initialize the Calendly widget
    script.onload = () => {
      if (window.Calendly && url) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill: {
            name: '',
            email: '',
          },
          pageSettings: {
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }
        });
      }
    };
    
    document.body.appendChild(script);
    
    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div 
      id="calendly-inline-widget" 
      className="min-h-screen w-full"
      style={{ minHeight: '650px' }}
    ></div>
  );
};