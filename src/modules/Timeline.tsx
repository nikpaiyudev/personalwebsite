import ProjectCard, { IProjectCard } from "@/components/ProjectCard";
import {
  Timeline as MaterialTimeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react/components/Timeline";
import { Typography } from "@material-tailwind/react/components/Typography";
import { FC } from "react";
import { FiGithub as GithubIcon } from "react-icons/fi";
import type Contentful from "contentful";

export interface ITimeline {
  timelines: Contentful.EntrySkeletonType<ITimelineItem>[];
}

export interface ITimelineItem {
  designation: string;
  timeframe: string;
  companyProjects: Contentful.EntrySkeletonType<IProjectCard>[];
  projects: Contentful.EntrySkeletonType<IProjectCard>[];
}

const Timeline: FC<ITimeline> = ({ timelines }) => {
    console.log(timelines);
  return (
    <div className="w-full flex justify-center margin-auto mt-10">
      {/* <div className="w-[32rem] ">
        <MaterialTimeline>
          {timelines.map((timeline) => {
            return (
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2">
                    <GithubIcon className="h-4 w-4" />
                  </TimelineIcon>
                  <div className="flex flex-col">
                    <Typography variant="h5" className={"text-white"}>
                      {timeline.fields.designation}
                    </Typography>
                    <Typography variant="h6" className={"text-white"}>
                      {timeline.fields.timeframe}
                    </Typography>
                  </div>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  {timeline?.fields?.companyProjects?.map((project) => {
                    return (
                      <ProjectCard
                        githubLink={project?.fields?.githubLink}
                        projectName={project?.fields?.projectName}
                        technologies={project?.fields?.technologies || []}
                        appLink={project?.fields?.appLink}
                        projectInfo={project?.fields?.projectInfo}
                      />
                    );
                  })}
                </TimelineBody>
              </TimelineItem>
            );
          })}
        </MaterialTimeline>
      </div> */}
    </div>
  );
};

export default Timeline;
