import React from "react"
import { motion } from "framer-motion"
import { Node } from "../pages"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function ProjectCard({ node, pos }: { node: Node, pos: "left" | "right" }) {
  const imageData = getImage(node.frontmatter.hero_image)

  return (
    <motion.div
      className={`px-2 py-1 min-h-64 w-full lg:max-w-[60%] flex flex-col sm:flex-row justify-between ${pos === "left" ? "self-start" : "self-end"}`}
    >
      <div className={`flex items-center ${pos === "left" ? "sm:order-last" : ""} sm:w-3/5 bg-blue-500 border-b-4 border-solid border-blue-500 sm:border-4`}>
        {imageData && <GatsbyImage image={imageData} alt="icon" objectFit="contain" className="h-[90%]" />}
      </div>

      <div className={`px-2 pb-4 sm:w-2/5 flex flex-col space-y-4 bg-black text-sm sm:text-base`}>
        <h2 className="text-lg font-semibold sm:text-xl">{node.frontmatter.title}</h2>
        <p className="text-gray-300 sm:text-lg">{node.frontmatter.info}</p>

        <div className="flex flex-row sm:flex-col space-x-2 sm:space-y-2 sm:space-x-0">
          {node.frontmatter.live &&
            <motion.a
              href={node.frontmatter.live}
              whileHover={{ backgroundColor: "#3b82f6" }}
              whileTap={{ backgroundColor: "#3b82f6" }}
              transition={{ backgroundColor: { duration: 0.2 } }}
              className="p-1 w-fit border-2 border-solid border-blue-500 text-black dark:text-white">
              <p className="flex justify-center space-x-2 font-semibold">See Live</p>
            </motion.a>
          }
          <motion.a
            href={node.frontmatter.source}
            whileHover={{ backgroundColor: "#3b82f6" }}
            whileTap={{ backgroundColor: "#3b82f6" }}
            transition={{ backgroundColor: { duration: 0.2 } }}
            className="p-1 w-fit border-2 border-solid border-blue-500 text-black dark:text-white">
            <p className="flex justify-center space-x-2 font-semibold">Read More</p>
          </motion.a>
        </div>
      </div>
    </motion.div >
  )
}
