import { NextResponse } from 'next/server';
import { z } from 'zod';
import { connectMongo } from '../../../../../src/lib/mongodb';
import { User } from '../../../../../src/lib/models/User';
import { setSessionCookie, signSession, verifyPassword } from '../../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const Body = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(req: Request) {
  let parsed;
  try {
    parsed = Body.parse(await req.json());
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  await connectMongo();
  const user = await User.findOne({ email: parsed.email.toLowerCase() });
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const ok = await verifyPassword(parsed.password, user.passwordHash);
  if (!ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  user.lastLoginAt = new Date();
  await user.save();

  const token = await signSession({ sub: String(user._id), email: user.email, role: user.role });
  await setSessionCookie(token);

  return NextResponse.json({
    user: { id: String(user._id), email: user.email, name: user.name, role: user.role },
  });
}
