import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./skillsSection";
import { info } from "@/app/data/info";

export default function AboutSection() {
  return (
    <>
      <h1 id="about" className="flex flex-col items-center font-bold text-4xl mb-8 pt-14 md:text-5xl">
        About
        <hr className="mt-1 w-3/5 border-2 border-blue-500" />
      </h1>
      <section className="px-10 flex flex-col xl:flex-row items-center xl:justify-center lg:space-x-10 xl:items-start">
        <motion.div className="mb-10 md:text-xl xl:w-1/2">{info.about}</motion.div>
        <SkillsSection />
      </section>
    </>
  );
}
