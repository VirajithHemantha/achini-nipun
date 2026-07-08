'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock3, MapPin, Sparkles, Crown } from 'lucide-react';

export default function CeremonyDetails() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const detailGroups = [
    {
      key: 'function',
      title: 'Celebration',
      timeLabel: 'Reception',
      timeValue: '6:30 PM',
      timeSub: 'Homecoming Reception',
      venueLabel: 'Reception Venue',
      venueValue: 'Hotel Grand Palace',
      venueSub: 'Hikkaduwa',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f9f6f0_0%,#ffffff_45%,#fdfbf7_100%)] px-4 sm:px-6 lg:px-8 py-24 md:py-32"
    >
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.2] mix-blend-multiply"
          style={{ backgroundImage: `radial-gradient(circle at 20px 20px, #a81c1c 1.1px, transparent 1.1px)`, backgroundSize: '36px 36px' }} />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f5a9a9]/40 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[40rem] w-[40rem] rounded-full bg-[#fdfbf7]/60 blur-[120px]" />
        <motion.div
          animate={{ y: [0, -22, 0], x: [0, 18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-12 h-40 w-40 rounded-full border border-[#a81c1c]/30 bg-[#f5a9a9]/20 blur-[1px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-10 sm:gap-12 text-center">

          {/* Details Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full relative"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#a81c1c]/40 bg-white/70 px-5 py-2 backdrop-blur-md shadow-sm">
              <Sparkles className="h-4 w-4 text-[#a81c1c]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#a81c1c] font-bold">
                The Sacred Celebration
              </span>
            </div>

            <h2 className="mb-8 font-serif text-5xl font-light leading-snug text-[#3a3022] md:text-6xl">
              Homecoming <span className="italic text-[#a81c1c]">&amp;</span> Celebration
            </h2>

            <p className="mx-auto mb-12 text-lg leading-relaxed text-[#8c7a6b] max-w-2xl">
              We warmly invite you to join us as we exchange our vows and celebrate this beautiful new beginning with our dearest friends and family.
            </p>
          </motion.div>

          {/* Details Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-5 text-left max-w-xl mx-auto">
            {detailGroups.map((group, index) => {
              return (
                <motion.div
                  key={group.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.95)' }}
                  className="group relative overflow-hidden rounded-2xl border border-[#a81c1c]/25 bg-white/80 p-6 shadow-[0_15px_40px_rgba(168, 28, 28,0.08)] backdrop-blur-xl transition-all cursor-default"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-[#a81c1c] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300" />

                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a81c1c]">{group.title}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a81c1c]/30 bg-gradient-to-br from-[#ffffff] to-[#fdfbf7] shadow-inner">
                        <Clock3 className="h-5 w-5 text-[#a81c1c]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1010] mb-1 font-semibold">{group.timeLabel}</p>
                        <h3 className="font-serif text-2xl text-[#3a3022]">{group.timeValue}</h3>
                        <p className="text-sm text-[#8c7a6b] mt-1">{group.timeSub}</p>
                      </div>
                    </div>

                    <div className="h-px w-full bg-[#a81c1c]/20" />

                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#a81c1c]/30 bg-gradient-to-br from-[#ffffff] to-[#fdfbf7] shadow-inner">
                        <MapPin className="h-5 w-5 text-[#a81c1c]" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#7a1010] mb-1 font-semibold">{group.venueLabel}</p>
                        <h3 className="font-serif text-2xl text-[#3a3022]">{group.venueValue}</h3>
                        <p className="text-sm text-[#8c7a6b] mt-1">{group.venueSub}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}