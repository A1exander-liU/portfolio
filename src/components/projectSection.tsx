import React from "react"
import ProjectCard from "./project/projectCard"
import { Node } from "../pages"


export default function ProjectSection({ nodes }: { nodes: Node[] }) {
  return (
    <>
      <h1 id="projects" className="font-bold text-4xl mb-5 pt-20">Projects</h1>
      <section className="px-10 w-full flex flex-col space-y-20">
        {nodes.map((node, i) => (
          <ProjectCard key={i} node={node} pos={i % 2 == 0 ? "left" : "right"} />
        ))}
      </section>
    </>
  )
}
