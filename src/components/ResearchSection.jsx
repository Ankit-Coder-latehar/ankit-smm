import React from 'react';

const ResearchSection = () => {
  const articles = [
    {
      id: 1,
      title: 'All You Need to Know About DevOps: A Complete Guide',
      date: '28 DEC 2023',
      image: 'https://raygun.com/blog/images/best-devops-tools/feature-23.jpg', // Replace with actual image path
    },
    {
      id: 2,
      title: 'How AI Is Transforming Businesses: A Complete Guide',
      date: '17 NOV 2023',
      image: 'https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg',
    },
    {
      id: 3,
      title: 'Hire PHP Developers in 2024: Everything You Must Know',
      date: '14 JUL 2023',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUzDwL2__lImOpoO7Hd39VLeMQbci4SrDj_w&s',
    },
  ];

  return (
    <div className="px-6 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-left ml-10">Research</h1>
          <p className="text-gray-600 mb-6 text-left ml-10">
            Our team of dedicated <br/>developers has provided well- <br/>researched articles that help to <br/>build future-ready organizations<br/> using technology innovation.
          </p>
          <a href="#" className="text-blue-500 font-semibold flex items-center mt-4 ml-10">
            Get All Insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Right Column: Cards */}
        <div className="flex space-x-4 mr-60"> {/* Adjusted the margin to move cards to the left */}
          {articles.map((article) => (
            <div key={article.id} className="min-w-[250px] max-w-[250px] border rounded-lg shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-red-500 uppercase font-semibold text-sm">Research</p>
                <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                <h2 className="font-bold text-lg leading-tight mb-2">{article.title}</h2>
                <a href="#" className="text-blue-500 font-semibold">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ResearchSection;
