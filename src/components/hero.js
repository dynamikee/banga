import React from 'react';
const Hero = () => {
    return (React.createElement("div", { className: "relative bg-cover bg-center min-h-screen" // Replace h-screen with min-h-screen
        , style: {
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ellen.jpeg?alt=media&token=a424267d-0637-4d73-a5fb-4a312e319832')",
        } },
        React.createElement("div", { className: "absolute top-[64px] w-full flex justify-center" },
            React.createElement("img", { src: "https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Banga-logo.svg?alt=media&token=651c82c4-6aaa-430a-8929-cbe43553eee0", alt: "B\u00E5ng\u00E5 Logo", className: "h-auto", style: { width: "177px" } }))));
};
export default Hero;
