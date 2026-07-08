import { NextResponse } from 'next/server';
import { getPitstops } from '@/lib/f1';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';
    const round = searchParams.get('round');
    
    if (!round) return NextResponse.json({ error: 'Round missing' }, { status: 400 });

    return NextResponse.json(await getPitstops(season, round));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch pitstops' }, { status: 500 });
  }
}
