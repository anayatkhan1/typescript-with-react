import React from "react";

type ButtonProps = {
  onClick: (test: string) => number;
};

const ButtonFunc = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Click Me</button>;
};

export default ButtonFunc;
