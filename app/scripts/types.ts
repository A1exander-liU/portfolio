export type ProjectNode = {
  title: string;
  live: string;
  source: string;
  hero_image: string | null;
  hero_image_alt: string;
  info: string;
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
