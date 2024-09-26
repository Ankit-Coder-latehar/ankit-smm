import React from 'react';

const DevelopmentExpertise = () => {
  return (
    <div className="bg-white py-16 px-4">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Development Expertise
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Offering a wide range of partnership models to connect with us and leverage our development capabilities to achieve much-anticipated success.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1: Fixed Price Model */}
        <div className="relative bg-white p-6 shadow-md rounded-lg border-t-4 border-green-200 hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-900">Fixed Price Model</h3>
          <div className="mt-4 border-b-2 border-gray-300 w-12"></div>
          <p className="mt-4 text-gray-500">
            The development team works with a predefined scope of work with its associated cost and a timeline.
          </p>
          <div className="absolute bottom-4 right-4">
            <button className="bg-green-200 p-3 rounded-full">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 2: Hire Dedicated Model */}
        <div className="relative bg-white p-6 shadow-md rounded-lg border-t-4 border-blue-200 hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-900">Hire Dedicated Model</h3>
          <div className="mt-4 border-b-2 border-gray-300 w-12"></div>
          <p className="mt-4 text-gray-500">
            Hire a dedicated team of developers to work on your unique development requirements and pay them based on an hourly rate.
          </p>
          <div className="absolute bottom-4 right-4">
            <button className="bg-blue-200 p-3 rounded-full">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Card 3: Onsite Model */}
        <div className="relative bg-white p-6 shadow-md rounded-lg border-t-4 border-pink-200 hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-bold text-gray-900">Onsite Model</h3>
          <div className="mt-4 border-b-2 border-gray-300 w-12"></div>
          <p className="mt-4 text-gray-500">
            Hire a team of developers on a contract basis to get additional temporary resources for on-site development support.
          </p>
          <div className="absolute bottom-4 right-4">
            <button className="bg-pink-200 p-3 rounded-full">
              <svg
                className="w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentExpertise;
