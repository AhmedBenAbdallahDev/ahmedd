'use client';

import { TextScramble } from '@/components/text-scrammble';
import { DitheringShader } from '@/components/ui/dithering-shader';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-neutral-200 font-mono">
      {/* Background Shader */}
      <div className="fixed inset-0 z-0 opacity-40">
        {mounted && (
          <DitheringShader
            width={typeof window !== 'undefined' ? window.innerWidth : 1920}
            height={typeof window !== 'undefined' ? window.innerHeight : 1080}
            colorBack="#000000"
            colorFront="#1a1a1a"
            shape="swirl"
            type="8x8"
            pxSize={4}
            speed={0.5}
            className="w-full h-full"
          />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="border border-neutral-800 bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-lg">
            <TextScramble
              phrases={['Ahmed Warka']}
              textClass="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2"
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
              I'm a passionate Computer Science student and an aspiring game developer based in Tunisia.
              My journey is fueled by a love for creating interactive experiences and solving complex problems with code.
            </p>
            <p>
              I primarily use <span className="text-white">Godot</span> for game development, but I'm also deeply fascinated by
              <span className="text-white">WebGL</span> and web-based games. I believe the browser is an incredible platform
              for reach and experimentation.
            </p>
            <p>
              When I'm not coding, you can find me analyzing game design in my favorite titles like
              <span className="text-white italic"> Celeste</span> and <span className="text-white italic"> Paper Mario</span>.
              These games inspire me to focus on tight mechanics and charming aesthetics.
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
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">godot-3-demos</h3>
                <span className="text-xs bg-neutral-800 px-2 py-1">GDScript</span>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                A collection of demos for the Godot game engine version 3. Exploring various systems and mechanics.
              </p>
              <a href="https://github.com/JhunHoonHimself/godot-3-demos" target="_blank" className="text-sm text-neutral-500 hover:text-white underline">
                view repository
              </a>
            </div>

            <div className="group border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-600 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">register</h3>
                <span className="text-xs bg-neutral-800 px-2 py-1">JavaScript</span>
              </div>
              <p className="text-neutral-400 text-sm mb-4">
                A project for grabbing sweet-looking '.is-a.dev' subdomains.
              </p>
              <a href="https://github.com/JhunHoonHimself/register" target="_blank" className="text-sm text-neutral-500 hover:text-white underline">
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
              <a href="mailto:ahmedbenabdallahdev@gmail.com" className="text-neutral-400 hover:text-white underline decoration-neutral-700 underline-offset-4">Email</a>
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
