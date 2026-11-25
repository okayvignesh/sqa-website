import React from 'react';

interface CircleProps {
  textColor?: string;
}

const Circle: React.FC<CircleProps> = ({ textColor = 'black' }) => {
  return (
    <span 
      className="inline-block w-2 h-2 rounded-full mr-3 mt-2" 
      style={{ backgroundColor: textColor }}
    />
  );
};

export default Circle;
