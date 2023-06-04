import ProjectCard from "@/components/ProjectCard";
import type Contentful from "contentful";
import { FC } from "react";

interface IProjects {
  projects: Contentful.EntrySkeletonType<IContentfulProjectResponse>[];
}

export interface IContentfulProjectResponse {
  projectName: string;
  projectInfo: string;
  technologies: string[];
  appLink: string;
  githubLink: string;
}

const Projects: FC<IProjects> = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 mt-10 gap-4 mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
      {projects.map((project) => {
        return (
          <ProjectCard
            key={project.fields.projectName}
            projectInfo={project.fields.projectInfo}
            projectName={project.fields.projectName}
            technologies={project.fields.technologies}
            appLink={project.fields.appLink}
            githubLink={project.fields.githubLink}
          />
        );
      })}
    </div>
  );
};

export default Projects;
