import Image from "next/legacy/image";
import CodeIcon from "@heroicons/react/24/solid/CodeBracketIcon";
import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";
import IconLink from "@/components/IconLink";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import AvatarImage from "public/image.jpg";

const Me = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="flex h-full justify-end mobile:flex-col items-end gap-16 mt-20 mobile:mt-10">
      <div className="flex-1 w-full relative mobile:min-h-0 tablet:min-h-[600px] laptop:min-h-[600px] desktop:min-h-[600px] wide:min-h-[600px]">
        <Image
          src={AvatarImage.src}
          blurDataURL={AvatarImage.blurDataURL}
          objectFit={"cover"}
          layout={"fill"}
          className="rounded-2xl bg-bottom dark:!border dark:!border-white dark:!border-solid"
          alt={""}
        ></Image>
      </div>

      <div className="flex flex-2 mobile:flex-1 text-black dark:text-white justify-end items-start flex-col gap-12">
        <span className="font-bold text-xl">Hellooooo codo sapiens</span>
        <span className="font-normal text-base w-full">
          I am a <strong>frontend software engineer</strong> and a{" "}
          <strong>ui designer</strong> having a experience of 7.7 years. I am
          currently working for the company{" "}
          <strong>ionixx technologies </strong>
          in bangalore.I am well versed in typescript and react and also I have
          worked with <strong>angular</strong> for 5 years in different
          companies.
        </span>
        <div className="flex gap-12 text-black">
          <IconLink
            icon={<LinkIcon className=" font-medium h-4 w-4" />}
            text={"Linkedln"}
            link={"http://stackoverflow.com"}
          />
          <IconLink
            icon={<CodeIcon className=" font-medium h-4 w-4" />}
            text={"Github"}
            link={"http://stackoverflow.com"}
          />
          <IconLink
            icon={<PhotoIcon className=" font-medium h-4 w-4" />}
            text={"Instagram"}
            link={"http://stackoverflow.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Me;
