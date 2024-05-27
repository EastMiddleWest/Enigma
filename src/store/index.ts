import { configureStore } from '@reduxjs/toolkit'
import rotorSlice from './slices/rotorSlice';
import messageSlice from './slices/messageSlice';

export const store = configureStore({
  reducer: {
    rotor: rotorSlice,
    message: messageSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch