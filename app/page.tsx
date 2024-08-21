"use client";

import "devicon/devicon.min.css";
import { motion } from "framer-motion";
import * as React from "react";
import AboutSection from "./components/about/aboutSection";
import ContactSection from "./components/contactSection";
import ProjectSection from "./components/project/projectSection";
import Link from "next/link";
import Title from "./components/title";
import { projects } from "./data/projects";
import { info } from "./data/info";

export default function Home() {
  return (
    <>
      <section className="px-10 h-screen w-full flex flex-col items-center bg-black">
        <Title name={info.name} />
        <motion.button
          initial={{ opacity: 0, y: "20vh" }}
          whileHover={{ backgroundColor: "#3b82f6" }}
          whileTap={{ backgroundColor: "#3b82f6" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            opacity: { duration: 0, delay: 3.25 },
            backgroundColor: { duration: 0.2 },
            y: { duration: 0.75, delay: 3.25 },
          }}
          className="px-2 py-1 border-2 border-solid border-blue-500"
        >
          <Link href="/#about">See More</Link>
        </motion.button>
      </section>
      <AboutSection />
      <ProjectSection nodes={projects} />
      <ContactSection />
    </>
  );
}
