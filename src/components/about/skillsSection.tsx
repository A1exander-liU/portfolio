import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"


type SkillItemProps = { name: string, icon?: string }
function SkillItem({ name, icon }: SkillItemProps) {
  console.log(icon)
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.75, delay: Math.random() } }}
      viewport={{ once: true }}
      className="flex flex-col pt-1 w-16 md:w-20 justify-center items-center space-y-1 text-sm"
    >

      <motion.div
        whileHover={{ scale: 0.95 }}
        className="p-1 rounded-md dark:bg-white">
        <img src={icon} alt={name} className="w-full h-full" />
      </motion.div>
      <p>{name}</p>
    </motion.div>
  )
}
type SkillNode = {
  name: string;
  icon: string;
}
type Skills = {
  allSkillsJson: {
    nodes: SkillNode[]
  }
}
export default function SkillsSection() {
  const [skillGroups, setSkillGroups] = useState<SkillNode[][]>([])
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

  useEffect(() => {

    const temp: SkillNode[][] = []
    for (let i = 0; i < skillsData.allSkillsJson.nodes.length; i += 4) {
      console.log(i, i + 4)
      temp.push(skillsData.allSkillsJson.nodes.slice(i, i + 4))

    }
    console.log(temp)
    setSkillGroups(temp)
  }, [])


  return (
    <>
      <div className="flex flex-col space-y-2">
        {
          skillGroups.map((skillGroup, i) => (
            <div key={i} className={`flex justify-center space-x-2`}>
              {skillGroup.map((skill, j) =>
                <SkillItem key={j} name={skill.name} icon={skill.icon} />
              )}
            </div>
          ))
        }
      </div>
    </>
  )
}


