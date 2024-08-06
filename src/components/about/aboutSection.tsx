import React from "react";
import { motion } from "framer-motion";
import SkillsSection from "./skillsSection";



export default function AboutSection() {
  return (
    <section id="about" className="pt-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
        className="mb-20 text-center">
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
        Random Random Random Random Random Random Random Random Random Random
      </motion.p>

      <SkillsSection />

    </section>
  )
}
