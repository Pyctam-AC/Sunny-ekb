import { FC } from "react";
import { catalogItem } from "../../constans/catalogServices";


const СatalogCard:FC<catalogItem> = ({title}) => {

  return (
    <div>
      <h3>{title}</h3>
    </div>

  )

}


export default СatalogCard
