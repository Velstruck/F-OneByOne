export function StatsBar() {
  const stats = [
    { value: "1,100+", label: "RACES ANALYZED", color: "#00d2ff" },
    { value: "20", label: "DRIVERS TRACKED", color: "#00a650" },
    { value: "<2ms", label: "DATA LATENCY", color: "#ffe600" },
    { value: "24/7", label: "LIVE TELEMETRY", color: "#00d2ff" },
  ];

  return (
    <section style={{ backgroundColor: "#f4f7f6" }}>
      <div
        className="mx-auto flex flex-wrap items-center justify-center"
        style={{
          maxWidth: 1200,
          padding: "48px 32px",
          gap: 0,
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center"
            style={{
              flex: "1 1 200px",
              padding: "16px 32px",
              borderRight:
                i < stats.length - 1 ? "1px solid #e1e7e8" : "none",
            }}
          >
            {/* Metric value — weight 500 */}
            <span
              className="font-sans"
              style={{
                fontSize: 28,
                fontWeight: 500,
                lineHeight: 1.3,
                color: stat.color,
                letterSpacing: "0.02em",
              }}
            >
              {stat.value}
            </span>

            {/* Metric label — weight 400 */}
            <span
              className="font-sans"
              style={{
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#8a9698",
                letterSpacing: "0.1em",
                marginTop: 4,
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
