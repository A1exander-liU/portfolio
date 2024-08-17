import { ProjectNode } from "../scripts/types";

const pokestore: ProjectNode = {
  title: "PokeStore",
  live: "https://mini-ebon.vercel.app",
  source: "https://github.com/A1exander-liU/mini/tree/main/e-commerce",
  hero_image: "/project_images/github-profile-searcher.png",
  hero_image_alt: "gatsby icon",
  info: "Fake e-commerce store for purchasing pokemon related items.",
};

const interviewApp: ProjectNode = {
  title: "AI-Powered Interview App",
  live: "https://mini-ebon.vercel.app",
  source: "https://github.com/mScrub/Drinking-Wine---Hackathon",
  hero_image: "/project_images/github-profile-searcher.png",
  hero_image_alt: "gatsby icon",
  info: "Interview practice app with AI interviewer utilizing text-to-speech, speech-to-text and ChatGPT",
};

const githubProfileSearcher: ProjectNode = {
  title: "Github Profile Searcher",
  live: "https://mini-ebon.vercel.app",
  source: "https://github.com/A1exander-liU/mini/tree/main/github-profile-searcher",
  hero_image: "/project_images/github-profile-searcher.png",
  hero_image_alt: "Alt",
  info: "App to search and view Github user info and a history of their repositories",
};

export const projects: ProjectNode[] = [githubProfileSearcher, interviewApp, pokestore];
