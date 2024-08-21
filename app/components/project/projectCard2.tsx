import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProjectNode, TechItem } from "../../scripts/types";
import Image from "next/image";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const TechIcon = forwardRef<HTMLDivElement, TechItem>(({ icon, name }: TechItem, ref) => (
  <div
    ref={ref}
    className="px-2 py-[1px] h-6 flex justify-center items-center space-x-1 border-[1px] border-solid border-slate-300 bg-slate-200 rounded-full dark:border-slate-500 dark:bg-slate-600"
  >
    <i className={`devicon-${icon}-plain text-lg`}></i>
    <p className="text-xs">{name}</p>
  </div>
));
TechIcon.displayName = "TechIcon";

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
function TechBar({ tech, pos }: { tech: TechItem[]; pos: string }) {
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
    <div
      ref={techBarRef}
      className={`flex overflow-hidden justify-end items-center space-x-1 ${pos === "right" ? "md:col-start-1 md:row-start-1 md:justify-start" : ""}`}
    >
      {displayedChildren}
      {hiddenChildren.length > 0 && <ShowMore hidden={hiddenChildren} />}
    </div>
  );
}

export default function ProjectCard2({ node, pos }: { node: ProjectNode; pos: "left" | "right" }) {
  return (
    <motion.div
      className={`p-2 min-h-64 w-full grid grid-cols-1 md:grid-cols-2 gap-2 border-x-2 border-t-2 border-solid border-slate-200 dark:border-slate-700 dark:border-2 lg:max-w-[65%] text-sm md:text-base dark:bg-slate-900 ${pos === "left" ? "self-start" : "self-end"} shadow-lg`}
    >
      <div
        className={`relative p-1 grid md:block grid-rows-subgrid row-start-1 col-start-1 ${pos === "left" ? "md:col-start-1" : "md:col-start-2"} row-span-2`}
      >
        <div className="p-1 md:p-0 flex flex-col-reverse bg-gradient-to-t from-black/75 via-black/0 md:bg-none">
          <h2 className="text-lg text-white font-semibold md:text-xl md:text-black md:dark:text-white">{node.title}</h2>
        </div>
        <p className="row-start-2 col-start-1 text-slate-500 dark:text-slate-400 lg:text-lg">{node.info}</p>
      </div>
      {node.hero_image && (
        <Image
          src={node.hero_image}
          alt={node.hero_image_alt}
          width={1680}
          height={700}
          priority={true}
          className={`size-full row-start-1 col-start-1 ${pos === "left" ? "md:col-start-2" : "md:col-start-1"}`}
        />
      )}

      <div className={`h-fit grid grid-cols-2 gap-2 md:col-span-2`}>
        <div className={`flex space-x-2 ${pos === "right" ? "md:col-start-2 md:justify-end" : ""}`}>
          {node.live && (
            <motion.a
              href={node.live}
              whileHover={{ backgroundColor: "#3b82f6" }}
              whileTap={{ backgroundColor: "#3b82f6" }}
              transition={{ backgroundColor: { duration: 0.2 } }}
              className="p-1 size-fit border-2 border-solid border-blue-500 text-black dark:text-white"
            >
              <p className="flex justify-center space-x-2 font-semibold">See Live</p>
            </motion.a>
          )}
          <motion.a
            href={node.source}
            whileHover={{ backgroundColor: "#3b82f6" }}
            whileTap={{ backgroundColor: "#3b82f6" }}
            transition={{ backgroundColor: { duration: 0.2 } }}
            className="p-1 size-fit border-2 border-solid border-blue-500 text-black dark:text-white"
          >
            <p className="flex justify-center space-x-2 font-semibold">Read More</p>
          </motion.a>
        </div>
        <TechBar tech={node.tech} pos={pos} />
      </div>
    </motion.div>
  );
}
