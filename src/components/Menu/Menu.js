import Navigation from '../Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';

import './Menu.css';

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
  return (
    <div
      className={`menu ${isMobile ? 'menu_mobile' : 'menu_desktop'} ${
        isMobileMenuOpened && 'menu_opened'
      }`}
    >
      <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} isMobile={isMobile} />

      {isLoggedIn ? (
        <button
          onClick={onLogOutClick}
          type="button"
          className={`menu__button ${isMobile && 'menu__button_mobile'}`}
        >
          <span className="menu__button-title">{userName}</span>
          <Switch>
            <Route exact path="/">
              <div className="menu__button-icon menu__button-icon_main"></div>
            </Route>
            <Route path="/saved-news">
              <div
                className={`menu__button-icon ${
                  !isMobile ? 'menu__button-icon_saved-news' : 'menu__button-icon_main'
                }`}
              ></div>
            </Route>
          </Switch>
        </button>
      ) : (
        <button
          onClick={onLogInClick}
          type="button"
          className={`menu__button ${isMobile && 'menu__button_mobile'}`}
        >
          <span className="menu__button-title">{authorizationTitle}</span>
        </button>
      )}
    </div>
  );
}

export default Menu;
