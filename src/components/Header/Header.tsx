import { FC } from "react";
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__containerTitle}>
        <h1 className={styles.Header__containerTitle__title}>Солнечный район</h1>
      </div>
    </header>
  )
}

export default Header
