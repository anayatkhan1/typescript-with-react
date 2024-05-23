import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// (React.ComponentPropsWithRef) when you are passing ref props.
// {...rest} (...) is spread and (rest) is a operator.
const BComponentProps = ({ type, autoFocus, ...rest }: ButtonProps) => {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click ME
    </button>
  );
};

export default BComponentProps;
