import React from 'react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { ScrollRevealedParagraph } from './AnimatedLetter';

const aboutHeadingSegments: TextSegment[] = [
  {
    text: 'I am Nguyen Hoang Hao,',
    className: 'font-normal text-[#E1E0CC]',
  },
  {
    text: 'a creative full-stack engineer.',
    className: 'italic font-serif text-primary',
  },
  {
    text: 'I build modern web architectures, intuitive user experiences, and intelligent AI solutions.',
    className: 'font-normal text-[#E1E0CC]',
  },
];

const aboutBioText =
  'Over the last several years, I have developed modern web platforms, e-commerce applications like 3Mien Restaurant, streaming services like Movie ChiuChiu, and machine learning models for image restoration and security. Combining artistic design with clean, scalable code, I build digital experiences that leave a lasting imprint.';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 text-center border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* Small Top Label */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium px-3 py-1 rounded-full border border-primary/20 bg-primary/5 inline-block">
            Engineering &amp; Visual Arts
          </span>
        </div>

        {/* Main Heading with Multi-Style WordsPullUp */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-16">
          <WordsPullUpMultiStyle
            segments={aboutHeadingSegments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] sm:leading-[0.95]"
          />
        </div>

        {/* Body paragraph with progressive character opacity scroll reveal */}
        <div className="max-w-2xl mx-auto">
          <ScrollRevealedParagraph
            text={aboutBioText}
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed tracking-wide font-light"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
