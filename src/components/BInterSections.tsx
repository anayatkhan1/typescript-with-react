import React from "react";


// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "green" | "blue";
// };

// type SuperButtonProps = ButtonProps & {
//   size: "md" | "lg";
// };

interface ButtonProps {
    type: "button" | "submit" | "reset";
    color: "red" | "green" | "blue";
  };
  
  interface SuperButtonProps extends ButtonProps {
    size: "md" | "lg";
  };

const BIntersections = ({}: ButtonProps) => {
  return <button>Click ME</button>;
};

export default BIntersections;
