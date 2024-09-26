import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const SolutionsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-16">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          The Glimpse Of The Solutions We Have Created For Our Global Clients
        </h1>
        <div className="w-16 h-1 bg-black mb-8"></div> {/* The underline */}
      </div>

      {/* Right Content Section */}
      <div className="lg:w-1/2 flex flex-col items-start space-y-6 lg:pl-16">
        <p className="text-lg text-gray-600 leading-relaxed">
          Being a leading IT company, we make sure to build innovative and custom solutions. 
          Know about the journey we travel with our clients to turn their ideas into perfect tailored solutions.
        </p>

        {/* Call to Action */}
        <button className="flex items-center space-x-2 text-lg font-medium">
          <div className="w-10 h-10 flex items-center justify-center border-2 border-black rounded-full">
            <FaArrowRight className="text-black" />
          </div>
          <span>Our Work</span>
        </button>
      </div>
    </div>
  );
};

export default SolutionsSection;
