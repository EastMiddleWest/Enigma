import styles from './Paper.module.scss';

type Props = {
  value: string;
}

const Paper = ({value}: Props) => {
  return (
    <textarea
      className={styles.paper}
      value={value}
      disabled
    />
  )
}

export default Paper