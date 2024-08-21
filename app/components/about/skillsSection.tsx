import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SkillNode } from "../../scripts/types";
import { skills } from "@/app/data/skills";

type SkillItemProps = { name: string; icon: string };
function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 1.25, delay: Math.random() * 0.6 + 1 } }}
      viewport={{ once: true }}
      className="flex flex-col pt-1 w-16 md:w-20 justify-center items-center space-y-1 text-sm"
    >
      <motion.i
        whileHover={{ scale: 0.9 }}
        className={`devicon-${icon} text-5xl text-blue-700 dark:text-blue-300`}
      ></motion.i>
      <p>{name}</p>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [skillGroups, setSkillGroups] = useState<SkillNode[][]>([]);

  useEffect(() => {
    const temp: SkillNode[][] = [];
    for (let i = 0; i < skills.length; i += 4) {
      temp.push(skills.slice(i, i + 4));
    }
    setSkillGroups(temp);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {skillGroups.map((skillGroup, i) => (
          <div key={i} className={`flex justify-center gap-4`}>
            {skillGroup.map((skill, j) => (
              <SkillItem key={j} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
