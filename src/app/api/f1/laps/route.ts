import { NextResponse } from 'next/server';
import { getLaps } from '@/lib/f1';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';
    const round = searchParams.get('round');
    
    if (!round) return NextResponse.json({ error: 'Round missing' }, { status: 400 });

    return NextResponse.json(await getLaps(season, round));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch laps' }, { status: 500 });
  }
}
