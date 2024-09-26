import React from 'react';

const BusinessGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Startups Business */}
        <div className="flex items-start space-x-4">
          <h1 className="text-5xl font-bold text-gray-900">1.</h1>
          <div>
            <h2 className="text-2xl font-bold">Startups Business</h2>
            <p className="text-gray-600 mt-2">
              Have a strict budget and minimum resources? Don't worry, our professionals can give much-needed tech support to turn your dream idea into a reality.
            </p>
          </div>
        </div>

        {/* Small Business */}
        <div className="flex items-start space-x-4">
          <h1 className="text-5xl font-bold text-gray-900">2.</h1>
          <div>
            <h2 className="text-2xl font-bold">Small Business</h2>
            <p className="text-gray-600 mt-2">
              Our proficients can help you build your brand identity, blending their development experience well with your development requirements.
            </p>
          </div>
        </div>

        {/* Enterprise Business */}
        <div className="flex items-start space-x-4">
          <h1 className="text-5xl font-bold text-gray-900">3.</h1>
          <div>
            <h2 className="text-2xl font-bold">Enterprise Business</h2>
            <p className="text-gray-600 mt-2">
              We help enterprise-level businesses enhance their business reach and streamline processes with innovative technology.
            </p>
          </div>
        </div>

        {/* Agency Business */}
        <div className="flex items-start space-x-4">
          <h1 className="text-5xl font-bold text-gray-900">4.</h1>
          <div>
            <h2 className="text-2xl font-bold">Agency Business</h2>
            <p className="text-gray-600 mt-2">
              Enhance the offering of your Agency business by leveraging our development expertise and trending technologies.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessGrid;
