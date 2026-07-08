import Link from "next/link";

interface SplitDataSectionProps {
  id?: string;
  surface: "white" | "mist";
  reversed?: boolean;
  headline: string;
  body: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonColor?: "green" | "cyan" | "yellow";
  linkLabel?: string;
  linkHref?: string;
  children: React.ReactNode; // SVG visualization
}

const buttonStyles: Record<string, { bg: string; text: string }> = {
  green: { bg: "#00a650", text: "#ffffff" },
  cyan: { bg: "#00d2ff", text: "#ffffff" },
  yellow: { bg: "#ffe600", text: "#0d0f12" },
};

export function SplitDataSection({
  id,
  surface,
  reversed = false,
  headline,
  body,
  buttonLabel,
  buttonHref = "#",
  buttonColor = "cyan",
  linkLabel,
  linkHref = "#",
  children,
}: SplitDataSectionProps) {
  const bg = surface === "white" ? "#ffffff" : "#f4f7f6";
  const btn = buttonStyles[buttonColor];

  return (
    <section id={id} style={{ backgroundColor: bg }}>
      <div
        className={`mx-auto grid grid-cols-1 md:grid-cols-2 items-center ${
          reversed ? "md:direction-rtl" : ""
        }`}
        style={{
          maxWidth: 1200,
          gap: 64,
          padding: "96px 32px",
        }}
      >
        {/* Text column */}
        <div
          className={reversed ? "md:order-2" : "md:order-1"}
          style={{ direction: "ltr" }}
        >
          {/* Section heading — 46px Velocity Display */}
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.2,
              letterSpacing: "0.92px",
              color: "#000000",
              margin: 0,
              marginBottom: 24,
            }}
          >
            {headline}
          </h2>

          {/* Body text — 16px Technical Grotesque */}
          <p
            className="font-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.4,
              color: "#8a9698",
              margin: 0,
              marginBottom: 32,
              maxWidth: 480,
            }}
          >
            {body}
          </p>

          {/* Action pair: button + text link */}
          {buttonLabel && (
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
                    color: btn.bg === "#ffe600" ? "#0d0f12" : btn.bg,
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                  }}
                >
                  {linkLabel} →
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Visualization column */}
        <div
          className={reversed ? "md:order-1" : "md:order-2"}
          style={{ direction: "ltr" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
