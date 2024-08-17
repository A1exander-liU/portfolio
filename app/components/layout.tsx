"use client";

import React, { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-800 dark:text-white">
        {children}
      </main>
    </>
  );
}
