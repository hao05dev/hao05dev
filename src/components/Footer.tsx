import React from 'react';
import { ArrowUp, Mail, Github, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-black border-t border-white/5 py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-primary/80 font-mono">
              Available for Global Projects &amp; Collaboration
            </span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nguyen Hoang Hao (hao05dev). All rights reserved.
          </p>
        </div>

        {/* Center: Direct Contact Channels */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hau05.ruan@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email Nguyen Hoang Hao"
            className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-primary/80 hover:text-white hover:border-primary/40 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/hao05dev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-primary/80 hover:text-white hover:border-primary/40 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/nguyen.hao.230457/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook Profile"
            className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-primary/80 hover:text-white hover:border-primary/40 transition-all duration-200"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-mono text-primary/60 hover:text-primary transition-colors duration-200"
        >
          <span>BACK TO TOP</span>
          <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
            <ArrowUp className="w-3.5 h-3.5 text-primary" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
