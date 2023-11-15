import { Enteries } from "@/constants/entiries.constants";
import Timeline, { ITimelineItem } from "@/modules/Timeline";
import ContentfulService from "@/services/contentful.service";
import type Contentful from "contentful";

interface ITimelinePage {
  timelines: Contentful.EntrySkeletonType<ITimelineItem>[];
}

const TimelinePage = (props: ITimelinePage) => {
  return <Timeline timelines={props.timelines} />;
};

export const getStaticProps = async () => {
  const contentfulService = new ContentfulService();
  const data = await contentfulService.getEntries(Enteries.timelinePage);
  return {
    props: {
      timelines: data.items[0].fields.timelines,
    },
  };
};

export default TimelinePage;
