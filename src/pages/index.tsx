import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import { Parallax } from "react-scroll-parallax";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

type Node = {
  frontmatter: {
    slug: string
    title: string;
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
      <Parallax opacity={[1, 0]} startScroll={0} endScroll={400}>
        <p id="about" className="mb-20">
          Random TextRandom Random Random Random Random Random Random Random
          Random Random RandomRandom Random Random Random Random Random Random
          Random Random Random Random Random Random Random Random Random Random
          Random Random Random Random Random Random Random Random Random Random
          Random Random Random Random Random Random Random Random Random Random
          Random Random Random Random
        </p>
      </Parallax>

      <h1 id="projects" className="font-medium text-xl mb-5">Projects</h1>

      <div className="px-10 grid grid-cols-1 gap-40">
        {data.allMdx.nodes.map((node) => (
          <Link to={`/project/${node.frontmatter.slug}`}>
            <div key={node.id} className="px-2 py-1 min-h-64 flex flex-col justify-between rounded-sm ring-2 ring-opacity-10 ring-black dark:ring-gray-700 hover:bg-slate-300 dark:hover:bg-slate-700">
              <h1 className="font-medium text-lg">{node.frontmatter.title}</h1>

              <div className="mb-5 flex justify-center items-center"><StaticImage src="../images/icon.png" alt="icon" objectFit="contain" className="max-h-24" /></div>

              <p>{node.excerpt}</p>
            </div>
          </Link>
        ))}
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

export const Head: HeadFC = () => <title>Home Page</title>;
