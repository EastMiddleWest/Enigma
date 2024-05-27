import React from 'react';
import styles from './Rotor.module.scss';

import { useInView } from "react-intersection-observer";

//import { useAppSelector } from "@/store/hooks";
//import { rotorsPosition } from '@/store/slices/rotorSlice';

type Props = {
  position: number;
}

const Rotor = ({position}: Props) => {

  //const { firstRotorPosition } = useAppSelector(rotorsPosition)

  const [value, setValue] = React.useState(position)

  const rootRef = React.useRef<HTMLDivElement | null>(null)

  const { ref, inView } = useInView({
    root: rootRef.current
  });

  const initRef = React.useRef(true)

  React.useEffect(()=>{
    if(initRef.current) {
      initRef.current = false
      return
    }
    if(!rootRef.current) return
    rootRef.current.scrollTo({
      top: 51,
      behavior: 'smooth'
    })
  },[position])

  React.useEffect(() => {
    if(!inView){
      setValue(position)
      rootRef.current?.scrollTo({
        top: 0,
        behavior: 'instant'
      })
    }
  },[inView, position])

  return (
    // <div className={styles['rotor-container']}>
      <div ref={rootRef} className={styles.rotor}>
        <div ref={ref}>
          <span>
          {value}
          </span>
        </div>
        <div>
          <span>
            {value === 25 ? 0 : value + 1}
          </span>
        </div>
      </div>
    //</div>
  )
}

export default Rotor