export function TireCompoundViz({ className }: { className?: string }) {
  /*
   * Top-down tire compound visualization with:
   * - Concentric rings for compound layers
   * - Temperature zones
   * - Wear percentage indicators
   */
  const cx = 150;
  const cy = 150;

  const compounds = [
    { r: 120, stroke: "#ff4444", label: "SOFT", width: 22, dasharray: "none" },
    { r: 95, stroke: "#ffe600", label: "MEDIUM", width: 18, dasharray: "none" },
    { r: 72, stroke: "#ffffff", label: "HARD", width: 14, dasharray: "none" },
  ];

  /* Temperature sector arcs (4 quadrants) */
  const tempSectors = [
    { angle: 0, temp: "98°C", color: "#ff4444" },
    { angle: 90, temp: "94°C", color: "#ffe600" },
    { angle: 180, temp: "91°C", color: "#00a650" },
    { angle: 270, temp: "96°C", color: "#ffe600" },
  ];

  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="tc-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer tire silhouette */}
      <circle cx={cx} cy={cy} r={135} stroke="#1a1d22" strokeWidth="2" fill="none" />

      {/* Compound rings */}
      {compounds.map((c, i) => (
        <circle
          key={`comp-${i}`}
          cx={cx} cy={cy} r={c.r}
          stroke={c.stroke}
          strokeWidth={c.width}
          fill="none"
          opacity="0.15"
          filter="url(#tc-glow)"
        />
      ))}

      {/* Wear indicator arcs — animated fill */}
      {compounds.map((c, i) => {
        const circumference = 2 * Math.PI * c.r;
        const wearPct = [0.72, 0.85, 0.93][i]; // wear remaining
        const arcLen = circumference * wearPct;
        return (
          <circle
            key={`wear-${i}`}
            cx={cx} cy={cy} r={c.r}
            stroke={c.stroke}
            strokeWidth={c.width - 6}
            fill="none"
            strokeDasharray={`${arcLen} ${circumference - arcLen}`}
            transform={`rotate(-90, ${cx}, ${cy})`}
            strokeLinecap="round"
            opacity="0.6"
            style={{
              strokeDashoffset: circumference,
              animation: `gauge-fill 2s ease-out ${0.3 + i * 0.3}s forwards`,
              '--gauge-target': `${circumference - arcLen}`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Temperature quadrant indicators */}
      {tempSectors.map((s, i) => {
        const angleRad = (s.angle * Math.PI) / 180;
        const tx = cx + 105 * Math.cos(angleRad);
        const ty = cy + 105 * Math.sin(angleRad);
        return (
          <g key={`temp-${i}`}>
            <circle cx={tx} cy={ty} r="3" fill={s.color}
              style={{ animation: `sector-pulse 2.5s ease-in-out ${i * 0.4}s infinite` }}
            />
            <text x={tx} y={ty - 8} fill={s.color} fontSize="7" textAnchor="middle"
              fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.06em"
            >
              {s.temp}
            </text>
          </g>
        );
      })}

      {/* Compound labels */}
      {compounds.map((c, i) => (
        <text
          key={`lbl-${i}`}
          x={cx + c.r + 8} y={cy + 3}
          fill={c.stroke} fontSize="6" fontFamily="var(--font-technical-grotesk), monospace"
          letterSpacing="0.1em" opacity="0.6"
        >
          {c.label}
        </text>
      ))}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r="28" stroke="#8a9698" strokeWidth="1" fill="#0d0f12" />
      <text x={cx} y={cy - 4} fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle"
        fontFamily="var(--font-velocity-display), sans-serif" letterSpacing="0.02em"
      >
        C3
      </text>
      <text x={cx} y={cy + 10} fill="#8a9698" fontSize="6" textAnchor="middle"
        fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.1em"
      >
        COMPOUND
      </text>
    </svg>
  );
}
