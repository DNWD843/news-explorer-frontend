import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header({ userName, config, configForNavigation, configForSearchForm }) {
  const { headerLogoText } = config;

  return (
    <header className="header-container">
      <div className="header">
        <p className="header__logo">{headerLogoText}</p>
        <Navigation config={configForNavigation} />
        <button type="button" className="header__button">
          <span className="header__button-title">{userName}</span>
          <div className="header__button-icon"></div>
        </button>
      </div>
      <SearchForm config={configForSearchForm} />
    </header>
  );
}

export default Header;
