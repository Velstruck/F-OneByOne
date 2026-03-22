import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';

    const res = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/driverstandings/?format=json`, {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error('API Error');
    
    const data = await res.json();
    const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
    
    const formattedData = list.map((item: any) => ({
      position: parseInt(item.position, 10),
      points: parseFloat(item.points),
      wins: parseInt(item.wins, 10),
      driverId: item.Driver.driverId,
      givenName: item.Driver.givenName,
      familyName: item.Driver.familyName,
      nationality: item.Driver.nationality,
      constructorName: item.Constructors?.[0]?.name || 'N/A'
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch driver standings' }, { status: 500 });
  }
}
