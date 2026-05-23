'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const quotes = [
  'I forge worlds from code. Dreams become playable reality.',
  'Every pixel tells a story. Every algorithm births possibility.',
  'Reality bends when the right systems click together.',
  'Build small, iterate fast, and make the result feel alive.',
];

const commands = [
  { prompt: 'root@ahmed:~$', command: 'whoami', output: 'Ahmed Ben Abdallah | Game Developer | Reality Architect' },
  { prompt: 'root@ahmed:~$', command: 'cat ./mission.txt', output: 'Game dev, shaders, and web experiments with a terminal soul.' },
  { prompt: 'root@ahmed:~$', command: 'ls ./projects/', output: 'void_walker.unity  neural_arena.exe  echo_realm.vr' },
];

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [bootReady, setBootReady] = useState(false);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBootReady(true), 1800);
    const quoteTimer = window.setInterval(() => {
      setQuoteIndex((current) => (current + 1) % quotes.length);
    }, 3500);

    return () => {
      window.clearTimeout(bootTimer);
      window.clearInterval(quoteTimer);
    };
  }, []);

  return (
    <main className="min-h-screen px-4 py-6 text-neutral-200 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <section className="terminal-frame w-full overflow-hidden border border-white/10 bg-black/80 shadow-[0_24px_100px_rgba(0,0,0,0.65)] backdrop-blur-md">
          <header className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-neutral-400 sm:text-xs">
              <span className="h-3 w-3 rounded-full bg-rose-400/90" />
              <span className="h-3 w-3 rounded-full bg-amber-300/90" />
              <span className="h-3 w-3 rounded-full bg-emerald-300/90" />
              <span>SYSTEM://AHMED_DEV.EXE</span>
            </div>
            <div className="text-xs tracking-[0.3em] text-neutral-500">AHMED BEN ABDALLAH</div>
          </header>

          <div className="grid gap-8 px-4 py-6 sm:px-6 lg:grid-cols-[1.35fr_0.95fr] lg:gap-10 lg:px-8 lg:py-8">
            <div className="space-y-6">
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">boot sequence</p>
                <div className="space-y-2 font-mono text-sm text-neutral-300">
                  <p className={bootReady ? 'opacity-80' : 'opacity-100'}>Initializing neural network...</p>
                  <p className={bootReady ? 'opacity-80' : 'opacity-100'}>Loading creative subroutines...</p>
                  <p className={bootReady ? 'opacity-80' : 'opacity-100'}>System ready.</p>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">headline</p>
                  <h1 className="mt-3 font-mono text-2xl font-bold leading-tight text-white sm:text-4xl">
                    Ahmed Ben Abdallah
                  </h1>
                  <p className="mt-2 text-sm uppercase tracking-[0.32em] text-neutral-500 sm:text-base">
                    Game Developer · CS Student · Tunisia
                  </p>
                </div>

                <div className="border-l-2 border-cyan-400/70 pl-4 text-base text-neutral-300 sm:text-lg">
                  <span className="mr-2 text-cyan-300">&gt;</span>
                  <span key={quoteIndex} className="quote-swap inline-block transition-opacity duration-300">
                    {quotes[quoteIndex]}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 text-sm">
                  <a href="#projects" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-neutral-200 transition-colors hover:bg-white/10">
                    ./ls projects
                  </a>
                  <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-neutral-200 transition-colors hover:bg-white/10">
                    ./connect
                  </a>
                  <Link href="/blog" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-neutral-200 transition-colors hover:bg-white/10">
                    ./cat blog
                  </Link>
                </div>
              </div>

              <div id="about" className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">mission</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
                  I build interactive experiences that feel tactile, playful, and a little strange. The focus is game development, shaders, and web experiments that behave like software with personality.
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">terminal log</p>
                <div className="mt-4 space-y-4 font-mono text-sm">
                  {commands.map((entry) => (
                    <div key={entry.command} className="space-y-2">
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-neutral-400">
                        <span className="text-emerald-300">{entry.prompt}</span>
                        <span className="text-cyan-200">{entry.command}</span>
                      </div>
                      <div className="border-l border-white/10 pl-3 text-neutral-300">{entry.output}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="projects" className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">selected work</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-mono text-sm font-bold text-white">ahmedd</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Next.js</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">Current portfolio rebuilt as a terminal-style personal site.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-mono text-sm font-bold text-white">godot-3-demos</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">GDScript</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">Experiment space for gameplay ideas, movement tests, and systems work.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-mono text-sm font-bold text-white">luminar-ai-data</h3>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Data</span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-400">Creative asset tracking and personal data tooling.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <footer id="contact" className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 py-4 text-xs text-neutral-500 sm:px-6">
            <p>© {new Date().getFullYear()} Ahmed Ben Abdallah. Built with code and a terminal bias.</p>
            <a href="mailto:ahmedbenabdallahdev@gmail.com" className="text-neutral-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white">
              ahmedbenabdallahdev@gmail.com
            </a>
          </footer>
        </section>
      </div>
    </main>
  );
}
