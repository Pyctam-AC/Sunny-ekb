import { FC } from "react";
//import styles from "./CatalogServices.module.scss";
import LayoutMain from "../../Layout/LayoutMain";
import ServicesCards from "../../components/ServicesCards/ServicesCards";
import BackButton from "../../components/BackButton/BackButton";


const CatalogServices:FC = () => {

  return (
    <LayoutMain>
      <BackButton />
      <ServicesCards />
    </LayoutMain>

  )
}

export default CatalogServices
