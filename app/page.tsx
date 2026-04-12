'use client';

import { TextScramble } from '@/components/text-scrammble';

export default function Home() {
  return (
    <main style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      overflow: 'hidden',
    }}>
      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '90vw',
        padding: '0 1rem',
      }}>
        <TextScramble
          phrases={[
            'Hello,',
            'sooner or later',
            "you're going to realize",
            'just as I did',
            "that there's a difference",
            'between knowing the path',
            'and walking the path',
          ]}
          pauseMs={800}
          textClass="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white font-mono"
          dudClass="text-white/30"
          autoStart
          loop
        />
      </div>
    </main>
  );
}
