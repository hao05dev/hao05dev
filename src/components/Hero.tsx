import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import { profile } from '../data';
import { BrushEdge, Birds } from './Paint';

const painting = './painting.webp';

export const Hero: React.FC = () => (
  <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-cobalt">
    {/* The painting */}
    <div
      className="absolute inset-0 bg-cover animate-slow-zoom"
      style={{ backgroundImage: `url(${painting})`, backgroundPosition: '50% 70%' }}
      role="img"
      aria-label="Painting of a swirling blue sky over a sunflower field, with a painter at an easel"
    />
    {/* Legibility wash, from the sky's deep blue */}
    <div className="absolute inset-0 bg-gradient-to-r from-ultramarine/70 via-ultramarine/25 to-transparent" />
    <Birds count={4} />

    <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 pt-24 pb-36 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: -1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-xl p-7 sm:p-10"
      >
        {/* Canvas panel, like the one on the painter's easel */}
        <div
          aria-hidden="true"
          className="grain absolute inset-0 overflow-hidden bg-cream shadow-[10px_14px_0_rgb(20_32_77/0.35)]"
          style={{ filter: 'url(#rough-edge)' }}
        />
        <div className="relative">
          <p className="font-hand text-2xl sm:text-3xl text-cobalt">Xin chào, I'm</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-ultramarine [font-variation-settings:'SOFT'_100]">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-ink">
            <span className="brush-underline">{profile.role}</span>
            <span className="text-ink/60 font-normal"> · {profile.school}</span>
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink/75">{profile.intro}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-sunflower px-5 py-2.5 text-sm font-semibold text-ink shadow-[3px_4px_0_theme(colors.ochre)] transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ultramarine px-5 py-2 text-sm font-semibold text-ultramarine transition-colors hover:bg-ultramarine hover:text-cream"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>

    <BrushEdge color="#efe4c4" grain className="absolute bottom-0 left-0 z-10" />
  </section>
);
