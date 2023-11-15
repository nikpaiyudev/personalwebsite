import { Chip } from "@material-tailwind/react/components/Chip";
import { FC } from "react";
import Tooltip from "@material-tailwind/react/components/Tooltip";
import {
  FiGithub as GithubIcon,
  FiExternalLink as ExternalLinkIcon,
} from "react-icons/fi";

export interface IProjectCard {
  projectName: string;
  projectInfo: string;
  technologies: string[];
  appLink: string;
  githubLink: string;
}

const ProjectCard: FC<IProjectCard> = ({
  projectName,
  projectInfo,
  technologies,
  appLink,
  githubLink,
}) => {
  const navigateToSeperatePage = (link: string): void => {
    window?.location.assign(link);
  };

  return (
    <div className="flex flex-col gap-5 relative border border-solid border-black p-5 dark:border-white">
      <div className="flex flex-col gap-2">
        <label className="text-2xl w-full flex justify-between">
          {projectName}
          <div className="flex gap-3">
            <Tooltip content="Check App">
              <div onClick={() => navigateToSeperatePage(appLink)}>
                <ExternalLinkIcon className="h-6 w-6 cursor-pointer" />
              </div>
            </Tooltip>
            <Tooltip content="Check Code">
              <div onClick={() => navigateToSeperatePage(githubLink)}>
                <GithubIcon className="h-6 w-6 cursor-pointer" />
              </div>
            </Tooltip>
          </div>
        </label>
        <span className="text-sm">{projectInfo}</span>
      </div>
      <div className=" top-5 flex gap-2 flex-wrap">
        {technologies.map((technology) => {
          return (
            <Chip
              value={technology}
              className={" bg-chipBg"}
              key={technology}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
