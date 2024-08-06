import React from "react"
import { motion } from "framer-motion"
import { Node } from "../pages"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid"


export default function ProjectCard({ node }: { node: Node }) {
  const imageData = getImage(node.frontmatter.hero_image)

  return (
    <motion.div
      className="px-2 py-1 min-h-64 flex flex-col justify-between"
    >

      <h1 className="font-medium text-lg">{node.frontmatter.title}</h1>

      <div className="mb-5 flex justify-center items-center">{imageData && <GatsbyImage image={imageData} alt="icon" objectFit="contain" className="max-h-24" />}</div>

      <p className="my-4">{node.excerpt}</p>

      <div className="flex justify-end space-x-4">
        <a href={node.frontmatter.live} className="w-1/3 max-w-32">
          <motion.button className="px-4 py-2 w-full rounded-full bg-blue-500 text-black dark:text-white">
            <p className="flex justify-center space-x-2"><span>Live</span> <GlobeAltIcon className="w-6" /></p>
          </motion.button>
        </a>
        <a href={node.frontmatter.source} className="w-1/3 max-w-32">
          <motion.button className="px-4 py-2 w-full rounded-full bg-black text-white dark:bg-white dark:text-black">
            <p className="flex justify-center space-x-2"><span>Source</span> <CodeBracketIcon className="w-6" /></p>
          </motion.button>
        </a>
      </div>
    </motion.div>
  )
}
