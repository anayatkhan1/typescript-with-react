import React from "react";

type Color = "red" | "blue" | "green" | "yellow";
type ButtonProps = {
  backgroundColor: Color;
  textColor: Color;
  fontSize: number;
  pillShape?: boolean;
};

const Button = ({ backgroundColor, fontSize, pillShape }: ButtonProps) => {
  return <button className="p-3 rounded-md text-white">Click Me</button>;
};

export default Button;
