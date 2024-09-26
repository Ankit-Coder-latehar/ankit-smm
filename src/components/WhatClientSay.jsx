import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'ay5edmm',
    rating: '★★★★★ 5.0 Ratings',
    feedback:
      "The apps meet high-quality standards and include many robust features. HyperLink is clearly invested in the project's success.",
  },
  {
    name: 'Virtuhunt',
    rating: '★★★★★ 5.0 Ratings',
    feedback:
      "Hyperlink InfoSystem's team was responsive, professional, and accommodating to concerns. They delivered a high-quality game.",
  },
  {
    name: 'Neighbor Shopper',
    rating: '★★★★★ 5.0 Ratings',
    feedback:
      "Hyperlink Infosystem is dependable and responsive to the client's request. Always easy and convenient to communicate with them.",
  },
  // Add more testimonials if needed
];

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const delay = 3000; // Delay for auto-slide in milliseconds

  // Auto-slide effect using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full py-10">
      <h2 className="text-center text-3xl font-bold mb-6">What Our Clients Say</h2>

      {/* Slider Container */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center mx-4">
                <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-yellow-500">{testimonial.rating}</p>
                <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 px-3 py-1 bg-black text-white rounded-full"
          onClick={prevSlide}
        >
          Prev
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-3 py-1 bg-black text-white rounded-full"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>

      {/* Dots for Slide Navigation */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
