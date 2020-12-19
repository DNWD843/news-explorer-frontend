import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';
import './SavedNewsHeader.css';

function SavedNewsHeader({ userName, config, configForNavigation }) {
  const { headerLogoText } = config;
  return (
    <header className="saved-news-header">
      <Link exact="true" to={MAIN} className="saved-news-header__link">
        <p className="saved-news-header__logo">{headerLogoText}</p>
      </Link>
      <Navigation config={configForNavigation} />
      <button type="button" className="saved-news-header__button">
        <span className="saved-news-header__button-title">{userName}</span>
        <div className="saved-news-header__button-icon"></div>
      </button>
    </header>
  );
}

export default SavedNewsHeader;
