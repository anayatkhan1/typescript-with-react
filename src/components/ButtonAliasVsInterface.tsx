import React from "react";

// Interface only works with object, this is pain point with Interface.
// interface IButtonProps {
//   text: string;
//   count: number;
// }   


// type TButtonProps = {  //Alias
//   text: string;
//   count: number;
// };

const ButtonAliasVsInterface = () => {
  return <button>Click ME</button>;
};

export default ButtonAliasVsInterface;
