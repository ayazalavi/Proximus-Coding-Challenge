import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './slice';

export const store = configureStore({
  reducer: {
    devices: deviceReducer,
  }
})