import './globals.css';

export const metadata = {
  title: 'Ahmed Ben Abdallah',
  description: 'I forge interactive worlds with intent — game systems & interactive design.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    title: 'Ahmed Ben Abdallah',
    description: 'I forge interactive worlds with intent — game systems & interactive design.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ben Abdallah',
    description: 'I forge interactive worlds with intent — game systems & interactive design.',
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
      <body className="h-full m-0 bg-black antialiased overflow-hidden">
        <head>
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ahmed Ben Abdallah" />
          <meta property="og:description" content="I forge interactive worlds with intent — game systems & interactive design." />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ahmed Ben Abdallah" />
          <meta name="twitter:description" content="I forge interactive worlds with intent — game systems & interactive design." />
          <meta name="twitter:image" content="/og-image.png" />
        </head>
        {children}

        {/* Fixed contact link at bottom-center */}
        <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
          <a
            href="mailto:ahmedbenabdallahdev@gmail.com"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
            aria-label="Email Ahmed Ben Abdallah"
            rel="noopener noreferrer"
          >
            ahmedbenabdallahdev@gmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
