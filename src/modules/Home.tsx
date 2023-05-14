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
    <div className="flex h-full justify-end mobile:flex-col items-end gap-16 mt-20 mobile:mt-10">
      <div className="flex-1 w-full relative mobile:min-h-0 tablet:min-h-[600px] laptop:min-h-[600px] desktop:min-h-[600px] wide:min-h-[600px]">
        <Image
          src={`https:${homePage?.image?.fields?.file?.url}` as string}
          blurDataURL={`https:${homePage?.image?.fields.file?.url}` as string}
          objectFit={"cover"}
          layout={"fill"}
          className="rounded-2xl bg-bottom dark:!border dark:!border-white dark:!border-solid"
          alt={""}
        ></Image>
      </div>

      <div className="flex flex-2 mobile:flex-1 text-black dark:text-white justify-end items-start flex-col gap-12 mobile:mx-auto mobile:w-full">
        <span className="font-bold text-xl">{homePage.title}</span>
        <span className="font-normal text-base w-full leading-10">
          {homePage.description}
        </span>
        <div className="flex gap-12 text-black">
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
