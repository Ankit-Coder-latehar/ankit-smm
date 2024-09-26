import React from 'react';
import { FiArrowRight } from 'react-icons/fi'; // Using react-icons for the arrow icon

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 p-8">
      {/* Left Section - Title */}
      <div className="md:w-1/2 text-left ml-20">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Top Mobile Application Development, Software Development & IT Consulting Company,
          Building Smart Solutions For A Smarter World.
        </h1>
      </div>

      {/* Right Section - Description */}
      <div className="md:w-1/3 text-left">
        <p className="mb-4 text-gray-600">
          Founded in the year 2011, <span className="font-bold">Hyperlink InfoSystem</span> is a leading <br/>Mobile App, 
          Software Development and Web development <br/>company helping global businesses to bring digital <br/>transformation. 
          Being a true technological companion, Hyperlink <br/>InfoSystem helps startups to enterprise-level businesses to 
          be the<br/> industry leaders.
        </p>
        {/* About Us Button */}
        <div className="flex items-center gap-2 cursor-pointer text-black hover:text-gray-800">
          <span className="inline-block border border-black rounded-full p-2">
            <FiArrowRight size={20} />
          </span>
          <span className="font-semibold">About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
