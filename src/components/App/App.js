import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import * as to from '../../utils/routesMap';
import searchResultCards from '../../mocks/searchResultCards'; // временно имитирую получение карточек от сервера
import savedCards from '../../mocks/savedCards'; // временно имитирую получение карточек от сервера
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useState } from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import SearchForm from '../SearchForm/SearchForm';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import { register, login, getUserData } from '../../utils/MainApi';
import { removeToken, setToken } from '../../utils/token';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  //const currentUser = { userName: 'Вася' }; // TODO: на следующем этапе сюда сохранять контекст пользователя

  const [isLoginPopupOpened, setIsLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = useState(false);
  const [isRegSuccessTooltipOpened, setIsRegSuccessTooltipOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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
   * @description Публичный метод<br>
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
   * @description Публичный метод<br>
   * Стрелочная функция, выход из аккаунта при клике по кнопке с иконкой "Выйти"
   * @public
   * @since v.1.0.0
   */
  const handleClickLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
  };

  /**
   * @method  handleClickRegister
   * @description Публичный метод<br>
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
   * @description Публичный метод<br>
   * Стрелочная функция, отправляет запрос на регистрацию пользователя, передает введенные данные
   * @public
   * @since v.1.0.0
   */
  const handleRegister = ({ email, password, name }, callback) => {
    register(email, password, name)
      .then((res) => {
        if (!res) {
          closeAllPopups();
          setIsRegSuccessTooltipOpened(true);
          document.addEventListener('keydown', handleEscClose);
        } else {
          callback(res.message);
        }
      })
      .catch((err) => console.log({ err }));
    /*.finally(() => {

      });*/
  };

  /**
   * @method  handleLogin
   * @description Публичный метод<br>
   * Стрелочная функция, отправляет запрос на авторизацию пользователя, передает введенные данные
   * @public
   * @since v.1.0.0
   */
  const handleLogin = ({ email, password }) => {
    login(email, password)
      .then((JWT) => {
        setToken(JWT.token);
        return (
          getUserData()
            /*.then((userData) => {
            setCurrentUser(userData);
            setIsLoggedIn(true);
          })
          .catch((err) => console.log(err));
      }) */
            .then((userData) => userData)
        );
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  /**
   * @method  handleClickMenuButton
   * @description Публичный метод<br>
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

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path={to.MAIN}>
            <Header
              isLoggedIn={isLoggedIn}
              onLogInClick={handleClickLogIn}
              onLogOutClick={handleClickLogOut}
              onMenuButtonClick={handleClickMenuButton}
              isMobileMenuOpened={isMobileMenuOpened}
              isPopupOpened={isLoginPopupOpened || isRegisterPopupOpened}
              onOverlayClick={handleClickOnOverlay}
            >
              <SearchForm />
            </Header>

            <Main
              searchResult={searchResultCards} //TODO: удалить
              isLoggedIn={isLoggedIn}
            />
          </Route>

          <ProtectedRoute
            path={to.SAVED_NEWS}
            isLoggedIn={isLoggedIn}
            savedArticles={savedCards}
            component={SavedNews}
            onLogInClick={handleClickLogIn}
            onLogOutClick={handleClickLogOut}
            onMenuButtonClick={handleClickMenuButton}
            isMobileMenuOpened={isMobileMenuOpened}
            isPopupOpened={isLoginPopupOpened || isRegisterPopupOpened}
            onOverlayClick={handleClickOnOverlay}
          />
          <Route path={to.MAIN}>
            <Redirect to={to.MAIN} />
          </Route>
        </Switch>

        <Footer />
        <Login
          isOpened={isLoginPopupOpened}
          onClose={closeAllPopups}
          onOverlayClick={handleClickOnOverlay}
          onRedirectLinkClick={handleClickRegister}
          handleLogin={handleLogin}
        />
        <Register
          isOpened={isRegisterPopupOpened}
          onClose={closeAllPopups}
          onOverlayClick={handleClickOnOverlay}
          onRedirectLinkClickClick={handleClickLogIn}
          handleRegister={handleRegister}
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
