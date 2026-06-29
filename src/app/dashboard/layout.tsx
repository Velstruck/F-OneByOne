import { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { DashboardSidebarNav } from "@/components/dashboard/DashboardSidebarNav";
import SeasonSelector from "@/components/dashboard/SeasonSelector";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-900 bg-zinc-950 hidden md:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg flex items-center justify-center">
              <Image src="/onebyone.png" alt="F-OneByOne Logo" width={50} height={50} priority />
            </div>
            <span className="font-bold text-lg tracking-tight">F-OneByOne</span>
          </Link>
        </div>
        
        <DashboardSidebarNav />
        
        <div className="p-4 border-t border-zinc-900">
          <Suspense fallback={<SeasonSelectorFallback />}>
            <SeasonSelector />
          </Suspense>
          <div className="mt-4 flex items-center gap-3 px-3 py-2 bg-zinc-900 rounded-md">
            <UserButton />
            <span className="text-sm font-medium text-zinc-300 ml-2">My Account</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-900 bg-zinc-950">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.svg" alt="F-OneByOne Logo" width={24} height={24} priority className="dark:invert-0" />
            <span className="font-bold text-lg">F-OneByOne</span>
          </Link>
          <div className="flex items-center gap-3">
            <Suspense fallback={<SeasonSelectorFallback compact />}>
              <SeasonSelector />
            </Suspense>
            <UserButton />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-4 md:p-8 bg-black">
          {children}
        </div>
      </main>
    </div>
  );
}

function SeasonSelectorFallback({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/80 ${
        compact ? "h-8 px-3" : "px-3 py-2"
      }`}
    >
      <div className="h-3 w-12 rounded-full bg-zinc-800" />
      <div className={`${compact ? "h-8 w-24" : "h-8 w-[100px]"} rounded-md bg-zinc-800`} />
    </div>
  );
}
