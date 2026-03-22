import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.jolpi.ca/ergast/f1/2026/constructorstandings/?format=json', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) {
      throw new Error('API Error');
    }
    
    const data = await res.json();
    const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];
    
    const formattedData = list.map((item: any) => ({
      position: parseInt(item.position, 10),
      points: parseFloat(item.points),
      wins: parseInt(item.wins, 10),
      constructorId: item.Constructor.constructorId,
      name: item.Constructor.name,
      nationality: item.Constructor.nationality
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch constructor standings' }, { status: 500 });
  }
}
