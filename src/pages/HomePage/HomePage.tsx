import {FC} from 'react';
import styles from './HomePage.module.scss'
import { NavSocialLinks } from '../../components/navSocialLinks/navSocialLink';
import PromoVideo from '../../components/promoVideo/PromoVideo';

const HomePage: FC = () => {

  return (
    <main className={styles.HomePage}>
      <h1 className={styles.HomePage__title}>Солнечный район</h1>
      <PromoVideo />
      <NavSocialLinks />
    </main>
  )
}

export default HomePage;
