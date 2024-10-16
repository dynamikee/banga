import React from 'react';
import { AspectRatio } from '@components/ui/aspect-ratio';
const ProductOverview = () => {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // Array of product images and details (removed "Knapp" for now)
    const products = [
        {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0182-2.jpg?alt=media&token=8b550d6e-e1f9-431f-a84e-c67a9f2a6824",
            alt: "Skålhandtag",
            title: "Skålhandtag",
            id: "skålhandtag",
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0170.jpg?alt=media&token=eba047ad-ab56-4daa-b7cc-e2fd1c5cce53",
            alt: "Oval knopp",
            title: "Oval knopp",
            id: "oval-knopp",
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0150.jpg?alt=media&token=439f934a-2c0f-4578-8a9f-d2a7b0f2e8dd",
            alt: "Rund knopp",
            title: "Rund knopp",
            id: "rund-knopp",
        },
        {
            src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/IMG_0129-4.jpg?alt=media&token=4a9c7a62-38a0-4996-8b0b-3a27e8b678e5",
            alt: "Bygelhandtag",
            title: "Bygelhandtag",
            id: "bygelhandtag",
        },
    ];
    return (React.createElement("div", { className: "py-20" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement("h2", { className: "text-4xl font-serif text-gray-800 mb-10 text-center" }, "V\u00E5ra produkter"),
            React.createElement("div", { className: "grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-4" },
                " ",
                products.map((product, index) => (React.createElement("div", { key: index, className: "text-center" },
                    React.createElement("button", { onClick: () => handleScroll(product.id), className: "w-full" },
                        React.createElement(AspectRatio, { ratio: 1 / 1 },
                            " ",
                            React.createElement("img", { src: product.src, alt: product.alt, className: "w-full h-full object-cover" /* Ensures the image fills the container */ })),
                        React.createElement("p", { className: "mt-4 text-sm font-semibold" }, product.title)))))))));
};
export default ProductOverview;