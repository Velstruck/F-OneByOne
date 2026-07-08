export function CircuitTrace({ className }: { className?: string }) {
  const corners: { cx: number; cy: number; sector: number }[] = [
    { cx: 100, cy: 300, sector: 1 },
    { cx: 420, cy: 300, sector: 1 },
    { cx: 500, cy: 250, sector: 1 },
    { cx: 520, cy: 180, sector: 2 },
    { cx: 490, cy: 100, sector: 2 },
    { cx: 360, cy: 60, sector: 2 },
    { cx: 270, cy: 70, sector: 3 },
    { cx: 200, cy: 120, sector: 3 },
    { cx: 120, cy: 220, sector: 3 },
    { cx: 90, cy: 270, sector: 3 },
  ];

  const sectorColors: Record<number, string> = {
    1: "#00a650",
    2: "#00d2ff",
    3: "#ffe600",
  };

  return (
    <svg
      viewBox="0 0 600 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="ct-glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ct-glow-sm">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Engineering grid */}
      {Array.from({ length: 11 }, (_, i) => (
        <line
          key={`hg-${i}`}
          x1={0} y1={i * 38} x2={600} y2={i * 38}
          stroke="#e1e7e8" strokeWidth="0.4" opacity="0.12"
        />
      ))}
      {Array.from({ length: 16 }, (_, i) => (
        <line
          key={`vg-${i}`}
          x1={i * 40} y1={0} x2={i * 40} y2={380}
          stroke="#e1e7e8" strokeWidth="0.4" opacity="0.12"
        />
      ))}

      {/* Sector 1 — DRS Green (main straight + T1-T4) */}
      <path
        d="M 100,300 L 420,300 Q 480,300 500,250 L 520,180"
        stroke="#00a650"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ct-glow)"
        style={{
          strokeDasharray: 600,
          strokeDashoffset: 600,
          animation: "circuit-draw 2s ease-out forwards",
        } as React.CSSProperties}
      />

      {/* Sector 2 — Electric Cyan (T5-T9) */}
      <path
        d="M 520,180 Q 530,130 490,100 L 360,60 Q 310,50 270,70"
        stroke="#00d2ff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ct-glow)"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: "circuit-draw 2s ease-out 0.7s forwards",
        } as React.CSSProperties}
      />

      {/* Sector 3 — Pitlane Yellow (T10-T15 + pit straight) */}
      <path
        d="M 270,70 L 200,120 Q 150,160 120,220 L 90,270 Q 70,300 100,300"
        stroke="#ffe600"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ct-glow)"
        style={{
          strokeDasharray: 400,
          strokeDashoffset: 400,
          animation: "circuit-draw 2s ease-out 1.4s forwards",
        } as React.CSSProperties}
      />

      {/* Corner markers */}
      {corners.map((c, i) => (
        <circle
          key={`cm-${i}`}
          cx={c.cx}
          cy={c.cy}
          r="3.5"
          fill={sectorColors[c.sector]}
          style={{
            opacity: 0,
            animation: `sector-pulse 2.4s ease-in-out ${1.2 + i * 0.15}s infinite`,
          }}
        />
      ))}

      {/* DRS zone indicator */}
      <line
        x1={160} y1={294} x2={360} y2={294}
        stroke="#00a650" strokeWidth="1.5" strokeDasharray="6 3"
        opacity="0.5"
      />

      {/* Data labels */}
      <text x="180" y="340" fill="#8a9698" fontSize="9" fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.08em">
        DRS ZONE 1 — 342 KM/H
      </text>
      <text x="480" y="160" fill="#8a9698" fontSize="9" fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.08em"
        transform="rotate(-65, 480, 160)"
      >
        S2 — 28.432
      </text>
      <text x="130" y="180" fill="#8a9698" fontSize="9" fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.08em"
        transform="rotate(-50, 130, 180)"
      >
        S3 — 31.109
      </text>

      {/* Start/Finish line */}
      <line x1={100} y1={290} x2={100} y2={310} stroke="#ffffff" strokeWidth="2" opacity="0.8" />
      <text x="100" y="324" fill="#ffffff" fontSize="8" fontFamily="var(--font-technical-grotesk), monospace"
        textAnchor="middle" opacity="0.6" letterSpacing="0.1em"
      >
        S/F
      </text>
    </svg>
  );
}
