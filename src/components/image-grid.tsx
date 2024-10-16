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

  const updateHeight = () => {
    const img = document.getElementById('left-image') as HTMLImageElement;
    if (img && img.complete) {
      setLeftImageHeight(img.clientHeight);
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
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <img
          id="left-image"
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="col-span-1 grid grid-rows-2 gap-4">
        {images.slice(1).map((image, index) => (
          <div key={index} style={{ height: leftImageHeight / 2 - 8 }}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;