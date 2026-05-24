import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Ben Abdallah",
  description: "Personal Portfolio",
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-mono bg-black text-white">
        {children}
      </body>
    </html>
  );
}
