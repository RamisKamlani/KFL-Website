import React from 'react';

function HeroCard({ children, className = '', rounded = false }) {
  return (
    <div
      className={`bg-white ${rounded ? 'rounded-[40px]' : ''} shadow-md flex flex-col justify-center ${className}`}
      style={{ minHeight: 400 }}
    >
      {children}
    </div>
  );
}

export default HeroCard;
