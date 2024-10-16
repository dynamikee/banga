import React from 'react';

const Footer = () => {
  return (
    <footer className="label-small py-28 bg-white text-center">
      <p className="label-small-prominent">BÅNGÅ HANTVERK</p>
      
      {/* Instagram Link */}
      <p>
        <a 
          href="https://www.instagram.com/bangahantverk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="no-underline hover:underline"
        >
          @bangahantverk
        </a>
      </p>
      
      {/* Email Link */}
      <p>
        <a 
          href="mailto:hi@bangahantverk.com" 
          className="no-underline hover:underline"
        >
          hi@bangahantverk.com
        </a>
      </p>
      
      {/* Phone Number */}
      <p>+46 702 98 25 79</p>
    </footer>
  );
};

export default Footer;