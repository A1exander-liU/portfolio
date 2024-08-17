"use client";

import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import * as React from "react";
import AboutSection from "./components/about/aboutSection";
import ContactSection from "./components/contactSection";
import ProjectSection from "./components/project/projectSection";
import Link from "next/link";
import { projects } from "./data/projects";
import { info } from "./data/info";

export default function Home() {
  return (
    <>
      <section className="px-10 min-h-96 w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
        <h2 className="my-10 text-4xl text-center">{`Hi, I'm ${info.name}`}</h2>
        <Link href="/#about">
          <motion.button className="px-2 py-1 border-2 border-solid border-blue-400">See More</motion.button>
        </Link>
      </section>
      <AboutSection />
      <ProjectSection nodes={projects} />
      <ContactSection />
    </>
  );
}
