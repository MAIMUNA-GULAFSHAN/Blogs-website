import React from 'react'

const Shimmer1 = () => {
  return (
    <div className="w-full p-1 flex shadow-md animate-pulse">
    <div className="w-64 h-64 p-1 bg-gray-300"></div>
    <div className="flex flex-col w-full ml-4">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
    </div>
  </div>
  )
}

export default Shimmer1