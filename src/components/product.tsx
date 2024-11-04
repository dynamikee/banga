import React from 'react';

interface ProductPresentationProps {
  images: { src: string; alt: string }[];
  productName: string;
  price: string;
  description: string; // Description will contain HTML
  details: { label: string; value: string }[]; // New prop for product details
}

const ProductPresentation: React.FC<ProductPresentationProps> = ({ images, productName, price, description, details }) => {
  return (
    <div className="py-20 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Gap 16px */}
      
      {/* Row 1: First Image and Product Description */}
      <div className="col-span-1">
        <img src={images[0].src} alt={images[0].alt} className="w-full h-auto object-cover" />
      </div>
      
      {/* Strecket över går hela vägen */}
      <div className="col-span-1">
        <hr className="border-t border-black mb-6" /> {/* Strecket går hela vägen */}
        <div className="pl-4 pr-4">  {/* Indrag med 16px på både vänster och höger */}
          <h3 className="label-large text-xl mb-2">{productName}</h3>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* Flytta priset direkt under beskrivningen */}
          <p className="label-large text-lg">{price}</p>
          <a 
            href={`mailto:hi@bangahantverk.com?subject=Beställning&body=Berätta%20vilka%20produkter,%20hur%20många%20av%20varje%20och%20i%20vilket%20material.%20Leveranstid%20är%204-6%20veckor.`}
            className="label-small no-underline hover:underline"
          >
            Beställ
          </a>
        </div>
      </div>

      {/* Row 2: Second Image and Product Details */}
      <div className="col-span-1">
        <img src={images[1].src} alt={images[1].alt} className="w-full h-auto object-cover mb-2" />
      </div>

      {/* Flyttar in tabellen med 16px */}
      <div className="col-span-1 pl-4 pr-4">  {/* Indrag med 16px på både vänster och höger */}
        <table className="w-full border-collapse">
          <tbody>
            {details.map((detail, index) => (
              <tr
                key={index}
                className={`${
                  index !== details.length - 1 ? 'border-b border-black' : '' /* No border on last row */
                }`}
              >
                <td className="label-small-prominent border-r border-black px-4 py-2 w-[150px]">{detail.label}</td>
                <td className="label-small px-4 py-2">{detail.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPresentation;