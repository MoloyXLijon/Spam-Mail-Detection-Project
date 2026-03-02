import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "NextApp — Modern Next.js Starter",
    template: "%s | NextApp",
  },
  description:
    "A production-ready Next.js 16 starter template with TypeScript, Tailwind CSS 4, and everything you need to ship fast.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "starter template"],
  authors: [{ name: "NextApp" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "NextApp — Modern Next.js Starter",
    description:
      "A production-ready Next.js 16 starter template with TypeScript, Tailwind CSS 4, and everything you need to ship fast.",
    siteName: "NextApp",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextApp — Modern Next.js Starter",
    description:
      "A production-ready Next.js 16 starter template with TypeScript, Tailwind CSS 4, and everything you need to ship fast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
