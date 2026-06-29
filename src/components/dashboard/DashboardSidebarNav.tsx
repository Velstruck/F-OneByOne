"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Trophy, Calendar, Activity } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/race-analysis",
    label: "Race Analysis",
    icon: Activity,
  },
  {
    href: "/dashboard/standings",
    label: "Standings",
    icon: Trophy,
  },
  {
    href: "/dashboard/calendar",
    label: "Calendar",
    icon: Calendar,
  },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-4 space-y-2 mt-4">
      {navItems.map((item) => {
        const { href, label, icon: Icon } = item;
        const active = isActivePath(pathname, href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors font-medium border border-transparent ${
              active
                ? "bg-red-600/10 text-red-400 border-red-500/20 shadow-[0_0_0_1px_rgba(239,68,68,0.1)]"
                : "text-zinc-400 hover:text-white hover:bg-zinc-900"
            }`}
          >
            <Icon className={`h-4 w-4 ${active ? "text-red-400" : ""}`} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}