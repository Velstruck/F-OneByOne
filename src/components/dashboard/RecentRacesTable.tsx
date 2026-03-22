import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Podium {
  position: number;
  driverName: string;
  constructorName: string;
  points: number;
  time: string;
}

interface Race {
  round: number;
  raceName: string;
  date: string;
  podium: Podium[];
}

export function RecentRacesTable({ races }: { races: Race[] }) {
  // Show last 5 races that actually have results
  const completedRaces = races.filter(r => r.podium && r.podium.length > 0).slice(-5).reverse();

  return (
    <Card className="bg-zinc-950 border-zinc-800 text-white w-full">
      <CardHeader>
        <CardTitle>Recent Races</CardTitle>
        <CardDescription className="text-zinc-400">Podium results for the latest Grand Prixs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-zinc-800">
          <Table>
            <TableHeader className="bg-zinc-900 border-zinc-800">
              <TableRow className="border-zinc-800">
                <TableHead className="text-zinc-400">Race</TableHead>
                <TableHead className="text-zinc-400">Date</TableHead>
                <TableHead className="text-zinc-400 text-yellow-500">Winner</TableHead>
                <TableHead className="text-zinc-400 text-zinc-300">2nd Place</TableHead>
                <TableHead className="text-zinc-400 text-amber-600">3rd Place</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {completedRaces.length === 0 ? (
                <TableRow className="border-zinc-800 hover:bg-zinc-900/50">
                  <TableCell colSpan={5} className="text-center text-zinc-500 h-24">
                    No recent race data available
                  </TableCell>
                </TableRow>
              ) : (
                completedRaces.map((race) => (
                  <TableRow key={race.round} className="border-zinc-800 hover:bg-zinc-900/50">
                    <TableCell className="font-medium text-white">{race.raceName}</TableCell>
                    <TableCell className="text-zinc-400">{new Date(race.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">{race.podium[0]?.driverName}</span>
                        <span className="text-xs text-zinc-500">{race.podium[0]?.constructorName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-zinc-300">{race.podium[1]?.driverName}</span>
                        <span className="text-xs text-zinc-500">{race.podium[1]?.constructorName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-zinc-400">{race.podium[2]?.driverName}</span>
                        <span className="text-xs text-zinc-500">{race.podium[2]?.constructorName}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
