import { FC } from "react";

interface IIconLink {
  text: string;
  icon: JSX.Element;
}

const IconLink: FC<IIconLink> = ({ text, icon }) => {
  return (
    <div className="flex gap-3 items-center cursor-pointer text-gray-700 hover:text-fontTextDark">
      {icon}
      <span >{text}</span>
    </div>
  );
};

export default IconLink;
