import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import * as to from '../../utils/routesMap';
import { getFormattedDate } from '../../utils/date';
import Login from '../Login/Login';
import Register from '../Register/Register';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import SearchForm from '../SearchForm/SearchForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import PageNotFound from '../PageNotFound/PageNotFound';
import {
  register,
  login,
  getUserDataFromDataBase,
  getSavedNewsFromDataBase,
  deleteArticle,
  addArticleToSavedNews,
} from '../../utils/MainApi';
import {
  getFoundNewsFromStorage,
  getSavedNewsFromStorage,
  getTokenFromStorage,
  getUserDataFromStorage,
  removeFoundNewsFromStorage,
  removeSavedNewsFromStorage,
  removeTokenFromStorage,
  removeUserDataFromStorage,
  setFoundNewsToStorage,
  setSavedNewsToStorage,
  setTokenToStorage,
  setUserDataToStorage,
} from '../../utils/Storage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getArticlesFromNewsApi } from '../../utils/NewsApi';
import {
  INVALID_AUTHORIZATION_DATA_MESSAGE,
  INVALID_REGISTRATION_DATA_MESSAGE,
} from '../../configs';
import './App.css';

/**
 * @module App
 * @description Функциональный компонент<br>
 * Главный компонент приложения<br>
 * Управляет всеми компонентами приложения<br>
 * @returns {JSX}
 * @since v.1.0.0
 */
