'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Sparkles } from 'lucide-react';

function GuestInvitation() {
  const searchParams = useSearchParams();
  const prefix = searchParams.get('p');
  const name = searchParams.get('n');

  if (prefix && name) {
    return (
      <span className="relative inline-block my-6 px-8 py-3">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a81c1c]/5 to-transparent rounded-lg"></span>
        <span className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#a81c1c]/40 to-transparent"></span>
        <span className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#a81c1c]/40 to-transparent"></span>
        <span className="relative block font-serif italic text-[#a81c1c] text-3xl sm:text-4xl tracking-widest drop-shadow-sm">
          {prefix} {name}
        </span>
      </span>
    );
  }
  
  return null;
}

export default function InviteDetailsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_50%,#f9f6f0_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20px 20px, #a81c1c 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-8">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 font-serif text-4xl font-light tracking-widest text-[#3a3022] sm:text-5xl"
        >
          NIPUN <span className="text-[#a81c1c]">&amp;</span> ACHINI
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-2xl"
        >
          <div className="text-xs uppercase leading-loose tracking-[0.2em] text-[#8c7a6b] sm:text-sm">
            WE CORDIALLY INVITE
            <Suspense fallback={<div className="my-3 min-h-[40px]"></div>}>
              <GuestInvitation />
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex items-center gap-3 text-[#a81c1c]"
        >
          <Sparkles className="h-4 w-4" />
          <Heart className="h-4 w-4 fill-current" />
          <Sparkles className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
