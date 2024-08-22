"use client";
import "./globals.css";
import Navbar from "./components/navbar";
import { info } from "./data/info";
import "devicon";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{`Home | ${info.name}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-white">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
