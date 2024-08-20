"use client";
import React, { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { toTitleCase } from "../scripts/stringUtils";
import { THEME_KEY, Theme, changeTheme, themes } from "../scripts/theme";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const themeMap = {
    light: <SunIcon className="size-6" />,
    dark: <MoonIcon className="size-6" />,
    system: <ComputerDesktopIcon className="size-6" />,
  };
  const [currentTheme, setCurrentTheme] = useState<Theme>((localStorage.getItem(THEME_KEY) as Theme) || "system");

  const handleThemeChange = (theme: Theme) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <>
      <Menu>
        <MenuButton className="px-2 py-1 rounded-full data-[hover]:bg-slate-200 dark:data-[hover]:bg-slate-700">
          {themeMap[currentTheme]}
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          transition
          className="z-20 p-1 rounded-md bg-slate-50 dark:bg-slate-900 dark:text-white ring-2 ring-opacity-10 ring-black dark:ring-gray-700 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {themes.map((theme, i) => (
            <MenuItem key={i}>
              <p
                onClick={() => handleThemeChange(theme)}
                className={`px-4 py-1 rounded-md data-[focus]:bg-slate-200 dark:data-[focus]:bg-slate-700 ${currentTheme === theme ? "text-blue-400" : ""} text-sm font-bold cursor-pointer`}
              >
                {toTitleCase(theme)}
              </p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
}
