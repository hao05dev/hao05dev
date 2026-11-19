import React from 'react';
import { stack } from '../data';
import { SectionTitle, Reveal } from './Section';
import { BrushEdge } from './Paint';

export const Stack: React.FC = () => (
  <section id="stack" className="grain relative overflow-hidden bg-canvas px-5 pt-32 pb-24 sm:px-8 sm:pt-40 sm:pb-32">
    <BrushEdge color="#1b2f7a" flip className="absolute top-0 left-0 z-10" />
    <div className="relative mx-auto max-w-6xl">
      <SectionTitle kicker="03 — palette" title="Tools I've worked with" />

      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 0.1}>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`h-4 w-14 ${g.color}`}
                style={{ filter: 'url(#rough-edge)' }}
              />
              <h3 className="font-display text-2xl font-semibold text-ultramarine">{g.group}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-umber/20 bg-cream px-3.5 py-1.5 text-sm text-ink/85 shadow-[2px_3px_0_rgb(90_58_23/0.12)]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>

    <BrushEdge color="#1b2f7a" className="absolute bottom-0 left-0 z-10" />
  </section>
);
