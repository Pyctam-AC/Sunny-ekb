import { FC } from "react";
import styles from "./catalogCard.module.scss"
import { catalogItem } from "../../constans/catalogServices";


const СatalogCard:FC<catalogItem> = ({title}) => {

  return (
    <nav className={styles.CatalogCard}>
      <h3
        className={styles.CatalogCardTitle}
      >{title}</h3>
    </nav>

  )

}


export default СatalogCard
