import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is dark green on light bg; 'dark' is white on dark bg
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-11 sm:h-13 w-auto", 
  variant = 'light' 
}) => {
  const mainColor = variant === 'light' ? '#0f382c' : '#ffffff';
  const subtitleColor = variant === 'light' ? '#0f382c' : '#ffffff';

  return (
    <svg 
      viewBox="0 0 1020 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      aria-label="ABT Environmental Logo"
    >
      {/* Three Leaf Foliage Emblem matching uploaded IMG_4645 */}
      <g id="abt-leaves" transform="translate(10, 0)">
        {/* Bottom Stem Chevron Notch */}
        <path 
          d="M 124 228 L 148 266 L 172 228" 
          stroke={mainColor} 
          strokeWidth="9.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Center Upright Leaf */}
        <path 
          d="M 148 26 C 92 84 84 162 148 238 C 212 162 204 84 148 26 Z" 
          stroke={mainColor} 
          strokeWidth="9.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Center Leaf Vein */}
        <path 
          d="M 148 76 L 148 236" 
          stroke={mainColor} 
          strokeWidth="8.5" 
          strokeLinecap="round"
        />

        {/* Left Outstretched Leaf */}
        <path 
          d="M 144 236 C 82 236 28 178 36 122 C 38 104 54 94 72 90 C 96 86 126 142 144 236 Z" 
          stroke={mainColor} 
          strokeWidth="9.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Left Leaf Center Vein */}
        <path 
          d="M 64 102 L 140 226" 
          stroke={mainColor} 
          strokeWidth="8.5" 
          strokeLinecap="round"
        />

        {/* Right Outstretched Leaf */}
        <path 
          d="M 152 236 C 214 236 268 178 260 122 C 258 104 242 94 224 90 C 200 86 170 142 152 236 Z" 
          stroke={mainColor} 
          strokeWidth="9.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Right Leaf Center Vein */}
        <path 
          d="M 232 102 L 156 226" 
          stroke={mainColor} 
          strokeWidth="8.5" 
          strokeLinecap="round"
        />
      </g>

      {/* Typography: ABT Environmental / ASBESTOS | LEAD | MOULD */}
      <g fill={mainColor} style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}>
        {/* ABT */}
        <text 
          x="310" 
          y="102" 
          fontSize="106" 
          fontWeight="800" 
          letterSpacing="-0.02em"
        >
          ABT
        </text>

        {/* Environmental */}
        <text 
          x="310" 
          y="198" 
          fontSize="78" 
          fontWeight="700" 
          letterSpacing="-0.015em"
        >
          Environmental
        </text>

        {/* ASBESTOS | LEAD | MOULD */}
        <text 
          x="312" 
          y="262" 
          fontSize="28" 
          fontWeight="700" 
          letterSpacing="0.22em"
          fill={subtitleColor}
        >
          ASBESTOS &nbsp;&nbsp;|&nbsp;&nbsp; LEAD &nbsp;&nbsp;|&nbsp;&nbsp; MOULD
        </text>
      </g>
    </svg>
  );
};
