import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface LetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

const AnimatedLetter: React.FC<LetterProps> = ({ char, index, totalChars, progress }) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

interface ScrollRevealedParagraphProps {
  text: string;
  className?: string;
}

export const ScrollRevealedParagraph: React.FC<ScrollRevealedParagraphProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);
  const totalChars = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          totalChars={totalChars}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default ScrollRevealedParagraph;
