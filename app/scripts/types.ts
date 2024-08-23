export type TechItem = {
  icon: string;
  name: string;
};

export type ProjectNode = {
  title: string;
  live: string;
  source: string;
  hero_image: string | null;
  hero_image_alt: string;
  info: string;
  tech: SkillNode[];
};

export type SkillNode = {
  name: string;
  icon: string;
};

export type Skills = {
  allSkillsJson: {
    nodes: SkillNode[];
  };
};
