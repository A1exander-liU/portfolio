import * as React from "react"; import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import { getImage } from "gatsby-plugin-image";
import AboutSection from "../components/about/aboutSection";
import ProjectCard from "../components/projectCard";
import "devicon/devicon.min.css"


export type Node = {
  frontmatter: {
    slug: string
    title: string;
    live: string;
    source: string;
    hero_image: Parameters<typeof getImage>[0];
    hero_image_alt: string;
    info: string
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
      <section className="px-10 min-h-96 w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
        <h2 className="my-10 text-4xl text-center">Hi, I'm Alexander a Full-Stack Developer</h2>
        <Link to="/#about">
          <motion.button className="px-2 py-1 border-2 border-solid border-blue-400">See More</motion.button>
        </Link>
      </section>

      <AboutSection />

      <h1 id="projects" className="font-bold text-4xl mb-5 pt-20">Projects</h1>
      <section className="px-2 w-full flex flex-col space-y-40">
        {data.allMdx.nodes.map((node, i) => (
          <ProjectCard key={i} node={node} pos={i % 2 == 0 ? "left" : "right"} />
        ))}
      </section>


      <section id="contact" className="py-1 mt-20 h-24 flex justify-center items-center bg-slate-900 w-full space-x-6">
        <a href="https://github.com/A1exander-liU">
          <i className="devicon-github-original text-white text-4xl"></i>
        </a>
        <a href="https://linkedin.com/in/alexanderliu00">
          <i className="devicon-linkedin-plain colored text-4xl"></i>
        </a>
      </section>

    </Layout >
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
          info
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home | Alexander Liu</title>;
