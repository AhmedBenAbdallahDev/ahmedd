'use client';

import Link from 'next/link';

const POSTS = [
  {
    id: 1,
    title: 'test test read me and editing code lol',
    date: '2026-02-12',
    excerpt: 'just some random thoughts for the day',
    content: "today i was just messing around with some code and reading through old readmes. its actually kind of fun to see how much things change when you are just experimenting."
  },
  {
    id: 2,
    title: 'pixel shaders are cool',
    date: '2026-04-05',
    excerpt: 'thinking about dithering',
    content: "really like how the dithering effect looks on the site. it gives it that old school retro feel i was going for. maybe ill add more shapes later."
  }
];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen text-neutral-200 font-mono">
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
