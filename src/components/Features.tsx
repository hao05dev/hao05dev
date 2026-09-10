import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';

const featuresHeadingSegments: TextSegment[] = [
  {
    text: 'Studio-grade workflows for visionary creators.',
    className: 'text-primary font-normal block w-full mb-1',
  },
  {
    text: 'Built for pure vision. Powered by code & art.',
    className: 'text-gray-500 font-normal block w-full',
  },
];

interface FeatureCardProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`rounded-2xl overflow-hidden flex flex-col justify-between p-6 sm:p-7 relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative min-h-screen bg-black py-20 px-4 sm:px-6 md:px-8">
      {/* Subtle Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={featuresHeadingSegments}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          />
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-3 sm:gap-2 md:gap-2">
          {/* Card 1: Video Card */}
          <FeatureCard
            index={0}
            className="relative min-h-[380px] lg:min-h-0 bg-black/40 border border-white/10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="relative z-10 mt-auto">
              <span className="text-xs uppercase tracking-widest text-primary/80 font-mono">00 / VISION</span>
              <h3 className="text-2xl sm:text-3xl font-medium text-[#E1E0CC] mt-2">
                Your creative canvas.
              </h3>
            </div>
          </FeatureCard>

          {/* Card 2: Project Storyboard (01) */}
          <FeatureCard index={1} className="bg-[#212121] border border-white/5">
            <div>
              {/* Top Icon */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Storyboard icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                />
                <span className="text-xs font-mono text-primary/60">01</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-4">
                Project Storyboard.
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Vue.js &amp; React modern UI systems</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>High-speed Node.js &amp; Python APIs</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>MySQL, Postgres &amp; Mongo pipelines</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Full-scale e-commerce &amp; media apps</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://github.com/hao05dev?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors"
              >
                <span>Explore projects</span>
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 3: Smart Critiques (02) */}
          <FeatureCard index={2} className="bg-[#212121] border border-white/5">
            <div>
              {/* Top Icon */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Critiques icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                />
                <span className="text-xs font-mono text-primary/60">02</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-4">
                Smart Critiques.
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>AI deep learning photo colorization</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Phishing cybersecurity detection tools</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Integrated machine learning inference</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://github.com/hao05dev/oldPhoto_Colorization"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 4: Immersion Capsule (03) */}
          <FeatureCard index={3} className="bg-[#212121] border border-white/5">
            <div>
              {/* Top Icon */}
              <div className="flex items-center justify-between mb-5">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Capsule icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                />
                <span className="text-xs font-mono text-primary/60">03</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-4">
                Immersion Capsule.
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Docker containerized environments</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Automated CI/CD deployment routines</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Cinematic dark-mode UI &amp; fluid sound</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-auto">
              <a
                href="https://github.com/hao05dev"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-primary hover:text-white transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
