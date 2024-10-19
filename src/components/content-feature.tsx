import React from 'react';

interface ContentFeatureProps {
  headline: string;
  text: string; // The text can now include HTML or line breaks
  imageSrc: string;
  quote?: string; // Optional prop for a quote
}

const ContentFeature: React.FC<ContentFeatureProps> = ({ headline, text, imageSrc, quote }) => {
  return (
    <div className="py-20">
      {/* Headline spanning the full width with Source Serif 4 style */}
      <h2 className="text-4xl font-serif text-center w-full mb-10 px-4">{headline}</h2>
      
      {/* Container for the section */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-12">
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-auto object-cover" 
            style={{ aspectRatio: '3/4' }}  // Ensures portrait format for the image
          />
        </div>

        {/* Text content on the right */}
        <div className="w-full md:w-1/2 text-left space-y-6 pr-4">
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }} // Renders HTML inside the text
          />
        </div>
      </div>
    </div>
  );
};

export default ContentFeature;