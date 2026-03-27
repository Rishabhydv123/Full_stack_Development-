import React from "react";
import { InputBox } from "./Components/InputBox";

export const App = () => {
  const [value, setValue] = React.useState("");

  return (
    <>
      <InputBox label="OTP Boxes" length={4} setValue={setValue} />
      
    </>
  );
};