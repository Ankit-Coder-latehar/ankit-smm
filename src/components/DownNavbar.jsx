// src/Navbar.js
import React from 'react';

const DownNavbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1700718008794-3db41f8d6c16?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your logo image path
          alt="Hyperlink InfoSystem Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        <div className="flex space-x-4 text-sm text-gray-800">
          <a href="#" className="hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="hover:text-blue-600">
            Services
          </a>
          <a href="#" className="hover:text-blue-600">
            Hire Resources
          </a>
          <a href="#" className="hover:text-blue-600">
            Industries
          </a>
          <a href="#" className="hover:text-blue-600">
            Case Study
          </a>
          <a href="#" className="hover:text-blue-600">
            Resources
          </a>
          <a href="#" className="hover:text-blue-600">
            Contact Us
          </a>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex">
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-800 text-sm font-medium">
          Get A Free Quote
        </button>
      </div>
    </div>
  );
};

export default DownNavbar;
