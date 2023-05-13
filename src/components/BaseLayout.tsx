import { FC } from "react";
import Header from "./Header";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return (
    <div className="container mx-auto px-10  mobile:p-0 h-full">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
