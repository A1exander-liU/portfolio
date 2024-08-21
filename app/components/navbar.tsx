import React from "react";
import ThemeToggle from "./themeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 px-2 h-12 w-full top-0 sticky space-x-2 flex items-center sm:justify-center shadow-lg bg-slate-100 dark:bg-slate-700 dark:text-white">
      <Link href="#home" className="px-2 py-1 hover:text-blue-500 rounded-sm font-medium">
        Home
      </Link>
      <Link href="#about" className="px-2 py-1 hover:text-blue-500 rounded-sm font-medium">
        About
      </Link>
      <Link href="#projects" className="px-2 py-1 hover:text-blue-500 rounded-sm font-medium">
        Projects
      </Link>

      <span className="flex-1 sm:w-0 sm:flex-none"></span>

      <ThemeToggle />
    </nav>
  );
}
