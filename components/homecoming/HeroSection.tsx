'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative h-[100svh] w-full overflow-hidden bg-[#4a0e17]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full flex items-center justify-center"
      >
        <img
          src="/ChatGPT Image Jul 9, 2026, 02_34_22 AM.png"
          alt="Homecoming Invitation"
          className="h-full w-full object-contain"
        />
      </motion.div>
    </section>
  );
}
