import React, { useEffect, useState } from 'react';
const ImageGrid = ({ images }) => {
    const [leftImageHeight, setLeftImageHeight] = useState(0);
    const updateHeight = () => {
        const img = document.getElementById('left-image');
        if (img && img.complete) {
            setLeftImageHeight(img.clientHeight);
        }
    };
    useEffect(() => {
        const img = document.getElementById('left-image');
        if (img) {
            if (img.complete) {
                updateHeight();
            }
            else {
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
    return (React.createElement("div", { className: "grid grid-cols-2 gap-4" },
        React.createElement("div", { className: "col-span-1" },
            React.createElement("img", { id: "left-image", src: images[0].src, alt: images[0].alt, className: "w-full h-auto object-cover" })),
        React.createElement("div", { className: "col-span-1 grid grid-rows-2 gap-4" }, images.slice(1).map((image, index) => (React.createElement("div", { key: index, style: { height: leftImageHeight / 2 - 8 } },
            React.createElement("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover" })))))));
};
export default ImageGrid;
