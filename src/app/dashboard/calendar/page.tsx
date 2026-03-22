import { headers } from "next/headers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

async function getRaces(season: string) {
  const host = (await headers()).get('host');
  const prot = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const res = await fetch(`${prot}://${host}/api/f1/races?season=${season}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function CalendarPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const season = typeof searchParams.season === 'string' ? searchParams.season : '2026';
  
  const races = await getRaces(season);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">{season} Race Calendar</h1>
        <p className="text-zinc-400">Schedule of events for the selected season.</p>
      </div>
      
      <Card className="bg-zinc-950 border-zinc-800 text-white">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-zinc-800 hover:bg-transparent">
                <TableHead className="w-[80px] text-zinc-400">Round</TableHead>
                <TableHead className="text-zinc-400">Grand Prix</TableHead>
                <TableHead className="text-zinc-400">Circuit</TableHead>
                <TableHead className="text-right text-zinc-400">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {races.map((race: any) => (
                <TableRow key={race.round} className="border-zinc-800 hover:bg-zinc-900/50 transition-colors">
                  <TableCell className="font-medium text-white text-center">{race.round}</TableCell>
                  <TableCell className="font-medium">
                    <Link href={`/dashboard/calendar/${race.round}?season=${season}`} className="text-red-500 hover:underline">
                      {race.raceName}
                    </Link>
                  </TableCell>
                  <TableCell className="text-zinc-300">{race.circuitName}</TableCell>
                  <TableCell className="text-right text-zinc-400">{new Date(race.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
