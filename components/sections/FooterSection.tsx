'use client';

import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles } from 'lucide-react';

const LIVE_LOCATION_URL = 'https://maps.app.goo.gl/pikUWZebfsNYjp4i6?g_st=iw';

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f9f6f0_100%)] border-t border-[#f2d89c] pt-20 pb-8 text-[#8c7a6b]">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.08),transparent_52%)]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#f2d89c]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#c9a227]/10 blur-3xl" />

      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `linear-gradient(rgba(201,162,39,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16 grid grid-cols-1 gap-8">

          {/* Brand/Logo Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center text-center"
          >
            <div className="mb-5 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#c9a227]/30 bg-white/60 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#c9a227]" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#a67c00]">Thank You For Your Blessings</span>
            </div>

            <h2 className="mb-6 font-serif text-5xl font-medium tracking-wide text-[#3a3022] md:text-6xl">
              A <span className="text-3xl text-[#c9a227]">&</span> N
            </h2>
            <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-[#8c7a6b]">
              We look forward to sharing our joy and celebrating our holy union surrounded by the people we love most.
            </p>
            <a
              href={LIVE_LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 self-center rounded-full border border-[#c9a227]/40 bg-white/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a67c00] transition-colors hover:bg-[#f2d89c]/40"
            >
              <MapPin className="h-4 w-4" />
              St. Anthony's Church, Dalupotha
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="group relative mb-10 flex w-full items-center justify-center overflow-hidden border-y border-[#c9a227]/15 py-10"
        >
          <div className="absolute inset-0 w-[50%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#c9a227]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_3s_infinite]" />

          <p className="font-serif text-3xl md:text-5xl lg:text-6xl text-center font-medium tracking-wide bg-gradient-to-r from-[#8c7a6b]/80 via-[#c9a227] to-[#8c7a6b]/80 text-transparent bg-clip-text">
            A New Chapter Begins
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 px-4 text-center text-xs font-semibold tracking-[0.1em] text-[#a67c00] md:flex-row md:text-left">
          <div className="space-y-2">
            <p className="!text-[#a67c00]">
              &copy; {new Date().getFullYear()} ACHINI & NIPUN. All rights reserved.
            </p>
            <p className="!text-[#a67c00]">
              Design and created by <span className="!text-[#a67c00] font-bold">InviteMint</span> | Connect WhatsApp: <a href="https://wa.me/94707819074" target="_blank" rel="noopener noreferrer" className="!text-[#a67c00] hover:underline hover:text-[#c9a227] transition-colors">+94 70 781 9074</a>
            </p>
          </div>
          <p className="flex items-center justify-center gap-1.5 whitespace-nowrap text-[#8c7a6b]">
            Crafted with <Heart className="h-3 w-3 fill-[#c9a227] text-[#c9a227] animate-pulse" /> for our special day
          </p>
        </div>

      </div>
    </footer>
  );
}
