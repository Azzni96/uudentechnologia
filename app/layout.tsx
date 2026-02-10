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
  title: "Nihad Azzam - 3D Interactive Portfolio",
  description: "Interactive 3D business card and portfolio built with Next.js and React Three Fiber",
  keywords: "portfolio, 3D, next.js, react, developer, web developer",
  authors: [{ name: "Nihad Azzam" }],
  openGraph: {
    title: "Nihad Azzam - 3D Interactive Portfolio",
    description: "Experience an interactive 3D business card",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b0f1a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
