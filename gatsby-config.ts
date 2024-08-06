import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `alex`,
    description: "portfolio site",
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-mdx",
    `gatsby-transformer-json`,
    "gatsby-transformer-sharp",
    { resolve: "gatsby-source-filesystem", options: { name: "projects", path: `${__dirname}/projects` } },
    { resolve: "gatsby-source-filesystem", options: { name: "skills", path: `${__dirname}/data/skills.json` } },
  ],
};

export default config;
