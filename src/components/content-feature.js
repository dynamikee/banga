import React from 'react';
const ContentFeature = ({ headline, text, imageSrc, quote }) => {
    return (React.createElement("div", { className: "py-20" },
        React.createElement("h2", { className: "text-4xl font-serif text-center w-full mb-10" }, headline),
        React.createElement("div", { className: "max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12" },
            React.createElement("div", { className: "w-full md:w-1/2" },
                React.createElement("img", { src: imageSrc, alt: headline, className: "w-full h-auto object-cover", style: { aspectRatio: '3/4' } })),
            React.createElement("div", { className: "w-full md:w-1/2 text-left space-y-6" },
                React.createElement("p", { className: "text-lg text-gray-600 leading-relaxed", dangerouslySetInnerHTML: { __html: text } })))));
};
export default ContentFeature;
