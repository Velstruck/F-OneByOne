export function LapTimeGrid({ className }: { className?: string }) {
  const laps = [
    { lap: 1, s1: "28.432", s2: "31.109", s3: "24.871", total: "1:24.412", s1c: "#00a650", s2c: "#8a9698", s3c: "#00d2ff" },
    { lap: 2, s1: "28.118", s2: "30.992", s3: "24.654", total: "1:23.764", s1c: "#00d2ff", s2c: "#00a650", s3c: "#00a650" },
    { lap: 3, s1: "27.983", s2: "30.871", s3: "24.510", total: "1:23.364", s1c: "#9b59b6", s2c: "#00d2ff", s3c: "#9b59b6" },
    { lap: 4, s1: "28.201", s2: "31.045", s3: "24.789", total: "1:24.035", s1c: "#8a9698", s2c: "#8a9698", s3c: "#8a9698" },
    { lap: 5, s1: "28.054", s2: "30.912", s3: "24.601", total: "1:23.567", s1c: "#00a650", s2c: "#00a650", s3c: "#00d2ff" },
  ];

  const colWidth = 90;
  const rowHeight = 42;
  const startX = 30;
  const startY = 40;

  return (
    <svg
      viewBox="0 0 520 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Column headers */}
      {["LAP", "SECTOR 1", "SECTOR 2", "SECTOR 3", "LAP TIME"].map((h, i) => (
        <text
          key={`hdr-${i}`}
          x={startX + i * colWidth}
          y={startY - 10}
          fill="#8a9698"
          fontSize="8"
          fontFamily="var(--font-technical-grotesk), monospace"
          fontWeight="500"
          letterSpacing="0.12em"
        >
          {h}
        </text>
      ))}

      {/* Header divider */}
      <line x1={startX} y1={startY} x2={startX + 4.5 * colWidth} y2={startY}
        stroke="#e1e7e8" strokeWidth="0.5" opacity="0.3"
      />

      {/* Lap rows */}
      {laps.map((lap, row) => {
        const y = startY + 20 + row * rowHeight;
        const cells = [
          { text: `${lap.lap}`, color: "#ffffff", weight: "700" },
          { text: lap.s1, color: lap.s1c, weight: "500" },
          { text: lap.s2, color: lap.s2c, weight: "500" },
          { text: lap.s3, color: lap.s3c, weight: "500" },
          { text: lap.total, color: "#ffffff", weight: "700" },
        ];

        return (
          <g
            key={`row-${row}`}
            style={{
              opacity: 0,
              animation: `fade-float-in 0.5s ease-out ${0.3 + row * 0.12}s forwards`,
            }}
          >
            {cells.map((cell, col) => (
              <text
                key={`cell-${row}-${col}`}
                x={startX + col * colWidth}
                y={y}
                fill={cell.color}
                fontSize={col === 4 ? "12" : "11"}
                fontWeight={cell.weight}
                fontFamily="var(--font-technical-grotesk), monospace"
                letterSpacing="0.04em"
              >
                {cell.text}
              </text>
            ))}

            {/* Row divider */}
            <line
              x1={startX} y1={y + 12}
              x2={startX + 4.5 * colWidth} y2={y + 12}
              stroke="#e1e7e8" strokeWidth="0.3" opacity="0.12"
            />
          </g>
        );
      })}

      {/* Best lap indicator */}
      <g style={{ animation: "glow-pulse 2s ease-in-out 1.5s infinite" }}>
        <rect x={startX + 3.8 * colWidth} y={startY + 20 + 2 * rowHeight - 14}
          width="75" height="18" rx="2" fill="#9b59b6" opacity="0.15"
        />
        <text x={startX + 4.7 * colWidth} y={startY + 20 + 2 * rowHeight + 12}
          fill="#9b59b6" fontSize="6" textAnchor="middle"
          fontFamily="var(--font-technical-grotesk), monospace" letterSpacing="0.1em"
        >
          FASTEST
        </text>
      </g>
    </svg>
  );
}
