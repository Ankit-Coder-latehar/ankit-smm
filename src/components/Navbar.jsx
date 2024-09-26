// src/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md">
      {/* Left Section - Contacts */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1674591172888-1184c4170a47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your flag image path
            alt="India"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm text-gray-700">+91 8000-161-161</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1674591172747-2c1d461d7b68?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your flag image path
            alt="USA"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm text-gray-700">+1 (309)791-4105</span>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1675865395876-1cf435b64e78?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your flag image path
            alt="UK"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-sm text-gray-700">+44 20 3287 9060</span>
        </div>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 text-sm font-medium">
          Press Release
        </button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 text-sm font-medium">
          Our Fresh Work
        </button>
      </div>
    </div>
  );
};

export default Navbar;
