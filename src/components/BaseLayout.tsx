import { FC } from "react";
import Header from "./Header";

interface IBaseLayout {
  children: JSX.Element;
}

const BaseLayout: FC<IBaseLayout> = ({ children }) => {
  return (
    <div className="container mx-auto px-10 pb-10 mobile:p-0">
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
