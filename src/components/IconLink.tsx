import { FC } from "react";

interface IIconLink {
  text: string;
  icon: JSX.Element;
}

const IconLink: FC<IIconLink> = ({ text, icon }) => {
  return (
    <div className="flex gap-3 items-center">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default IconLink;
