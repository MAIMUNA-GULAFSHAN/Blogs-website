import React from "react";

const Shimmer2 = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 animate-pulse">
      <div className="bg-gray-200 shadow-md rounded-lg p-8">
        <div className="h-10 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-32"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-24"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-40"></div>
        <div className="h-64 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded mb-4 w-24"></div>
        <div className="h-20 bg-gray-300 rounded mb-4"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer2;
