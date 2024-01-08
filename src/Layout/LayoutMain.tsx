import { FC, ReactNode } from "react";
import styles from './LayoutMain.module.scss'
import Header from "../components/Header/Header";


interface LayoutMainProps {
  children?: ReactNode
}

const LayoutMain: FC<LayoutMainProps> = ({children}) => {
  return (
    <div className={styles.LayoutMain}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default LayoutMain
