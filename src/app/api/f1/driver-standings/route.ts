import { NextResponse } from 'next/server';
import { getDriverStandings } from '@/lib/f1';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';
    return NextResponse.json(await getDriverStandings(season));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch driver standings' }, { status: 500 });
  }
}
