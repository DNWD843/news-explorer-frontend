import Navigation from '../Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import * as to from '../../utils/routesMap';
import pathToMainIcon from '../../images/logout-icon-white.svg';
import pathToSavedNewsIcon from '../../images/logout-icon-black.svg';
import './Menu.css';

/**
 * @module Menu
 * @description Функциональный компонент<br>
 * Меню, блок содержит меню навигации по сайту и кнопку входа/выхода в приложение.<br>
 * @property {Object} configForNavigation - объект настроек для компонента Navigation
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @property {Function} onLogOutClick - колбэк, переводит состояние пользователя в "не авторизован"
 * @property {Function} onLogInClick - колбэк, вызывается при клике по кнопке "Авторизоваться"
 * @property {String} userName - имя пользователя
 * @property {String} authorizationTitle - заголовок кнопки входа/выхода (авторизации)
 * @property {Boolean} isMobile -стейт состояния меню - мобильное (на мобильном разрешении)
 * @property {Boolean} isMobileMenuOpened - стейт открытого состояния мобильного меню
 * @returns {JSX}
 * @since v.1.0.0
 */
function Menu({
  configForNavigation,
  isLoggedIn,
  onLogOutClick,
  onLogInClick,
  userName,
  authorizationTitle,
  isMobile,
  isMobileMenuOpened,
}) {
  const menuClassName = classNames('menu', {
    menu_mobile: isMobile,
    menu_desktop: !isMobile,
    menu_opened: isMobileMenuOpened,
  });

  const authButtonClassName = classNames('menu__button', {
    menu__button_mobile: isMobile,
  });
  const authButtonTextClassName = classNames('menu__button-title');
  const authButtonIconForMainPageClassName = classNames('menu__button-icon');
  const authButtonIconForSavedNewsPageClassName = classNames('menu__button-icon');

  return (
    <div className={menuClassName}>
      <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} isMobile={isMobile} />

      {isLoggedIn ? (
        <button onClick={onLogOutClick} type="button" className={authButtonClassName}>
          <span className={authButtonTextClassName}>{userName}</span>
          <Switch>
            <Route exact path={to.MAIN}>
              <img
                src={pathToMainIcon}
                alt="иконка кнопки выйти"
                className={authButtonIconForMainPageClassName}
              />
            </Route>
            <Route path={to.SAVED_NEWS}>
              <img
                src={isMobile ? pathToMainIcon : pathToSavedNewsIcon}
                alt="иконка кнопки выйти"
                className={authButtonIconForSavedNewsPageClassName}
              />
            </Route>
          </Switch>
        </button>
      ) : (
        <button onClick={onLogInClick} type="button" className={authButtonClassName}>
          <span className={authButtonTextClassName}>{authorizationTitle}</span>
        </button>
      )}
    </div>
  );
}

export default Menu;