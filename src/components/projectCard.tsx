import React from "react"
import { motion } from "framer-motion"
import { Node } from "../pages"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid"


export default function ProjectCard({ node, pos }: { node: Node, pos: "left" | "right" }) {
  const imageData = getImage(node.frontmatter.hero_image)

  return (
    <motion.div
      className={`px-2 py-1 min-h-64 w-full lg:max-w-[60%] flex flex-col justify-between ${pos === "left" ? "self-start" : "self-end"}`}
    >

      <h1 className="font-medium text-lg">{node.frontmatter.title}</h1>

      <div className="mb-5 flex justify-center items-center">{imageData && <GatsbyImage image={imageData} alt="icon" objectFit="contain" className="max-h-24" />}</div>

      <p className="my-4">{node.frontmatter.info}</p>

      <div className="flex justify-end space-x-4">
        {node.frontmatter.live &&
          <motion.a
            href={node.frontmatter.live}
            whileHover={{ backgroundColor: "#3b82f6" }}
            whileTap={{ backgroundColor: "#3b82f6" }}
            transition={{ backgroundColor: { duration: 0.2 } }}
            className="p-2 w-1/4 max-w-32 border-2 border-solid border-blue-500 text-black dark:text-white">
            <p className="flex justify-center space-x-2"><span>Live</span> { /*<GlobeAltIcon className="w-6" />*/}</p>
          </motion.a>

        }
        <motion.a
          href={node.frontmatter.source}
          whileHover={{ backgroundColor: "#3b82f6" }}
          whileTap={{ backgroundColor: "#3b82f6" }}
          transition={{ backgroundColor: { duration: 0.2 } }}
          className="p-2 w-1/4 max-w-32 border-2 border-solid border-blue-500 text-black dark:text-white">
          <p className="flex justify-center space-x-2"><span>Source</span> {/*<CodeBracketIcon className="w-6" />*/}</p>
        </motion.a>
      </div>
    </motion.div >
  )
}
