"use client";
import "./globals.css";
import { useEffect } from "react";
import { syncTheme } from "./scripts/theme";
import Navbar from "./components/navbar";

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-800 dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
