import { headers } from "next/headers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function getConstructorStandings(season: string) {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/standings?season=${season}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

async function getDriverStandings(season: string) {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/driver-standings?season=${season}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function StandingsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const season = typeof searchParams.season === 'string' ? searchParams.season : '2026';
  
  const [constructors, drivers] = await Promise.all([
    getConstructorStandings(season),
    getDriverStandings(season)
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">{season} Standings</h1>
        <p className="text-zinc-400">Current driver and constructor rankings for the season.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-zinc-950 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Driver Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="w-[80px] text-zinc-400">Pos</TableHead>
                  <TableHead className="text-zinc-400">Driver</TableHead>
                  <TableHead className="text-zinc-400">Team</TableHead>
                  <TableHead className="text-right text-zinc-400">Pts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drivers.map((driver: any) => (
                  <TableRow key={driver.driverId} className="border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <TableCell className="font-medium text-white">{driver.position}</TableCell>
                    <TableCell>{driver.givenName} {driver.familyName}</TableCell>
                    <TableCell className="text-zinc-400">{driver.constructorName}</TableCell>
                    <TableCell className="text-right font-medium text-red-500">{driver.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle>Constructor Standings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="w-[80px] text-zinc-400">Pos</TableHead>
                  <TableHead className="text-zinc-400">Team</TableHead>
                  <TableHead className="text-zinc-400">Wins</TableHead>
                  <TableHead className="text-right text-zinc-400">Pts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {constructors.map((team: any) => (
                  <TableRow key={team.constructorId} className="border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <TableCell className="font-medium text-white">{team.position}</TableCell>
                    <TableCell>{team.name}</TableCell>
                    <TableCell className="text-zinc-400">{team.wins}</TableCell>
                    <TableCell className="text-right font-medium text-red-500">{team.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
