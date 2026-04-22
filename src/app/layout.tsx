import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header1 from "@/components/Header";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


 const metadata: Metadata = {
  title: "Sanket Mane | Full-Stack Web Developer & AI Enthusiast",
  description:
    "Hi, I'm Sanket Mane — a passionate Full-Stack Web Developer skilled in Next.js, TypeScript, MongoDB, and AI-powered apps. Explore my projects like Bagpack Trips, Stegano, and the AI Interview Assistant.",
  keywords: [
    "Sanket Mane",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Developer",
    "React Developer",
    "Web Developer Portfolio",
    "MERN Stack",
    "Software Engineer",
  ],
  authors: [{ name: "Sanket Mane", url: "https://sanketmane.vercel.app" }],
  creator: "Sanket Mane",
  publisher: "Sanket Mane",
  metadataBase: new URL("https://sanketmane.vercel.app"), 
  alternates: {
    canonical: "https://sanketmane.vercel.app",
  },
  openGraph: {
    title: "Sanket Mane | Full-Stack Developer & AI Enthusiast",
    description:
      "Full-Stack Developer skilled in Next.js, TypeScript, MongoDB & AI automation. Check out my projects: Bagpack Trips, Stegano, and AI Interview Assistant.",
    url: "https://sanketmane.vercel.app",
    siteName: "Sanket Mane Portfolio",
    images: [
      {
        url: "https://sanketmane.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Sanket Mane Portfolio - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "google-site-verification": "Wq1s61-3u7ZcEq0h4NnlrCvGqlt4yXWWs7IVsQKajSg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black dark  m-0 p-0`}
      > <Header1/>

     
        {children}
        <Chatbot />
      <Footer4Col/>
      </body>
    </html>
  );
}
