import styles from './Sidebar.module.scss';
import Paper from '../Paper/Paper';
import classNames from 'classnames';
import hook from '@/assets/icons/hook96.png';

import { useAppSelector } from '@/store/hooks';
import { decryptedMessage, encryptedMessage} from '@/store/slices/messageSlice';

type Props = {
  open: boolean;
  toggleOpen: () => void;
}

const Sidebar = ({ open, toggleOpen }: Props) => {

  const asideClName = classNames(styles.sidebar, {
    [styles.open] : open
  })

  const hookClName = classNames(styles.hook,{
    [styles['hook-open']]: open
  })

  const encrypted = useAppSelector(encryptedMessage)
  const decrypted = useAppSelector(decryptedMessage)

  return (
    <>
    <aside className={asideClName}>
      <div className={styles.container}>
        <h2>Encrypted</h2>
        <Paper value={encrypted}/>
        <h2>Decrypted</h2>
        <Paper value={decrypted} />
      </div>
    </aside>
    <div className={styles['hook-box']}>
      <div className={hookClName} onClick={toggleOpen}>
        <img src={hook} alt='hook' width={50} height={50} />
      </div>
    </div>
    </>
  )
}

export default Sidebar