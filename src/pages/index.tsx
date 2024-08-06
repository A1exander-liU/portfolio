import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import { getImage, StaticImage } from "gatsby-plugin-image";
import AboutSection from "../components/about/aboutSection";
import ProjectCard from "../components/projectCard";


export type Node = {
  frontmatter: {
    slug: string
    title: string;
    live: string;
    source: string;
    hero_image: Parameters<typeof getImage>[0];
    hero_image_alt: string;
  };
  excerpt: string;
  id: string;
};

type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {

  return (
    <Layout>
      { /* Add some kind of image here to differentiate rest of page */}
      <section className="px-10 flex flex-col items-center">
        <h2 className="mb-10 text-4xl text-center">Hi, I'm Alexander a Full-Stack Developer</h2>
        <Link to="/#about">
          <motion.button className="px-2 py-1 border-2 border-solid border-blue-400">See More</motion.button>
        </Link>
      </section>

      <AboutSection />

      <h1 id="projects" className="font-bold text-3xl mb-5 pt-20">Projects</h1>
      <div className="px-2 grid grid-cols-1 gap-40">
        {data.allMdx.nodes.map((node, i) => (
          <ProjectCard key={i} node={node} />
        ))}
      </div>


      <h1 id="contact" className="pt-20">Contact</h1>
      <div>
        <p>Email: alexanderliu2016@gmail.com</p>
        <p>Github: https://github.com/A1exander-liU</p>
        <p>Linkedin:</p>
      </div>

      <div className="grid grid-cols-1">
        {/* <a href="https://iconscout.com/icons/react" className="underline text-sm" target="_blank">React</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="underline text-sm">Icon Mafia</a> on <a href="https://iconscout.com" className="underline text-sm">IconScout</a> */}
        {/* <a href="https://iconscout.com/icons/javascript" className="text-underline font-size-sm" target="_blank">Javascript</a> by <a href="https://iconscout.com/contributors/icon-mafia" className="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" className="text-underline font-size-sm">IconScout</a> */}
        {/* <a href="https://iconscout.com/icons/java" class="text-underline font-size-sm" target="_blank">Java</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
        {/* <a href="https://iconscout.com/icons/angular" class="text-underline font-size-sm" target="_blank">Angular</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
        {/* <a href="https://iconscout.com/icons/express" class="text-underline font-size-sm" target="_blank">Express</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
        {/* <a href="https://iconscout.com/icons/django" class="text-underline font-size-sm" target="_blank">Django</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm" target="_blank">Icon Mafia</a> */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
          live
          source
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Alexander Liu | Developer</title>;
