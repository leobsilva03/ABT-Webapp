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

  return (
    <svg 
      viewBox="0 0 880 230" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      aria-label="ABT Environmental Logo"
    >
      {/* Three-Leaf Foliage Emblem matching IMG_4645 */}
      <g id="abt-leaves" transform="translate(0, 0)">
        {/* Bottom Stem Chevron Notch */}
        <path 
          d="M 108 182 L 125 218 L 142 182" 
          stroke={mainColor} 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Center Upright Leaf */}
        <path 
          d="M 125 14 C 78 68 70 138 125 186 C 180 138 172 68 125 14 Z" 
          stroke={mainColor} 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Center Leaf Vein */}
        <path 
          d="M 125 54 L 125 184" 
          stroke={mainColor} 
          strokeWidth="6.5" 
          strokeLinecap="round"
        />

        {/* Left Outstretched Leaf */}
        <path 
          d="M 122 184 C 70 184 20 136 28 88 C 30 74 42 66 58 64 C 80 62 108 108 122 184 Z" 
          stroke={mainColor} 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Left Leaf Center Vein */}
        <path 
          d="M 52 74 L 118 174" 
          stroke={mainColor} 
          strokeWidth="6.5" 
          strokeLinecap="round"
        />

        {/* Right Outstretched Leaf */}
        <path 
          d="M 128 184 C 180 184 230 136 222 88 C 220 74 208 66 192 64 C 170 62 142 108 128 184 Z" 
          stroke={mainColor} 
          strokeWidth="7.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Right Leaf Center Vein */}
        <path 
          d="M 198 74 L 132 174" 
          stroke={mainColor} 
          strokeWidth="6.5" 
          strokeLinecap="round"
        />
      </g>

      {/* Typography: ABT Environmental / ASBESTOS | LEAD | MOULD */}
      <g fill={mainColor} style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}>
        {/* ABT */}
        <text 
          x="274" 
          y="74" 
          fontSize="76" 
          fontWeight="800" 
          letterSpacing="-0.02em"
        >
          ABT
        </text>

        {/* Environmental */}
        <text 
          x="274" 
          y="152" 
          fontSize="68" 
          fontWeight="700" 
          letterSpacing="-0.025em"
        >
          Environmental
        </text>

        {/* ASBESTOS | LEAD | MOULD */}
        <text 
          x="276" 
          y="208" 
          fontSize="24" 
          fontWeight="700" 
          letterSpacing="0.25em"
        >
          ASBESTOS &nbsp;&nbsp;|&nbsp;&nbsp; LEAD &nbsp;&nbsp;|&nbsp;&nbsp; MOULD
        </text>
      </g>
    </svg>
  );
};
