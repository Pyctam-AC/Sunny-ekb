import {FC} from 'react';
//import styles from './HomePage.module.scss'
import LayoutMain from '../../Layout/LayoutMain';
import { NavSocialLinks } from '../../components/navSocialLinks/navSocialLink';
import MainNavigation from '../../components/MainNavigation/MainNavigation';


const HomePage: FC = () => {

  return (
    <LayoutMain>
      <MainNavigation />
      <NavSocialLinks />
    </LayoutMain>
  )
}

export default HomePage;
