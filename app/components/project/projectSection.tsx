import React from "react";
import { ProjectNode } from "@/app/scripts/types";
import ProjectCard2 from "./projectCard2";

export default function ProjectSection({ nodes }: { nodes: ProjectNode[] }) {
  return (
    <>
      <h1 id="projects" className="flex flex-col items-center font-bold text-4xl mb-5 pt-20">
        Projects
        <hr className="mt-1 w-3/5 border-2 border-blue-500" />
      </h1>
      <section className="px-2 sm:px-10 w-full flex flex-col space-y-20">
        {nodes.map((node, i) => (
          <div key={i} className={`${i % 2 == 0 ? "self-start" : "self-end"} lg:max-w-[65%]`}>
            <ProjectCard2 node={node} pos={i % 2 == 0 ? "left" : "right"} />
          </div>
        ))}
      </section>
    </>
  );
}
