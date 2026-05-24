import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Ben Abdallah | Portfolio",
  description: "Personal portfolio of Ahmed Ben Abdallah",
  openGraph: {
    title: "Ahmed Ben Abdallah | Portfolio",
    description: "Personal portfolio of Ahmed Ben Abdallah",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
