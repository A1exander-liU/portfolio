import { ProjectNode } from "../scripts/types";
import { skillsMap } from "./skills";

const projectList = [
  {
    title: "Github Profile Searcher",
    live: "https://mini-github-profile-searcher.vercel.app",
    source: "https://github.com/A1exander-liU/mini/tree/main/github-profile-searcher",
    hero_image: "/project_images/github-profile-searcher.png",
    hero_image_alt: "Part of a github user's info and a timeline of their created repositories",
    info: "App to search and view Github user info and a history of their repositories",
    tech: [skillsMap.react, skillsMap.materialui, skillsMap.vite],
  },

  {
    title: "AI-Powered Interview App",
    live: "",
    source: "https://github.com/mScrub/Drinking-Wine---Hackathon",
    hero_image: "/project_images/ai-interview-app.png",
    hero_image_alt: "Chat interface",
    info: "Interview practice app with AI interviewer utilizing text-to-speech, speech-to-text and ChatGPT",
    tech: [skillsMap.react, skillsMap.django, skillsMap.firebase],
  },

  {
    title: "PokeStore",
    live: "https://mini-poke-store.vercel.app",
    source: "https://github.com/A1exander-liU/mini/tree/main/e-commerce",
    hero_image: "/project_images/pokestore.png",
    hero_image_alt: "Page showing all the products",
    info: "Fake e-commerce store for purchasing pokemon related items.",
    tech: [skillsMap.angular, skillsMap.nestjs, skillsMap.taildwindcss],
  },
];

const pokestore: ProjectNode = {
  title: "PokeStore",
  live: "https://mini-poke-store.vercel.app",
  source: "https://github.com/A1exander-liU/mini/tree/main/e-commerce",
  hero_image: "/project_images/pokestore.png",
  hero_image_alt: "Page showing all the products",
  info: "Fake e-commerce store for purchasing pokemon related items.",
  tech: [skillsMap.angular, skillsMap.nestjs, skillsMap.taildwindcss],
};

const interviewApp: ProjectNode = {
  title: "AI-Powered Interview App",
  live: "",
  source: "https://github.com/mScrub/Drinking-Wine---Hackathon",
  hero_image: "/project_images/ai-interview-app.png",
  hero_image_alt: "Chat interface",
  info: "Interview practice app with AI interviewer utilizing text-to-speech, speech-to-text and ChatGPT",
  tech: [skillsMap.react, skillsMap.django, skillsMap.firebase],
};

const githubProfileSearcher: ProjectNode = {
  title: "Github Profile Searcher",
  live: "https://mini-github-profile-searcher.vercel.app",
  source: "https://github.com/A1exander-liU/mini/tree/main/github-profile-searcher",
  hero_image: "/project_images/github-profile-searcher.png",
  hero_image_alt: "Part of a github user's info and a timeline of their created repositories",
  info: "App to search and view Github user info and a history of their repositories",
  tech: [skillsMap.react, skillsMap.materialui, skillsMap.vite],
};

export const projects: ProjectNode[] = projectList.slice(0, 3);
export const allProjects: ProjectNode[] = projectList;
