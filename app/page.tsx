'use client';

import { TextScramble } from '@/components/text-scrammble';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen text-neutral-200 font-mono">
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="border border-neutral-800 bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-lg">
            <TextScramble
              phrases={['Ahmed Warka (WIP)']}
              textClass="text-4xl md:text-6xl font-bold tracking-tighter rainbow-wave mb-2"
              dudClass="text-white/20"
              autoStart
              loop={false}
            />
            <p className="text-xl md:text-2xl text-neutral-400 mt-4">
              Aspiring Game Developer & CS Student from Tunisia 🎮
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#about" className="px-4 py-2 bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors whitespace-nowrap">
                ./whoami
              </a>
              <a href="#projects" className="px-4 py-2 border border-white text-white text-sm font-bold hover:bg-white/10 transition-colors whitespace-nowrap">
                ./ls projects
              </a>
              <Link href="/blog" className="px-4 py-2 border border-neutral-700 text-neutral-400 text-sm font-bold hover:text-white transition-colors whitespace-nowrap">
                ./cat blog
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-neutral-500">01.</span> About Me
          </h2>
          <div className="space-y-6 text-neutral-400 leading-relaxed">
            <p>
              I am a CS student and game dev from Tunisia. I love making things that people can play with and code that feels good to write.
            </p>
            <p>
              Right now I am mostly using Godot to build games, but I spend a lot of time playing with WebGL and shaders. The web is a cool place to put games because anyone can just click a link and start playing.
            </p>
            <p>
              When I am not at my computer, I usually play games like Celeste or Paper Mario. I like studying how they handle movement and how they look. This site is still a huge work in progress while I figure out what I want to show.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="text-neutral-500">02.</span> Selected Work
          </h2>
            <div className="grid gap-6">
              <div className="group border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">personal-site</h3>
                  <span className="text-xs bg-neutral-800 px-2 py-1">Next.js</span>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                  this site! my personal portfolio where i showcase my game dev journey and web experiments
                </p>
                <a href="https://github.com/JhunHoonHimself/personal-site" target="_blank" className="text-sm text-neutral-500 hover:text-white underline">
                  view repository
                </a>
              </div>

              <div className="group border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">godot-3-demos</h3>
                  <span className="text-xs bg-neutral-800 px-2 py-1">GDScript</span>
                </div>
                <p className="text-neutral-400 text-sm mb-4">
                  demos for godot 3. this is for kinda work in progress
                </p>
                <a href="https://github.com/JhunHoonHimself/godot-3-demos" target="_blank" className="text-sm text-neutral-500 hover:text-white underline">
                  view repository
                </a>
              </div>

            <div className="group border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">luminar-ai-data</h3>
                <span className="text-xs bg-neutral-800 px-2 py-1">Data</span>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                Personal Luminar AI database for managing creative assets.
              </p>
              <a href="https://github.com/JhunHoonHimself/luminar-ai-data" target="_blank" className="text-sm text-neutral-500 hover:text-white underline">
                view repository
              </a>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm italic">
              "Building a strong digital footprint, one pixel at a time."
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-24">
          <div className="border border-neutral-800 p-8 text-center bg-black/40">
            <h2 className="text-2xl font-bold mb-4 text-white">Let's Connect</h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              I'm always open to collaborating on game dev projects or talking about web tech.
            </p>
            <div className="flex justify-center gap-8">
              <a href="https://github.com/JhunHoonHimself" target="_blank" className="text-neutral-400 hover:text-white underline decoration-neutral-700 underline-offset-4">GitHub</a>
            </div>
          </div>
        </section>

        <footer className="text-center text-neutral-600 text-xs">
          <p>© {new Date().getFullYear()} Ahmed Warka. Built with passion and code.</p>
        </footer>
      </div>
    </main>
  );
}
