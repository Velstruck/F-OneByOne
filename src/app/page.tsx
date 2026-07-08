import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Navbar } from "@/components/landing/Navbar";
import { HeroStage } from "@/components/landing/HeroStage";
import { StatsBar } from "@/components/landing/StatsBar";
import { SplitDataSection } from "@/components/landing/SplitDataSection";
import { TelemetryFeatureCard } from "@/components/landing/TelemetryFeatureCard";
import { Footer } from "@/components/landing/Footer";

import { ThrottleBrakeWave } from "@/components/landing/svg/ThrottleBrakeWave";
import { SpeedGauge } from "@/components/landing/svg/SpeedGauge";
import { LapTimeGrid } from "@/components/landing/svg/LapTimeGrid";
import { AeroFlowViz } from "@/components/landing/svg/AeroFlowViz";
import { TireCompoundViz } from "@/components/landing/svg/TireCompoundViz";
import { CircuitTrace } from "@/components/landing/svg/CircuitTrace";

export default async function LandingPage() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* ── Sticky Navigation ── */}
      <Navbar />

      {/* ── 1. Carbon Hero Stage ── */}
      <HeroStage />

      {/* ── 2. Stats Bar ── */}
      <StatsBar />

      {/* ── 3. Split Data Section — Championship Analytics ── */}
      <SplitDataSection
        id="analytics"
        surface="white"
        headline="Championship Analytics"
        body="Track the constructor championship round-by-round with interactive telemetry charts. Visualize points distribution, race pace trends, and season momentum shifts with precision-engineered data grids."
        buttonLabel="Analyze Season"
        buttonColor="cyan"
        linkLabel="View Documentation"
      >
        <ThrottleBrakeWave className="w-full h-auto" />
      </SplitDataSection>

      {/* ── 4. Split Data Section — Real-Time Telemetry (reversed) ── */}
      <SplitDataSection
        id="telemetry"
        surface="mist"
        reversed
        headline="Real-Time Telemetry"
        body="Stream live throttle, brake, and steering data at 240Hz sample rates. Overlay driver traces, compare sector performances, and identify the decisive milliseconds that separate podium from midfield."
        buttonLabel="Connect Live Feed"
        buttonColor="green"
        linkLabel="API Reference"
      >
        <SpeedGauge className="w-full h-auto max-w-[300px] mx-auto" />
      </SplitDataSection>

      {/* ── 5. Tinted Feature Card Grid (2-column) ── */}
      <section
        id="features"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="mx-auto grid grid-cols-1 md:grid-cols-2"
          style={{
            maxWidth: 1200,
            gap: 24,
            padding: "96px 32px",
          }}
        >
          {/* Paddock Scarlet — Fastest Lap Metrics */}
          <TelemetryFeatureCard
            tint="scarlet"
            headline="Fastest Lap Metrics"
            body="Dissect the fastest lap of every session. Sector-by-sector breakdown with speed trap data, tire compound analysis, and historical comparisons across seasons."
            buttonLabel="Parse Laps"
            linkLabel="View Raw JSON"
          >
            <AeroFlowViz className="w-full h-auto" />
          </TelemetryFeatureCard>

          {/* Apex Teal — Aero Balance Analysis */}
          <TelemetryFeatureCard
            tint="teal"
            headline="Aero Balance Analysis"
            body="Wind-tunnel precision meets real-world performance. Analyze downforce distribution, drag coefficients, and DRS effectiveness across every circuit configuration."
            buttonLabel="Analyze Telemetry"
            linkLabel="Read Methodology"
          >
            <TireCompoundViz className="w-full h-auto" />
          </TelemetryFeatureCard>
        </div>
      </section>

      {/* ── 6. Split Data Section — Driver Standings ── */}
      <SplitDataSection
        id="standings"
        surface="mist"
        headline="Driver Standings"
        body="Keep your favorite drivers in sight with personalized dashboards. Compare performance trajectories, championship points progression, and head-to-head race data with granular filtering."
        buttonLabel="Track Drivers"
        buttonColor="yellow"
        linkLabel="Compare Drivers"
      >
        <LapTimeGrid className="w-full h-auto" />
      </SplitDataSection>

      {/* ── 7. Full-Width Tinted Feature Card — Championship Legacy (Gold) ── */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div
          className="mx-auto"
          style={{ maxWidth: 1200, padding: "0 32px 96px" }}
        >
          <TelemetryFeatureCard
            tint="gold"
            headline="Championship Legacy Database"
            body="Access 70+ years of Formula 1 championship data. Every constructor, every driver, every race — indexed, searchable, and ready for deep analytical queries. From Fangio to the present grid."
            buttonLabel="Explore Legacy"
            linkLabel="Browse Archives"
          >
            <CircuitTrace className="w-full h-auto" />
          </TelemetryFeatureCard>
        </div>
      </section>

      {/* ── 8. Final CTA Section ── */}
      <section style={{ backgroundColor: "#0d0f12" }}>
        <div
          className="mx-auto flex flex-col items-center text-center"
          style={{
            maxWidth: 1200,
            padding: "96px 32px",
          }}
        >
          <h2
            className="font-heading"
            style={{
              fontSize: "clamp(28px, 5vw, 46px)",
              lineHeight: 1.2,
              letterSpacing: "0.92px",
              color: "#ffffff",
              margin: 0,
              marginBottom: 16,
            }}
          >
            Ready to Initialize?
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 16,
              lineHeight: 1.4,
              color: "#8a9698",
              maxWidth: 480,
              marginBottom: 32,
            }}
          >
            Connect to the f-onebyone data engine and unlock the full depth of
            Formula 1 analytics. Zero configuration required.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
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
            <Link
              href="#"
              className="font-sans"
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#00a650",
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              Schedule Demo →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. Footer ── */}
      <Footer />
    </div>
  );
}
