import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';
    const round = searchParams.get('round');
    
    if (!round) return NextResponse.json({ error: 'Round missing' }, { status: 400 });

    const limit = 100;
    let offset = 0;
    let total = 0;
    let isFirst = true;
    let allPitStops: any[] = [];

    while (isFirst || offset < total) {
      const res = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/${round}/pitstops.json?limit=${limit}&offset=${offset}`, {
        next: { revalidate: 3600 }
      });
      if (!res.ok) throw new Error('API Error');
      
      const data = await res.json();
      const races = data?.MRData?.RaceTable?.Races || [];
      
      if (races.length > 0 && races[0].PitStops) {
        allPitStops = [...allPitStops, ...races[0].PitStops];
      }
      
      const parsedTotal = parseInt(data?.MRData?.total || '0', 10);
      total = isNaN(parsedTotal) ? 0 : parsedTotal;
      
      isFirst = false;
      offset += limit;
    }

    return NextResponse.json(allPitStops);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pitstops' }, { status: 500 });
  }
}
