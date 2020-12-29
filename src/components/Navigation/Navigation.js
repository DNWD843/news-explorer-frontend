import { forNavigation as config } from '../../configs/configsForComponents';
import { NavLink } from 'react-router-dom';
import { MAIN, SAVED_NEWS } from '../../utils/routesMap';
import classNames from 'classnames';
import './Navigation.css';

/**
 * @module Navigation
 * @description Функциональный компонент<br>
 * Блок навигации по сайту.<br>
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @property {Boolean} isMobile -стейт состояния меню - мобильное (на мобильном разрешении)
 * @property {Function} onClick - колбэк, вызывается при клике по навигационным ссылкам
 * @property {Boolean} isMobileMenuOpened - стейт открытого состояния мобильного меню
 * @returns {JSX}
 * @since v.1.0.0
 */
function Navigation({ isLoggedIn, onClick, isMobile }) {
  const { mainLinkText, savedNewsLinkText } = config;

  const navbarClassName = classNames('navbar', {
    navbar_mobile: isMobile,
  });

  const navLinksListClassName = classNames('navbar__links', {
    navbar__links_mobile: isMobile,
  });

  const linkToMainPageClassName = classNames('navbar__link', {
    navbar__link_mobile: isMobile,
  });
  const activeLinkClassName = classNames({
    navbar__link_active: !isMobile,
    '': isMobile,
  });

  const hiddenLinkClassName = classNames('navbar__item', {
    navbar__item_hidden: !isLoggedIn,
    '': isLoggedIn,
  });

  const linkToSavedNewsPageClassName = classNames('navbar__link', {
    navbar__link_mobile: isMobile,
    navbar__link_color_grey: !isMobile,
  });

  return (
    <nav className={navbarClassName}>
      <ul className={navLinksListClassName}>
        <li className="navbar__item">
          <NavLink
            exact
            to={MAIN}
            className={linkToMainPageClassName}
            activeClassName={activeLinkClassName}
          >
            {mainLinkText}
          </NavLink>
        </li>
        <li className={hiddenLinkClassName}>
          <NavLink
            to={SAVED_NEWS}
            className={linkToSavedNewsPageClassName}
            activeClassName={activeLinkClassName}
            onClick={onClick}
          >
            {savedNewsLinkText}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
