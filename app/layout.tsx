import { GlobalBackground } from '@/components/global-background';
import './globals.css';

export const metadata = {
  title: 'Ahmed Warka | Game Developer',
  description: 'Aspiring Game Developer & Computer Science Student from Tunisia. Building games with Godot and exploring WebGL.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    title: 'Ahmed Warka | Game Developer',
    description: 'Aspiring Game Developer & Computer Science Student from Tunisia. Building games with Godot and exploring WebGL.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Warka | Game Developer',
    description: 'Aspiring Game Developer & Computer Science Student from Tunisia. Building games with Godot and exploring WebGL.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 antialiased overflow-y-auto">
        <GlobalBackground />
        <div className="crt-overlay" />
        {children}

        {/* Fixed contact link at bottom-center */}
        <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
          <a
            href="https://github.com/JhunHoonHimself"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
            aria-label="GitHub JhunHoon"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/JhunHoonHimself
          </a>
        </footer>
      </body>
    </html>
  );
}
