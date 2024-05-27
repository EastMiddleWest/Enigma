import styles from './Rotors.module.scss';

import { useAppSelector } from "@/store/hooks";
import { rotorsPosition } from '@/store/slices/rotorSlice';

import Rotor from './Rotor/Rotor';

const Rotors = () => {
  const {firstRotorPosition, secondRotorPosition, thirdRotorPosition} = useAppSelector(rotorsPosition);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Rotor position={thirdRotorPosition}/>
        <Rotor position={secondRotorPosition}/>
        <Rotor position={firstRotorPosition}/>
      </div>
    </div>
  )
}

export default Rotors