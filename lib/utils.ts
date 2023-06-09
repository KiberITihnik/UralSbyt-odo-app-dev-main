import { ArticleDataType, ContactEnum, NewsDataType } from '../types/types';
import axios from 'axios';

export const getRandomItem = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const shuffleCard = (arr: any) => {
  return arr.sort(() => Math.random() - 0.5);
};

export const sendForm = async (values: any, type: ContactEnum = ContactEnum.telephone) => {
  const TOKEN = '';
  const CHAT_ID = '';
  const URI_API = '';

  if (!TOKEN.length || !CHAT_ID.length || !URI_API) return false;

  let message = '';

  if (type === ContactEnum.telephone) {
    message = `<b>Заявка с сайта \n от ${values.name}</b> \n Телефонный номер для связи ${values.phone} \n Email: ${values.email} \n Город ${values.city} \n Способ связи ${values.connect}`;
  } else if (type === ContactEnum.email) {
    message = `<b>Подписка на новости \n от ${values.email}</b>`;
  } else {
    message = '';
  }

  if (message === '') return false;

  // await axios.post(URI_API, {
  //   chat_id: CHAT_ID,
  //   parse_mode: "html",
  //   text: message,
  // });

  return true;
};

export const dateConvert = (date: string[]) => {
  return new Date(date.reverse().join(','));
};

export const sortArr = (arr: NewsDataType[] | ArticleDataType[]) => {
  return [
    ...arr.sort((a, b): any => {
      const dateA = dateConvert(a.meta.date.split('.'));
      const dateB = dateConvert(b.meta.date.split('.'));

      if (dateA > dateB) return -1;
      if (dateA <= dateB) return 1;
    }),
  ];
};
