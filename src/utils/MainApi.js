import { BASE_URL } from '../configs';
import * as PATH_TO from './endpoints';
import { getTokenFromStorage } from './storage';

/**
 * @module MainApi
 * @description API взаимодействия пользователя со статьями.
 * @since v.1.1.0
 */

/**
 * @method register
 * @description Регистрация пользователя, принимает регистрационные данные пользователя и отправляет
 *  запрос на регистрацию на сервер.
 * @param {String} email - емэйл
 * @param {String} password - пароль
 * @param {String} name - имя
 * @returns {JSON}
 * @since v.1.1.0
 */
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

/**
 * @method login
 * @description Авторизация пользователя, принимает авторизационные данные пользователя и отправляет
 *  запрос на авторизацию на сервер.
 * @param {String} email - емэйл
 * @param {String} password - пароль
 * @returns {JSON}
 * @since v.1.1.0
 */
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

/**
 * @method getUserDataFromDataBase
 * @description Метод получения данных пользователя из базы данных
 * @returns {JSON}
 * @since v.1.1.0
 */
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

/**
 * @method getSavedNewsFromDataBase
 * @description Метод получения из БД данных о сохраненных пользователем новостях
 * @returns {JSON}
 * @since v.1.1.0
 */
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

/**
 * @method deleteArticle
 * @description Метод удаления статей из БД.
 * @param {String} articleId - id  удаляемой статьи
 * @returns {JSON}
 * @since v.1.1.0
 */
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

/**
 * @method addArticleToSavedNews
 * @description Метод сохранения статьи в БД.
 * @param {Object} article - объект с данными статьи
 * @returns {JSON}
 * @since v. 1.1.0
 */
export const addArticleToSavedNews = (article) => {
  return fetch(`${BASE_URL}${PATH_TO.SAVED_NEWS}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${getTokenFromStorage()}`,
    },
    body: JSON.stringify(article),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}: ${res.statusText}`);
  });
};
