import React from 'react';
import { Button } from '@components/ui/button';
const TextAction = ({ title, text, buttonText }) => {
    return (React.createElement("div", { className: "flex items-center justify-center bg-white py-20 px-10" },
        React.createElement("div", { className: "max-w-2xl text-center" },
            React.createElement("h2", { className: "text-4xl font-serif mb-4 text-gray-800" }, title),
            React.createElement("p", { className: "text-lg text-gray-600 leading-relaxed mb-8" }, text),
            React.createElement("a", { href: "mailto:hi@bangahantverk.com" },
                React.createElement(Button, { type: "button" }, buttonText)))));
};
export default TextAction;
