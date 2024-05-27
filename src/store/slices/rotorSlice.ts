import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { Letter, RotorValue } from '@/utils/constants'

interface RotorState {
  currentPosition: {
    firstRotorPosition: number;
    secondRotorPosition: number;
    thirdRotorPosition: number;
  };
  value: RotorValue['value'] | undefined;
}

const initialState: RotorState = {
  currentPosition: {
    firstRotorPosition: 0,
    secondRotorPosition: 0,
    thirdRotorPosition: 0
  },
  value: undefined
}

export const rotorSlice = createSlice({
  name: 'rotor',
  initialState,
  reducers: {
    increment: (state) => {
      let { firstRotorPosition, secondRotorPosition, thirdRotorPosition } = state.currentPosition
      const incrementSecond = firstRotorPosition === 25
      firstRotorPosition = firstRotorPosition === 25 ? 0 : firstRotorPosition + 1
      const incrementThird = incrementSecond && secondRotorPosition === 25
      secondRotorPosition = incrementSecond ? secondRotorPosition === 25 ? 0 : secondRotorPosition + 1 : secondRotorPosition
      thirdRotorPosition = incrementThird ? thirdRotorPosition === 25 ? 0 : thirdRotorPosition + 1 : thirdRotorPosition
      state.currentPosition = {firstRotorPosition, secondRotorPosition, thirdRotorPosition}
    },
    decrement: (state) => {
      let { firstRotorPosition, secondRotorPosition, thirdRotorPosition } = state.currentPosition
      if(firstRotorPosition === 0 ){
        firstRotorPosition = 25
        if(secondRotorPosition === 0){
          secondRotorPosition = 25
          if(thirdRotorPosition === 0){
            thirdRotorPosition = 25
          } else thirdRotorPosition--
        }
        else secondRotorPosition--
      } else firstRotorPosition--
      state.currentPosition = {firstRotorPosition, secondRotorPosition, thirdRotorPosition}
    },
    setValue: (state, action: PayloadAction<Letter>) => {
      state.value = action.payload
    },
    resetValue: (state) => {
      state.value = undefined
    },
    resetAll: () => {
      return initialState
    }
  },
})

export const { increment, decrement, setValue, resetValue, resetAll } = rotorSlice.actions

export const selectedLetter = (state: RootState) => state.rotor.value
export const rotorsPosition = (state: RootState) => state.rotor.currentPosition

export default rotorSlice.reducer