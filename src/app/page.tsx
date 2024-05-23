"use client";
import { useState } from "react";

import ButtonUnion from "@/components/ButtonUnion";
import ButtonArrays from "@/components/ButtonArrays";
import ButtonTuple from "@/components/ButtonTuple";
import ButtonCss from "@/components/ButtonCss";
import ButtonFunc from "@/components/ButtonFunc";
import ButtonNode from "@/components/ButtonNode";
import ButtonState from "@/components/ButtonState";
import ButtonAliasVsInterface from "@/components/ButtonAliasVsInterface";
import BComponentProps from "@/components/BComponentProps";
import BIntersections from "@/components/BInterSections";
import ButtonEvent from "@/components/ButtonEvent";
import BStateHooks from "@/components/BStateHooks";
import ButtonOmit from "@/components/ButtonOmit";
import ButtonAssertion from "@/components/ButtonAssertion";
import ButtonGenerics from "@/components/ButtonGenerics";
const Home = () => {
  const onClick = (test: string) => {
    return 6;
  };
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => console.log("Clicked");

  const icon = <i></i>;

  const [count, setCount] = useState(0);

  return (
    <>
      <ButtonUnion
        backgroundColor="green"
        fontSize={30}
        pillShape={true}
        textColor="green"
      />

      <ButtonArrays
        backgroundColor="green"
        fontSize={30}
        pillShape={true}
        textColor="green"
        padding={[5, 4, 4, 5, 1, 2, 4]}
      />
      <ButtonTuple
        backgroundColor="green"
        fontSize={30}
        pillShape={true}
        textColor="green"
        padding={[5, 4, 4, "4px"]}
      />
      <ButtonCss
        style={{
          backgroundColor: "blue",
          fontSize: 24,
          color: "white",
          padding: "1rem 2rem",
          borderRadius: 8,
        }}
      />
      <ButtonFunc onClick={onClick} />

      <ButtonNode>{icon} Click ME!</ButtonNode>
      <ButtonState setCount={setCount} />
      <ButtonAliasVsInterface />
      <BComponentProps
        type="submit"
        autoFocus={true}
        defaultValue="test"
        className="test"
      />
      <ButtonEvent onClick={handleClick}>Click Me!</ButtonEvent>
      <BStateHooks />
      <ButtonOmit />
      <ButtonAssertion />
      <ButtonGenerics countValue={5} countHistory={[5,3,4,2]} />
    </>
  );
};

export default Home;
