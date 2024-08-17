"use client";

export type Theme = "light" | "dark" | "system";
export const themes: Theme[] = ["light", "dark", "system"];

export const THEME_KEY = "theme";

export function syncTheme() {
  if (
    localStorage.getItem(THEME_KEY) === "dark" ||
    (!localStorage.getItem(THEME_KEY) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function changeTheme(theme: Theme) {
  if (theme === "system") {
    localStorage.removeItem(THEME_KEY);
  } else {
    localStorage.setItem(THEME_KEY, theme);
  }

  syncTheme();
}