function App() {
  const [isLoginPopupOpened, setIsLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = useState(false);
  const [isRegSuccessTooltipOpened, setIsRegSuccessTooltipOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSearchDone, setIsSearchDone] = useState(false);
  const [isRequestProcessing, setIsRequestProcessing] = useState(false);
  const [isSearchInProgress, setIsSearchInProgress] = useState(false);
  const [isSearchFailed, setIsSearchFailed] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedNewsCards, setSavedNewsCards] = useState([]);
  const [foundNewsCards, setFoundNewsCards] = useState([]);

  const history = useHistory();

  /**
   * @method
   * @name closeAllPopups
   * @description Публичный метод<br>
   * Стрелочная функция, закрывает все попапы, удаляет слушатель нажатия клавиши Esc
   * @public
   * @since v.1.0.0
   */
  const closeAllPopups = () => {
    document.removeEventListener('keydown', handleEscClose);
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(false);
    setIsRegSuccessTooltipOpened(false);
    setIsMobileMenuOpened(false);
  };

  /**
   * @method handleEscClose
   * @description Обработчик нажатия на клавишу Escape<br>
   * Стрелочная функция, закрывает попап при нажатии клавиши Esc
   * @param {Event} evt - событие
   * @public
   * @since v.1.0.0
   */
  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  };

  /**
   * @method handleClickOnOverlay
   * @description Обработчик клика по оверлею<br>
   * Стрелочная функция, закрывает попап при клике по оверлею
   * @param {Event} evt - событие
   * @public
   * @since v.1.0.0
   */
  const handleClickOnOverlay = (evt) => {
    /**
     * Проверка истинности условия - клик по оверлею <br>
     * Примечание: этот метод используется как обработчик в слушателе клика на оверлее попапа<br>
     * Поэтому в данном случае условие проверяет совпадение клика именно на оверлее попапа
     * @ignore
     */
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  };

  /**
   * @method  handleClickLogIn
   * @description Обработчик клика по кнопке "Войти"<br>
   * Стрелочная функция, открывает попап авторизации при клике по кнопке "Авторизация" или ссылке "Войти"
   * @public
   * @since v.1.0.0
   */
  const handleClickLogIn = () => {
    closeAllPopups();
    setIsLoginPopupOpened(true);
    document.addEventListener('keydown', handleEscClose);
  };

  /**
   * @method  handleClickLogOut
   * @description Обработчик клика по кнопке "Выйти"<br>
   * Стрелочная функция, выход из аккаунта при клике по кнопке с иконкой "Выйти"
   * @public
   * @since v.1.0.0
   */
  const handleClickLogOut = () => {
    setIsLoggedIn(false);
    removeTokenFromStorage();
    removeUserDataFromStorage();
    removeSavedNewsFromStorage();
    removeFoundNewsFromStorage();
    setCurrentUser({});
    setFoundNewsCards([]);
    setIsSearchDone(false);
    history.push(to.MAIN);
  };

  /**
   * @method  handleClickRegister
   * @description Обработчик клика по кнопке "Зарегистрироваться"<br>
   * Стрелочная функция, открывает попап регистрации при клике по ссылке "Зарегистрироваться"
   * @public
   * @since v.1.0.0
   */
  const handleClickRegister = () => {
    closeAllPopups();
    setIsRegisterPopupOpened(true);
    document.addEventListener('keydown', handleEscClose);
  };

  /**
   * @method  handleRegister
   * @description Обработчик запроса на регистрацию пользователя<br>
   * Стрелочная функция, отправляет запрос на регистрацию пользователя, передает введенные данные
   * @param {Object} userData - объект с регистрационными данными пользователя
   * @param {String} userData.email - емэйл
   * @param {String} userData.password - пароль
   * @param {String} userData.name - имя
   * @param {Function} showError - колбэк, отображает ошибку регистрации, полученную от сервера
   * @public
   * @since v.1.0.0
   */
  const handleRegister = ({ email, password, name }, showError) => {
    setIsRequestProcessing(true);
    register(email, password, name)
      .then((serverError) => {
        if (!serverError) {
          closeAllPopups();
          setIsRegSuccessTooltipOpened(true);
          document.addEventListener('keydown', handleEscClose);
        } else {
          if (serverError.statusCode) {
            serverError.message = INVALID_REGISTRATION_DATA_MESSAGE;
          }
          showError(serverError.message);
        }
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        setIsRequestProcessing(false);
      });
  };

  /**
   * @method  handleLogin
   * @description Обработчик запроса на авторизацию пользователя<br>
   * Стрелочная функция, отправляет запрос на авторизацию пользователя, передает введенные данные
   * @param {Object} userData - объект с регистрационными данными пользователя
   * @param {String} userData.email - емэйл
   * @param {String} userData.password - пароль
   * @param {Function} showError - колбэк, отображает ошибку регистрации, полученную от сервера
   * @public
   * @since v.1.0.0
   */
  const handleLogin = ({ email, password }, showError) => {
    setIsRequestProcessing(true);
    login(email, password)
      .then((res) => {
        if (res.token) {
          setTokenToStorage(res.token);
          Promise.all([getUserDataFromDataBase(), getSavedNewsFromDataBase()])
            .then(([userData, savedNews]) => {
              if (userData.message) {
                showError(userData.message);
              } else if (savedNews.message) {
                showError(savedNews.message);
              } else {
                setCurrentUser(userData);
                setUserDataToStorage(userData);
                setSavedNewsToStorage(savedNews);
                setSavedNewsCards(savedNews);
                setIsLoggedIn(true);
                closeAllPopups();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          if (res.statusCode) {
            res.message = INVALID_AUTHORIZATION_DATA_MESSAGE;
          }
          showError(res.message);
        }
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setIsRequestProcessing(false);
      });
  };

  /**
   * @method  handleClickMenuButton
   * @description Обработчик клика по кнопке "Мобильное меню"<br>
   * Стрелочная функция, открывает мобильное меню, закрывает мобильное меню или открытый попап
   *  при клике по кнопке меню на мобильном разрешении
   * @public
   * @since v.1.0.0
   */
  const handleClickMenuButton = () => {
    if (isMobileMenuOpened || isLoginPopupOpened || isRegisterPopupOpened) {
      closeAllPopups();
    } else {
      setIsMobileMenuOpened(true);
    }
  };

  /**
   * @method findAndUpdateFoundNewsCard
   * @description Публичный метод<br>
   * Находит статью в результатах поиска и обновляет ее id.
   * Если статья сохраняется - id, присвоенный при отрисовке, заменяется на id, присвоенный при сохранении в БД.<br>
   * Если статья удаляется - id заменяется на её индекс в массиве.
   * @param {Number| String} id - существущий id  статьи
   * @param {Array} cardsArray - массив статей (результаты поиска)
   * @param {Object} newCard - новый id (статья сохраняется), undefined если статья удаляется
   * @public
   * @since v.1.1.0
   */
  const findAndUpdateFoundNewsCard = (id, cardsArray, newCard) => {
    const arrayWithUpdatedCard = cardsArray.map((card, index) =>
      card._id === id
        ? (() => {
            card._id = newCard._id ? newCard._id : index + 1;
            return card;
          })()
        : card,
    );
    setFoundNewsCards(arrayWithUpdatedCard);
    setFoundNewsToStorage(arrayWithUpdatedCard);
  };

  /**
   * @method handleDeleteArticle
   * @description Обработчик запроса на удаление статьи<br>
   * @param {Object} article - объект с данными карточки статьи
   * @param {String} article._id - id статьи, которую надо удалить (это id, присвоенный БД
   *  при сохранении статьи)
   * @public
   * @since v.1.1.0
   */
  const handleDeleteArticle = (article) => {
    deleteArticle(article._id)
      .then((res) => {
        const resultCardsArray = savedNewsCards.filter((сard) => {
          return сard._id !== article._id;
        });
        setSavedNewsCards(resultCardsArray);
        setSavedNewsToStorage(resultCardsArray);
        findAndUpdateFoundNewsCard(article._id, foundNewsCards, { _id: undefined });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * @method handleSaveArticle
   * @description Обработчик запроса на сохранение статьи<br>
   * @param {Object} article - объект с данными статьи, которую надо сохранить
   * @param {Number} id - id статьи, которую нужно сохранить. (этот id равен индексу статьи
   *  в массиве найденных новостей)
   * @public
   * @since v.1.1.0
   */
  const handleSaveArticle = (article, id) => {
    addArticleToSavedNews(article)
      .then((newCard) => {
        const resultCardsArray = savedNewsCards.concat(newCard);
        setSavedNewsCards(resultCardsArray);
        setSavedNewsToStorage(resultCardsArray);
        findAndUpdateFoundNewsCard(id, foundNewsCards, newCard);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * @method handleSearchFormSubmit
   * @description Обработчик сабмита формы поиска<br>
   * Обрабатывает поисковый запрос пользователя. Принимает аргументом запрос, возвращает массив
   *  найденных статей или информацию о результатах обработки запроса.
   * @param {String} userQuery - запрос
   * @public
   * @since v.1.1.0
   */
  const handleSearchFormSubmit = (userQuery) => {
    setIsSearchFailed(false);
    setIsSearchDone(false);
    setIsSearchInProgress(true);
    setFoundNewsCards([]);
    getArticlesFromNewsApi(userQuery)
      .then((res) => {
        const formattedNewsCards = res.articles.map((article, index) => ({
          _id: index + 1,
          source: article.source.name,
          keyword: userQuery[0].toUpperCase().concat(userQuery.slice(1).toLowerCase()),
          title: article.title,
          text: article.description,
          date: getFormattedDate(article.publishedAt),
          link: article.url,
          image: article.urlToImage,
        }));
        setFoundNewsCards(formattedNewsCards);
        if (isLoggedIn) {
          setFoundNewsToStorage(formattedNewsCards);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsSearchFailed(true);
      })
      .finally(() => {
        setIsSearchInProgress(false);
        setIsSearchDone(true);
      });
  };

  useEffect(() => {
    const userDataFromStorage = getUserDataFromStorage();
    const tokenFromStorage = getTokenFromStorage();
    const savedNewsFromStorage = getSavedNewsFromStorage();
    const foundNewsFromStorage = getFoundNewsFromStorage();
    if (userDataFromStorage && tokenFromStorage) {
      setCurrentUser(userDataFromStorage);
      setSavedNewsCards(savedNewsFromStorage);
      if (foundNewsFromStorage) {
        setFoundNewsCards(foundNewsFromStorage);
        setIsSearchDone(true);
      }
      setIsLoggedIn(true);
    } else if (history.location.state) {
      setIsLoginPopupOpened(true);
    }
  }, [history]);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path={to.MAIN} exact>
            <Header
              isLoggedIn={isLoggedIn}
              onLogInClick={handleClickLogIn}
              onLogOutClick={handleClickLogOut}
              onMenuButtonClick={handleClickMenuButton}
              isMobileMenuOpened={isMobileMenuOpened}
              isPopupOpened={isLoginPopupOpened || isRegisterPopupOpened}
              onOverlayClick={handleClickOnOverlay}
            >
              <SearchForm
                handleSearchFormSubmit={handleSearchFormSubmit}
                isSearchInProgress={isSearchInProgress}
              />
            </Header>
            <Main
              isSearchInProgress={isSearchInProgress}
              isSearchDone={isSearchDone}
              isSearchFailed={isSearchFailed}
              searchResult={foundNewsCards}
              isLoggedIn={isLoggedIn}
              openRegisterPopup={handleClickRegister}
              handleDeleteArticle={handleDeleteArticle}
              handleSaveArticle={handleSaveArticle}
            />
          </Route>

          <ProtectedRoute
            path={to.SAVED_NEWS}
            isLoggedIn={isLoggedIn}
            savedArticles={savedNewsCards}
            component={SavedNews}
            onLogInClick={handleClickLogIn}
            onLogOutClick={handleClickLogOut}
            onMenuButtonClick={handleClickMenuButton}
            isMobileMenuOpened={isMobileMenuOpened}
            isPopupOpened={isLoginPopupOpened || isRegisterPopupOpened}
            onOverlayClick={handleClickOnOverlay}
            handleDeleteArticle={handleDeleteArticle}
          />

          <Route path={to.ANY_ROUTE}>
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
        <Login
          isOpened={isLoginPopupOpened}
          onClose={closeAllPopups}
          onOverlayClick={handleClickOnOverlay}
          onRedirectLinkClick={handleClickRegister}
          handleLogin={handleLogin}
          isRequestProcessing={isRequestProcessing}
        />
        <Register
          isOpened={isRegisterPopupOpened}
          onClose={closeAllPopups}
          onOverlayClick={handleClickOnOverlay}
          onRedirectLinkClickClick={handleClickLogIn}
          handleRegister={handleRegister}
          isRequestProcessing={isRequestProcessing}
        />
        <InfoTooltip
          isOpened={isRegSuccessTooltipOpened}
          onClose={closeAllPopups}
          onOverlayClick={handleClickOnOverlay}
          onRedirectLinkClick={handleClickLogIn}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
