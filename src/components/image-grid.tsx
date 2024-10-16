import React, { useEffect, useState } from 'react';

const ImageGrid = ({ images }) => {
  // This state will hold the height of the left image.
  const [leftImageHeight, setLeftImageHeight] = useState(0);

  // Function to update the height
  const updateHeight = () => {
    const img = document.getElementById('left-image');
    if (img && img.complete) { // Ensure the image is fully loaded
      setLeftImageHeight(img.clientHeight);
    }
  };

  // Effect to update the left image's height dynamically when the image loads
  useEffect(() => {
    const img = document.getElementById('left-image');

    if (img) {
      if (img.complete) {
        // Image already loaded
        updateHeight();
      } else {
        // Add an event listener to wait for the image to fully load
        img.addEventListener('load', updateHeight);
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup the event listeners when the component unmounts
    return () => {
      if (img) {
        img.removeEventListener('load', updateHeight);
      }
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4"> {/* Gap of 16px between columns */}
      {/* Left Image */}
      <div className="col-span-1">
        <img
          id="left-image"
          src={images[0].src}
          alt={images[0].alt}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right-hand side with two cropped images stacked */}
      <div className="col-span-1 grid grid-rows-2 gap-4">
        {images.slice(1).map((image, index) => (
          <div key={index} style={{ height: leftImageHeight / 2 - 8 }}> {/* Dynamically set height */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;