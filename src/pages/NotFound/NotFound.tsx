import { FC } from "react";
import styles from "./NotFound.module.scss";
import LayoutMain from "../../Layout/LayoutMain";
import ImageSunny from "../../assets/images/park_view_1.jpg";
import BackButton from "../../components/BackButton/BackButton";
import { NavSocialLinks } from "../../components/navSocialLinks/navSocialLink";

const NotFound:FC = () => {
  return (
    <LayoutMain>
      <section className={styles.NotFound}>
        <h2
          className={styles.NotFoundTitle}
        >404
        </h2>
        <h3
          className={styles.NotFoundTitle}
        >Упс...Такая страница не найдена</h3>

        <img
          className={styles.NotFoundImage}
          src={ImageSunny}
        />
      </section>
      <BackButton />
      <NavSocialLinks />
    </LayoutMain>
  )
}

export default NotFound
