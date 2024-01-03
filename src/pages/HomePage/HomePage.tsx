import {FC} from 'react';
import styles from './HomePage.module.scss'
import { NavSocialLinks } from '../../components/navSocialLinks/navSocialLink';
//import PromoVideo from '../../components/promoVideo/PromoVideo';
import MainNavigation from '../../components/MainNavigation/MainNavigation';


const HomePage: FC = () => {

  return (
    <div className={styles.HomePage}>
      <div className={styles.HomePage__containerTitle}>
         <h1 className={styles.HomePage__containerTitle__title}>Солнечный район</h1>
      </div>
      <MainNavigation />
      <NavSocialLinks />
    </div>
  )
}

export default HomePage;
