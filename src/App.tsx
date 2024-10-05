import React from 'react';
import Hero from './components/hero'; // Import the Hero component
import TextAction from './components/text-action';
import ProductOverview from './components/product-overview'
import ImageGrid from './components/image-grid'

function App() {
  return (
    <>
      <Hero />
      <TextAction 
        title="Get Handmade Craftsmanship" 
        text="Discover handcrafted products made from natural materials. Our collection combines traditional craftsmanship with modern functionality to create beautiful, timeless pieces for your home."
        buttonText="Shop Now"
      />
      <ProductOverview />
      <ImageGrid
  images={[
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ma%CC%88ssing.jpg?alt=media&token=857e6b4f-9b1e-4188-bbdb-c3979b402405",
      alt: "Large Image Description",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF4204.jpg?alt=media&token=2e929251-38b2-4b0e-93eb-6d9a11a22e9e",
      alt: "Small Image 1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/DSCF4871.jpg?alt=media&token=5a3e4f27-b3d4-4338-97e0-45ec19f5418c",
      alt: "Small Image 2",
    }
  ]}
  tallImageOnLeft={true}
/>
    </>
  );
}

export default App;