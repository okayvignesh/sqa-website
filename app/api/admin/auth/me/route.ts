import { NextResponse } from 'next/server';
import { getCurrentUser } from '../../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ user: null }, { status: 200 });
  return NextResponse.json({
    user: { id: String(user._id), email: user.email, name: user.name, role: user.role },
  });
}
