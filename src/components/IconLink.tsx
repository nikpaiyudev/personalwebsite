import { useTheme } from "next-themes";
import { FC } from "react";

interface IIconLink {
  text: string;
  icon: JSX.Element;
  link: string;
}

const IconLink: FC<IIconLink> = ({ text, icon, link }) => {
  const navigate = (): void => {
    window.location.assign(link);
  };

  return (
    <div className="flex gap-3 items-center cursor-pointer text-gray-700 dark:text-white hover:text-fontTextDark">
      {icon}
      <span onClick={navigate}>{text}</span>
    </div>
  );
};

export default IconLink;
