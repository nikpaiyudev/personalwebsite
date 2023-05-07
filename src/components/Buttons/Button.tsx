import { FC, MouseEventHandler } from "react";
import { Button as MaterialButton } from "@material-tailwind/react/components/Button";

interface IButton {
  children: JSX.Element;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({ children, className, onClick }) => {
  return (
    <MaterialButton className={className} onClick={onClick}>
      {children}
    </MaterialButton>
  );
};

export default Button;
