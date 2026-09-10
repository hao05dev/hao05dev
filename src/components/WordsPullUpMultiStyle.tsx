import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Flatten all words with their respective styles
  const allWords: { word: string; className: string }[] = [];
  segments.forEach((seg) => {
    const words = seg.text.split(' ');
    words.forEach((w) => {
      if (w.length > 0) {
        allWords.push({ word: w, className: seg.className || '' });
      }
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {allWords.map((item, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block mr-[0.25em] last:mr-0 ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </div>
  );
};
