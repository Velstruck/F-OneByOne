import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const linkGroups = [
    {
      title: "Platform",
      links: [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Live Telemetry", href: "#" },
        { label: "Championship", href: "#" },
        { label: "Driver Analysis", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "API Reference", href: "#" },
        { label: "Changelog", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#0d0f12",
        borderTop: "1px solid #e1e7e8",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1200, padding: "64px 32px 32px" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/onebyone.png"
                alt="F-OneByOne Logo"
                width={28}
                height={28}
              />
              <span
                className="font-heading"
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                }}
              >
                f-1x1
              </span>
            </div>
            <p
              className="font-sans"
              style={{
                fontSize: 13,
                lineHeight: 1.4,
                color: "#8a9698",
                maxWidth: 220,
              }}
            >
              Premium F1 telemetry and analytics platform. Precision-engineered for
              the modern motorsport analyst.
            </p>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4
                className="font-sans"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "#ffffff",
                  marginBottom: 16,
                }}
              >
                {group.title}
              </h4>
              <ul className="list-none p-0 m-0" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans"
                      style={{
                        fontSize: 13,
                        fontWeight: 400,
                        color: "#8a9698",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderTop: "1px solid rgba(225, 231, 232, 0.15)",
            paddingTop: 24,
          }}
        >
          <span
            className="font-sans"
            style={{ fontSize: 13, color: "#8a9698", letterSpacing: "0.04em" }}
          >
            © {new Date().getFullYear()} f-onebyone. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-sans"
                style={{
                  fontSize: 13,
                  color: "#8a9698",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
