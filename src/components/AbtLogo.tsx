import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is dark green on transparent bg; 'dark' is white on transparent bg
  alt?: string;
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-11 sm:h-13 w-auto object-contain", 
  variant = 'light',
  alt = "ABT Environmental"
}) => {
  const logoSrc = variant === 'light' ? '/images/abt-logo.png' : '/images/abt-logo-white.png';

  return (
    <img 
      src={logoSrc}
      alt={alt}
      className={`${className} select-none`}
      loading="eager"
      decoding="async"
    />
  );
};
