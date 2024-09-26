import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      category: "APP DEVELOPMENT",
      date: "24 SEP 2024",
      title: "Cost to Develop an App Like Teladoc | Telemedicine App Development...",
      description:
        "Telemedicine apps offer easy and remote access to various medical services...",
      readTime: "9 Minutes Read",
      views: "119 Views",
      image: "https://media.istockphoto.com/id/1193278024/vector/application-of-smartphone-with-business-graph-and-analytics-data-on-isometric-mobile-phone.jpg?s=612x612&w=0&k=20&c=cV3zqN7LAi6_qAqW45_vZMg7HVRSt4_2NV-SRJ-FK04=", // Replace with your image path
    },
    {
      category: "SOFTWARE DEVELOPMENT",
      date: "23 SEP 2024",
      title: "Software Development Tech Stacks: A Complete Guide...",
      description:
        "Imagine you want to submit a painting at any particularly themed painting exh...",
      readTime: "7 Minutes Read",
      views: "131 Views",
      image: "https://media.istockphoto.com/id/1803992649/vector/software-development-coding-process-concept-programming-testing-cross-platform-code-app-on.jpg?s=612x612&w=0&k=20&c=9JX_Uhk0YSIqakQEXiSjo5NutvD4C8XOGIMc1cGRhiM=", // Replace with your image path
    },
    {
      category: "AI",
      date: "20 SEP 2024",
      title: "AI in Travel and Tourism: Travel App Development...",
      description:
        "AI is becoming everyone's go-to place and so is mine! I need to plan a...",
      readTime: "7 Minutes Read",
      views: "144 Views",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg", // Replace with your image path
    },
  ];

  return (
    <div className="w-full flex bg-gray-50 py-8">
      {/* Left Section - Text */}
      <div className="w-1/3 p-8">
        <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
        <p className="text-lg text-gray-700 mb-6">
          Browse through the technical knowledge about latest trends and
          technologies our experienced team would like to share with you.
        </p>
        <button className="flex items-center space-x-2 text-lg text-gray-800 font-semibold hover:underline">
          <span>Get All Insights</span>
          <span className="text-2xl">→</span>
        </button>
      </div>

      {/* Right Section - Blog Cards */}
      <div className="w-2/3 flex space-x-6  p-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="w-1/3 bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <div className="text-red-500 font-semibold mb-1">{blog.category}</div>
              <div className="text-gray-500 text-sm mb-4">{blog.date}</div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span>{blog.readTime}</span>
                <span>{blog.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
