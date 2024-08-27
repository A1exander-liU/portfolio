import { isContext } from "vm";
import { SkillNode } from "../scripts/types";
export const skillsMap = {
  typescript: {
    name: "Typescript",
    icon: "typescript-plain",
  },
  javascript: {
    name: "Javascript",
    icon: "javascript-plain",
  },
  python: {
    name: "Python",
    icon: "python-plain",
  },
  java: {
    name: "Java",
    icon: "java-plain",
  },
  go: {
    name: "Go",
    icon: "go-plain-wordmark",
  },
  html: {
    name: "HTML",
    icon: "html5-plain",
  },
  css: {
    name: "CSS",
    icon: "css3-plain",
  },
  angular: {
    name: "Angular",
    icon: "angular-plain",
  },
  react: {
    name: "React",
    icon: "react-plain",
  },
  taildwindcss: {
    name: "TailwindCSS",
    icon: "tailwindcss-plain",
  },
  nestjs: {
    name: "NestJS",
    icon: "nestjs-plain",
  },
  express: {
    name: "ExpressJS",
    icon: "express-original",
  },
  django: {
    name: "Django",
    icon: "django-plain",
  },
  flask: {
    name: "Flask",
    icon: "flask-original",
  },
  nextjs: {
    name: "NextJS",
    icon: "nextjs-plain",
  },
  firebase: {
    name: "Firebase",
    icon: "firebase-plain",
  },
  materialui: {
    name: "MaterialUI",
    icon: "materialui-plain",
  },
  vite: {
    name: "Vite",
    icon: "vite-plain",
  },
  redis: {
    name: "Redis",
    icon: "redis-plain",
  },
  supabase: {
    name: "Supabase",
    icon: "supabase-plain",
  },
  hugginface: {
    name: "HugginFace",
    icon: "",
  },
  chatgpt: {
    name: "ChatGPT",
    icon: "",
  },
  aws: {
    name: "AWS",
    icon: "amazonwebservices-plain-wordmark",
  },
};

export const skills: SkillNode[] = [
  skillsMap.typescript,
  skillsMap.javascript,
  skillsMap.python,
  skillsMap.java,
  skillsMap.go,
  skillsMap.angular,
  skillsMap.react,
  skillsMap.taildwindcss,
  skillsMap.nestjs,
  skillsMap.express,
  skillsMap.django,
];
