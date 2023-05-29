import Image from "next/legacy/image";
import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import IconLink from "@/components/IconLink";
import { FC, useEffect } from "react";
import { useTheme } from "next-themes";
import type Contentful from "contentful";

export interface IHomeProps {
  homePage: IHomeFields;
}

interface IHomeFields {
  title: string;
  description: string;
  links: Contentful.EntrySkeletonType<IContetnfulLink>[];
  image: Contentful.Asset;
}

interface IContetnfulLink {
  alt: string;
  image: Contentful.Asset;
  link: string;
  darkIcon: Contentful.Asset;
}

const Home: FC<IHomeProps> = ({ homePage }) => {
  const { setTheme } = useTheme();
  console.log(homePage);
  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="flex h-full w-full justify-end mobile:flex-col items-end gap-16 py-24 mobile:mt-10">
      <div className="flex  w-full mobile:flex-1 text-black dark:text-white  flex-col gap-16 mobile:mx-auto mobile:w-full">
        <span className="font-normal text-9xl ">{homePage.title}</span>
        <span className="font-normal text-base w-[800px] mobile:w-full tablet:w-full leading-10 font-Inter">
          {homePage.description}
        </span>
        <div className="flex gap-12 w-full text-black ">
          {homePage.links.map((link, index) => {
            return (
              <IconLink
                key={index}
                darkIcon={
                  `https:${link.fields.image.fields.file?.url}` as string
                }
                icon={
                  `https:${link.fields.darkIcon.fields.file?.url}` as string
                }
                link={link.fields.link as string}
                alt={link.fields.image.fields.title as string}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
