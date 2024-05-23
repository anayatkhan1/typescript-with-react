import React from "react";
import { useEffect } from "react";
type ButtonColor = "red" | "green" | "blue";

const ButtonAssertion = () => {
  useEffect(() => {
    const previousButtonColor = localStorage.getItem(
      "buttonColor",
    ) as ButtonColor;
  }, []);
  return <div>ButtonAssertion</div>;
};

export default ButtonAssertion;
