import React from "react";

import { InputBox } from './Components/InputBox';

export const App = () => {
  const [value, setValue] = React.useState('');

  return (
    <>
      <InputBox label={'OTP Boxs'} length={4} />
      <h3>{value}</h3>
    </>
  );
};