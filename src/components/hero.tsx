import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen" // Replace h-screen with min-h-screen
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ellen.jpeg?alt=media&token=3c682b39-9ad8-4e0b-8b3a-6cd9c0e7771c')",
      }}
    >
      {/* Logo container */}
      <div className="absolute top-[64px] w-full flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Banga-logo.svg?alt=media&token=7db5169b-4319-42b2-8b5c-51484e27f21b"
          alt="Bångå Logo"
          className="h-auto"
          style={{ width: "177px" }}
        />
      </div>
    </div>
  );
};

export default Hero;