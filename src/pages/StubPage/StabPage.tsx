import { FC } from "react";
import styles from "./StubPage.module.scss";
import LayoutMain from "../../Layout/LayoutMain";
import PromoVideo from "../../components/promoVideo/PromoVideo";
import BackButton from "../../components/BackButton/BackButton";
import { NavSocialLinks } from "../../components/navSocialLinks/navSocialLink";

const StubPage:FC = () => {

  return (
    <LayoutMain>
      <PromoVideo />
      <h2
        className={styles.StubPageTitle}
      >Страница ещё только разрабатывается
      </h2>
      <BackButton />
      <NavSocialLinks />
    </LayoutMain>
  )

}

export default StubPage
