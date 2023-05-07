import { FC } from "react";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default BaseLayout;
