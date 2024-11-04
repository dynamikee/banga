import React, { useEffect, useState } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [leftImageHeight, setLeftImageHeight] = useState<number>(0);
  const [spacing, setSpacing] = useState<number>(8); // Default spacing for small screens

  const updateHeight = () => {
    const img = document.getElementById('left-image') as HTMLImageElement;
    if (img && img.complete) {
      setLeftImageHeight(img.clientHeight);
    }

    // Set spacing based on screen width (breakpoints)
    if (window.innerWidth >= 768) {
      setSpacing(16); // 16px for larger screens
    } else {
      setSpacing(8);  // 8px for smaller screens
    }
  };

  useEffect(() => {
    const img = document.getElementById('left-image') as HTMLImageElement;
    if (img) {
      if (img.complete) {
        updateHeight();
      } else {
        img.addEventListener('load', updateHeight);
      }
    }
    window.addEventListener('resize', updateHeight);

    return () => {
      if (img) {
        img.removeEventListener('load', updateHeight);
      }
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 mb-16" style={{ gap: `${spacing}px` }}> {/* Set gap dynamically */}
      {/* Left image */}
      <div className="col-span-1">
        <img
          id="left-image"
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right images */}
      <div className="col-span-1 grid grid-rows-2" style={{ gap: `${spacing}px` }}> {/* Dynamically set row gap */}
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            style={{
              height: `calc(${leftImageHeight / 2}px - ${spacing / 2}px)` // Adjust height based on spacing
            }}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;