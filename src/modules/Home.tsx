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
  links: Contentful.Entry<any>[];
  image: Contentful.Asset;
}

const Home: FC<IHomeProps> = ({ homePage }) => {
  console.log(homePage);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="flex h-full justify-end mobile:flex-col items-end gap-16 py-24 mobile:mt-10">
      <div className="flex justify-center items-center w-full mobile:flex-1 text-black dark:text-white  flex-col gap-16 mobile:mx-auto mobile:w-full">
        <span className="font-bold text-9xl text-center">{homePage.title}</span>
        <span className="font-normal text-base w-[800px] text-center leading-10 ">
          {homePage.description}
        </span>
        <div className="flex gap-12 w-full text-black items-center justify-center">
          {homePage.links.map((link, index) => {
            return (
              <IconLink
                key={index}
                icon={<LinkIcon className=" font-medium h-4 w-4" />}
                text={link.fields.title as string}
                link={link.fields.src as string}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
