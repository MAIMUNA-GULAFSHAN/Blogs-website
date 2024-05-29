import Image from 'next/image'
import React from 'react'

const Lightbox = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-white text-5xl"
    >
      &times;
    </button>
    <div className="relative w-full max-w-3xl max-h-full p-4">
      <Image
        src={image}
        alt="Lightbox"
        layout="responsive"
        unoptimized
        width={800}
        height={600}
        className="object-contain h-full w-full"
      />
    </div>
  </div>
  )
}

export default Lightbox


