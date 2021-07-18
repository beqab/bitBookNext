import React from "react";

interface IButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
