import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/understanding_toolkit/actionToolkit';
import { Button } from '../Components/Button1';

export const ScratchCounterToolkit = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.scratchReducer);

  console.log('🚀 ~ count:', count);

  return (
    <>
      <div>Counter {count}</div>

      <Button
        functions={() => dispatch(increment())}
        label={'inc'}
      />

      <Button
        functions={() => dispatch(decrement())}
        label={'dec'}
      />
    </>
  );
};