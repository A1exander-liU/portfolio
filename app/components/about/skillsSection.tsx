import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SkillNode } from "../../scripts/types";
import { skills } from "@/app/data/skills";
import Image from "next/image";

type SkillItemProps = { name: string; icon?: string };
function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ opacity: { duration: 0.5, delay: Math.random() * 0.6 } }}
      viewport={{ once: true }}
      className="flex flex-col pt-1 w-14 md:w-16 justify-center items-center space-y-1 text-sm"
    >
      <motion.div whileHover={{ scale: 0.95 }} className="p-1 rounded-md dark:bg-white">
        {icon && <Image src={icon} width={50} height={50} alt="name" className="size-full" />}
      </motion.div>
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
      <div className="flex flex-col space-y-2">
        {skillGroups.map((skillGroup, i) => (
          <div key={i} className={`flex justify-center space-x-4`}>
            {skillGroup.map((skill, j) => (
              <SkillItem key={j} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
