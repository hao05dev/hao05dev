import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './WordsPullUp';
import { Navbar } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Top Centered Navbar */}
        <Navbar />

        {/* Hero Content (Bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-8">
            {/* Left 8 columns: Giant Heading */}
            <div className="lg:col-span-8 flex items-end">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
              />
            </div>

            {/* Right 4 columns: Description + CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-5 sm:gap-6 pb-2 sm:pb-3">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-md font-light"
              >
                Prisma is a digital studio &amp; engineering lab directed by Nguyen Hoang Hao —
                crafting cinema-grade web platforms, interactive experiences, and AI systems bound by
                passion and hunger to unlock potential.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 hover:gap-3 bg-primary text-black font-medium text-sm sm:text-base rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 shadow-lg hover:bg-white"
                >
                  <span>Join the lab</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors" />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
