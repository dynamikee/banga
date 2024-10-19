import React from 'react';

interface SquareImageGrid {
  images: { src: string; alt: string }[];
}

const SquareImageGrid: React.FC<SquareImageGrid> = ({ images }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Ändrar gap till 8px (gap-2) på små skärmar och 16px (gap-4) på större */}
        <div className="grid grid-cols-2 gap-2 md:gap-4"> 
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