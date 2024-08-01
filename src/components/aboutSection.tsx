import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Typscript", "Javascript", "Python", "Java", "Go", "Angular", "React", "TailwindCSS", "NestJS", "ExpressJS", "Django"
]


export default function AboutSection() {
  return (
    <div id="about" className="pt-20">
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

      <div>
        <h2 className="w-full text-center text-3xl font-bold">Skills</h2>
        <div className="px-4 grid grid-cols-4 gap-4">
          {skills.map((skill, i) =>
            <motion.div key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: Math.random() }}
              viewport={{ once: true }}
              className="px-2 py-1 flex justify-center items-center border-2 border-solid border-blue-500 rounded-sm">{skill}</motion.div>
          )}
        </div>
      </div>

    </div>
  )
}
