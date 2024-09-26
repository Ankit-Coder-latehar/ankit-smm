import React from "react";

function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start justify-start">
      <div className="text-left mt-20 ml-20">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-black ">
          Artificial Intelligence (AI)
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 mt-4">
          Development Company
        </h2>

        {/* Ranking */}
        <div className="mt-8">
          <p className="text-red-500 text-4xl md:text-6xl font-extrabold">
            #1
            <span> <p className="text-lg md:text-xl text-gray-800">
            Ranked as <span className="text-red-500">#1 Top AI</span> Development Company in USA and India
          </p></span>
          </p>
         
        </div>

        {/* Image section */}
        <div className="mt-12">
          <div className="relative w-full flex justify-center">
            {/* Robot image */}
            <img
              src="/path-to-your-image/robot.png" // Add the correct path to your robot illustration
              alt="AI Robot"
              className="w-64 md:w-96"
            />
            {/* Person Illustration */}
            <img
              src="/path-to-your-image/person.png" // Add the correct path to your person illustration
              alt="Person working on AI"
              className="absolute bottom-0 left-24 w-24 md:w-32"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors"
          >
            Drop Your Queries
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
