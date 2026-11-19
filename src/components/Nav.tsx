import React, { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-3 inset-x-0 z-50 flex justify-center px-3">
      <nav
        aria-label="Main"
        className={`relative flex items-center gap-1 sm:gap-2 px-3 py-1.5 transition-all duration-500 ${
          scrolled ? 'shadow-[0_8px_24px_rgb(20_32_77/0.35)]' : ''
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute inset-0 rounded-full transition-colors duration-500 ${
            scrolled ? 'bg-cream' : 'bg-cream/85 backdrop-blur-sm'
          }`}
          style={{ filter: 'url(#rough-soft)' }}
        />
        <a
          href="#top"
          className="relative font-hand text-xl sm:text-2xl font-bold text-ultramarine pr-2 sm:pr-3 mr-1 border-r border-ultramarine/20"
        >
          hao05
        </a>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-ink/80 hover:text-ultramarine transition-colors rounded-full hover:bg-sunflower/40"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
