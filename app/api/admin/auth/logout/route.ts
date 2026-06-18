import { NextResponse } from 'next/server';
import { clearSessionCookie } from '../../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST() {
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
