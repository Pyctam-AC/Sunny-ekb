import React from 'react';
import {NavigationItem, MainNavigationLinks} from "../../constans/MainNavigationLinks";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from './MainNavigation.module.scss';


const MainNavigation: React.FC = () => {
  return (
    <Router>
      <div className={styles.MainNavigation}>
        {/* Навигационные ссылки */}
        <nav className={styles.MainNavigationNav}>
          <ul className={styles.MainNavigationNavContainer}>
            {MainNavigationLinks.map((item: NavigationItem, index: number) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={styles.MainNavigationNavContainerLink}
                  >
                    {item.title}

                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Маршруты */}
        {/* <AppRoutes navigationData={navigationData} /> */}
      </div>
    </Router>
  );
};

export default MainNavigation;
