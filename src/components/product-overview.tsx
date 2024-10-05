import React from 'react';
import { AspectRatio } from '@components/ui/aspect-ratio'; // Import the AspectRatio component


const ProductOverview = () => {
  // Array of product images and details
  const products = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0182-2.jpg?alt=media&token=ae509bc1-9905-46c5-935b-650aa944ea59",
      alt: "Handmade copper handle",
      title: "CUP HANDLE",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0170.jpg?alt=media&token=b8550964-a588-4dda-a43b-0101f9aec5d9",
      alt: "Brass Knob",
      title: "OVAL KNOB",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0150.jpg?alt=media&token=5fc6812b-e972-433b-a41b-582650d04dc9",
      alt: "Iron Hook",
      title: "ROUND KNOB",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0129-4.jpg?alt=media&token=ae20604f-d68f-4488-9747-977bc601cfc6",
      alt: "Steel Latch",
      title: "PULL HANDLE",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0348%202.JPG?alt=media&token=968f6d74-49c4-4295-98c4-04d55ecf2ef3",
      alt: "Bronze Handle",
      title: "BUTTON",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-gray-800 mb-10 text-center">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> {/* 5-column grid with 16px gap */}

          {products.map((product, index) => (
            <div key={index} className="text-center">
              <AspectRatio ratio={1 / 1}> {/* Ensures a square aspect ratio */}
                <img
                  src={product.src}
                  alt={product.alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="label mt-4">
                {product.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;