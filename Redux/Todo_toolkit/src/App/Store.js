import { configureStore } from '@reduxjs/toolkit';
import { counterSlicer } from '../Redux/counterSlicer';

export const myStore = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    // todo: todoSlicer,
  },
});