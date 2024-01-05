import { FC } from "react";
import styles from "./CatalogServices.module.scss"
import ServicesCards from "../../components/ServicesCards/ServicesCards";


const CatalogServices:FC = () => {

  return (
    <div className={styles.CatalogServices}>
      <ServicesCards />
    </div>
  )
}

export default CatalogServices
