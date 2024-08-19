import React from "react";
import { motion } from "framer-motion";
import { ProjectNode } from "../../scripts/types";
import Image from "next/image";

export default function ProjectCard2({ node, pos }: { node: ProjectNode; pos: "left" | "right" }) {
  return (
    <motion.div
      className={`p-2 min-h-64 w-full grid grid-cols-1 md:grid-cols-2 gap-2 lg:max-w-[65%] text-sm md:text-base dark:bg-slate-800 ${pos === "left" ? "self-start" : "self-end"} shadow-lg`}
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
        <div
          className={`flex overflow-hidden justify-end items-center space-x-1 ${pos === "right" ? "md:col-start-1 md:row-start-1 md:justify-start" : ""}`}
        >
          <i className="devicon-javascript-plain text-lg"></i>
          <i className="devicon-materialui-plain text-lg"></i>
          <i className="devicon-react-plain text-lg"></i>
          <i className="devicon-css3-plain text-lg"></i>
          <i className="devicon-html5-plain text-lg"></i>
        </div>
      </div>
    </motion.div>
  );
}
