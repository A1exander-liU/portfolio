"use client";

import React from "react";
import { projects } from "../data/projects";
import ProjectCard2 from "../components/project/projectCard2";
import { info } from "../data/info";

export default function Projects() {
  return (
    <>
      <section className="p-4 grid grid-cols-1 gap-2 place-items-stretch min-[900px]:grid-cols-2 2xl:grid-cols-3">
        <title>{`Projects | ${info.name}`}</title>
        {projects.map((project, i) => (
          <ProjectCard2 key={i} node={project} pos="left" />
        ))}
      </section>
    </>
  );
}
