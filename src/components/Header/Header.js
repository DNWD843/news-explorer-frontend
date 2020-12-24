//import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header({
  isLoggedIn,
  userName,
  config,
  configForNavigation,
  configForSearchForm,
  onLogInClick,
  onLogOutClick,
}) {
  const { headerLogoText, authorizationTitle } = config;

  return (
    <header className="header-container">
      <div className="header">
        <p className="header__logo">{headerLogoText}</p>
        {/* <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} />

        {isLoggedIn ? (
          <button
            onClick={onLogOutClick}
            type="button"
            className="header__button header__button_mobile"
          >
            <span className="header__button-title">{userName}</span>
            <div className="header__button-icon"></div>
          </button>
        ) : (
          <button onClick={onLogInClick} type="button" className="header__button">
            <span className="header__button-title">{authorizationTitle}</span>
          </button>
        )}*/}
        <Menu
          configForNavigation={configForNavigation}
          onLogInClick={onLogInClick}
          onLogOutClick={onLogOutClick}
          isLoggedIn={isLoggedIn}
          userName={userName}
          authorizationTitle={authorizationTitle}
        />
        <button type="button" className="header__menu-button header__menu-button_normal"></button>
      </div>
      <SearchForm config={configForSearchForm} />
    </header>
  );
}

export default Header;
