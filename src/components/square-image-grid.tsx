import React from 'react';

interface SquareImageGrid {
  images: { src: string; alt: string }[];
}

const SquareImageGrid: React.FC<SquareImageGrid> = ({ images }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SquareImageGrid;