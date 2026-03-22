import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://api.jolpi.ca/ergast/f1/2026/results/?limit=1000&format=json', {
      next: { revalidate: 3600 }
    });
    
    if (!res.ok) throw new Error('API Error');
    const data = await res.json();
    const races = data?.MRData?.RaceTable?.Races || [];
    
    // Convert deeply nested results to flat array for recent races table
    // For line chart of points accumulation, we can compute running totals here.
    
    const constructorTotals: Record<string, number> = {};
    const accumulationChartData: any[] = [];
    
    const formattedRaces = races.map((race: any) => {
      const round = parseInt(race.round, 10);
      const raceName = race.raceName;
      
      const chartPoint: any = { round, name: raceName };
      
      const results = race.Results?.map((r: any) => {
        const constructorName = r.Constructor.name;
        const points = parseFloat(r.points);
        
        // Accumulate points
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
      
      // Snapshot standard constructor points after this race
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
