import React from "react"
import { motion } from "framer-motion"
import { Node } from "../pages"
import { StaticImage } from "gatsby-plugin-image"
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/solid"


export default function ProjectCard({ node }: { node: Node }) {
  return (
    <motion.div
      className="px-2 py-1 min-h-64 flex flex-col justify-between rounded-sm ring-2 ring-opacity-10 ring-black dark:ring-gray-700"
    // whileHover={{ scale: 1.02 }}
    >

      <h1 className="font-medium text-lg">{node.frontmatter.title}</h1>

      <div className="mb-5 flex justify-center items-center"><StaticImage src="../images/icon.png" alt="icon" objectFit="contain" className="max-h-24" /></div>

      <p className="my-4">{node.excerpt}</p>

      <div className="flex justify-around">
        <a href={node.frontmatter.live} className="w-1/3">
          <motion.button className="px-4 py-2 w-full rounded-full bg-blue-500 text-black dark:text-white">
            <p className="flex justify-center space-x-2"><span>Live</span> <GlobeAltIcon className="w-6" /></p>
          </motion.button>
        </a>
        <a href={node.frontmatter.source} className="w-1/3">
          <motion.button className="px-4 py-2 w-full rounded-full bg-black text-white dark:bg-white dark:text-black">
            <p className="flex justify-center space-x-2"><span>Source</span> <CodeBracketIcon className="w-6" /></p>
          </motion.button>
        </a>
      </div>
    </motion.div>
  )
}
