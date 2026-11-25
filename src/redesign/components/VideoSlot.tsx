import { Clapperboard } from 'lucide-react';
import { videos, type Video, type VideoId } from '../data/videos';

// A silent, looping website clip. Until the clip has a `src` in data/videos.ts the
// slot shows a "Video coming soon" placeholder. `compact` drops the title and text
// (the demos page prints them under the card).
export default function VideoSlot({
  id, dark, compact, className = '',
}: { id: VideoId; dark?: boolean; compact?: boolean; className?: string }) {
  const v: Video = videos[id];

  if (v.src) {
    return (
      <video
        src={v.src} poster={v.poster} autoPlay muted loop playsInline preload="metadata"
        aria-label={v.title}
        className={`w-full aspect-video rounded-3xl object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative w-full aspect-video rounded-3xl border-2 border-dashed grid place-items-center text-center p-6 ${
        dark ? 'border-white/15 bg-white/[0.03] text-white' : 'border-brand-200 bg-brand-50/40 text-ink-900'
      } ${className}`}
    >
      <div className="max-w-md">
        <span className={`inline-grid place-items-center w-12 h-12 rounded-full ${dark ? 'bg-white/10' : 'bg-white border border-brand-100 text-brand-700'}`}>
          <Clapperboard className="w-5 h-5" />
        </span>
        {!compact && <div className="mt-3 font-display text-[18px]">{v.title}</div>}
        <div className={`mt-2 text-[12px] font-medium uppercase tracking-wider ${dark ? 'text-white/50' : 'text-ink-400'}`}>
          Video coming soon · {v.length}
        </div>
        {!compact && <p className={`mt-2 text-[13px] leading-relaxed ${dark ? 'text-white/60' : 'text-ink-500'}`}>{v.about}</p>}
      </div>
    </div>
  );
}
