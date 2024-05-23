import React from "react";

type ButtonProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>
};

const ButtonState = ({ setCount }: ButtonProps) => {
  return <button>Click ME</button>;
};

export default ButtonState;
