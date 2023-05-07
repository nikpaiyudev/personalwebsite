import { FC, MouseEventHandler } from "react";
import Button from "./Button";

interface IButton {
  children: JSX.Element;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: FC<IButton> = ({ children, className, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
