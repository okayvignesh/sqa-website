/* eslint-disable no-console */
// Creates (or resets the password of) the first admin user.
// Usage:
//   ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=changeme ADMIN_NAME='Your Name' npm run seed:admin
import 'dotenv/config';
import { connectMongo } from '../src/lib/mongodb';
import { User } from '../src/lib/models/User';
import { hashPassword } from '../src/lib/auth';

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME || 'Admin';

  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not set. Add it to .env.local first.');
    process.exit(1);
  }
  if (!email || !password) {
    console.error('Set ADMIN_EMAIL and ADMIN_PASSWORD env vars before running this script.');
    process.exit(1);
  }

  await connectMongo();
  const passwordHash = await hashPassword(password);
  const existing = await User.findOne({ email });
  if (existing) {
    existing.passwordHash = passwordHash;
    existing.name = name;
    existing.role = 'admin';
    await existing.save();
    console.log(`Admin ${email} updated.`);
  } else {
    await User.create({ email, passwordHash, name, role: 'admin' });
    console.log(`Admin ${email} created.`);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
