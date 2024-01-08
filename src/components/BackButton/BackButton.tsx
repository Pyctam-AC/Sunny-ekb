import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss"


const BackButton:FC = () => {

const navigaate = useNavigate();

const back = () => navigaate(-1);

  return (
    <button
      className={styles.BackButton}
      onClick={back}
    >
      &#8617;&nbsp;Назад
    </button>
  )
}

export default BackButton
