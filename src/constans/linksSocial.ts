export interface linkSocial {
  id: number;
  imageUrl: string;
  linkUrl: string;
  title: string;
}

export const linkSocialArray: linkSocial[] = [
  {
    id: 1,
    imageUrl: import.meta.env.BASE_URL + '/public/images/socialIcons/VK.svg',
    linkUrl: 'https://vk.com/sunny_ekb1',
    title: 'мы ВКонтакте'
  },
  {
    id: 2,
    imageUrl: import.meta.env.BASE_URL + '/public/images/socialIcons/Telegram.svg',
    linkUrl: 'https://t.me/Sunny_ekb1',
    title: 'канал в Telegram'
  },

];

