import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Tanseef Shahid | 3D Metrology & Machine Learning Engineer",
  description:
    "Portfolio of Muhammad Tanseef Shahid — 3D Metrology & Machine Learning Engineer. Sub-millimeter industrial metrology, 6-DoF pose estimation, neural rendering, and real-time edge perception.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plexSans.variable} ${plexMono.variable} antialiased bg-paper text-ink`}
      >
        {children}
        <GoogleAnalytics gaId="G-T9KRJHC7BD" />
      </body>
    </html>
  );
}
