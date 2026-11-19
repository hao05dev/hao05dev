import React, { useMemo } from 'react';

/** Global SVG filters that give elements a hand-painted, uneven edge. */
export const PaintFilters: React.FC = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true">
    <defs>
      <filter id="rough-edge" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      {/* Same rough edge, plus the canvas grain used by .grain sections */}
      <filter id="rough-edge-grain" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G" result="shape" />
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="fine" />
        <feColorMatrix in="fine" values="0 0 0 0 0.35  0 0 0 0 0.25  0 0 0 0 0.1  0 0 0 0.2 0" result="tint" />
        <feComposite in="tint" in2="shape" operator="in" result="tintClip" />
        <feBlend in="tintClip" in2="shape" mode="multiply" />
      </filter>
      <filter id="rough-soft" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="9" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

function spiralPath(turns: number, maxR: number, phase: number): string {
  const steps = turns * 48;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * turns * Math.PI * 2;
    const r = (i / steps) * maxR;
    const x = Math.cos(t + phase) * r;
    const y = Math.sin(t + phase) * r;
    d += `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

/**
 * A swirl made of short dashed strokes — the sky eddies in the painting.
 * Purely decorative.
 */
export const Swirl: React.FC<{
  className?: string;
  colors?: string[];
  reverse?: boolean;
}> = ({ className = '', colors = ['#f6efd6', '#6f9be8', '#2c56c4', '#f4e7a8'], reverse }) => {
  const paths = useMemo(
    () => colors.map((_, i) => spiralPath(4.2, 96 - i * 3, (i * Math.PI) / 2)),
    [colors],
  );
  return (
    <svg
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      className={`pointer-events-none ${reverse ? 'animate-swirl-rev' : 'animate-swirl'} ${className}`}
    >
      <g filter="url(#rough-soft)">
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={colors[i]}
            strokeWidth={3.4 - i * 0.4}
            strokeLinecap="round"
            strokeDasharray={`${7 + i * 2} ${5 + i}`}
            opacity={0.85 - i * 0.12}
          />
        ))}
      </g>
    </svg>
  );
};

/** A wavy, rough-edged band used to blend one section into the next. */
export const BrushEdge: React.FC<{ color: string; flip?: boolean; grain?: boolean; className?: string }> = ({
  color,
  flip,
  grain,
  className = '',
}) => (
  <svg
    viewBox="0 0 1440 90"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`pointer-events-none block w-full h-12 sm:h-16 md:h-20 ${flip ? 'rotate-180' : ''} ${className}`}
  >
    <g filter={grain ? 'url(#rough-edge-grain)' : 'url(#rough-edge)'}>
      <path
        d="M0 46 C 160 20, 300 70, 470 44 S 780 18, 960 46 S 1290 74, 1440 38 L 1440 100 L 0 100 Z"
        fill={color}
      />
      <path
        d="M0 62 C 200 44, 360 82, 560 60 S 900 40, 1100 62 S 1340 78, 1440 58"
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="60 22 30 18"
        opacity="0.6"
      />
    </g>
  </svg>
);

/** A small flock drifting across, echoing the birds in the painting. */
export const Birds: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="bird absolute left-0"
        style={{
          top: `${10 + ((i * 37) % 38)}%`,
          animation: `fly ${38 + i * 7}s linear ${-i * 9}s infinite`,
        }}
      >
        <svg
          viewBox="0 0 40 16"
          className="w-6 sm:w-8"
          style={{ animation: `flap ${0.9 + (i % 3) * 0.2}s ease-in-out infinite`, transformOrigin: 'center' }}
        >
          <path
            d="M2 9 C 9 2, 14 4, 20 10 C 26 4, 31 2, 38 9 C 31 6, 26 8, 20 14 C 14 8, 9 6, 2 9 Z"
            fill="#1d2338"
            opacity="0.8"
          />
        </svg>
      </div>
    ))}
  </div>
);
