'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  Plus, Search, MoreHorizontal, Edit3, Trash2, ExternalLink, Filter, Loader2,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

type Row = {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: { name: string };
  tags: string[];
  published: boolean;
  publishedAt: string;
  updatedAt: string;
};

export default function PostsList({ initial }: { initial: Row[] }) {
  const router = useRouter();
  const [rows, setRows] = useState(initial);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return rows.filter((r) => {
      if (status === 'published' && !r.published) return false;
      if (status === 'draft' && r.published) return false;
      if (!query) return true;
      return (
        r.title.toLowerCase().includes(query) ||
        r.slug.toLowerCase().includes(query) ||
        r.tags.some((t) => t.toLowerCase().includes(query))
      );
    });
  }, [rows, q, status]);

  async function onDelete(slug: string) {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return;
    setDeleting(slug);
    const res = await fetch(`/api/admin/posts/${slug}`, { method: 'DELETE' });
    setDeleting(null);
    if (res.ok) {
      setRows((prev) => prev.filter((r) => r.slug !== slug));
    } else {
      alert('Failed to delete post.');
    }
    setOpenMenu(null);
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl tracking-tight">Posts</h1>
          <p className="mt-1 text-[14px] text-ink-500">Manage your blog content, drafts, and published articles.</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-ink-900 text-white text-[13px] font-medium hover:bg-ink-800 transition-colors"
        >
          <Plus className="w-4 h-4" /> New post
        </Link>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-400" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, slug, tag…"
            className="w-full h-10 rounded-xl border border-ink-200 bg-white pl-9 pr-3 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
          />
        </div>
        <div className="inline-flex rounded-xl border border-ink-200 bg-white p-0.5">
          {(['all', 'published', 'draft'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(s)}
              className={`h-9 px-3 text-[12.5px] font-medium rounded-lg capitalize inline-flex items-center gap-1.5 transition-colors ${
                status === s ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-900'
              }`}
            >
              {s === 'all' && <Filter className="w-3.5 h-3.5" />}
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-ink-200/70 bg-white overflow-hidden">
        {filtered.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <h3 className="font-display text-[16px] font-semibold">No posts found</h3>
            <p className="mt-1 text-[12.5px] text-ink-500">Try a different search or create your first post.</p>
            <Link
              href="/admin/posts/new"
              className="inline-flex mt-4 items-center gap-2 h-10 px-4 rounded-xl bg-ink-900 text-white text-[13px] font-medium hover:bg-ink-800"
            >
              <Plus className="w-4 h-4" /> New post
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-ink-50/60 text-[11px] uppercase tracking-wider text-ink-500">
                  <th className="font-medium px-5 py-3">Post</th>
                  <th className="font-medium px-5 py-3 hidden md:table-cell">Category</th>
                  <th className="font-medium px-5 py-3 hidden lg:table-cell">Author</th>
                  <th className="font-medium px-5 py-3 hidden md:table-cell">Updated</th>
                  <th className="font-medium px-5 py-3">Status</th>
                  <th className="font-medium px-5 py-3 w-12"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100">
                {filtered.map((r) => (
                  <tr key={r._id} className="hover:bg-ink-50/40">
                    <td className="px-5 py-3.5 max-w-md">
                      <Link
                        href={`/admin/posts/${r.slug}/edit`}
                        className="block font-medium text-[13.5px] text-ink-900 hover:text-brand-700 truncate"
                      >
                        {r.title}
                      </Link>
                      <div className="text-[11.5px] text-ink-400 truncate">/{r.slug}</div>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className="text-[12px] text-ink-600">{r.category}</span>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-[12px] text-ink-600">{r.author?.name || '—'}</span>
                    </td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      <span className="text-[12px] text-ink-500">
                        {r.updatedAt ? new Date(r.updatedAt).toLocaleDateString() : '—'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          r.published ? 'bg-emerald-50 text-emerald-700' : 'bg-ink-100 text-ink-500'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${r.published ? 'bg-emerald-500' : 'bg-ink-400'}`} />
                        {r.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 relative">
                      <button
                        type="button"
                        onClick={() => setOpenMenu(openMenu === r._id ? null : r._id)}
                        onBlur={() => setTimeout(() => setOpenMenu((m) => (m === r._id ? null : m)), 120)}
                        className="p-1.5 rounded-md hover:bg-ink-100 text-ink-500"
                        aria-label="Row actions"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                      {openMenu === r._id && (
                        <div className="absolute right-4 top-12 z-10 w-44 rounded-xl border border-ink-200/70 bg-white shadow-ring py-1.5">
                          <Link
                            href={`/admin/posts/${r.slug}/edit`}
                            className="flex items-center gap-2 px-3 py-2 text-[12.5px] text-ink-700 hover:bg-ink-100"
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            <Edit3 className="w-3.5 h-3.5" /> Edit
                          </Link>
                          <Link
                            href={`/blog/${r.slug}`}
                            target="_blank"
                            className="flex items-center gap-2 px-3 py-2 text-[12.5px] text-ink-700 hover:bg-ink-100"
                            onMouseDown={(e) => e.preventDefault()}
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> View live
                          </Link>
                          <button
                            type="button"
                            onMouseDown={() => onDelete(r.slug)}
                            disabled={deleting === r.slug}
                            className="w-full text-left flex items-center gap-2 px-3 py-2 text-[12.5px] text-brand-700 hover:bg-brand-50 disabled:opacity-50"
                          >
                            {deleting === r.slug ? (
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <Trash2 className="w-3.5 h-3.5" />
                            )}
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
