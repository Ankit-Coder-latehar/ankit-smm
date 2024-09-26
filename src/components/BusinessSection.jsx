import React from 'react';

const BusinessSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-10">
      {/* Left Side */}
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-4xl font-bold mb-4">
          Building Smarter Business through Better Tech Experience
        </h1>
        <p className="text-gray-600 text-lg">
          As a leading app development company in the USA and India, we have worked with 2700+ businesses, whether it is a start-up or enterprise, and deliver the best solution in the industry. At Hyperlink InfoSystem, we offer a broad range of IT consulting services based on business requirements.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-gray-100 p-8 mt-8 md:mt-0 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Bring Innovation Together!</h2>
        <p className="text-gray-600 mb-6">
          Reach out to the team of the most innovative IT transformation team and bring the transformation you need.
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300">
          Drop Your Queries
        </button>
      </div>
    </div>
  );
};

export default BusinessSection;
