import React from "react";
import { motion } from "framer-motion";
import { ProjectNode } from "../../scripts/types";
import Image from "next/image";

export default function ProjectCard({ node, pos }: { node: ProjectNode; pos: "left" | "right" }) {
  return (
    <motion.div
      className={`px-2 py-1 min-h-64 w-full lg:max-w-[60%] flex flex-col sm:flex-row justify-between ${pos === "left" ? "self-start" : "self-end"}`}
    >
      <div
        className={`flex items-center ${pos === "left" ? "sm:order-last" : ""} sm:w-3/5 bg-blue-500 border-b-4 border-solid border-blue-500 sm:border-4`}
      >
        {node.hero_image && (
          <Image
            src={node.hero_image}
            alt={node.hero_image_alt}
            width={1680}
            height={800}
            className="h-[90%] object-contain"
          />
        )}
      </div>

      <div className={`px-2 pb-4 sm:w-2/5 flex flex-col space-y-4 dark:bg-gray-700 text-sm sm:text-base`}>
        <h2 className="text-lg font-semibold sm:text-xl">{node.title}</h2>
        <p className="text-gray-300 sm:text-lg">{node.info}</p>

        <div className="flex flex-row sm:flex-col space-x-2 sm:space-y-2 sm:space-x-0">
          {node.live && (
            <motion.a
              href={node.live}
              whileHover={{ backgroundColor: "#3b82f6" }}
              whileTap={{ backgroundColor: "#3b82f6" }}
              transition={{ backgroundColor: { duration: 0.2 } }}
              className="p-1 w-fit border-2 border-solid border-blue-500 text-black dark:text-white"
            >
              <p className="flex justify-center space-x-2 font-semibold">See Live</p>
            </motion.a>
          )}
          <motion.a
            href={node.source}
            whileHover={{ backgroundColor: "#3b82f6" }}
            whileTap={{ backgroundColor: "#3b82f6" }}
            transition={{ backgroundColor: { duration: 0.2 } }}
            className="p-1 w-fit border-2 border-solid border-blue-500 text-black dark:text-white"
          >
            <p className="flex justify-center space-x-2 font-semibold">Read More</p>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
