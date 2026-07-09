'use client';

import { useState, useEffect } from 'react';
import { EnvelopeOpener } from '@/components/homecoming/envelope-opener';
import HeroSection from '@/components/homecoming/HeroSection';
import InviteDetailsSection from '@/components/homecoming/InviteDetailsSection';
import CeremonyDetails from '@/components/homecoming/CeremonyDetails';
import CountdownSection from '@/components/homecoming/CountdownSection';
import VenueLocation from '@/components/homecoming/VenueLocation';
import RSVPSection from '@/components/homecoming/RSVPSection';
import BlessingsSection from '@/components/homecoming/BlessingsSection';
import FooterSection from '@/components/homecoming/FooterSection';
import MusicPlayer from '@/components/homecoming/MusicPlayer';

export default function Homecoming() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="theme-red relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener onEnvelopeOpen={() => setIsOpened(true)} />
      ) : (
        <>
          <HeroSection />
          <InviteDetailsSection />
          <CeremonyDetails />
          <CountdownSection />
          <VenueLocation />
          <RSVPSection />
          <BlessingsSection />
          <FooterSection />
        </>
      )}
    </div>
  );
}
