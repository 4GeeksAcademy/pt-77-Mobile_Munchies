import { useState, useEffect } from 'react';

export const SimpleCalendly = ({ defaultUrl = '' }) => {
  const [calendlyUrl, setCalendlyUrl] = useState(defaultUrl);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(!defaultUrl);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Initialize Calendly inline widget when script is loaded and URL is available
  useEffect(() => {
    if (isScriptLoaded && window.Calendly && calendlyUrl && !isEditing) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {
          name: '',
          email: '',
          // Add more prefill fields as needed
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
  }, [isScriptLoaded, calendlyUrl, isEditing]);

  const handleUrlChange = (e) => {
    setCalendlyUrl(e.target.value);
  };

  const handleSave = () => {
    if (calendlyUrl) {
      setIsEditing(false);
      // You could save the URL to localStorage if you want it to persist
      localStorage.setItem('calendlyUrl', calendlyUrl);
    }
  };

  return (
    <div className="w-full">
      {isEditing ? (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <input
              type="text"
              value={calendlyUrl}
              onChange={handleUrlChange}
              placeholder="Enter your Calendly URL (e.g., https://calendly.com/username/30min)"
              className="flex-grow p-2 border rounded"
            />
            <button
              onClick={handleSave}
              disabled={!calendlyUrl}
              className={`px-4 py-2 rounded text-white ${
                calendlyUrl ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300'
              }`}
            >
              Save & Display Calendar
            </button>
          </div>
          <p className="text-sm text-gray-600">
            Enter your Calendly URL to display your scheduling calendar.
          </p>
        </div>
      ) : (
        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Edit Calendly URL
          </button>
        </div>
      )}

      {!isEditing && calendlyUrl && (
        <div 
          id="calendly-inline-widget" 
          className="min-h-screen w-full"
          style={{ minHeight: '650px' }}
        ></div>
      )}
    </div>
  );
};