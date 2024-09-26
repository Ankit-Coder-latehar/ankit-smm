import React from 'react';

const LastSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] md:h-[400px] p-4"
      style={{
        backgroundImage: "url('https://watermark.lovepik.com/photo/20211120/large/lovepik-city-night-scene-picture_500359293.jpg')", // Replace with actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-transparent opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center h-full">
        <div className="text-left max-w-lg">
          <div className="inline-block bg-white rounded-full px-4 py-2 text-gray-800 mb-4">
            2000+ Businesses
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Create Big Stories Together!
          </h1>

          <p className="text-white text-lg md:text-xl mb-8">
            Share your project details to build your path toward success.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-white font-semibold border border-white py-3 px-6 rounded-full hover:bg-white hover:text-purple-700 transition-all"
          >
            Get A Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
