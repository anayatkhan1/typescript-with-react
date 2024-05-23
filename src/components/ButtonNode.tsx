import React from "react";

type ButtonProps = {
  children: React.ReactNode | JSX.Element;
};

const ButtonNode = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default ButtonNode;
