import { FC } from "react";
//import styles from "./CatalogServices.module.scss";
import LayoutMain from "../../Layout/LayoutMain";
import ServicesCards from "../../components/ServicesCards/ServicesCards";


const CatalogServices:FC = () => {

  return (
    <LayoutMain>
      <ServicesCards />
    </LayoutMain>

  )
}

export default CatalogServices
