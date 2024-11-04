import React from 'react';

interface ContentFeatureProps {
  headline: string;
  text: string;
  imageSrc: string;
  quote?: string;
}

const ContentFeature: React.FC<ContentFeatureProps> = ({ headline, text, imageSrc, quote }) => {
  return (
    <div className="py-10"> 
      {/* Headline */}
      <h2 className="text-4xl font-serif text-center w-full mb-12 mt-2 px-4">{headline}</h2>
      
      {/* Container for image and text */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start gap-6">
        
        {/* Text section with padding to the right */}
        <div className="w-full md:w-1/2 text-left space-y-6 pr-4" style={{ paddingRight: '32px' }}> {/* Padding added to the right */}
          <p 
            className="text-lg text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: text }} 
          />
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2">
          <img 
            src={imageSrc} 
            alt={headline} 
            className="w-full h-auto object-cover" 
            style={{ aspectRatio: '3/4' }}  
          />
        </div>
      </div>
    </div>
  );
};

export default ContentFeature;