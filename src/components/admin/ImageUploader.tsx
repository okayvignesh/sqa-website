'use client';

import { useRef, useState } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';

type Props = {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  hint?: string;
  aspect?: string; // e.g. 'aspect-video', 'aspect-[1200/630]'
};

export default function ImageUploader({
  value,
  onChange,
  label = 'Image',
  hint,
  aspect = 'aspect-video',
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File) {
    setError(null);
    setBusy(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Upload failed');
      onChange(j.url);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-[12.5px] font-medium text-ink-700">{label}</label>
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-[11.5px] text-ink-400 hover:text-brand-700 inline-flex items-center gap-1"
          >
            <X className="w-3 h-3" /> Remove
          </button>
        )}
      </div>

      {value ? (
        <div className={`relative ${aspect} w-full rounded-xl overflow-hidden border border-ink-200 bg-ink-50`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={busy}
            className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg bg-white/95 backdrop-blur border border-ink-200 text-[11.5px] font-medium text-ink-700 hover:bg-white"
          >
            {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            Replace
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={busy}
          className={`w-full ${aspect} rounded-xl border-2 border-dashed border-ink-200 bg-ink-50/50 hover:bg-ink-50 hover:border-ink-300 transition-colors flex flex-col items-center justify-center gap-1.5 text-ink-500 text-[12.5px] disabled:opacity-50`}
        >
          {busy ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <ImageIcon className="w-5 h-5" />
              Click to upload
              {hint && <span className="text-[11px] text-ink-400">{hint}</span>}
            </>
          )}
        </button>
      )}

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = '';
          if (f) await upload(f);
        }}
      />

      {error && (
        <p className="mt-2 text-[11.5px] text-brand-700">{error}</p>
      )}
    </div>
  );
}
