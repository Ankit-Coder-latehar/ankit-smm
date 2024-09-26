import React, { useState, useEffect } from 'react';

const images = [
  '/Screenshot 2024-09-26 130030.png',
  '/Screenshot 2024-09-26 130057.png',
  '/Screenshot 2024-09-26 184128.png',
];

const DeliveryAppScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // 3000ms = 3s

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, [currentIndex]); // Re-run the effect whenever the currentIndex changes

  return (
    <div className="relative w-full p-4 gap-4 h-[750px] overflow-hidden">
      {/* Slider Images */}
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

     
     

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default DeliveryAppScreen;
