import Navigation from '../Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';
import classNames from 'classnames';
import * as to from '../../utils/routesMap';
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
  const menuClassName = classNames('menu', {
    menu_mobile: isMobile,
    menu_desktop: !isMobile,
    menu_opened: isMobileMenuOpened,
  });

  const authButtonClassName = classNames('menu__button', {
    menu__button_mobile: isMobile,
  });
  const authButtonTextClassName = classNames('menu__button-title');
  const authButtonIconForMainPageClassName = classNames(
    'menu__button-icon',
    'menu__button-icon_main',
  );
  const authButtonIconForSavedNewsPageClassName = classNames('menu__button-icon', {
    'menu__button-icon_saved-news': !isMobile,
    'menu__button-icon_main': isMobile,
  });

  return (
    <div className={menuClassName}>
      <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} isMobile={isMobile} />

      {isLoggedIn ? (
        <button onClick={onLogOutClick} type="button" className={authButtonClassName}>
          <span className={authButtonTextClassName}>{userName}</span>
          <Switch>
            <Route exact path={to.MAIN}>
              <div className={authButtonIconForMainPageClassName}></div>
            </Route>
            <Route path={to.SAVED_NEWS}>
              <div className={authButtonIconForSavedNewsPageClassName}></div>
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
