import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

// Cached connection across hot reloads in dev / lambda warm starts in prod.
type Cached = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: Cached | undefined;
}

const cached: Cached = global._mongoose ?? { conn: null, promise: null };
if (!global._mongoose) global._mongoose = cached;

export async function connectMongo() {
  if (!MONGODB_URI) {
    throw new Error(
      'MONGODB_URI is not defined. Add it to .env.local — e.g. MONGODB_URI="mongodb://localhost:27017/simplifyqa"',
    );
  }
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
