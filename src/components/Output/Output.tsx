import { alphabet } from '@/utils/constants';
import Keyboard from '../KeyBoard/Keyboard';
import { useAppSelector } from '@/store/hooks';
import { selectedLetter } from '@/store/slices/rotorSlice';

const Output = () => {
  const selected = useAppSelector(selectedLetter)

  return (
    <Keyboard type="output" list={alphabet} selected={selected}/>
  )
}

export default Output