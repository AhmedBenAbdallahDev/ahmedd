'use client';

import { DitheringShader } from '@/components/ui/dithering-shader';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const POSTS = [
  {
    id: 1,
    title: 'Hello World: My Eccentric Corner',
    date: '2024-05-20',
    excerpt: 'Welcome to my little slice of the internet. This is where I share my journey as a game developer.',
    content: "This is the first entry in my mini-blog. I want to start strengthening my online presence and make myself known with a strong digital footprint. This site is my eccentric corner of the internet where I'll be talking about Godot, WebGL, and the games I love."
  },
  {
    id: 2,
    title: 'Why I love Godot',
    date: '2024-05-18',
    excerpt: 'Exploring the beauty of open-source game development.',
    content: "Godot has been my go-to engine for a while now. The scene system is intuitive, and the lightweight nature of the engine makes it a joy to work with, especially for someone who loves experimental projects."
  }
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-neutral-200 font-mono">
      {/* Background Shader */}
      <div className="fixed inset-0 z-0 opacity-20">
        {mounted && (
          <DitheringShader
            width={typeof window !== 'undefined' ? window.innerWidth : 1920}
            height={typeof window !== 'undefined' ? window.innerHeight : 1080}
            colorBack="#000000"
            colorFront="#1a1a1a"
            shape="sphere"
            type="4x4"
            pxSize={8}
            speed={0.2}
            className="w-full h-full"
          />
        )}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20">
        <header className="mb-16">
          <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-2 mb-8">
            ← cd ..
          </Link>
          <h1 className="text-4xl font-bold text-white tracking-tighter">Mini Blog</h1>
          <p className="text-neutral-500 mt-2 italic">Thoughts, logs, and eccentricities.</p>
        </header>

        <div className="space-y-16">
          {POSTS.map((post) => (
            <article key={post.id} className="group border-b border-neutral-900 pb-12 last:border-0">
              <time className="text-xs text-neutral-600 mb-2 block">{post.date}</time>
              <h2 className="text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors mb-4">
                {post.title}
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="bg-neutral-900/30 p-4 border-l-2 border-neutral-800 text-sm text-neutral-500 italic">
                {post.content}
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-neutral-900 text-center">
          <p className="text-neutral-600 text-xs">End of transmission.</p>
        </footer>
      </div>
    </main>
  );
}
