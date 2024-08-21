"use client";
import "./globals.css";
import { useEffect } from "react";
import { syncTheme } from "./scripts/theme";
import Navbar from "./components/navbar";
import { info } from "./data/info";
import "devicon";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const syncThemeBackground = async () => syncTheme();

  useEffect(() => {
    syncThemeBackground();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{`Home | ${info.name}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-900 dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
