import { Enteries } from "@/constants/entiries.constants";
import Home, { IHome } from "@/modules/Home";
import ContentfulService from "@/services/contentful.service";

const MePage = (props: any) => {
  return <Home {...props} />;
};

export default MePage;

export async function getStaticProps() {
  const contentfulService = new ContentfulService();
  const data = await contentfulService.getEntries(Enteries.homePage);
  return {
    props: {
      homePage: data.items[0].fields,
    },
  };
}
