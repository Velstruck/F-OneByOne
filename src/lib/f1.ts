import { SEASON_DATA_REVALIDATE_SECONDS } from "@/lib/cache";

async function fetchJson(url: string) {
  try {
    const res = await fetch(url, {
      next: { revalidate: SEASON_DATA_REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
}

export async function getConstructorStandings(season: string) {
  const data = await fetchJson(
    `https://api.jolpi.ca/ergast/f1/${season}/constructorstandings/?format=json`,
  );

  if (!data) {
    return [];
  }

  const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];

  return list.map((item: any) => ({
    position: parseInt(item.position, 10),
    points: parseFloat(item.points),
    wins: parseInt(item.wins, 10),
    constructorId: item.Constructor.constructorId,
    name: item.Constructor.name,
    nationality: item.Constructor.nationality,
  }));
}

export async function getDriverStandings(season: string) {
  const data = await fetchJson(
    `https://api.jolpi.ca/ergast/f1/${season}/driverstandings/?format=json`,
  );

  if (!data) {
    return [];
  }

  const list = data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];

  return list.map((item: any) => ({
    position: parseInt(item.position, 10),
    points: parseFloat(item.points),
    wins: parseInt(item.wins, 10),
    driverId: item.Driver.driverId,
    givenName: item.Driver.givenName,
    familyName: item.Driver.familyName,
    nationality: item.Driver.nationality,
    constructorName: item.Constructors?.[0]?.name || 'N/A',
  }));
}

export async function getRaces(season: string) {
  const data = await fetchJson(`https://api.jolpi.ca/ergast/f1/${season}/races/?format=json`);

  if (!data) {
    return [];
  }

  const races = data?.MRData?.RaceTable?.Races || [];

  return races.map((race: any) => ({
    round: parseInt(race.round, 10),
    raceName: race.raceName,
    circuitId: race.Circuit.circuitId,
    circuitName: race.Circuit.circuitName,
    date: race.date,
    time: race.time,
  }));
}

export async function getResults(season: string) {
  const limit = 100;
  let offset = 0;
  let total = 0;
  let isFirst = true;
  let allRaces: any[] = [];

  while (isFirst || offset < total) {
    const data = await fetchJson(
      `https://api.jolpi.ca/ergast/f1/${season}/results.json?limit=${limit}&offset=${offset}`,
    );

    if (!data) {
      return {
        races: [],
        accumulation: [],
      };
    }

    const races = data?.MRData?.RaceTable?.Races || [];

    races.forEach((race: any) => {
      const existingRace = allRaces.find((candidate) => candidate.round === race.round);

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
        time: r.Time?.time || 'N/A',
      };
    }) || [];

    Object.keys(constructorTotals).forEach((key) => {
      chartPoint[key] = constructorTotals[key];
    });
    accumulationChartData.push(chartPoint);

    return {
      round,
      raceName,
      date: race.date,
      podium: results.slice(0, 3),
    };
  });

  return {
    races: formattedRaces,
    accumulation: accumulationChartData,
  };
}

export async function getLaps(season: string, round: string) {
  const limit = 100;
  let offset = 0;
  let total = 0;
  let isFirst = true;
  let allLaps: any[] = [];

  while (isFirst || offset < total) {
    const data = await fetchJson(
      `https://api.jolpi.ca/ergast/f1/${season}/${round}/laps.json?limit=${limit}&offset=${offset}`,
    );

    if (!data) {
      return [];
    }

    const races = data?.MRData?.RaceTable?.Races || [];

    if (races.length > 0 && races[0].Laps) {
      races[0].Laps.forEach((lap: any) => {
        const existingLap = allLaps.find((candidate) => candidate.number === lap.number);

        if (existingLap) {
          existingLap.Timings = [...(existingLap.Timings || []), ...(lap.Timings || [])];
        } else {
          allLaps.push(lap);
        }
      });
    }

    const parsedTotal = parseInt(data?.MRData?.total || '0', 10);
    total = isNaN(parsedTotal) ? 0 : parsedTotal;
    isFirst = false;
    offset += limit;
  }

  return allLaps;
}

export async function getPitstops(season: string, round: string) {
  const limit = 100;
  let offset = 0;
  let total = 0;
  let isFirst = true;
  let allPitStops: any[] = [];

  while (isFirst || offset < total) {
    const data = await fetchJson(
      `https://api.jolpi.ca/ergast/f1/${season}/${round}/pitstops.json?limit=${limit}&offset=${offset}`,
    );

    if (!data) {
      return [];
    }

    const races = data?.MRData?.RaceTable?.Races || [];

    if (races.length > 0 && races[0].PitStops) {
      allPitStops = [...allPitStops, ...races[0].PitStops];
    }

    const parsedTotal = parseInt(data?.MRData?.total || '0', 10);
    total = isNaN(parsedTotal) ? 0 : parsedTotal;
    isFirst = false;
    offset += limit;
  }

  return allPitStops;
}