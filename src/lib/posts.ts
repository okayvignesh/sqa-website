// Public-facing post shape used by client components. Kept stable so the UI
// does not change when we move between Mongo / fallback static data.
export type PublicPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; role: string; avatar?: string };
  publishedAt: string; // ISO
  readTime: string;
  featuredImage: string;
  tags: string[];
};

import { connectMongo } from './mongodb';
import { Post } from './models/Post';

const STATIC_FALLBACK: PublicPost[] = [
  {
    slug: 'building-quality-tuned-llms',
    title: 'Building quality-tuned LLMs for the SimplifyQA AI Studio',
    excerpt:
      'How we trained, evaluated, and grounded a model specifically for QA workflows — and why generic LLMs fall short.',
    content:
      "<p>When we set out to build an AI assistant for quality engineering, we already knew the headline answer wouldn't be 'bigger model.' It was going to be 'right model for the job, grounded in the customer's data, evaluated on the tasks that actually matter.'</p>",
    category: 'Engineering',
    author: { name: 'Anika Reddy', role: 'Principal AI Engineer' },
    publishedAt: '2026-03-28T00:00:00.000Z',
    readTime: '9 min read',
    featuredImage: '',
    tags: ['AI', 'LLM', 'Engineering'],
  },
];

function isMongoConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

function serialize(doc: any): PublicPost {
  return {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt ?? '',
    content: doc.content,
    category: doc.category ?? 'General',
    author: {
      name: doc.author?.name ?? 'SimplifyQA',
      role: doc.author?.role ?? '',
      avatar: doc.author?.avatar ?? '',
    },
    publishedAt:
      doc.publishedAt instanceof Date
        ? doc.publishedAt.toISOString()
        : String(doc.publishedAt ?? new Date().toISOString()),
    readTime: doc.readTime ?? '5 min read',
    featuredImage: doc.featuredImage ?? '',
    tags: Array.isArray(doc.tags) ? doc.tags : [],
  };
}

export async function listPosts(): Promise<PublicPost[]> {
  if (!isMongoConfigured()) return STATIC_FALLBACK;
  try {
    await connectMongo();
    const docs = await Post.find({ published: true }).sort({ publishedAt: -1 }).lean();
    if (!docs.length) return STATIC_FALLBACK;
    return docs.map(serialize);
  } catch (err) {
    console.warn('listPosts: falling back to static data —', (err as Error).message);
    return STATIC_FALLBACK;
  }
}

export async function getPostBySlug(slug: string): Promise<PublicPost | null> {
  if (!isMongoConfigured()) {
    return STATIC_FALLBACK.find((p) => p.slug === slug) ?? null;
  }
  try {
    await connectMongo();
    const doc = await Post.findOne({ slug, published: true }).lean();
    if (!doc) return STATIC_FALLBACK.find((p) => p.slug === slug) ?? null;
    return serialize(doc);
  } catch (err) {
    console.warn('getPostBySlug: falling back to static data —', (err as Error).message);
    return STATIC_FALLBACK.find((p) => p.slug === slug) ?? null;
  }
}
