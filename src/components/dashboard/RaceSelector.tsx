"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function RaceSelector({ races, currentRound }: { races: any[], currentRound: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleRaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('round', e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-400">Grand Prix:</span>
      <select 
        value={currentRound} 
        onChange={handleRaceChange}
        className="w-[220px] max-w-full h-8 px-2 bg-zinc-950 border border-zinc-800 rounded-md text-sm text-zinc-200 outline-none focus:ring-1 focus:ring-red-600 appearance-none cursor-pointer font-sans truncate"
      >
        {races.map(r => (
          <option key={r.round} value={r.round} className="bg-zinc-900 text-zinc-200">
            R{r.round} - {r.raceName}
          </option>
        ))}
      </select>
    </div>
  );
}
