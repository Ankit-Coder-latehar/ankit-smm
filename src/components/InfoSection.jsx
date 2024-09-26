import React from 'react';

const InfoSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img 
          src="/Screenshot 2024-09-24 174349.png" // Replace with your image URL or import image file
          alt="Person working"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Right Side - Upper and Lower Sections */}
      <div className="md:w-1/2 flex flex-col justify-between">
        {/* Upper Section - Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174219.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">11+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174229.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">4500+</h3>
            <p className="text-gray-600">Mobile Apps Developed</p>
          </div>
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174237.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">4.9</h3>
            <p className="text-gray-600">Ratings on Clutch.co</p>
          </div>
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174246.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">1200+</h3>
            <p className="text-gray-600">Dedicated Developers</p>
          </div>
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174254.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">1200+</h3>
            <p className="text-gray-600">Dedicated Developers</p>
          </div>
          <div className="text-center">
            <img src="/Screenshot 2024-09-24 174302.png" alt="icon" className="mx-auto mb-2" /> {/* Replace with actual icon */}
            <h3 className="text-2xl font-bold">1200+</h3>
            <p className="text-gray-600">Dedicated Developers</p>
          </div>
        </div>

        {/* Lower Section - Call to Action */}
        <div className="bg-purple-600 text-white p-6 mt-8 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Hire Now</h3>
          <h2 className="text-2xl font-bold">Hire Dedicated Developers</h2>
          <p className="mt-4">
            Hire our developers to design, develop, and deliver futuristic development solutions 
            by leveraging the experience of a top development company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
