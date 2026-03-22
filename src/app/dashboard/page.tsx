import { ConstructorPointsChart } from "@/components/dashboard/ConstructorPointsChart";
import { RecentRacesTable } from "@/components/dashboard/RecentRacesTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Flag } from "lucide-react";
import { headers } from "next/headers";

async function getStandings() {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/standings`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

async function getResults() {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/results`, { next: { revalidate: 3600 } });
  if (!res.ok) return { races: [], accumulation: [] };
  return res.json();
}

export default async function DashboardPage() {
  const standings = await getStandings();
  const resultsData = await getResults();
  
  const topConstructor = standings.length > 0 ? standings[0] : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Dashboard</h1>
        <p className="text-zinc-400">Welcome to your Formula 1 command center.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-zinc-950 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Constructor</CardTitle>
            <Trophy className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{topConstructor?.name || 'Loading...'}</div>
            <p className="text-xs text-zinc-400 mt-1">
              {topConstructor ? `${topConstructor.points} Points | ${topConstructor.wins} Wins` : '--'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-zinc-950 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Races</CardTitle>
            <Flag className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{resultsData.races.length}</div>
            <p className="text-xs text-zinc-400 mt-1">2026 Season Calendar</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Constructors Tracking</CardTitle>
            <Users className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{standings.length}</div>
            <p className="text-xs text-zinc-400 mt-1">Active teams on the grid</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <ConstructorPointsChart data={resultsData.accumulation} />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <RecentRacesTable races={resultsData.races} />
      </div>
    </div>
  );
}
