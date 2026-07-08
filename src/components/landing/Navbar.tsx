"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Telemetry", href: "#telemetry" },
  { label: "Standings", href: "#standings" },
  { label: "Docs", href: "#" },
  { label: "API", href: "#" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = !scrolled;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: isDark ? "#0d0f12" : "#ffffff",
        borderBottom: scrolled ? "1px solid #e1e7e8" : "1px solid transparent",
      }}
    >
      <nav
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1200, padding: "14px 32px" }}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/onebyone.png"
            alt="F-OneByOne Logo"
            width={32}
            height={32}
            priority
          />
          <span
            className="font-heading"
            style={{
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: isDark ? "#ffffff" : "#0d0f12",
            }}
          >
            f-1x1
          </span>
        </Link>

        {/* Navigation links — hidden on mobile */}
        <div className="hidden md:flex items-center" style={{ gap: 6 }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: isDark ? "rgba(255,255,255,0.7)" : "#8a9698",
                padding: "6px 12px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              className="font-sans hover:!text-[#00d2ff]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              color: isDark ? "#00d2ff" : "#007ca8",
              textDecoration: "none",
            }}
            className="hidden sm:block font-sans"
          >
            Live Telemetry
          </Link>
          <Link href="/sign-in">
            <button
              className="font-sans cursor-pointer"
              style={{
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.06em",
                padding: "8px 27px",
                borderRadius: 2,
                border: isDark ? "1px solid rgba(255,255,255,0.3)" : "none",
                backgroundColor: isDark ? "transparent" : "#0d0f12",
                color: isDark ? "#ffffff" : "#ffffff",
                transition: "all 0.2s",
              }}
            >
              Launch App
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
