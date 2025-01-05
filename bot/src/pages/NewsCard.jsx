import React from "react";

const NewsCard = ({ image, title, snippet, publisher, url, publishedAt }) => {
  console.log(image);
  
  const formattedDate = publishedAt
    ? isNaN(new Date(publishedAt * 1000)) 
      ? "Invalid Date" 
      : new Date(publishedAt * 1000).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
    : "No Date Available";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 ease-out">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={image || "https://via.placeholder.com/300"}
          alt={title || "News Image"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-2 left-2 text-white text-xs font-semibold bg-gray-900 bg-opacity-75 px-2 py-1 rounded">
          {formattedDate}
        </div>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {snippet || "No snippet available."}
        </p>
        <div className="flex justify-between items-center text-gray-500 text-xs mb-4">
          <span>Published by: <span className="font-semibold">{publisher || "Unknown"}</span></span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg px-4 py-2"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
