import React from "react"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"


type SkillItemProps = { name: string, icon?: string }
function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.75, delay: Math.random() } }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col pt-1 justify-center items-center border-2 border-solid border-blue-500 rounded-sm text-xs"
    >
      <img src={`/assets/icons/${icon}`} alt="icon" className="w-3/4" />
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
      {/* Make resposive so elements dont change size */}
      <div className="px-10 grid grid-cols-4 place-items-stretch gap-3">
        {skillsData.allSkillsJson.nodes.map((skill, i) => (
          <SkillItem key={i} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </>
  )
}


