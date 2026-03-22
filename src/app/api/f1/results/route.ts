import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';

    const limit = 100;
    let offset = 0;
    let total = 0;
    let isFirst = true;
    let allRaces: any[] = [];

    while (isFirst || offset < total) {
      const res = await fetch(`https://api.jolpi.ca/ergast/f1/${season}/results.json?limit=${limit}&offset=${offset}`, {
        next: { revalidate: 3600 }
      });
      if (!res.ok) throw new Error('API Error');
      
      const data = await res.json();
      const races = data?.MRData?.RaceTable?.Races || [];
      
      races.forEach((race: any) => {
        const existingRace = allRaces.find((r) => r.round === race.round);
        if (existingRace) {
          existingRace.Results = [...(existingRace.Results || []), ...(race.Results || [])];
        } else {
          allRaces.push(race);
        }
      });
      
      const parsedTotal = parseInt(data?.MRData?.total || '0', 10);
      total = isNaN(parsedTotal) ? 0 : parsedTotal;
      
      isFirst = false;
      offset += limit;
    }
    
    // Process the recursively merged array
    const constructorTotals: Record<string, number> = {};
    const accumulationChartData: any[] = [];
    
    const formattedRaces = allRaces.map((race: any) => {
      const round = parseInt(race.round, 10);
      const raceName = race.raceName;
      
      const chartPoint: any = { round, name: raceName };
      
      const results = race.Results?.map((r: any) => {
        const constructorName = r.Constructor.name;
        const points = parseFloat(r.points);
        
        if (!constructorTotals[constructorName]) constructorTotals[constructorName] = 0;
        constructorTotals[constructorName] += points;
        
        return {
          position: parseInt(r.position, 10),
          driverName: `${r.Driver.givenName} ${r.Driver.familyName}`,
          constructorName,
          points,
          time: r.Time?.time || 'N/A'
        };
      }) || [];
      
      Object.keys(constructorTotals).forEach(key => {
        chartPoint[key] = constructorTotals[key];
      });
      accumulationChartData.push(chartPoint);
      
      return {
        round,
        raceName,
        date: race.date,
        podium: results.slice(0, 3)
      };
    });

    return NextResponse.json({
      races: formattedRaces,
      accumulation: accumulationChartData
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}
