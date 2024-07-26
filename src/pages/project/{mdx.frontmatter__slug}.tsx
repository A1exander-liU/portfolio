import React from "react";
import Layout from "../../components/layout";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { toTitleCase } from "../../scripts/stringUtils";

type DataProps = {
  mdx: {
    frontmatter: {
      title: string;
      slug: string;
      tech: string[];
      hero_image: Parameters<typeof getImage>[0];
      hero_image_alt: string;
    };
    id: string;
  };
};

const ProjectInfo: React.FC<PageProps<DataProps>> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <h1 className="font-medium text-2xl">{data.mdx.frontmatter.title}</h1>
      <div className="my-4">
        {image && (
          <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        )}
      </div>

      <div className="px-4">
        <div className="w-full mb-2 flex justify-start space-x-2">
          {data.mdx.frontmatter.tech.map((t, i) => <div key={i} className="px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-600">{toTitleCase(t)}</div>)}
        </div>
        {children}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        tech
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
      }
      id
    }
  }
`;

export default ProjectInfo;
