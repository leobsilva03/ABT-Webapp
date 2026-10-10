import React from 'react';

interface AbtLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' is dark green text on light bg; 'dark' is white/mint on dark bg
}

export const AbtLogo: React.FC<AbtLogoProps> = ({ 
  className = "h-11 sm:h-13 w-auto", 
  variant = 'light' 
}) => {
  const mainColor = variant === 'light' ? '#0c3a2d' : '#ffffff';
  const accentColor = variant === 'light' ? '#0c3a2d' : '#34d399';

  return (
    <svg 
      viewBox="0 0 1000 300" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
      aria-label="ABT Environmental Logo"
    >
      <g id="abt-leaves" transform="translate(15, 0)">
        {/* Bottom Stem Notch */}
        <path 
          d="M 124 228 L 148 266 L 172 228" 
          stroke={mainColor} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Left Leaf */}
        <path 
          d="M 144 242 C 78 244 32 195 34 135 C 36 92 68 85 82 86 C 114 88 135 152 144 242 Z" 
          stroke={mainColor} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Left Leaf Center Vein */}
        <path 
          d="M 64 104 L 142 228" 
          stroke={mainColor} 
          strokeWidth="9" 
          strokeLinecap="round"
        />

        {/* Right Leaf */}
        <path 
          d="M 152 242 C 218 244 264 195 262 135 C 260 92 228 85 214 86 C 182 88 161 152 152 242 Z" 
          stroke={mainColor} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Right Leaf Center Vein */}
        <path 
          d="M 232 104 L 154 228" 
          stroke={mainColor} 
          strokeWidth="9" 
          strokeLinecap="round"
        />

        {/* Center Upright Leaf */}
        <path 
          d="M 148 38 C 96 95 86 172 148 245 C 210 172 200 95 148 38 Z" 
          stroke={mainColor} 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Center Vein */}
        <path 
          d="M 148 88 L 148 242" 
          stroke={mainColor} 
          strokeWidth="9" 
          strokeLinecap="round"
        />
      </g>

      {/* Typography: ABT Environmental ASBESTOS | LEAD | MOULD */}
      <g fill={mainColor} style={{ fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" }}>
        {/* ABT */}
        <text 
          x="305" 
          y="102" 
          fontSize="100" 
          fontWeight="800" 
          letterSpacing="-0.02em"
        >
          ABT
        </text>

        {/* Environmental */}
        <text 
          x="305" 
          y="198" 
          fontSize="79" 
          fontWeight="700" 
          letterSpacing="-0.015em"
        >
          Environmental
        </text>

        {/* ASBESTOS | LEAD | MOULD */}
        <text 
          x="308" 
          y="262" 
          fontSize="28.5" 
          fontWeight="700" 
          letterSpacing="0.22em"
          fill={accentColor}
        >
          ASBESTOS &nbsp;|&nbsp; LEAD &nbsp;|&nbsp; MOULD
        </text>
      </g>
    </svg>
  );
};
