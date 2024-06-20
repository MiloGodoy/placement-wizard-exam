import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@madzadev/audio-player/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wizard: Test your english",
  description: "This exam is for evaluate your english",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
