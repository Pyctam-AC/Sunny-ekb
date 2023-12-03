import {FC} from 'react';
import { linkSocialArray } from '../../utils/linksSocial';
import styles from './NavSocialLinks.module.scss'


export const NavSocialLinks: FC = () => {

  return (
    <nav className={styles.navSocialLinks}>
      {linkSocialArray.map((social) => {
        return <div
          key={social.id}
          className={styles.navSocialLinks__linkContainer}
          >
          <a href={social.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={social.title}
          >
            <img src={social.imageUrl} alt={social.title} />
          </a>
      </div>
      })}
    </nav>

  )
}
