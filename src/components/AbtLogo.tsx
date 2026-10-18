import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is dark green on transparent bg; 'dark' is white on transparent bg
  alt?: string;
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-12 sm:h-14 w-auto shrink-0", 
  variant = 'light',
  alt = "ABT Environmental"
}) => {
  const logoSrc = variant === 'light' ? '/images/abt-logo.png' : '/images/abt-logo-white.png';

  return (
    <img 
      src={logoSrc}
      alt={alt}
      width={1582}
      height={424}
      style={{ aspectRatio: '1582 / 424' }}
      className={`shrink-0 block select-none object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
