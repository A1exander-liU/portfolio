import React, { ReactNode, useEffect } from "react";
import Navbar from "./navbar";
import { syncTheme } from "../scripts/theme";

export default function Layout({ children }: { children: ReactNode }) {
  const syncThemeBackground = async () => syncTheme();

  useEffect(() => {
    syncThemeBackground();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-800 dark:text-white">
        {children}
      </main>
    </>
  );
}
