import VC_LOGO from "../assets/images/socialIcons/VK.svg";
import TG_LOG from "../assets/images/socialIcons/Telegram.svg"

export interface linkSocial {
  id: number;
  imageUrl: string;
  linkUrl: string;
  title: string;
}

export const linkSocialArray: linkSocial[] = [
  {
    id: 1,
    imageUrl: VC_LOGO,
    linkUrl: 'https://vk.com/sunny_ekb1',
    title: 'мы ВКонтакте'
  },
  {
    id: 2,
    imageUrl: TG_LOG,
    linkUrl: 'https://t.me/Sunny_ekb1',
    title: 'канал в Telegram'
  },

];

