import Link from "next/link";

type TintColor = "scarlet" | "teal" | "gold";

interface TelemetryFeatureCardProps {
  tint: TintColor;
  headline: string;
  body: string;
  buttonLabel: string;
  buttonHref?: string;
  linkLabel?: string;
  linkHref?: string;
  children?: React.ReactNode; // Decorative SVG
}

const tintMap: Record<TintColor, { bg: string; accent: string }> = {
  scarlet: { bg: "#fdeeed", accent: "#ff4444" },
  teal:    { bg: "#edfbf9", accent: "#00d2ff" },
  gold:    { bg: "#faf6e8", accent: "#ffe600" },
};

const accentButtons: Record<TintColor, { bg: string; text: string }> = {
  scarlet: { bg: "#00a650", text: "#ffffff" },
  teal:    { bg: "#00d2ff", text: "#ffffff" },
  gold:    { bg: "#ffe600", text: "#0d0f12" },
};

export function TelemetryFeatureCard({
  tint,
  headline,
  body,
  buttonLabel,
  buttonHref = "#",
  linkLabel,
  linkHref = "#",
  children,
}: TelemetryFeatureCardProps) {
  const t = tintMap[tint];
  const btn = accentButtons[tint];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: t.bg,
        borderRadius: 0,
        padding: 32,
        minHeight: 320,
      }}
    >
      {/* Text content */}
      <div className="relative z-10" style={{ maxWidth: 380 }}>
        {/* Category tag */}
        <div
          className="font-sans inline-block"
          style={{
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: t.accent,
            marginBottom: 16,
            padding: "4px 8px",
            borderRadius: 2,
            backgroundColor: `${t.accent}15`,
          }}
        >
          {tint === "scarlet" ? "PERFORMANCE" : tint === "teal" ? "ENGINEERING" : "LEGACY"}
        </div>

        {/* Heading — 22px Velocity Display */}
        <h3
          className="font-heading"
          style={{
            fontSize: 22,
            lineHeight: 1.2,
            letterSpacing: "0.44px",
            color: "#000000",
            margin: 0,
            marginBottom: 16,
          }}
        >
          {headline}
        </h3>

        {/* Body — 16px Technical Grotesque */}
        <p
          className="font-sans"
          style={{
            fontSize: 16,
            lineHeight: 1.4,
            color: "#8a9698",
            margin: 0,
            marginBottom: 24,
          }}
        >
          {body}
        </p>

        {/* Action pair */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link href={buttonHref}>
            <button
              className="font-sans cursor-pointer"
              style={{
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 27px",
                borderRadius: 2,
                border: "none",
                backgroundColor: btn.bg,
                color: btn.text,
                letterSpacing: "0.04em",
              }}
            >
              {buttonLabel}
            </button>
          </Link>

          {linkLabel && (
            <Link
              href={linkHref}
              className="font-sans"
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#0d0f12",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {linkLabel} →
            </Link>
          )}
        </div>
      </div>

      {/* Decorative SVG — floats in lower/right quadrant */}
      {children && (
        <div
          className="absolute pointer-events-none hidden md:block"
          style={{
            right: -20,
            bottom: -20,
            width: "55%",
            opacity: 0.4,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
