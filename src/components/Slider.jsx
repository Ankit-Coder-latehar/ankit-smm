import React, { useState } from 'react';

const services = [
  {
    title: "Education & e-Learning",
    description: "Enhance the learning experience for global learners through tech-driven solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsiJjlSLqxqQw8pa9fUUlsZTnzm3eXFaAkA&s", // Replace with actual image
  },
  {
    title: "Healthcare & Fitness",
    description: "Leveraging smart technologies like AI, ML, IoT, and more to empower global health organizations.",
    image: "https://img.freepik.com/premium-photo/gym-fitness-healthcare_985276-2751.jpg", // Replace with actual image
  },
  {
    title: "Logistics & Distribution",
    description: "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
    image: "https://www.transportify.com.ph/wp-content/uploads/sites/5/2022/09/distribution-logistics-management-importance-and-benefits-og.jpg", // Replace with actual image
  },
  {
    title: "Social Networking",
    description: "Build engaging and seasoned social media applications that can offer a unique user experience.",
    image: "https://c8c4w8t4.rocketcdn.me/wp-content/uploads/2020/05/Social-Media.jpg", // Replace with actual image
  },
  {
    title: "Travel & Hospitality",
    description: "Build robust travel platforms for seamless customer experiences and global operations.",
    image: "https://example.com/travel.jpg", // Replace with actual image
  },
  {
    title: "E-commerce",
    description: "Craft tailor-made e-commerce solutions with modern frameworks and high-performance capabilities.",
    image: "https://example.com/ecommerce.jpg", // Replace with actual image
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4; // Number of cards visible at once

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - visibleCards + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (services.length - visibleCards + 1)) % (services.length - visibleCards + 1));
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="relative">
        {/* Slider Content */}
        <div className="overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="inline-block w-1/4 px-2"  // Divides each card into 1/4th of the width
              >
                <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover opacity-50"
                  />
                  <div className="absolute inset-0 p-6 bg-gradient-to-b from-transparent to-purple-600 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-4">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gray-800 text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gray-800 text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {[...Array(services.length - visibleCards + 1)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
