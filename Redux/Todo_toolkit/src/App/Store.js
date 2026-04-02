import { configureStore } from '@reduxjs/toolkit';

import {counterSlice} from '../Redux/counterSlicer';

export const myStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});