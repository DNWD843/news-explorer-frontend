// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import * as config from '../../configs/configsForComponents';
import * as to from '../../utils/routesMap';
import searchResultCards from '../../mocks/searchResultCards'; // временно имитирую получение карточек от сервера
import savedCards from '../../mocks/savedCards'; // временно имитирую получение карточек от сервера
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useState } from 'react';
import './App.css';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  const currentUser = { userName: 'Вася' }; // TODO: на следующем этапе сюда сохранять контекст пользователя

  const [isLoginPopupOpened, setIsLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = useState(false);
  const [isRegSuccessTooltipOpened, setIsRegSuccessTooltipOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /**
   * @method  closeAllPopups
   * @description Публичный метод<br>
   * Стрелочная функция, закрывает все попапы, удаляет слушатель нажатия клавиши Esc
   * @public
   * @memberof App
   * @instance
   * @since v.2.0.0
   */
  const closeAllPopups = () => {
    document.removeEventListener('keydown', handleEscClose);
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(false);
    setIsRegSuccessTooltipOpened(false);
  };

  /**
   * @method handleEscClose
   * @description Обработчик нажатия на клавишу Escape<br>
   * Стрелочная функция, закрывает попап при нажатии клавиши Esc
   * @param {Event} evt - событие
   * @public
   * @memberof App
   * @instance
   * @since v.2.0.0
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
   * @memberof App
   * @instance
   * @since v.2.0.0
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

  const handleClickLogIn = () => {
    closeAllPopups();
    setIsLoginPopupOpened(true);
    document.addEventListener('keydown', handleEscClose);
  };

  const handleClickLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleClickRegister = () => {
    closeAllPopups();
    setIsRegisterPopupOpened(true);
    document.addEventListener('keydown', handleEscClose);
  };

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    closeAllPopups();
    setIsRegSuccessTooltipOpened(true);
    document.addEventListener('keydown', handleEscClose); //временно, для проверки закрытия подсказки по эскейп
  };

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    closeAllPopups();
    setIsLoggedIn(true);
  };

  return (
    <>
      <Switch>
        <Route exact path={to.MAIN}>
          <Header
            isLoggedIn={isLoggedIn}
            userName={currentUser.userName}
            config={config.forHeader}
            configForNavigation={config.forNavigation}
            onLogInClick={handleClickLogIn}
            onLogOutClick={handleClickLogOut}
            isMain={true}
            isSavedNews={false}
          >
            <SearchForm config={config.forSearchForm} />
          </Header>
        </Route>
        <Route path={to.SAVED_NEWS}>
          <Header
            isLoggedIn={isLoggedIn}
            userName={currentUser.userName}
            config={config.forHeader}
            configForNavigation={config.forNavigation}
            onLogOutClick={handleClickLogOut}
            isMain={false}
            isSavedNews={true}
          />
        </Route>
      </Switch>
      <Main
        userName={currentUser.userName}
        configForAbout={config.forAbout}
        configForNoResult={config.forNoResult}
        configForPreloader={config.forPreloader}
        configForSavedNews={config.forSavedNews}
        searchResult={searchResultCards} //TODO: удалить
        configForSearchResult={config.forSearchResult}
        savedArticles={savedCards} //TODO удалить
        configForNewsCard={config.forNewsCard}
        isLoggedIn={isLoggedIn}
      />
      <Footer config={config.forFooter} />
      <Login
        config={config.forLogin}
        isOpened={isLoginPopupOpened}
        onClose={closeAllPopups}
        onOverlayClick={handleClickOnOverlay}
        onRedirectLinkClick={handleClickRegister}
        onSubmit={handleLoginSubmit}
      />
      <Register
        config={config.forRegister}
        isOpened={isRegisterPopupOpened}
        onClose={closeAllPopups}
        onOverlayClick={handleClickOnOverlay}
        onRedirectLinkClickClick={handleClickLogIn}
        onSubmit={handleRegisterSubmit}
      />
      <InfoTooltip
        config={config.forRegistrationSuccessToolTip}
        onOverlayClick={handleClickOnOverlay}
        isOpened={isRegSuccessTooltipOpened}
        onClose={closeAllPopups}
        onRedirectLinkClick={handleClickLogIn}
      />
    </>
  );
}

export default App;
