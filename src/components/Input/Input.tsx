import { alphabet } from "@/utils/constants";
import Keyboard from "../KeyBoard/Keyboard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increment, resetValue, setValue, rotorsPosition } from '@/store/slices/rotorSlice';
import { setDecryptedLetter, setEncryptedLetter } from '@/store/slices/messageSlice';
import { Encryptor } from '@/utils/Encriptor';
import { type Letter } from "@/utils/constants";

const Input = () => {
  const dispatch = useAppDispatch();
  const positions = useAppSelector(rotorsPosition)

  const encryptLetter = (letter: Letter) => {
    dispatch(setDecryptedLetter(letter))
    const encryptedLetter = Encryptor.encrypt(letter, positions)
    dispatch(setValue(encryptedLetter))
    dispatch(increment())
    dispatch(setEncryptedLetter(encryptedLetter))
  }

  return (
    <Keyboard
      type="input"
      list={alphabet}
      onMouseDown={encryptLetter}
      onMouseUp={() => dispatch(resetValue())}
    />
  )
}

export default Input