'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, MapPin, Navigation, Sparkles } from 'lucide-react';

const LIVE_LOCATION_URL = "https://www.google.com/maps/place/St.+Anthony's+Shrine+-+Dalupotha+%7C+%E0%B7%83%E0%B7%8F%E0%B6%B1%E0%B7%8A%E0%B6%AD+%E0%B6%85%E0%B6%B1%E0%B7%8A%E0%B6%AD%E0%B7%9D%E0%B6%B1%E0%B7%92+%E0%B7%83%E0%B7%92%E0%B6%AF%E0%B7%8A%E0%B6%B0%E0%B7%83%E0%B7%8A%E0%B6%AE%E0%B7%8F%E0%B6%B1%E0%B6%BA+-+%E0%B6%AF%E0%B6%BD%E0%B7%94%E0%B6%B4%E0%B7%9C%E0%B6%AD/@7.2269648,79.8517337,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2eeb803d6ada7:0xd21538072af3910e!8m2!3d7.2269648!4d79.8517337!16s%2Fg%2F1tks4rsh";
const FUNCTION_LOCATION_URL = 'https://www.google.com/maps/search/Hotel+Grand+Palace+Hikkaduwa';

export default function VenueLocation() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fdfbf7_42%,#f9f6f0_100%)] px-4 py-24 sm:px-6 lg:px-8 md:py-32"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 55, 0], y: [0, 35, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-[12%] -top-[8%] h-[52vw] w-[52vw] rounded-full bg-gradient-to-br from-[#f5a9a9] to-[#fdfbf7] opacity-65 blur-[110px]"
        />
        <motion.div
          animate={{ x: [0, -45, 0], y: [0, -45, 0], scale: [1, 1.18, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-[10%] top-[34%] h-[44vw] w-[44vw] rounded-full bg-gradient-to-tl from-[#ffffff] to-[#f5a9a9] opacity-50 blur-[110px]"
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 11px 11px, rgba(168, 28, 28,0.38) 1px, transparent 1px)',
            backgroundSize: '34px 34px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, type: 'spring', stiffness: 100 }}
          className="mb-14 text-center md:mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f5a9a9]/60 bg-white/70 px-5 py-2.5 shadow-[0_10px_28px_rgba(168, 28, 28,0.15)] backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#a81c1c]" />
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#7a1010] sm:text-sm">
              Homecoming Venue
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#3a3022] sm:text-5xl md:text-7xl">
            Venue <span className="relative inline-block text-[#a81c1c]">
              Location
              <motion.svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full"
                viewBox="0 0 100 20" preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              >
                <motion.path
                  d="M0 10 Q 25 20, 50 10 T 100 10"
                  fill="none"
                  stroke="#f5a9a9"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#8c7a6b] sm:text-lg">
            We've carefully selected these beautiful venues to host our special day. We look forward to seeing you there.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 items-stretch gap-5 lg:max-w-3xl lg:mx-auto">
          {/* Reception Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-[#f5a9a9]/50 bg-[linear-gradient(150deg,rgba(255,255,255,0.9)_0%,rgba(253,251,247,0.8)_100%)] p-8 shadow-[0_20px_50px_rgba(168, 28, 28,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(168, 28, 28,0.18)] md:p-12"
          >
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#f5a9a9]/20 blur-[50px] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#a81c1c]/20" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#a81c1c] shadow-[0_10px_20px_rgba(168, 28, 28,0.15)] border border-[#a81c1c]/20">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="mb-2 font-serif text-3xl font-medium text-[#3a3022]">Hotel Grand Palace</h3>
                <p className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#7a1010]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a81c1c]" /> Hikkaduwa
                </p>
                <p className="text-lg leading-relaxed text-[#8c7a6b]">
                  Join us for our homecoming celebration and reception.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={FUNCTION_LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-[#a81c1c]/30 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-[#7a1010] transition-all duration-300 hover:bg-[#a81c1c] hover:text-white"
                >
                  <Navigation size={18} />
                  Open in Maps
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
