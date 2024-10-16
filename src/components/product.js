import React from 'react';
const ProductPresentation = ({ images, productName, price, description, details }) => {
    return (React.createElement("div", { className: "py-20 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4" },
        " ",
        React.createElement("div", { className: "col-span-1" },
            React.createElement("img", { src: images[0].src, alt: images[0].alt, className: "w-full h-auto object-cover" })),
        React.createElement("div", { className: "col-span-1" },
            React.createElement("hr", { className: "border-t border-black mb-6" }),
            " ",
            React.createElement("div", { className: "pl-4" },
                "  ",
                React.createElement("h2", { className: "label-large text-xl mb-2" }, productName),
                React.createElement("div", { className: "text-sm leading-relaxed mb-4", dangerouslySetInnerHTML: { __html: description } }),
                React.createElement("p", { className: "label-large text-lg" }, price),
                React.createElement("a", { href: `mailto:hi@bangahantverk.com?subject=Beställning&body=Berätta%20vilka%20produkter,%20hur%20många%20av%20varje%20och%20i%20vilket%20material.%20Leveranstid%20är%204-6%20veckor.`, className: "label-small no-underline hover:underline" }, "Best\u00E4ll"))),
        React.createElement("div", { className: "col-span-1" },
            React.createElement("img", { src: images[1].src, alt: images[1].alt, className: "w-full h-auto object-cover mb-2" })),
        React.createElement("div", { className: "col-span-1 pl-4" },
            "  ",
            React.createElement("table", { className: "w-full border-collapse" },
                React.createElement("tbody", null, details.map((detail, index) => (React.createElement("tr", { key: index, className: `${index !== details.length - 1 ? 'border-b border-black' : '' /* No border on last row */}` },
                    React.createElement("td", { className: "label-small-prominent border-r border-black px-4 py-2 w-[150px]" }, detail.label),
                    React.createElement("td", { className: "label-small px-4 py-2" }, detail.value)))))))));
};
export default ProductPresentation;
