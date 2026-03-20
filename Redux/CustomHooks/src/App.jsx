import React from "react";
import { useToggle } from "./Compon/useToggle";

export const App = () => {
  const [toggle, setToggleState] =useToggle(false);
  const [toggle1, setToggleState1] =useToggle(true);

    return(
      <>
      {toggle && <h1>Hello</h1>}
      {toggle1 && <h1>Hello1</h1>}

      <button onClick={() => setToggleState(!toggle)}>toggle</button>

      <button onClick={() => setToggleState1(!toggle)}>toggle1</button>


      </>
    );
};