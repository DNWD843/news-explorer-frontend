import { TOKEN_KEY, USER_KEY, FOUND_NEWS_KEY, SAVED_NEWS_KEY } from '../configs';

export const setTokenToStorage = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getTokenFromStorage = () => localStorage.getItem(TOKEN_KEY);

export const removeTokenFromStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const setUserDataToStorage = (data) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

export const removeUserDataFromStorage = () => {
  localStorage.removeItem(USER_KEY);
};

export const getUserDataFromStorage = () => JSON.parse(localStorage.getItem(USER_KEY));

export const setFoundNewsToStorage = (news) => {
  localStorage.setItem(FOUND_NEWS_KEY, JSON.stringify(news));
};

export const removeFoundNewsFromStorage = () => {
  localStorage.removeItem(FOUND_NEWS_KEY);
};

export const getFoundNewsFromStorage = () => JSON.parse(localStorage.getItem(FOUND_NEWS_KEY));

export const setSavedNewsToStorage = (news) => {
  localStorage.setItem(SAVED_NEWS_KEY, JSON.stringify(news));
};

export const removeSavedNewsFromStorage = () => {
  localStorage.removeItem(SAVED_NEWS_KEY);
};

export const getSavedNewsFromStorage = () => JSON.parse(localStorage.getItem(SAVED_NEWS_KEY));
