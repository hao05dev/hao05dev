import React from 'react';
import { GraduationCap, Hammer, Route } from 'lucide-react';
import { SectionTitle, Reveal } from './Section';
import { Swirl, BrushEdge } from './Paint';

const facts = [
  {
    icon: GraduationCap,
    title: 'Studying',
    body: 'Information Technology at Can Tho University (CTU).',
    dab: 'bg-sky',
  },
  {
    icon: Hammer,
    title: 'Building now',
    body: 'InternLink — the internship portal for CICT, with a Spring Boot 3 / Next.js stack.',
    dab: 'bg-sunflower',
  },
  {
    icon: Route,
    title: 'How I work',
    body: 'Map the real workflow, model the data, then build API and UI — shipped with Docker and CI.',
    dab: 'bg-terracotta',
  },
];

export const About: React.FC = () => (
  <section id="about" className="grain relative overflow-hidden bg-canvas px-5 pt-20 pb-32 sm:px-8 sm:pt-28 sm:pb-40">
    <Swirl className="absolute -right-32 -top-24 h-[26rem] w-[26rem] opacity-30" colors={['#f4b625', '#c7801a', '#f6efd6']} />

    <div className="relative mx-auto max-w-6xl">
      <SectionTitle kicker="01 — about" title="Code, one stroke at a time." />

      <div className="grid gap-5 md:grid-cols-3">
        {facts.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <article className="relative h-full p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cream shadow-[6px_8px_0_rgb(90_58_23/0.18)]"
                style={{ filter: 'url(#rough-soft)' }}
              />
              <div className="relative">
                <span className="relative mb-4 inline-flex h-11 w-11 items-center justify-center">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 rounded-full ${f.dab} opacity-80`}
                    style={{ filter: 'url(#rough-edge)' }}
                  />
                  <f.icon className="relative h-5 w-5 text-ink" />
                </span>
                <h3 className="font-display text-xl font-semibold text-ultramarine">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{f.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>

    <BrushEdge color="#1b2f7a" className="absolute bottom-0 left-0 z-10" />
  </section>
);
