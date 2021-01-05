import * as PATH_TO from './endpoints';
import { NEWS_API_URL, PAGE_SIZE, API_KEY, DATE_FROM, DATE_TO } from '../configs';

export const getArticlesFromNewsApi = (userQuery) => {
  return fetch(
    `${NEWS_API_URL}${PATH_TO.EVERYTHING}?q=${userQuery}&from=${DATE_FROM}&to=${DATE_TO}&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}`,
    {
      method: 'GET',
    },
  )
    .then((res) => {
      if (res.status) {
        return res.json();
      }
      return Promise.reject(`Статус ответа: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
