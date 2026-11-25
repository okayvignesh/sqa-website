/* eslint-disable no-console */
// Seeds MongoDB with the static blog data from src/utils/blogData.ts.
// Usage:
//   1) Put MONGODB_URI in .env.local
//   2) npm run seed
import { config as loadEnv } from 'dotenv';
loadEnv({ path: '.env.local' });
loadEnv(); // also load .env if present, without overriding
import { connectMongo } from '../src/lib/mongodb';
import { Post } from '../src/lib/models/Post';
import { blogPosts } from '../src/utils/blogData';

async function main() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not set. Add it to .env.local first.');
    process.exit(1);
  }
  await connectMongo();
  console.log(`Connected. Seeding ${blogPosts.length} posts…`);

  let created = 0;
  let updated = 0;
  for (const p of blogPosts) {
    const result = await Post.findOneAndUpdate(
      { slug: p.slug },
      {
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        category: p.category,
        author: { name: p.author.name, role: p.author.role, avatar: p.author.avatar ?? '' },
        publishedAt: new Date(p.publishedDate),
        readTime: p.readTime,
        featuredImage: p.featuredImage,
        tags: p.tags,
        published: true,
      },
      { upsert: true, new: true, rawResult: true },
    );
    // @ts-expect-error mongoose typings on rawResult
    if (result?.lastErrorObject?.updatedExisting) updated++;
    else created++;
  }

  console.log(`Done. Created: ${created}, updated: ${updated}.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
