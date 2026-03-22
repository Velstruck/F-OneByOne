"use client";

import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SeasonSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const currentSeason = searchParams.get('season') || '2026';
  
  // F1 Ergast API has historical data going way back, let's provide 1950 to 2026!
  // But to not overwhelm the dropdown, let's do the last 25 years (2000-2026).
  const seasons = Array.from({ length: 27 }, (_, i) => (2026 - i).toString());

  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('season', e.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-zinc-400">Season:</span>
      <select 
        value={currentSeason} 
        onChange={handleSeasonChange}
        className="w-[100px] h-8 px-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-200 outline-none focus:ring-1 focus:ring-red-600 appearance-none cursor-pointer font-sans"
      >
        {seasons.map(s => (
          <option key={s} value={s} className="bg-zinc-900 text-zinc-200">{s}</option>
        ))}
      </select>
    </div>
  );
}
