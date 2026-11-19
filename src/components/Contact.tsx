import React from 'react';
import { Mail, Github, Facebook } from 'lucide-react';
import { profile } from '../data';
import { Reveal } from './Section';

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail,
  },
  { label: 'GitHub', value: `@${profile.handle}`, href: profile.github, icon: Github },
  { label: 'Facebook', value: 'Nguyễn Hào', href: profile.facebook, icon: Facebook },
];

export const Contact: React.FC = () => (
  <footer id="contact" className="relative overflow-hidden bg-ochre">
    {/* The sunflower field from the bottom of the painting */}
    <div
      className="absolute inset-0 bg-cover"
      style={{ backgroundImage: 'url(./painting.webp)', backgroundPosition: '50% 100%' }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-ultramarine via-ultramarine/55 to-ink/85" />

    <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-24">
      <Reveal>
        <p className="font-hand text-2xl text-sunflower sm:text-3xl">04 — say hello</p>
        <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-cream paint-shadow sm:text-5xl md:text-6xl [font-variation-settings:'SOFT'_100]">
          Let's make something together.
        </h2>
        <p className="mt-4 max-w-lg text-cream/85">
          Open to internships, junior roles and side projects. The fastest way to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 p-4 transition-transform hover:-translate-y-1"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-cream/95 shadow-[5px_7px_0_rgb(20_32_77/0.45)] transition-colors group-hover:bg-sunflower"
              style={{ filter: 'url(#rough-soft)' }}
            />
            <c.icon className="relative h-5 w-5 shrink-0 text-ultramarine" />
            <span className="relative min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wider text-ink/60">{c.label}</span>
              <span className="block truncate text-sm font-semibold text-ink">{c.value}</span>
            </span>
          </a>
        ))}
      </Reveal>

      <div className="mt-20 flex flex-col items-center justify-between gap-2 border-t border-cream/20 pt-6 text-xs text-cream/70 sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="font-hand text-base text-cream/80">painted in code, under a swirling sky 🌻</span>
      </div>
    </div>
  </footer>
);
