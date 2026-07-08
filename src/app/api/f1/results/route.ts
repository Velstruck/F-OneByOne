import { NextResponse } from 'next/server';
import { getResults } from '@/lib/f1';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get('season') || '2026';
    return NextResponse.json(await getResults(season));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch results' }, { status: 500 });
  }
}
