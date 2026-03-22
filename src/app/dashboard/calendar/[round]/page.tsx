import { headers } from "next/headers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LapPositionChart } from "@/components/dashboard/LapPositionChart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

async function getLaps(season: string, round: string) {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/laps?season=${season}&round=${round}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

async function getPitstops(season: string, round: string) {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/pitstops?season=${season}&round=${round}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

type PageProps = {
  params: Promise<{ round: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RaceDetail(props: PageProps) {
  const { round } = await props.params;
  const searchParams = await props.searchParams;
  const season = typeof searchParams.season === 'string' ? searchParams.season : '2026';
  
  const [laps, pitstops] = await Promise.all([
    getLaps(season, round),
    getPitstops(season, round)
  ]);

  return (
    <div className="space-y-6">
      <div>
        <Link href={`/dashboard/calendar?season=${season}`} className="inline-flex items-center text-sm text-zinc-400 hover:text-white mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Calendar
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Round {round} Analysis</h1>
        <p className="text-zinc-400">Deep dive into telemetry, lap pace, and pit strategy for the {season} season.</p>
      </div>

      <Card className="bg-zinc-950 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle>Lap-by-Lap Position Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <LapPositionChart laps={laps} />
        </CardContent>
      </Card>

      <Card className="bg-zinc-950 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle>Pit Stop Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          {pitstops.length === 0 ? (
            <div className="text-zinc-500 py-4">No pit stop data available for this race.</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="w-[80px] text-zinc-400 text-center">Stop</TableHead>
                  <TableHead className="text-zinc-400">Driver</TableHead>
                  <TableHead className="text-zinc-400">Lap</TableHead>
                  <TableHead className="text-zinc-400">Time of Day</TableHead>
                  <TableHead className="text-right text-zinc-400">Duration (s)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pitstops.map((ps: any, i: number) => (
                  <TableRow key={`${ps.driverId}-${ps.stop}-${i}`} className="border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                    <TableCell className="font-medium text-white text-center">{ps.stop}</TableCell>
                    <TableCell className="font-medium">{ps.driverId}</TableCell>
                    <TableCell className="text-zinc-400">{ps.lap}</TableCell>
                    <TableCell className="text-zinc-400">{ps.time}</TableCell>
                    <TableCell className="text-right font-medium text-red-500">{ps.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
