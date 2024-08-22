"use client";

import React from "react";
import { projects } from "../data/projects";
import ProjectCard2 from "../components/project/projectCard2";

export default function Projects() {
  return (
    <>
      <div className="">
        <h1 className="text-center">Projects</h1>
        <section className="p-4 grid gap-2 place-items-stretch grid-cols-1 min-[900px]:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard2 key={i} node={project} pos="left" />
          ))}
        </section>
      </div>
    </>
  );
}
