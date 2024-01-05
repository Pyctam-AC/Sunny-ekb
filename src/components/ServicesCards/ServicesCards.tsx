import { FC } from "react";
import { catalogServices, catalogItem } from "../../constans/catalogServices";
import СatalogCard from "../catalogCard/CatalogCard";

const ServicesCards:FC = () => {

  return (
    <section>
      <ul>
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
