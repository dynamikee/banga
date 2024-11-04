import React from 'react';

interface Image {
  src: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div 
      className="grid grid-cols-2 gap-4" 
      style={{ height: '100vh' }} // Ensure the grid takes the full viewport height
    >
      {/* Left image: full viewport height */}
      <div className="col-span-1">
        <img 
          src={images[0].src} 
          alt={images[0].alt} 
          className="w-full object-cover"  // Image covers the whole height and width, cropping on the height
          style={{ objectPosition: 'center' }} // Ensures the center of the image is visible
        />
      </div>

      {/* Right column: two images stacked, each 50% of the height */}
      <div className="col-span-1 grid grid-rows-2 gap-4">
        <div className="h-full" >
          <img 
            src={images[1].src} 
            alt={images[1].alt} 
            className="w-full object-cover"  // Ensures the image fills the container and is cropped on the height
            style={{ objectPosition: 'center' }} // Ensures the center of the image is visible
          />
        </div>
        <div className="h-full">
          <img 
            src={images[2].src} 
            alt={images[2].alt} 
            className="w-full object-cover"  // Same as above for the bottom image
            style={{ objectPosition: 'center' }} // Center the image
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;