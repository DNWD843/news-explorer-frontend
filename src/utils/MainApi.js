import { BASE_URL } from '../configs';
import * as PATH_TO from './endpoints';
import { getToken } from './token';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}${PATH_TO.REGISTER}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}${PATH_TO.LOGIN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, email }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch((err) => console.log(err));
};

export const getUserData = () => {
  return fetch(`${BASE_URL}${PATH_TO.USER}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'applicaton/json',
      authorization: `Bearer ${getToken()}`
    }
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}: ${res.statusText}`);
    });

};
