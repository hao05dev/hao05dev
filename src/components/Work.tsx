import React from 'react';
import { ArrowUpRight, FlaskConical } from 'lucide-react';
import { projects, experiments } from '../data';
import { SectionTitle, Reveal } from './Section';

export const Work: React.FC = () => (
  <section id="work" className="relative overflow-hidden bg-ultramarine px-5 py-16 sm:px-8 sm:py-24">
    {/* The swirling sky from the painting, deepened so cards stay readable */}
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: 'url(./painting.webp)', backgroundPosition: '50% 0%' }}
    />
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(180deg, #1b2f7a 0%, rgb(27 47 122 / 0.72) 14%, rgb(27 47 122 / 0.66) 60%, #1b2f7a 100%)',
      }}
    />

    <div className="relative mx-auto max-w-6xl">
      <SectionTitle kicker="02 — selected work" title="Things I've built" light />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <article className="group relative flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-[0.6deg]">
              <div
                aria-hidden="true"
                className="grain absolute inset-0 overflow-hidden bg-cream shadow-[8px_10px_0_rgb(10_18_50/0.45)]"
                style={{ filter: 'url(#rough-soft)' }}
              />
              {/* paint dab */}
              <div
                aria-hidden="true"
                className={`absolute left-4 right-10 top-3 h-2.5 ${p.accent} opacity-90`}
                style={{ filter: 'url(#rough-edge)' }}
              />

              <div className="relative flex flex-1 flex-col pt-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-ultramarine">{p.name}</h3>
                  <span className="font-hand text-xl text-ochre">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink/70">{p.tagline}</p>

                <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-sunflower ring-2 ring-ochre/40" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-ultramarine/[0.07] px-2.5 py-0.5 text-[11px] font-medium text-ultramarine">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1 self-start pt-5 text-sm font-semibold text-cobalt hover:text-terracotta"
                >
                  View source
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">for {p.name}</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* ML side studies */}
      <Reveal className="mt-16">
        <h3 className="mb-5 flex items-center gap-2 font-hand text-2xl text-sunflower sm:text-3xl">
          <FlaskConical className="h-5 w-5" /> On the side — machine learning
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {experiments.map((e) => (
            <a
              key={e.name}
              href={e.repo}
              target="_blank"
              rel="noreferrer"
              className="group relative block rounded-2xl border-2 border-dashed border-cream/35 p-5 transition-colors hover:border-sunflower hover:bg-cream/5"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-xl font-semibold text-cream">{e.name}</h4>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-sunflower transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-cream/75">{e.note}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-sunflower/90">{e.tech}</p>
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
