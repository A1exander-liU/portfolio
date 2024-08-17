import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import AboutSection from "../components/about/aboutSection";
import "devicon/devicon.min.css"
import HeadData from "../components/headData";
import ContactSection from "../components/contactSection";
import ProjectSection from "../components/project/projectSection";
import { Node } from "../scripts/types";


type DataProps = {
  allMdx: {
    nodes: Node[];
  };
};

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      {
        /*
         * Add tileing backdrop instead of gradient
         * Add backdrop/transparent container overlaying hero image
         */
      }
      { /* Add some kind of image here to differentiate rest of page */}
      <section className="px-10 min-h-96 w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
        <h2 className="my-10 text-4xl text-center">Hi, I'm Alexander a Full-Stack Developer</h2>
        <Link to="/#about">
          <motion.button className="px-2 py-1 border-2 border-solid border-blue-400">See More</motion.button>
        </Link>
      </section>
      <AboutSection />
      <ProjectSection nodes={data.allMdx.nodes} />
      <ContactSection />

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

export const Head: HeadFC = () => <HeadData page="Home" />
