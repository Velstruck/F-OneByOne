export function SpeedGauge({ className }: { className?: string }) {
  /*
   * Semi-circular gauge (270° arc) using circle + stroke-dasharray.
   * Circumference = 2π × 110 ≈ 691.15
   * 270° arc = 75% ≈ 518.36
   * Gap = 25% ≈ 172.79
   * Rotate 135° to position gap at the bottom.
   */
  const radius = 110;
  const circumference = 2 * Math.PI * radius; // ≈ 691.15
  const arcLength = circumference * 0.75;       // ≈ 518.36
  const gapLength = circumference * 0.25;       // ≈ 172.79

  /* 75% fill → dashoffset = arcLength × (1 - 0.75) = 129.59 */
  const fillPct = 0.78;
  const fillOffset = arcLength * (1 - fillPct);

  /* Tick mark positions (around the 270° arc, 0-270 mapped to angles 225° → -45°) */
  const ticks = Array.from({ length: 10 }, (_, i) => {
    const frac = i / 9;
    const angleDeg = 225 - frac * 270; // 225° to -45°
    const angleRad = (angleDeg * Math.PI) / 180;
    const cx = 150 + (radius + 10) * Math.cos(angleRad);
    const cy = 155 + (radius + 10) * Math.sin(angleRad);
    const ix = 150 + (radius - 4) * Math.cos(angleRad);
    const iy = 155 + (radius - 4) * Math.sin(angleRad);
    const ox = 150 + (radius + 4) * Math.cos(angleRad);
    const oy = 155 + (radius + 4) * Math.sin(angleRad);
    return { cx, cy, ix, iy, ox, oy, label: Math.round(frac * 360) };
  });

  return (
    <svg
      viewBox="0 0 300 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="sg-glow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="sg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="60%" stopColor="#00a650" />
          <stop offset="100%" stopColor="#ffe600" />
        </linearGradient>
      </defs>

      {/* Background arc — dark track */}
      <circle
        cx={150} cy={155} r={radius}
        stroke="#1a1d22"
        strokeWidth="8"
        fill="none"
        strokeDasharray={`${arcLength} ${gapLength}`}
        transform="rotate(135, 150, 155)"
        strokeLinecap="round"
      />

      {/* Filled arc — animated gradient */}
      <circle
        cx={150} cy={155} r={radius}
        stroke="url(#sg-grad)"
        strokeWidth="8"
        fill="none"
        strokeDasharray={`${arcLength} ${gapLength}`}
        transform="rotate(135, 150, 155)"
        strokeLinecap="round"
        filter="url(#sg-glow)"
        style={{
          strokeDashoffset: arcLength,
          animation: `gauge-fill 2.5s ease-out 0.5s forwards`,
          '--gauge-target': `${fillOffset}`,
        } as React.CSSProperties}
      />

      {/* Tick marks */}
      {ticks.map((t, i) => (
        <g key={`tk-${i}`}>
          <line
            x1={t.ix} y1={t.iy} x2={t.ox} y2={t.oy}
            stroke="#8a9698" strokeWidth={i % 3 === 0 ? "1.5" : "0.8"} opacity={i % 3 === 0 ? 0.6 : 0.3}
          />
          {i % 3 === 0 && (
            <text
              x={t.cx} y={t.cy + 3}
              fill="#8a9698" fontSize="7" textAnchor="middle"
              fontFamily="var(--font-technical-grotesk), monospace"
            >
              {t.label}
            </text>
          )}
        </g>
      ))}

      {/* Center readout */}
      <text
        x={150} y={148}
        fill="#ffffff" fontSize="38" fontWeight="700" textAnchor="middle"
        fontFamily="var(--font-velocity-display), sans-serif"
        letterSpacing="0.02em"
        style={{ animation: "data-flicker 3s ease-in-out infinite" }}
      >
        327
      </text>
      <text
        x={150} y={168}
        fill="#8a9698" fontSize="10" textAnchor="middle"
        fontFamily="var(--font-technical-grotesk), monospace"
        letterSpacing="0.15em"
      >
        KM/H
      </text>

      {/* Gear indicator */}
      <text
        x={150} y={200}
        fill="#00d2ff" fontSize="16" fontWeight="700" textAnchor="middle"
        fontFamily="var(--font-velocity-display), sans-serif"
        style={{ animation: "data-flicker 2s ease-in-out 0.5s infinite" }}
      >
        8
      </text>
      <text
        x={150} y={215}
        fill="#8a9698" fontSize="7" textAnchor="middle"
        fontFamily="var(--font-technical-grotesk), monospace"
        letterSpacing="0.15em"
      >
        GEAR
      </text>
    </svg>
  );
}
