import React from 'react';
const SquareImageGrid = ({ images }) => {
    return (React.createElement("div", { className: "py-16 bg-white" },
        React.createElement("div", { className: "max-w-6xl mx-auto px-4" },
            React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4" }, images.map((image, index) => (React.createElement("div", { key: index, className: "relative" },
                React.createElement("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover aspect-square" }))))))));
};
export default SquareImageGrid;
