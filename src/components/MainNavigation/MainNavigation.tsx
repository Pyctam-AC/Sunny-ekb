import React from 'react';
import {NavigationItem, MainNavigationLinks} from "../../constans/MainNavigationLinks";
import { Link } from 'react-router-dom';
import styles from './MainNavigation.module.scss';


const MainNavigation: React.FC = () => {

  
  return (

      <nav className={styles.MainNavigation}>
        <div className={styles.MainNavigationNav}>
          <ul className={styles.MainNavigationNavContainer}>
            {MainNavigationLinks.map((item: NavigationItem, index: number) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${styles.MainNavigationNavContainerLink} ${index % 2 === 0 ? styles.odd : styles.even} ${index === MainNavigationLinks.length - 1 ? styles.last : ''}`}
                  >
                    {item.title}

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

  );
};

export default MainNavigation;
