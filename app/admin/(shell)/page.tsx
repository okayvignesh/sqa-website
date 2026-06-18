import Link from 'next/link';
import { ArrowRight, FileText, Eye, EyeOff, Plus, Sparkles } from 'lucide-react';
import { connectMongo } from '../../../src/lib/mongodb';
import { Post } from '../../../src/lib/models/Post';

export const dynamic = 'force-dynamic';

async function getStats() {
  try {
    await connectMongo();
    const [total, published, drafts, latest] = await Promise.all([
      Post.countDocuments({}),
      Post.countDocuments({ published: true }),
      Post.countDocuments({ published: false }),
      Post.find({}).sort({ updatedAt: -1 }).limit(5).lean(),
    ]);
    return { total, published, drafts, latest };
  } catch {
    return { total: 0, published: 0, drafts: 0, latest: [] as any[] };
  }
}

export default async function AdminHome() {
  const { total, published, drafts, latest } = await getStats();

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl tracking-tight">Dashboard</h1>
          <p className="mt-1 text-[14px] text-ink-500">An overview of the SimplifyQA blog at a glance.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-ink-900 text-white text-[13px] font-medium hover:bg-ink-800 transition-colors"
        >
          <Plus className="w-4 h-4" /> New post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          label="Total posts"
          value={total}
          icon={<FileText className="w-4 h-4" />}
          accent="from-ink-700 to-ink-900"
        />
        <StatCard
          label="Published"
          value={published}
          icon={<Eye className="w-4 h-4" />}
          accent="from-brand-500 to-brand-700"
        />
        <StatCard
          label="Drafts"
          value={drafts}
          icon={<EyeOff className="w-4 h-4" />}
          accent="from-ink-400 to-ink-600"
        />
      </div>

      {/* Latest posts */}
      <section className="rounded-2xl border border-ink-200/70 bg-white overflow-hidden">
        <div className="px-5 py-3.5 border-b border-ink-100 flex items-center justify-between">
          <div>
            <h2 className="font-display text-[15px] font-semibold">Recently updated</h2>
            <p className="text-[12px] text-ink-500">Latest changes across your library.</p>
          </div>
          <Link
            href="/admin/posts"
            className="text-[12.5px] text-ink-500 hover:text-ink-900 inline-flex items-center gap-1"
          >
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {latest.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="divide-y divide-ink-100">
            {latest.map((p: any) => (
              <li key={String(p._id)} className="px-5 py-3.5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <Link
                    href={`/admin/posts/${p.slug}/edit`}
                    className="block truncate font-medium text-[14px] text-ink-900 hover:text-brand-700"
                  >
                    {p.title}
                  </Link>
                  <div className="mt-0.5 text-[11.5px] text-ink-400 truncate">
                    {p.category} · updated {new Date(p.updatedAt).toLocaleDateString()}
                  </div>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center gap-1 text-[10.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    p.published
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-ink-100 text-ink-500'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${p.published ? 'bg-emerald-500' : 'bg-ink-400'}`} />
                  {p.published ? 'Published' : 'Draft'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-200/70 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-[12.5px] font-medium text-ink-500">{label}</span>
        <span className={`grid place-items-center w-8 h-8 rounded-lg bg-gradient-to-br ${accent} text-white`}>
          {icon}
        </span>
      </div>
      <div className="mt-3 font-display text-3xl tracking-tight">{value}</div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="px-5 py-14 text-center">
      <div className="mx-auto grid place-items-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 mb-3">
        <Sparkles className="w-5 h-5" />
      </div>
      <h3 className="font-display text-[16px] font-semibold">No posts yet</h3>
      <p className="mt-1 text-[12.5px] text-ink-500">
        Get started by writing your first SimplifyQA blog post.
      </p>
      <Link
        href="/admin/posts/new"
        className="inline-flex mt-4 items-center gap-2 h-10 px-4 rounded-xl bg-ink-900 text-white text-[13px] font-medium hover:bg-ink-800"
      >
        <Plus className="w-4 h-4" /> New post
      </Link>
    </div>
  );
}
