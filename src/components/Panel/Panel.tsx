import styles from './Panel.module.scss';
import Rotors from '../Rotors/Rotors';
import logo from '@/assets/Enigma_logo.png';

import { useAppDispatch } from '@/store/hooks';
import { resetAll, decrement } from '@/store/slices/rotorSlice';
import {reverse, reset} from '@/store/slices/messageSlice';

const Panel = () => {
  const dispatch = useAppDispatch()

  const handleRevert = () => {
    dispatch(reverse())
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(resetAll())
    dispatch(reset())
  }

  return (
    <>
      <section className={styles.panel}>
        <Rotors/>
        <div className={styles.buttons}>
          <button onClick={handleReset}>RESET</button>
          <button onClick={handleRevert}>UNDO</button>
        </div>
        <img src={logo} alt='enigma' width={160} height={70} />
      </section>
    </>
  )
}

export default Panel