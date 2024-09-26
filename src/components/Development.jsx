import React from 'react';

const DevelopmentSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden h-200">
            <img src="https://images.spiceworks.com/wp-content/uploads/2023/10/12122423/mobile-app-development.jpg" alt="Mobile App" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Mobile Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Mobile App</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>

          {/* Repeat similar structures for other service cards */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Website</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>


          {/* Repeat similar structures for other service cards */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Website</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>


          {/* Repeat similar structures for other service cards */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Website</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>


          {/* Repeat similar structures for other service cards */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Website</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>


          {/* Repeat similar structures for other service cards */}
          <div className="relative bg-black text-white rounded-xl overflow-hidden">
            <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website" className="object-cover w-full h-full absolute top-0 left-0 opacity-50" />
            <div className="relative p-6">
              <div className="flex items-center space-x-2">
                <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg" alt="Website Icon" className="w-6 h-6" />
                <h2 className="text-lg font-semibold">Website</h2>
              </div>
              <p className="text-sm mt-2">DEVELOPMENT</p>
            </div>
          </div>
          {/* Repeat for other cards */}
          {/* You should continue adding more cards like E-commerce, Blockchain, etc. */}
        </div>

        {/* Right Side: Text and Bullet List */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Mobile App Development</h2>
          <p className="text-lg text-gray-600 mb-6">
            We specialize in augmenting the mobile experience for users of different niches, industries, products, and more that can help businesses enhance their value with futuristic mobile applications.
          </p>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Android App</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>iPhone App</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Flutter</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Swift</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>React Native</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Kotlin</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Ionic</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-4 h-4 bg-gray-200 rounded-full"></span>
              <span>Xamarin</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentSection;
