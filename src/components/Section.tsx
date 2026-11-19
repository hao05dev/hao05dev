import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle: React.FC<{
  kicker: string;
  title: string;
  light?: boolean;
}> = ({ kicker, title, light }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className="mb-10 sm:mb-14"
  >
    <p className={`font-hand text-2xl sm:text-3xl ${light ? 'text-sunflower' : 'text-cobalt'}`}>{kicker}</p>
    <h2
      className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight [font-variation-settings:'SOFT'_100] ${
        light ? 'text-cream paint-shadow' : 'text-ultramarine'
      }`}
    >
      {title}
    </h2>
  </motion.div>
);

export const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
