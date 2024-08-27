import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProjectNode } from "../../scripts/types";
import Image from "next/image";
import TechBar from "./TechBar";
import { useTheme } from "next-themes";

export default function ProjectCard2({ node, pos }: { node: ProjectNode; pos: "left" | "right" }) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [placeholder, setPlaceholder] = useState<string>("");
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (node.hero_image) return;
    console.log(resolvedTheme);
    setPlaceholder(`/project_images/placeholder_${resolvedTheme}.png`);
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className={`p-2 min-h-64 size-full grid grid-cols-1 gap-1 border-x-2 border-t-2 border-solid border-slate-200 dark:border-slate-700 dark:border-2 text-sm md:text-base dark:bg-slate-900 ${pos === "left" ? "self-start" : "self-end"} shadow-lg`}
    >
      <div className={`relative grid grid-rows-subgrid row-start-1 col-start-1 row-span-4`}>
        <div className="flex flex-col-reverse bg-gradient-to-t from-black/50 to-black/0 to-30%">
          <h2 className="p-2 text-lg text-white font-semibold md:text-xl">{node.title}</h2>
        </div>
        <hr className="mb-2 w-full border-2 border-blue-500" />
        <TechBar tech={node.tech} />
        <p className="p-1 text-slate-500 dark:text-slate-400 lg:text-lg">{node.info}</p>
      </div>

      <Image
        src={node.hero_image || placeholder}
        alt={node.hero_image_alt}
        width={1680}
        height={700}
        priority={true}
        className={`size-full row-start-1 col-start-1`}
      />

      <div className={`h-fit grid gap-2 col-span-full`}>
        <div className={`flex gap-2 ${pos === "right" ? "lg:justify-end" : ""}`}>
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
      </div>
    </motion.div>
  );
}
