//import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import { Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';
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
}) {
  const { headerLogoText, authorizationTitle } = config;

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleClickMenuButton = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <header
      className={`header ${isSavedNews && 'header_type_saved-news'}
      ${isMain && 'header_type_main'}

      `}
    >
      <div
        className={`header__container ${isMain && 'header__container_type_main'}
          ${isSavedNews && !isMobileMenuOpened && 'header__container_type_saved-news'}
          ${isMobileMenuOpened && 'header__container_mobile'}
          `}
      >
        <Switch>
          <Route exact path="/">
            <p className="header__logo">{headerLogoText}</p>
          </Route>
          <Route path="/saved-news">
            <Link to="/" className="header__link">
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
          onClick={handleClickMenuButton}
          className={`header__menu-button ${isMain && 'header__menu-button_type_main'} ${
            isSavedNews && !isMobileMenuOpened && 'header__menu-button_type_saved-news'
          }
          ${isMobileMenuOpened && (isSavedNews || isMain) && 'header__menu-button_opened'}
            `}
        ></button>
      </div>
      {children}

      <div className={` ${isMobileMenuOpened && 'header__menu-mobile-overlay'}`}>
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
