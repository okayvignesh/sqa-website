import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { SignJWT, jwtVerify } from 'jose';
import { connectMongo } from './mongodb';
import { User, type UserDoc } from './models/User';

const SESSION_COOKIE = 'sqa_admin';
const SESSION_TTL_HOURS = 24 * 7;

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 24) {
    throw new Error(
      'AUTH_SECRET must be set to a string of at least 24 characters. Add it to .env.local.',
    );
  }
  return new TextEncoder().encode(secret);
}

export async function hashPassword(plain: string) {
  if (plain.length < 8) throw new Error('Password must be at least 8 characters.');
  return bcrypt.hash(plain, 12);
}

export async function verifyPassword(plain: string, hash: string) {
  return bcrypt.compare(plain, hash);
}

type SessionPayload = { sub: string; email: string; role: string };

export async function signSession(payload: SessionPayload) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_HOURS}h`)
    .sign(getSecret());
}

export async function readSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      sub: String(payload.sub),
      email: String(payload.email),
      role: String(payload.role),
    };
  } catch {
    return null;
  }
}

export async function setSessionCookie(token: string) {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_TTL_HOURS * 60 * 60,
  });
}

export async function clearSessionCookie() {
  (await cookies()).set(SESSION_COOKIE, '', { httpOnly: true, path: '/', maxAge: 0 });
}

export async function getCurrentUser(): Promise<UserDoc | null> {
  const session = await readSession();
  if (!session) return null;
  await connectMongo();
  const user = await User.findById(session.sub).lean<UserDoc>();
  return user ?? null;
}

export async function requireAdmin(): Promise<UserDoc> {
  const user = await getCurrentUser();
  if (!user) {
    const err = new Error('UNAUTHENTICATED');
    (err as Error & { status?: number }).status = 401;
    throw err;
  }
  if (user.role !== 'admin' && user.role !== 'editor') {
    const err = new Error('FORBIDDEN');
    (err as Error & { status?: number }).status = 403;
    throw err;
  }
  return user;
}

export const SESSION_COOKIE_NAME = SESSION_COOKIE;
