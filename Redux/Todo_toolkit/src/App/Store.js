import { configureStore } from '@reduxjs/toolkit';

import { counterSlicer } from '../Redux/counterSlicer';
import { TodoReducer } from '../Redux/TodoSlicer1';
import { reducerToolkit } from '../Redux/understanding_toolkit/reducerToolkit'

export const myStore = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    todo: TodoReducer,
    scratchReducer: reducerToolkit,
  },
});