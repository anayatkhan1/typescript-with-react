import React from "react";

type Color = "red" | "blue" | "green" | "yellow";
type ButtonProps = {
  backgroundColor: Color;
  textColor: Color;
  fontSize: number;
  pillShape?: boolean;
  padding: number[];
};

const ButtonArrays = ({
  backgroundColor,
  fontSize,
  pillShape,
  padding
}: ButtonProps) => {
  return <button className="p-3 rounded-md text-white">Click Me</button>;
};

export default ButtonArrays;
