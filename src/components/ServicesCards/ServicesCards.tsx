import { FC } from "react";
import styles from "./ServicesCards.module.scss"
import { catalogServices, catalogItem } from "../../constans/catalogServices";
import СatalogCard from "../catalogCard/CatalogCard";

const ServicesCards:FC = () => {

  return (
    <section className={styles.ServicesCards}>
      <h2 className={styles.ServicesCardsTitile}>Услуги в Солнечном</h2>
      <ul className={styles.ServicesCardsContainer}>
        {catalogServices.map((item: catalogItem) => (
          <li key={item.id}>
            <СatalogCard
              id={item.id}
              title={item.title} />
          </li>
        ))}
      </ul>
    </section>
  )

}

export default ServicesCards
