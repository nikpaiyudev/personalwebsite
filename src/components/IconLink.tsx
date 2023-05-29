import { useTheme } from "next-themes";
import Image from "next/image";
import { FC } from "react";
import RenderIf from "./RenderIf";

interface IIconLink {
  icon: string;
  darkIcon: string;
  link: string;
  alt: string;
}

const IconLink: FC<IIconLink> = ({ link, icon, alt , darkIcon }) => {
  const { theme } = useTheme();

  const navigate = (): void => {
    window.location.assign(link);
  };

  return (
    <div
      onClick={navigate}
      className="flex gap-3 items-center cursor-pointer text-white fill-white dark:text-white hover:text-fontTextDark"
    >
      <RenderIf isTrue={theme === "dark"}>
        <Image
          src={icon}
          alt={alt}
          width={24}
          height={24}
          className={"fill-white"}
        ></Image>
      </RenderIf>
      <RenderIf isTrue={theme === "light"}>
        <Image
          src={darkIcon}
          alt={alt}
          width={24}
          height={24}
          className={"fill-white"}
        ></Image>
      </RenderIf>
    </div>
  );
};

export default IconLink;
