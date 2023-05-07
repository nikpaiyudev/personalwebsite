import Image from "next/image";
import CodeIcon from "@heroicons/react/24/solid/CodeBracketIcon";
import LinkIcon from "@heroicons/react/24/solid/LinkIcon";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";
import IconLink from "@/components/IconLink";
const Me = () => {
  return (
    <div className="flex justify-center mobile:flex-col items-end gap-16 mt-20 mobile:mt-10">
      <div className="flex-1 w-full">
        <Image
          src={
            "https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg"
          }
          width={510}
          height={610}
          className="w-full rounded-2xl"
          alt={""}
        ></Image>
      </div>

      <div className="flex flex-2 mobile:flex-1 justify-end items-start flex-col gap-12">
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
          />
          <IconLink
            icon={<CodeIcon className=" font-medium h-4 w-4" />}
            text={"Github"}
          />
          <IconLink
            icon={<PhotoIcon className=" font-medium h-4 w-4" />}
            text={"Instagram"}
          />
        </div>
      </div>
    </div>
  );
};

export default Me;
