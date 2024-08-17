import { ImageDataLike } from "gatsby-plugin-image";

export type Node = {
  frontmatter: {
    slug: string
    title: string;
    live: string;
    source: string;
    hero_image: ImageDataLike | null;
    hero_image_alt: string;
    info: string
  };
  excerpt: string;
  id: string;
}

export type SkillNode = {
  name: string;
  icon: string;
}

export type Skills = {
  allSkillsJson: {
    nodes: SkillNode[]
  }
}
