import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  alt?: string;
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-12 sm:h-14 md:h-16 lg:h-[70px] w-auto shrink-0", 
  variant = 'light',
  alt = "ABT Environmental"
}) => {
  // Use exact picture uploaded by user without modifying it
  const logoSrc = variant === 'light' 
    ? '/assets/aistudio/IMG_4671_6ef1a62f.jpeg' 
    : '/images/abt-logo-white.png';

  return (
    <img 
      src={logoSrc}
      alt={alt}
      width={2016}
      height={512}
      style={{ aspectRatio: '2016 / 512' }}
      className={`shrink-0 block select-none object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
