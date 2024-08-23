import React from "react";
import { SkillNode } from "@/app/scripts/types";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect } from "react";
import TechIcon from "./TechIcon";

function ShowMore({ hidden }: { hidden: React.JSX.Element[] }) {
  return (
    <Menu>
      <MenuButton>
        <EllipsisHorizontalIcon className="w-6" />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom end" }}
        transition
        modal={false}
        className="z-20 p-1 mt-1 max-w-64 flex flex-wrap gap-1 bg-slate-50 dark:bg-slate-800 dark:text-white ring-2 ring-opacity-10 ring-black dark:ring-slate-700 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        {hidden.map((node, i) => (
          <MenuItem key={i}>{node}</MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

/*
 * Displays Tech Icons dynamically
 *
 * Uses container and tech icon widths to determine how many can fit,
 * rest of elements are rendered inside a "show more"
 */
export default function TechBar({ tech }: { tech: SkillNode[]; className?: string }) {
  const allChildren = tech.map((el, i) => <TechIcon key={i} icon={el.icon} name={el.name} />);
  const techBarRef = useRef<HTMLDivElement | null>(null);
  const widthsRef = useRef<number[]>([]);
  const [displayedChildren, setDisplayedChildren] = useState<React.JSX.Element[]>(allChildren);
  const [hiddenChildren, setHiddenChildren] = useState<React.JSX.Element[]>([]);
  // Sizes (pixels)
  const spacing = 4; // space-x-1
  const showMoreIconSize = 24 + spacing;

  useEffect(() => {
    // initially get all widths (all tech bar icons are initially rendered to get all widths)
    const determineWidths = () => {
      if (!techBarRef.current) return;
      const temp = [];
      const children = techBarRef.current.children;

      for (let i = 0; i < children.length; i++) {
        temp.push(children[i].clientWidth);
      }

      widthsRef.current = temp;
    };

    // display all that will not overflow, rest will be in "show more"
    const display = () => {
      if (!techBarRef.current) return;
      let count = 0;
      let current = 0;
      const containerWidth = techBarRef.current.clientWidth - showMoreIconSize;
      widthsRef.current.map((width) => {
        current += width + 4;
        if (current < containerWidth) {
          count += 1;
        }
      });

      setDisplayedChildren(allChildren.slice(0, count));
      setHiddenChildren(allChildren.slice(count));
    };

    determineWidths();
    display();
    window.addEventListener("resize", display);
    return () => window.removeEventListener("resize", display);
  }, []);

  return (
    <div ref={techBarRef} className={`flex overflow-hidden justify-start items-center space-x-1`}>
      {displayedChildren}
      {hiddenChildren.length > 0 && <ShowMore hidden={hiddenChildren} />}
    </div>
  );
}
