import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function Header(){
  return(
    <header className="w-full sm:w-0.5 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex justify-center space-x-8">
          <Link className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10" href="/">Home</Link>
          <Link className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10" href="/about">About</Link>
          <Link className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10" href="/resources">Resources</Link>
          <Link className="text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-white/10" href="/services">Services</Link>
        </nav>
      </div>
    </header>
  )
}

export const metadata: Metadata = {
  title: "Joash Hosein",
  description: "A Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Header/>
        {children}
      </body>
    </html>
  );
}
