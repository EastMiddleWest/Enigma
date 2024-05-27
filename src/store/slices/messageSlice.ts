import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

interface MessageState {
  encrypted: string;
  decrypted: string
}

const initialState: MessageState = {
  encrypted: '',
  decrypted: '',
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setEncryptedLetter: (state, action: PayloadAction<string>) => {
      state.encrypted = state.encrypted + action.payload
    },
    setDecryptedLetter: (state, action: PayloadAction<string>) => {
      state.decrypted = state.decrypted + action.payload
    },
    reverse: (state) => {
      state.encrypted = state.encrypted.slice(0, state.encrypted.length-1)
      state.decrypted = state.decrypted.slice(0, state.decrypted.length-1)
    },
    reset: () => {
      return initialState
    }
  },
})

export const { setEncryptedLetter, setDecryptedLetter, reverse,reset } = messageSlice.actions

export const encryptedMessage = (state: RootState) => state.message.encrypted
export const decryptedMessage = (state: RootState) => state.message.decrypted

export default messageSlice.reducer