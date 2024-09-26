import React from "react";

function StatsSection() {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      {/* Heading and Description */}
      <div className="text-left max-w-4xl mx-auto ml-40">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Hyperlink InfoSystem Bring Transformation For Global Businesses
        </h2>
        <p className="mt-4 text-gray-600">
          Starting from listening to your business problems to delivering
          accurate solutions; we make sure to follow industry-specific standards
          and combine them with our technical knowledge, development expertise,
          and extensive research.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Single Card */}
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 223927.png" // Replace with actual image or icon path
            alt="Apps Developed"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">4500+</h3>
          <p className="text-gray-600">Apps Developed</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 223934.png" // Replace with actual image or icon path
            alt="Developers"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">1200+</h3>
          <p className="text-gray-600">Developers</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 223944.png" // Replace with actual image or icon path
            alt="Websites Designed"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">2200+</h3>
          <p className="text-gray-600">Websites Designed</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 223953.png" // Replace with actual image or icon path
            alt="Games Developed"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">140+</h3>
          <p className="text-gray-600">Games Developed</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 224002.png" // Replace with actual image or icon path
            alt="AI & IoT Solutions"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">120+</h3>
          <p className="text-gray-600">AI & IoT Solutions</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 224010.png" // Replace with actual image or icon path
            alt="Happy Clients"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">2700+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 224018.png" // Replace with actual image or icon path
            alt="Salesforce Solutions"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">120+</h3>
          <p className="text-gray-600">Salesforce Solutions</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <img
            src="/Screenshot 2024-09-24 224028.png" // Replace with actual image or icon path
            alt="Data Science"
            className="mx-auto w-12 mb-4"
          />
          <h3 className="text-3xl font-bold text-black">40+</h3>
          <p className="text-gray-600">Data Science</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
