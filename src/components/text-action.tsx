import React from 'react';
import { Button } from '@components/ui/button';

interface TextActionProps {
  title: string;
  text: string;
  buttonText: string;
}

const TextAction: React.FC<TextActionProps> = ({ title, text, buttonText }) => {
  return (
    <div className="flex items-center justify-center bg-white py-20 px-10">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-serif mb-4 text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">{text}</p>
        <Button type="primary">{buttonText}</Button>
      </div>
    </div>
  );
};

export default TextAction;