'use client';

import { PlayCircle, Bot, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp } from '../../design';
import CTA from '../sections/CTA';
import VideoSlot from '../components/VideoSlot';
import { videos, mcpClips, walkthroughs, type VideoId } from '../data/videos';

function Grid({ ids, quote }: { ids: VideoId[]; quote?: boolean }) {
  return (
    <RevealGroup className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {ids.map((id) => (
        <motion.div key={id} variants={fadeUp} className="rounded-3xl bg-white border border-ink-900/[0.06] p-3">
          <VideoSlot id={id} always className="rounded-2xl" />
          <div className="px-2 pt-4 pb-2">
            <h3 className="font-display text-[17px] text-ink-900">{videos[id].title}</h3>
            <p className={`mt-1.5 text-[13.5px] leading-relaxed text-ink-500 ${quote ? 'italic' : ''}`}>{videos[id].about}</p>
          </div>
        </motion.div>
      ))}
    </RevealGroup>
  );
}

export default function DemosPage() {
  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-12 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
        </div>
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal><Eyebrow icon={<PlayCircle className="w-3.5 h-3.5" />}>Demos</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                See SimplifyQA <span className="gradient-text">at work</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] text-ink-500 max-w-2xl leading-relaxed">
                Short clips of the SimplifyQA MCP and the platform, recorded on a demo project with demo data.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="wide">
          <Eyebrow icon={<Bot className="w-3.5 h-3.5" />}>SimplifyQA MCP · one prompt each</Eyebrow>
          <Grid ids={mcpClips} quote />
        </Container>
      </section>

      <section className="pb-20">
        <Container size="wide">
          <Eyebrow icon={<Layers className="w-3.5 h-3.5" />}>Platform walkthroughs</Eyebrow>
          <Grid ids={walkthroughs} />
        </Container>
      </section>

      <CTA />
    </>
  );
}
