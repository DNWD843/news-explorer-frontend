import Menu from '../Menu/Menu';
import { Switch, Route, Link } from 'react-router-dom';
import { MAIN, SAVED_NEWS } from '../../utils/routesMap';
import classNames from 'classnames';
import './Header.css';

function Header({
  isLoggedIn,
  userName,
  config,
  configForNavigation,
  onLogInClick,
  onLogOutClick,
  children,
  isMain,
  isSavedNews,
  onMenuButtonClick,
  isMobileMenuOpened,
  isPopupOpened,
  onOverlayClick,
}) {
  const { headerLogoText, authorizationTitle } = config;

  const headerClassName = classNames('header', {
    'header_type_saved-news': isSavedNews,
    header_type_main: isMain,
  });

  const headerContainerClassName = classNames('header__container', {
    header__container_type_main: isMain,
    'header__container_type_saved-news': isSavedNews && !isMobileMenuOpened,
    header__container_mobile: isMobileMenuOpened,
  });

  const headerMobileMenuButtonClassName = classNames('header__menu-button', {
    'header__menu-button_type_main': isMain,
    'header__menu-button_type_saved-news': isSavedNews,
    'header__menu-button_opened': isMobileMenuOpened || isPopupOpened,
  });

  const headerMobileMenuOverlayClassName = classNames('overlay', {
    'header__menu-mobile-overlay': isMobileMenuOpened,
  });

  return (
    <header className={headerClassName}>
      <div className={headerContainerClassName}>
        <Switch>
          <Route exact path={MAIN}>
            <p className="header__logo">{headerLogoText}</p>
          </Route>
          <Route path={SAVED_NEWS}>
            <Link to={MAIN} className="header__link">
              <p className="header__logo">{headerLogoText}</p>
            </Link>
          </Route>
        </Switch>

        <Menu
          configForNavigation={configForNavigation}
          onLogInClick={onLogInClick}
          onLogOutClick={onLogOutClick}
          isLoggedIn={isLoggedIn}
          userName={userName}
          authorizationTitle={authorizationTitle}
          isMobile={false}
        />
        <button
          type="button"
          onClick={onMenuButtonClick}
          className={headerMobileMenuButtonClassName}
        />
      </div>

      {children}

      <div className={headerMobileMenuOverlayClassName} onClick={onOverlayClick}>
        <Menu
          configForNavigation={configForNavigation}
          onLogInClick={onLogInClick}
          onLogOutClick={onLogOutClick}
          isLoggedIn={isLoggedIn}
          userName={userName}
          authorizationTitle={authorizationTitle}
          isMobile={true}
          isMobileMenuOpened={isMobileMenuOpened}
        />
      </div>
    </header>
  );
}

export default Header;
