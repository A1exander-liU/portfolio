import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./skillsSection";

export default function AboutSection() {
  return (
    <section id="about" className="pt-20 px-10 lg:flex lg:justify-center lg:space-x-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.25 }}
        viewport={{ once: true }}
        className="mb-10 lg:w-1/2"
      >
        Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random
      </motion.div>

      <SkillsSection />
    </section>
  );
}
