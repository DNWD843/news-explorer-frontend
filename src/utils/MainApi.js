import { BASE_URL } from '../configs';
import * as PATH_TO from './endpoints';
import { getTokenFromStorage } from './storage';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}${PATH_TO.REGISTER}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      if (res.ok) {
        return !res.ok;
      } else {
        return res.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}${PATH_TO.LOGIN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const getUserDataFromDataBase = () => {
  return fetch(`${BASE_URL}${PATH_TO.USER}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
      authorization: `Bearer ${getTokenFromStorage()}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const getSavedNewsFromDataBase = () => {
  return fetch(`${BASE_URL}${PATH_TO.SAVED_NEWS}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
      authorization: `Bearer ${getTokenFromStorage()}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
};

export const deleteArticle = (articleId) => {
  return fetch(`${BASE_URL}${PATH_TO.SAVED_NEWS}/${articleId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getTokenFromStorage()}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
  });
};
