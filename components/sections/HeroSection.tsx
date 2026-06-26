'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cross, Heart, Sparkles } from 'lucide-react';

function GuestInvitation() {
  const searchParams = useSearchParams();
  const prefix = searchParams.get('p');
  const name = searchParams.get('n');

  if (prefix && name) {
    return (
      <span className="block my-3 font-medium text-[#c9a227] text-sm sm:text-base tracking-[0.25em]">
        {prefix} {name}
      </span>
    );
  }
  
  return null;
}

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[url('/images/hero_bg_mobile.png')] bg-cover bg-center sm:bg-none sm:bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_55%,#f9f6f0_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.3] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,162,39,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.15) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <Cross className="h-5 w-5 text-[#c9a227]" />
          <p className="mt-4 text-xs font-light tracking-[0.15em] text-[#8c6a16] sm:text-sm max-w-lg leading-relaxed">
            "THEREFORE WHAT GOD HAS JOINED TOGETHER, LET NO ONE SEPARATE"
          </p>
          <p className="mt-1 text-[10px] tracking-[0.2em] text-[#c9a227]">-MATTHEW 19:6-</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1 }}
          className="mt-6 font-serif text-5xl font-light leading-tight tracking-[0.08em] text-[#3a3022] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          ACHINI <span className="text-[#c9a227]">&amp;</span> NIPUN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-10 max-w-2xl"
        >
          <div className="text-xs uppercase leading-loose tracking-[0.2em] text-[#8c6a16] sm:text-sm">
            TOGETHER WITH THEIR PARENTS<br/>
            MR. &amp; MRS. PERERA AND MR. &amp; MRS. GURUSINGHA<br/><br/>
            REQUEST THE HONOUR OF THE PRESENCE OF
            <Suspense fallback={<div className="my-3"></div>}>
              <GuestInvitation />
            </Suspense>
            AT THE CELEBRATION OF THEIR MARRIAGE
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 rounded-3xl border border-[#c9a227]/30 bg-white/70 px-8 py-6 backdrop-blur-md shadow-[0_15px_40px_rgba(201,162,39,0.1)] sm:px-12"
        >
          <div className="flex items-center justify-center gap-6 text-[#3a3022]">
            <div className="text-right">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227]">JULY</p>
              <p className="mt-1 text-sm tracking-[0.1em] font-medium">THURSDAY 23</p>
            </div>
            <div className="h-12 w-px bg-[#c9a227]/30"></div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-[#c9a227]">2026</p>
              <p className="mt-1 text-sm tracking-[0.1em] font-medium">AT 4:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="mt-10 flex items-center gap-3 text-[#c9a227]"
        >
          <Sparkles className="h-4 w-4" />
          <Heart className="h-4 w-4 fill-current" />
          <Sparkles className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
