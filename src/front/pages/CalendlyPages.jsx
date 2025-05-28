import React from 'react';
import { SimpleCalendly } from '../components/SimpleCalendly';
import { FixedCalendly } from '../components/FixedCalendly';

export const CalendlyPages = () => {
  // Option 1: Using the FixedCalendly component with a hardcoded URL
  const calendlyUrl = "https://calendly.com/evens7antoine/30min";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Schedule a Meeting</h1>

      {/* <div className="calendly-inline-widget"
        data-url="https://calendly.com/evens7antoine/30min"
        style="min-width:320px;height:630px;"></div>
      <script src="https://assets.calendly.com/assets/external/widget.js"></script> */}



      {/* Option 1: Fixed URL approach */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Option 1: Fixed Calendly URL</h2>
        <div className="border rounded-lg overflow-hidden">
          <FixedCalendly url={calendlyUrl} />
        </div>
      </div>

      {/* Option 2: Configurable approach
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Option 2: Configurable Calendly URL</h2>
        <div className="border rounded-lg overflow-hidden p-4">
          <SimpleCalendly />
        </div>
      </div> */}
    </div >
  );
};