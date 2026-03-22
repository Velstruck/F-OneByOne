import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';

    const res = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/races/?format=json`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('API Error');
    }
    
    const data = await res.json();
    const races = data?.MRData?.RaceTable?.Races || [];
    
    const formattedData = races.map((race: any) => ({
      round: parseInt(race.round, 10),
      raceName: race.raceName,
      circuitId: race.Circuit.circuitId,
      circuitName: race.Circuit.circuitName,
      date: race.date,
      time: race.time
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch races' }, { status: 500 });
  }
}
