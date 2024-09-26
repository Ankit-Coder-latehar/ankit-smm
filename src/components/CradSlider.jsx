import React, { useRef } from "react";

const Cards = () => {
  const scrollRef = useRef(null);

  const cards = [
    {
      title: "Data Backups",
      description:
        "We carefully maintain our client's project backups to minimize the chances of data misfortunes.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZfgQpv0W4bzZa3H9hFjAV_DvwtAI-39F-A&s", // Replace with your image path
    },
    {
      title: "Data Protection",
      description:
        "We apply best-in-class data security measures to provide top-tier security to your data and keep your project idea unique and confidential.",
      image: "https://media.istockphoto.com/id/1350595566/photo/cyber-security-firewall-interface-protection-concept-businesswoman-protecting-herself-from.jpg?s=612x612&w=0&k=20&c=9i4-mWszc5FRU_iaI3ISHkmJKHn1ZCfhWjechO4H9NY=", // Replace with your image path
    },
    {
      title: "Quality Deliverance",
      description:
        "We believe in delivering quality products to our clients by leveraging our development experience.",
      image: "https://thumbs.dreamstime.com/b/macro-photo-tooth-wheel-mechanism-quality-delivery-service-price-words-imprinted-metal-surface-concept-104972145.jpg", // Replace with your image path
    },
    {
      title: "Additional Service",
      description:
        "We also offer future-proof services for the growth of your business.",
      image: "/path-to-your-service-image.jpg", // Replace with your image path
    },
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else if (direction === "right") {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="flex w-full">
      {/* Left Section - Fixed */}
      <div className="w-1/3 p-8 bg-white h-auto sticky top-0">
        <h2 className="text-4xl font-bold mb-6">
          Delivering Excellence to Transform Businesses
        </h2>
        <p className="text-lg text-gray-700">
          Are you wondering what sets us apart as the leading global IT
          development company? It's our unwavering commitment to our core values
          that truly makes a difference.
        </p>
      </div>

      {/* Right Section - Cards Slider */}
      <div className="w-2/3 p-8">
        {/* Cards Container */}
        <div
          className="flex overflow-x-scroll no-scrollbar space-x-6"
          ref={scrollRef}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-1/3 bg-white rounded-lg shadow-lg p-4 flex-shrink-0"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-300 p-2 rounded-full"
            onClick={() => scroll("left")}
          >
            ← Prev
          </button>
          <button
            className="bg-gray-300 p-2 rounded-full"
            onClick={() => scroll("right")}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;


