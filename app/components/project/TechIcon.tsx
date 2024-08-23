import React from "react";
import { forwardRef } from "react";
import { SkillNode } from "@/app/scripts/types";

// use forwardRef as headlessui dropdown passes ref to children
const TechIcon = forwardRef<HTMLDivElement, SkillNode>(({ icon, name }: SkillNode, ref) => (
  <div
    ref={ref}
    className="px-2 py-[1px] h-6 flex justify-center items-center space-x-1 border-[1px] border-solid border-slate-300 bg-slate-200 rounded-full dark:border-slate-500 dark:bg-slate-600"
  >
    <i className={`devicon-${icon} text-lg`}></i>
    <p className="text-xs">{name}</p>
  </div>
));
TechIcon.displayName = "TechIcon";

export default TechIcon;
