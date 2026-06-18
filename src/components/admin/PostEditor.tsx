'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import {
  Save, Eye, ArrowLeft, ChevronDown, Loader2, ExternalLink, AlertCircle, CheckCircle2,
} from 'lucide-react';
import slugify from 'slugify';
import RichEditor from './RichEditor';
import ImageUploader from './ImageUploader';

export type EditablePost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  tags: string[];
  readTime: string;
  featuredImage: string;
  publishedAt: string; // ISO
  published: boolean;
  seo: { metaTitle: string; metaDescription: string; ogImage: string };
};

const EMPTY: EditablePost = {
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  category: 'Engineering',
  author: { name: '', role: '', avatar: '' },
  tags: [],
  readTime: '5 min read',
  featuredImage: '',
  publishedAt: new Date().toISOString(),
  published: false,
  seo: { metaTitle: '', metaDescription: '', ogImage: '' },
};

const CATEGORIES = ['Engineering', 'Product', 'Customer story', 'Industry', 'AI', 'Quality'];

type Props = {
  mode: 'new' | 'edit';
  initial?: EditablePost;
  defaultAuthorName?: string;
};

export default function PostEditor({ mode, initial, defaultAuthorName }: Props) {
  const router = useRouter();
  const [post, setPost] = useState<EditablePost>(() => {
    const base = initial ?? EMPTY;
    if (mode === 'new' && defaultAuthorName && !base.author.name) {
      return { ...base, author: { ...base.author, name: defaultAuthorName } };
    }
    return base;
  });
  const [slugLocked, setSlugLocked] = useState(mode === 'edit' || Boolean(post.slug));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [tagDraft, setTagDraft] = useState('');
  const [seoOpen, setSeoOpen] = useState(true);

  // Derived slug from title until user edits the slug themselves.
  useEffect(() => {
    if (!slugLocked && post.title) {
      const auto = slugify(post.title, { lower: true, strict: true });
      if (auto !== post.slug) setPost((p) => ({ ...p, slug: auto }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.title, slugLocked]);

  const titleChars = post.title.length;
  const metaTitleChars = post.seo.metaTitle.length;
  const metaDescChars = post.seo.metaDescription.length;

  function update<K extends keyof EditablePost>(k: K, v: EditablePost[K]) {
    setPost((p) => ({ ...p, [k]: v }));
  }

  function updateSeo<K extends keyof EditablePost['seo']>(k: K, v: EditablePost['seo'][K]) {
    setPost((p) => ({ ...p, seo: { ...p.seo, [k]: v } }));
  }

  function updateAuthor<K extends keyof EditablePost['author']>(k: K, v: EditablePost['author'][K]) {
    setPost((p) => ({ ...p, author: { ...p.author, [k]: v } }));
  }

  function addTag() {
    const t = tagDraft.trim();
    if (!t) return;
    if (post.tags.includes(t)) {
      setTagDraft('');
      return;
    }
    update('tags', [...post.tags, t]);
    setTagDraft('');
  }

  function removeTag(t: string) {
    update(
      'tags',
      post.tags.filter((x) => x !== t),
    );
  }

  function validate(): string | null {
    if (!post.title.trim()) return 'Title is required.';
    if (!post.slug.trim()) return 'Slug is required.';
    if (!post.content.trim() || post.content === '<p></p>') return 'Content is empty.';
    if (!post.author.name.trim()) return 'Author name is required.';
    return null;
  }

  async function save(opts: { publish?: boolean } = {}) {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setSaving(true);

    const payload = {
      ...post,
      published: opts.publish ?? post.published,
    };

    const url = mode === 'new' ? '/api/admin/posts' : `/api/admin/posts/${initial!.slug}`;
    const method = mode === 'new' ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Save failed');
      setSavedAt(new Date().toLocaleTimeString());
      if (mode === 'new') {
        router.push(`/admin/posts/${j.post.slug}/edit`);
        router.refresh();
      } else {
        setPost((p) => ({ ...p, published: payload.published }));
        router.refresh();
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const titleStatus = useMemo(() => {
    if (titleChars === 0) return null;
    if (titleChars > 70) return 'too-long';
    return 'ok';
  }, [titleChars]);

  return (
    <div className="space-y-6 pb-24">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Link href="/admin/posts" className="inline-flex items-center gap-1.5 text-[12.5px] text-ink-500 hover:text-ink-900">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to posts
          </Link>
          <h1 className="mt-1 font-display text-3xl tracking-tight">
            {mode === 'new' ? 'New post' : 'Edit post'}
          </h1>
          {savedAt && (
            <div className="mt-1 inline-flex items-center gap-1.5 text-[11.5px] text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> Saved at {savedAt}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {mode === 'edit' && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl border border-ink-200 bg-white text-[12.5px] font-medium text-ink-700 hover:bg-ink-50"
            >
              <Eye className="w-4 h-4" /> Preview
              <ExternalLink className="w-3 h-3" />
            </Link>
          )}
          <button
            type="button"
            onClick={() => save({ publish: false })}
            disabled={saving}
            className="inline-flex items-center gap-2 h-10 px-3.5 rounded-xl border border-ink-200 bg-white text-[12.5px] font-medium text-ink-700 hover:bg-ink-50 disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Save draft
          </button>
          <button
            type="button"
            onClick={() => save({ publish: true })}
            disabled={saving}
            className="inline-flex items-center gap-2 h-10 px-4 rounded-xl bg-ink-900 text-white text-[12.5px] font-medium hover:bg-ink-800 disabled:opacity-50"
          >
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Eye className="w-4 h-4" />}
            {post.published ? 'Update published' : 'Publish'}
          </button>
        </div>
      </header>

      {error && (
        <div className="rounded-xl bg-brand-50 border border-brand-100 px-4 py-2.5 text-[13px] text-brand-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}

      <div className="grid lg:grid-cols-[1fr_340px] gap-6">
        {/* Main column */}
        <div className="space-y-6">
          {/* Title + slug + excerpt */}
          <section className="rounded-2xl border border-ink-200/70 bg-white p-5 sm:p-6 space-y-4">
            <div>
              <input
                type="text"
                placeholder="Post title"
                value={post.title}
                onChange={(e) => update('title', e.target.value)}
                className="w-full bg-transparent text-3xl sm:text-4xl font-display font-semibold tracking-tight outline-none placeholder:text-ink-300"
              />
              <div className="mt-1 flex items-center gap-3 text-[11.5px] text-ink-400">
                <span>{titleChars} chars</span>
                {titleStatus === 'too-long' && <span className="text-amber-600">Long titles can be truncated in SERPs.</span>}
              </div>
            </div>

            <SlugField
              slug={post.slug}
              onChange={(v) => {
                setSlugLocked(true);
                update('slug', v);
              }}
              onAutoToggle={() => {
                setSlugLocked(false);
                if (post.title) update('slug', slugify(post.title, { lower: true, strict: true }));
              }}
              locked={slugLocked}
            />

            <div>
              <label className="block text-[12.5px] font-medium text-ink-700 mb-1.5">Excerpt</label>
              <textarea
                rows={2}
                value={post.excerpt}
                onChange={(e) => update('excerpt', e.target.value)}
                placeholder="Short summary shown on the blog index and used as a fallback meta description."
                className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2 text-[13.5px] text-ink-900 placeholder:text-ink-400 outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5 resize-y"
              />
              <div className="mt-1 text-[11.5px] text-ink-400">{post.excerpt.length} chars</div>
            </div>
          </section>

          {/* Rich editor */}
          <section>
            <label className="block text-[12.5px] font-medium text-ink-700 mb-1.5">Content</label>
            <RichEditor value={post.content} onChange={(html) => update('content', html)} />
          </section>

          {/* SEO */}
          <section className="rounded-2xl border border-ink-200/70 bg-white overflow-hidden">
            <button
              type="button"
              onClick={() => setSeoOpen((v) => !v)}
              className="w-full px-5 py-4 flex items-center justify-between hover:bg-ink-50/40"
            >
              <div className="text-left">
                <div className="font-display text-[15px] font-semibold">Search & social</div>
                <div className="text-[12px] text-ink-500">Override the meta title, description, and share image.</div>
              </div>
              <ChevronDown className={`w-4 h-4 text-ink-400 transition-transform ${seoOpen ? 'rotate-180' : ''}`} />
            </button>
            {seoOpen && (
              <div className="px-5 sm:px-6 pb-6 space-y-4 border-t border-ink-100 pt-5">
                <div>
                  <label className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[12.5px] font-medium text-ink-700">Meta title</span>
                    <CharCounter n={metaTitleChars} target={60} />
                  </label>
                  <input
                    type="text"
                    value={post.seo.metaTitle}
                    onChange={(e) => updateSeo('metaTitle', e.target.value)}
                    placeholder={post.title || 'Defaults to the post title'}
                    className="w-full h-11 rounded-xl border border-ink-200 bg-white px-3 text-[13.5px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
                  />
                </div>
                <div>
                  <label className="flex items-baseline justify-between mb-1.5">
                    <span className="text-[12.5px] font-medium text-ink-700">Meta description</span>
                    <CharCounter n={metaDescChars} target={160} />
                  </label>
                  <textarea
                    rows={3}
                    value={post.seo.metaDescription}
                    onChange={(e) => updateSeo('metaDescription', e.target.value)}
                    placeholder={post.excerpt || 'Defaults to the excerpt'}
                    className="w-full rounded-xl border border-ink-200 bg-white px-3 py-2 text-[13.5px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5 resize-y"
                  />
                </div>
                <ImageUploader
                  value={post.seo.ogImage}
                  onChange={(url) => updateSeo('ogImage', url)}
                  label="Social share image"
                  hint="1200 × 630 recommended"
                  aspect="aspect-[1200/630]"
                />
                {/* Search snippet preview */}
                <div className="rounded-xl border border-ink-200 bg-ink-50/40 p-4">
                  <div className="text-[11px] uppercase tracking-wider text-ink-400 mb-1.5">Search preview</div>
                  <div className="text-[14px] text-blue-700 truncate">
                    {(post.seo.metaTitle || post.title) + ' — SimplifyQA'}
                  </div>
                  <div className="text-[12px] text-emerald-700">
                    simplifyqa.app/blog/{post.slug || 'your-post'}
                  </div>
                  <div className="text-[12.5px] text-ink-600 line-clamp-2 mt-0.5">
                    {post.seo.metaDescription || post.excerpt || 'Your post description appears here.'}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Side column */}
        <aside className="space-y-4">
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="font-display text-[14px] font-semibold">Status</h3>
              <span
                className={`text-[10.5px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  post.published ? 'bg-emerald-50 text-emerald-700' : 'bg-ink-100 text-ink-500'
                }`}
              >
                {post.published ? 'Published' : 'Draft'}
              </span>
            </div>
            <FieldLabel>Publish date</FieldLabel>
            <input
              type="datetime-local"
              value={post.publishedAt.slice(0, 16)}
              onChange={(e) => update('publishedAt', new Date(e.target.value).toISOString())}
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            />
          </Card>

          <Card>
            <h3 className="font-display text-[14px] font-semibold">Featured image</h3>
            <ImageUploader
              value={post.featuredImage}
              onChange={(url) => update('featuredImage', url)}
              label=""
              hint="Used on /blog and at the top of the article"
              aspect="aspect-video"
            />
          </Card>

          <Card>
            <h3 className="font-display text-[14px] font-semibold">Taxonomy</h3>
            <FieldLabel>Category</FieldLabel>
            <select
              value={post.category}
              onChange={(e) => update('category', e.target.value)}
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <FieldLabel>Tags</FieldLabel>
            <div className="flex flex-wrap gap-1.5 mb-1.5">
              {post.tags.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => removeTag(t)}
                  className="inline-flex items-center gap-1 text-[11.5px] font-medium bg-ink-100 text-ink-700 px-2 py-0.5 rounded-full hover:bg-brand-50 hover:text-brand-700"
                >
                  {t} <span className="text-ink-400">×</span>
                </button>
              ))}
            </div>
            <div className="flex gap-1.5">
              <input
                type="text"
                value={tagDraft}
                onChange={(e) => setTagDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                placeholder="Add tag…"
                className="flex-1 h-9 rounded-lg border border-ink-200 bg-white px-2.5 text-[12.5px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
              />
              <button
                type="button"
                onClick={addTag}
                className="h-9 px-3 rounded-lg bg-ink-900 text-white text-[12px] font-medium hover:bg-ink-800"
              >
                Add
              </button>
            </div>

            <FieldLabel>Read time</FieldLabel>
            <input
              type="text"
              value={post.readTime}
              onChange={(e) => update('readTime', e.target.value)}
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            />
          </Card>

          <Card>
            <h3 className="font-display text-[14px] font-semibold">Author</h3>
            <FieldLabel>Name</FieldLabel>
            <input
              type="text"
              value={post.author.name}
              onChange={(e) => updateAuthor('name', e.target.value)}
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            />
            <FieldLabel>Role</FieldLabel>
            <input
              type="text"
              value={post.author.role}
              onChange={(e) => updateAuthor('role', e.target.value)}
              placeholder="e.g. Principal AI Engineer"
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            />
            <FieldLabel>Avatar URL</FieldLabel>
            <input
              type="text"
              value={post.author.avatar}
              onChange={(e) => updateAuthor('avatar', e.target.value)}
              placeholder="Optional"
              className="w-full h-10 rounded-lg border border-ink-200 bg-white px-2.5 text-[13px] outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5"
            />
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-ink-200/70 bg-white p-4 sm:p-5 space-y-2.5">{children}</div>;
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11.5px] font-medium text-ink-500 mt-2.5 mb-1.5">{children}</label>;
}

function CharCounter({ n, target }: { n: number; target: number }) {
  const tone = n === 0 ? 'text-ink-400' : n > target ? 'text-amber-600' : 'text-ink-400';
  return (
    <span className={`text-[11px] font-medium ${tone}`}>
      {n} / {target}
    </span>
  );
}

function SlugField({
  slug,
  onChange,
  onAutoToggle,
  locked,
}: {
  slug: string;
  onChange: (v: string) => void;
  onAutoToggle: () => void;
  locked: boolean;
}) {
  return (
    <div>
      <label className="flex items-baseline justify-between mb-1.5">
        <span className="text-[12.5px] font-medium text-ink-700">Slug</span>
        <button
          type="button"
          onClick={onAutoToggle}
          className="text-[11.5px] text-ink-400 hover:text-ink-900"
        >
          {locked ? 'Auto from title' : 'Custom'}
        </button>
      </label>
      <div className="flex h-11 rounded-xl border border-ink-200 bg-white focus-within:border-ink-900 focus-within:ring-2 focus-within:ring-ink-900/5">
        <span className="grid place-items-center px-3 text-[12.5px] text-ink-400 border-r border-ink-200">/blog/</span>
        <input
          type="text"
          value={slug}
          onChange={(e) => onChange(e.target.value.toLowerCase())}
          className="flex-1 bg-transparent px-3 text-[13.5px] outline-none"
        />
      </div>
    </div>
  );
}
