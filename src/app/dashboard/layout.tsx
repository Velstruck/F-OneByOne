import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Flag, LayoutDashboard, Trophy, Calendar, Activity } from "lucide-react";
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
            <div className="bg-red-600 p-2 rounded-lg shadow-lg shadow-red-600/20">
              <Flag className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">F1 Pulse</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 bg-red-600/10 text-red-500 rounded-md transition-colors font-medium">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          <Link href="/dashboard/race-analysis" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors font-medium">
            <Activity className="h-4 w-4" />
            Race Analysis
          </Link>
          <Link href="/dashboard/standings" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors font-medium">
            <Trophy className="h-4 w-4" />
            Standings
          </Link>
          <Link href="/dashboard/calendar" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors font-medium">
            <Calendar className="h-4 w-4" />
            Calendar
          </Link>
        </nav>
        
        <div className="p-4 border-t border-zinc-900">
          <SeasonSelector />
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
            <Flag className="h-6 w-6 text-red-600" />
            <span className="font-bold text-lg">F1 Pulse</span>
          </Link>
          <div className="flex items-center gap-3">
            <SeasonSelector />
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
