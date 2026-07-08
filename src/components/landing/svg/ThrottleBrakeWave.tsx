export function ThrottleBrakeWave({ className }: { className?: string }) {
  /* Realistic throttle/brake telemetry data for ~one lap segment */
  const throttlePoints = [
    0,20, 20,20, 40,20, 60,20, 80,22, 95,30,
    105,80, 112,160, 118,178, 124,170, 132,120,
    140,60, 150,25, 165,20, 185,20, 205,20,
    220,24, 230,90, 238,168, 244,178, 250,160,
    258,100, 268,50, 278,22, 290,20, 310,20,
    330,20, 345,20, 358,28, 365,100, 372,170,
    378,178, 385,140, 395,60, 410,22, 430,20,
    450,20, 470,20, 490,20, 510,20, 530,22,
    540,70, 548,150, 555,178, 562,150, 572,80,
    582,30, 595,20,
  ];

  const brakePoints = [
    0,178, 20,178, 40,178, 60,178, 80,176, 95,168,
    105,100, 112,30, 118,20, 124,28, 132,70,
    140,140, 150,175, 165,178, 185,178, 205,178,
    220,174, 230,100, 238,28, 244,20, 250,35,
    258,90, 268,145, 278,174, 290,178, 310,178,
    330,178, 345,178, 358,170, 365,90, 372,25,
    378,20, 385,50, 395,135, 410,175, 430,178,
    450,178, 470,178, 490,178, 510,178, 530,174,
    540,120, 548,40, 555,20, 562,45, 572,110,
    582,165, 595,178,
  ];

  const toPolyline = (pts: number[]) => {
    const pairs: string[] = [];
    for (let i = 0; i < pts.length; i += 2) {
      pairs.push(`${pts[i]},${pts[i + 1]}`);
    }
    return pairs.join(" ");
  };

  return (
    <svg
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="tw-glow-green">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="tw-glow-red">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="tw-throttle-grad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00a650" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00a650" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00a650" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Horizontal grid lines */}
      {[0, 25, 50, 75, 100].map((pct) => {
        const y = 20 + (pct / 100) * 158;
        return (
          <g key={`grid-${pct}`}>
            <line x1={0} y1={y} x2={600} y2={y} stroke="#e1e7e8" strokeWidth="0.4" opacity="0.15" />
            <text x={4} y={y - 3} fill="#8a9698" fontSize="7" fontFamily="var(--font-technical-grotesk), monospace" opacity="0.5">
              {100 - pct}%
            </text>
          </g>
        );
      })}

      {/* Brake trace — red/coral */}
      <polyline
        points={toPolyline(brakePoints)}
        stroke="#ff4444"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.6"
        filter="url(#tw-glow-red)"
      />

      {/* Throttle trace — DRS Green */}
      <polyline
        points={toPolyline(throttlePoints)}
        stroke="#00a650"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        filter="url(#tw-glow-green)"
      />

      {/* Axis labels */}
      <text x="570" y="14" fill="#00a650" fontSize="9" fontFamily="var(--font-technical-grotesk), monospace"
        fontWeight="500" letterSpacing="0.08em"
      >
        THR
      </text>
      <text x="570" y="196" fill="#ff4444" fontSize="9" fontFamily="var(--font-technical-grotesk), monospace"
        fontWeight="500" letterSpacing="0.08em"
      >
        BRK
      </text>

      {/* Braking zone markers */}
      {[105, 230, 365, 540].map((x, i) => (
        <g key={`bz-${i}`}>
          <line x1={x} y1={16} x2={x} y2={182} stroke="#ffe600" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.3" />
          <text x={x} y={194} fill="#ffe600" fontSize="6" fontFamily="var(--font-technical-grotesk), monospace"
            textAnchor="middle" opacity="0.5" letterSpacing="0.06em"
          >
            T{i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}
