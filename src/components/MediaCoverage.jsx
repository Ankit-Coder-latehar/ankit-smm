import React from "react";

function MediaCoverage() {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Side - Text */}
        <div className="lg:w-1/3 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Media Coverage
          </h2>
          <p className="mt-4 text-gray-600">
            Captured, covered, and reflected our proud moments in their stories.
          </p>

          {/* Explore Button */}
          <div className="mt-8">
            <a
              href="#"
              className="flex items-center text-lg font-medium text-black hover:text-gray-700"
            >
              <span>Explore</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Logos */}
        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <img
            src="/Screenshot 2024-09-24 174435.png"
            alt="Forbes"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174442.png"
            alt="CNBC"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174450.png"
            alt="Market Watch"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174459.png"
            alt="The Street"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174511.png"
            alt="Khaleej Times"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174521.png"
            alt="The Economic Times"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174529.png"
            alt="Yahoo Finance"
            className="w-24 md:w-32"
          />
          <img
            src="/Screenshot 2024-09-24 174540.png"
            alt="Entrepreneur"
            className="w-24 md:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;
