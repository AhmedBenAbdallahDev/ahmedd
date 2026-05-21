import React from 'react';
import { TextScramble } from './text-scrammble';

export default function DemoOne() {
  return (
    <div className="p-8 bg-neutral-900 min-h-screen flex items-center justify-center">
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
        // dudClass="text-neutral-500/60"
        // textClass="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
        autoStart
        loop
      />
    </div>
  );
}
