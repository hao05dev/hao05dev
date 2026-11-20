import React, { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Our story', href: '#about' },
  { name: 'Collective', href: '#features' },
  { name: 'Workshops', href: '#projects' },
  { name: 'Programs', href: '#stack' },
  { name: 'Inquiries', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl border-b border-x border-white/5"
        aria-label="Main Navigation"
      >
        {navItems.map((item, idx) => (
          <a
            key={item.name}
            href={item.href}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="text-[10px] sm:text-xs md:text-sm font-normal tracking-wide transition-colors duration-200"
            style={{
              color: hoveredIdx === idx ? '#E1E0CC' : 'rgba(225, 224, 204, 0.8)',
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
