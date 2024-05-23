import React from "react";

type ButtonProps = {
  style: React.CSSProperties;
};

const ButtonCss = ({ style }: ButtonProps) => {
  return <button style={style}>Click Me</button>;
};

export default ButtonCss;
