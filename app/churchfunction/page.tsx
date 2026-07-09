'use client';

import { useState, useEffect } from 'react';
import { EnvelopeOpener } from '@/components/envelope-opener';
import HeroSection from '@/components/sections/HeroSection';
import CeremonyDetails from '@/components/sections/CeremonyDetails';
import CountdownSection from '@/components/sections/CountdownSection';
import VenueLocation from '@/components/sections/VenueLocation';
import BlessingsSection from '@/components/sections/BlessingsSection';
import FooterSection from '@/components/sections/FooterSection';
import MusicPlayer from '@/components/MusicPlayer';

export default function ChurchFunction() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add('scroll-smooth');
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-background">
      {/* Persistent floating music player */}
      <MusicPlayer />

      {!isOpened ? (
        <EnvelopeOpener onEnvelopeOpen={() => setIsOpened(true)} />
      ) : (
        <>
          <HeroSection />
          <CeremonyDetails hideReception={true} />
          <CountdownSection />
          <VenueLocation hideReception={true} />
          <BlessingsSection event="churchfunction" />
          <FooterSection />
        </>
      )}
    </div>
  );
}
