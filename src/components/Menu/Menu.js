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
}) {
  return (
    <>
      <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <button onClick={onLogOutClick} type="button" className="menu__button menu__button_mobile">
          <span className="menu__button-title">{userName}</span>
          <Switch>
            <Route exact path="/">
              <div className="menu__button-icon menu__button-icon_main"></div>
            </Route>
            <Route path="/saved-news">
              <div className="menu__button-icon menu__button-icon_saved-news"></div>
            </Route>
          </Switch>
        </button>
      ) : (
        <button onClick={onLogInClick} type="button" className="menu__button">
          <span className="menu__button-title">{authorizationTitle}</span>
        </button>
      )}
    </>
  );
}

export default Menu;
