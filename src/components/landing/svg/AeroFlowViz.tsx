export function AeroFlowViz({ className }: { className?: string }) {
  /*
   * Wind-tunnel aerodynamic flow visualization.
   * Multiple horizontal bezier curves flowing left→right with
   * staggered dash animations suggesting laminar airflow.
   */
  const flowLines = [
    { d: "M 0,40 Q 80,35 160,42 T 320,38 T 480,44 T 600,40", opacity: 0.25, delay: 0 },
    { d: "M 0,70 Q 100,58 180,65 T 340,72 T 460,60 T 600,68", opacity: 0.4, delay: 0.2 },
    { d: "M 0,100 Q 90,88 200,95 T 350,105 T 480,92 T 600,98", opacity: 0.6, delay: 0.4 },
    { d: "M 0,130 Q 110,118 190,125 T 360,135 T 470,122 T 600,128", opacity: 0.8, delay: 0.6 },
    { d: "M 0,160 Q 80,148 170,155 T 330,165 T 490,152 T 600,158", opacity: 0.9, delay: 0.8 },
    { d: "M 0,190 Q 100,178 200,185 T 380,195 T 500,182 T 600,188", opacity: 0.7, delay: 1.0 },
    { d: "M 0,220 Q 90,210 180,215 T 340,225 T 480,212 T 600,218", opacity: 0.5, delay: 1.2 },
    { d: "M 0,250 Q 110,242 200,248 T 360,252 T 470,245 T 600,250", opacity: 0.3, delay: 1.4 },
  ];

  return (
    <svg
      viewBox="0 0 600 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <filter id="af-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="af-flow-grad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
          <stop offset="30%" stopColor="#00d2ff" stopOpacity="1" />
          <stop offset="70%" stopColor="#007ca8" stopOpacity="1" />
          <stop offset="100%" stopColor="#007ca8" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Flow streamlines */}
      {flowLines.map((line, i) => (
        <path
          key={`fl-${i}`}
          d={line.d}
          stroke="url(#af-flow-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={line.opacity}
          filter={line.opacity > 0.5 ? "url(#af-glow)" : undefined}
          style={{
            strokeDasharray: "20 20",
            animation: `flow-dash 1.5s linear ${line.delay}s infinite`,
          }}
        />
      ))}

      {/* Pressure gradient indicators */}
      {[
        { x: 160, y: 130, label: "HIGH", color: "#ffe600" },
        { x: 380, y: 130, label: "LOW", color: "#00d2ff" },
      ].map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="2" fill={p.color}
            style={{ animation: "glow-pulse 2s ease-in-out infinite" }}
          />
          <text x={p.x} y={p.y - 10} fill={p.color} fontSize="7"
            fontFamily="var(--font-technical-grotesk), monospace"
            textAnchor="middle" letterSpacing="0.12em" opacity="0.7"
          >
            {p.label}
          </text>
        </g>
      ))}

      {/* Velocity vectors (arrows) */}
      {[80, 200, 350, 500].map((x, i) => (
        <polygon
          key={`arr-${i}`}
          points={`${x},145 ${x + 12},150 ${x},155`}
          fill="#00d2ff"
          opacity={0.3 + i * 0.15}
          style={{ animation: `glow-pulse 2s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}

      {/* Data label */}
      <text x={300} y={290} fill="#8a9698" fontSize="8" textAnchor="middle"
        fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.1em"
      >
        DOWNFORCE: 1,842 N · DRAG COEFFICIENT: 0.92
      </text>
    </svg>
  );
}
