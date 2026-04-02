import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Tanseef Shahid | 3D Metrology & AI Engineer",
  description: "Portfolio and resume of Muhammad Tanseef Shahid - 3D Metrology & AI Engineer specializing in computer vision, deep learning, and 3D reconstruction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070A12] text-slate-300 selection:bg-cyan-500/30`}
      >
        {children}
        <GoogleAnalytics gaId="G-T9KRJHC7BD" />
      </body>
    </html>
  );
}
