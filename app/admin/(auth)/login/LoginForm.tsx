'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const redirectTo = search.get('next') || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({ error: 'Sign-in failed' }));
        setError(j.error || 'Sign-in failed');
        setLoading(false);
        return;
      }
      router.push(redirectTo);
      router.refresh();
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white text-ink-900 font-sans">
      {/* Left brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-ink-900 text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-32 -left-20 w-[520px] h-[520px] rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-brand-400/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>

        <Link href="/" className="relative flex items-center gap-2 z-10">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-bold">
            S
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">SimplifyQA</span>
        </Link>

        <div className="relative z-10 space-y-5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11.5px] font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-300" />
            Admin console
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight">
            Ship stories that drive
            <br />
            <span className="bg-gradient-to-r from-white via-brand-200 to-brand-400 bg-clip-text text-transparent">
              the quality conversation.
            </span>
          </h1>
          <p className="text-[15px] text-white/70 max-w-md">
            Write, schedule, and optimise SimplifyQA's blog with a purpose-built editor — rich
            formatting, asset management, and SEO controls built in.
          </p>
        </div>

        <div className="relative z-10 text-[12px] text-white/40">
          © {new Date().getFullYear()} SimplifyQA. All rights reserved.
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8 flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white font-bold">
              S
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">SimplifyQA</span>
          </div>

          <div className="mb-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">Welcome back</h2>
            <p className="mt-1.5 text-[14px] text-ink-500">
              Sign in to manage the SimplifyQA blog and content.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <Field
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={setEmail}
              placeholder="you@simplifyqa.com"
              required
              autoFocus
            />
            <Field
              icon={<Lock className="w-4 h-4" />}
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              required
            />

            {error && (
              <div className="rounded-lg bg-brand-50 border border-brand-100 px-3 py-2 text-[12.5px] text-brand-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl bg-ink-900 text-white text-[13.5px] font-medium hover:bg-ink-800 transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Sign in <ArrowRight className="w-4 h-4" /></>}
            </button>

            <p className="text-center text-[11.5px] text-ink-400 pt-2">
              Forgot your password? Contact your administrator.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
  autoFocus,
  autoComplete,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium text-ink-700 mb-1.5">{label}</span>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">{icon}</span>
        <input
          type={type}
          autoComplete={autoComplete}
          required={required}
          autoFocus={autoFocus}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 rounded-xl border border-ink-200 bg-white pl-9 pr-3 text-[13.5px] text-ink-900 placeholder:text-ink-400 outline-none focus:border-ink-900 focus:ring-2 focus:ring-ink-900/5 transition-colors"
        />
      </div>
    </label>
  );
}
