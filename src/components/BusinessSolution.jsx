import React from 'react';

const BusinessSolutions = () => {
  return (
    <div className="flex items-center justify-between min-h-screen bg-gray-50 px-6">
      {/* Left Side: Main Heading */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900">
          Amplifying Business Progress Through Smart Solutions
        </h1>
      </div>

      {/* Right Side: Subheading and Button */}
      <div className="text-right max-w-md">
        <p className="text-lg text-gray-600 mb-8">
          Obtain robust software solutions, modernize systems, and leverage futuristic technologies for growth opportunities with the capabilities of a leading development company.
        </p>
        <button className="flex items-center justify-end space-x-2 text-black border-b-2 border-black hover:border-black">
          <span className="rounded-full border border-black p-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </span>
          <span>Explore Services</span>
        </button>
      </div>
    </div>
  );
};

export default BusinessSolutions;

