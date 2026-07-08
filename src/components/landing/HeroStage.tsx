import Link from "next/link";
import { CircuitTrace } from "./svg/CircuitTrace";
import { SpeedGauge } from "./svg/SpeedGauge";
import { ThrottleBrakeWave } from "./svg/ThrottleBrakeWave";

export function HeroStage() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0d0f12" }}
    >
      {/* Hero content */}
      <div
        className="relative z-10 mx-auto flex flex-col items-center text-center"
        style={{
          maxWidth: 1200,
          paddingTop: 128,
          paddingBottom: 64,
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        {/* Tag line */}
        <div
          className="font-sans"
          style={{
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#8a9698",
            marginBottom: 24,
            animation: "hero-fade-up 0.8s ease-out forwards",
          }}
        >
          PRIVATE PADDOCK DATA ENGINE
        </div>

        {/* Main headline — 80px Velocity Display */}
        <h1
          className="font-heading"
          style={{
            fontSize: "clamp(36px, 8vw, 80px)",
            lineHeight: 1.1,
            letterSpacing: "1.6px",
            color: "#ffffff",
            margin: 0,
            maxWidth: 900,
            animation: "hero-fade-up 0.8s ease-out 0.15s both",
          }}
        >
          THE APEX OF{" "}
          <span style={{ color: "#00d2ff" }}>F1</span>{" "}
          INTELLIGENCE
        </h1>

        {/* Subheading — 22px */}
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            lineHeight: 1.4,
            color: "#8a9698",
            maxWidth: 640,
            marginTop: 24,
            marginBottom: 48,
            animation: "hero-fade-up 0.8s ease-out 0.3s both",
          }}
        >
          Ultra-precise aerodynamic telemetry and championship analytics
          rendered in real-time. Your carbon-walled command center.
        </p>

        {/* CTA buttons */}
        <div
          className="flex items-center gap-4 flex-wrap justify-center"
          style={{ animation: "hero-fade-up 0.8s ease-out 0.45s both" }}
        >
          {/* DRS Green Button */}
          <Link href="/sign-up">
            <button
              className="font-sans cursor-pointer"
              style={{
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 27px",
                borderRadius: 2,
                border: "none",
                backgroundColor: "#00a650",
                color: "#ffffff",
                letterSpacing: "0.04em",
              }}
            >
              Initialize Telemetry
            </button>
          </Link>

          {/* Paired text link — DRS Green */}
          <Link
            href="#features"
            className="font-sans"
            style={{
              fontSize: 16,
              fontWeight: 400,
              color: "#00a650",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            View Features →
          </Link>
        </div>
      </div>

      {/* Telemetry visualization — lower 60% */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: 1200,
          paddingLeft: 32,
          paddingRight: 32,
          paddingBottom: 96,
        }}
      >
        {/* Three-panel composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Circuit trace — spans 7 cols */}
          <div className="md:col-span-7">
            <CircuitTrace className="w-full h-auto" />
          </div>

          {/* Right panel — speed gauge + throttle wave stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <SpeedGauge className="w-full h-auto max-w-[260px] mx-auto" />
            <ThrottleBrakeWave className="w-full h-auto" />
          </div>
        </div>

        {/* Floating data readouts */}
        <div
          className="flex items-center justify-center gap-8 mt-8 flex-wrap font-sans"
          style={{ fontSize: 13, letterSpacing: "0.08em", color: "#8a9698" }}
        >
          <span>
            LATENCY{" "}
            <span style={{ color: "#00a650", fontWeight: 500 }}>{"<"}2ms</span>
          </span>
          <span style={{ color: "#e1e7e8", opacity: 0.3 }}>|</span>
          <span>
            SAMPLE RATE{" "}
            <span style={{ color: "#00d2ff", fontWeight: 500 }}>240 Hz</span>
          </span>
          <span style={{ color: "#e1e7e8", opacity: 0.3 }}>|</span>
          <span>
            CHANNELS{" "}
            <span style={{ color: "#ffe600", fontWeight: 500 }}>1,247</span>
          </span>
        </div>
      </div>
    </section>
  );
}
