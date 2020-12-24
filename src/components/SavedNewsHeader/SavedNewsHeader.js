//import Navigation from '../Navigation/Navigation';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';
import './SavedNewsHeader.css';

function SavedNewsHeader({ isLoggedIn, userName, config, configForNavigation, onLogOutClick }) {
  const { headerLogoText } = config;
  return (
    <header className="saved-news-header">
      <Link exact="true" to={MAIN} className="saved-news-header__link">
        <p className="saved-news-header__logo">{headerLogoText}</p>
      </Link>
      {/*
      <Navigation config={configForNavigation} isLoggedIn={isLoggedIn} />
      <button onClick={onLogOutClick} type="button" className="saved-news-header__button">
        <span className="saved-news-header__button-title">{userName}</span>
        <div className="saved-news-header__button-icon"></div>
      </button>
*/}
      <Menu
        configForNavigation={configForNavigation}
        onLogOutClick={onLogOutClick}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />
    </header>
  );
}

export default SavedNewsHeader;
