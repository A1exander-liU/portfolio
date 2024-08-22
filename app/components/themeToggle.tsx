"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { toTitleCase } from "../scripts/stringUtils";
import { Theme, themes } from "../scripts/theme";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const themeMap = {
    light: <SunIcon className="size-6" />,
    dark: <MoonIcon className="size-6" />,
    system: <ComputerDesktopIcon className="size-6" />,
  };
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Menu>
        <MenuButton className="p-2 rounded-full data-[hover]:bg-slate-200 dark:data-[hover]:bg-slate-600">
          {theme && themeMap[theme as Theme]}
        </MenuButton>
        <MenuItems
          anchor="bottom end"
          transition
          className="z-20 p-1 rounded-md bg-slate-50 dark:bg-slate-700 dark:text-white ring-2 ring-opacity-10 ring-black dark:ring-gray-600 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {themes.map((_theme, i) => (
            <MenuItem key={i}>
              <p
                onClick={() => setTheme(_theme)}
                className={`px-4 py-1 rounded-md data-[focus]:bg-slate-200 dark:data-[focus]:bg-slate-600 ${_theme === theme ? "text-blue-400" : ""} text-sm font-bold cursor-pointer`}
              >
                {toTitleCase(_theme)}
              </p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </>
  );
}
