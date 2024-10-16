import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen" // Replace h-screen with min-h-screen
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Ellen.jpeg?alt=media&token=a424267d-0637-4d73-a5fb-4a312e319832')",
      }}
    >
      {/* Logo container */}
      <div className="absolute top-[64px] w-full flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/banga-site.appspot.com/o/Banga-logo.svg?alt=media&token=651c82c4-6aaa-430a-8929-cbe43553eee0"
          alt="Bångå Logo"
          className="h-auto"
          style={{ width: "177px" }}
        />
      </div>
    </div>
  );
};

export default Hero;