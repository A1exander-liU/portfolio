import React from "react"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import 'devicon/devicon.min.css';


type SkillItemProps = { name: string, icon?: string }
function SkillItem({ name, icon }: SkillItemProps) {
  console.log(icon)
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.75, delay: Math.random() } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col pt-1 max-w-28 justify-center items-center space-y-1 text-xs"
    >

      <div className="p-1 rounded-md dark:bg-white">
        <img src={icon} alt={name} className="w-full h-full" />
      </div>
      <p>{name}</p>
    </motion.div>
  )
}

type Skills = {
  allSkillsJson: {
    nodes: { name: string, icon: string }[]
  }
}
export default function SkillsSection() {
  const skillsData: Skills = useStaticQuery(graphql`
    query SkillsQuery {
      allSkillsJson {
        nodes {
          name
          icon
        }
      }
    }
  `)

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-3">
          {skillsData.allSkillsJson.nodes.map((skill, i) => (
            <SkillItem key={i} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </>
  )
}


