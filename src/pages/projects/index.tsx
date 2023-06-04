import { Enteries } from "@/constants/entiries.constants";
import Projects, { IContentfulProjectResponse } from "@/modules/Projects";
import ContentfulService from "@/services/contentful.service";
import type Contentful from "contentful";

interface IProjectPage {
  products: Contentful.EntrySkeletonType<IContentfulProjectResponse>[];
}

const ProjectPage = (props: IProjectPage) => {
  return <Projects projects={props.products} />;
};

// Get the Product List from contentful
export const getStaticProps = async () => {
  const contentfulService = new ContentfulService();
  const contentfulResponse = await contentfulService.getEntries(
    Enteries.projectsPage
  );
  const result = contentfulResponse.items[0];
  return {
    props: {
      products: result?.fields?.products || [],
    },
  };
};

export default ProjectPage;
