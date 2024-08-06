import { Link } from "gatsby";
import React from "react";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  return (
    <nav className="z-10 px-2 h-12 w-full top-0 sticky space-x-2 flex items-center shadow-lg bg-slate-100 dark:bg-slate-900 dark:text-white">
      <Link
        to="/"
        className="px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm font-medium"
      >
        Home
      </Link>
      <Link
        to="/#about"
        className="px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm font-medium"
      >
        About
      </Link>
      <Link
        to="/#projects"
        className="px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-sm font-medium"
      >
        Projects
      </Link>

      <span className="flex-1"></span>

      <ThemeToggle />
    </nav>
  );
}
