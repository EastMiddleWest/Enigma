import styles from './Keyboard.module.scss';
import classNames from 'classnames';
import { type Letter } from '@/utils/constants';

type Props = {
  type: 'input' | 'output';
  list: Readonly<Letter[]>;
  onMouseDown?: (item: Letter) => void;
  onMouseUp?: () => void;
  selected?: string;
}

const Keyboard = ({ type, list, onMouseDown, onMouseUp, selected }: Props) => {

  const itemClName = (active: boolean) => classNames(styles.letter, {
    [styles['letter-input']]: type === 'input',
    [styles['letter-output']]: type === 'output',
    [styles.active]: type === 'output' && active
  })

  const hadlePress = (letter: Letter) => {
    onMouseDown && onMouseDown(letter)
  }

  return (
    <section className={styles.keyboard}>
      {list.map((item) =>
        <div
          key={item}
          className={itemClName(item === selected)}
          onMouseDown={() => hadlePress(item)}
          onMouseUp={onMouseUp}
        >
          <span>
            {item}
          </span>
        </div>
      )}
    </section>
  )
}

export default Keyboard