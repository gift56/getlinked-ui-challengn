import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: String | ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomizeButton = () => {
  return <div>CustomizeButton</div>;
};

export default CustomizeButton;
