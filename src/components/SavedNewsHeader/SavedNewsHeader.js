import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  return (
    <header className="saved-news-header">
      <Link exact to="/" className="saved-news-header__link">
        <p className="saved-news-header__logo">NewsExplorer</p>
      </Link>
      <Navigation />
      <button type="button" className="saved-news-header__button">
        <span className="saved-news-header__button-title">Грета</span>
        <div className="saved-news-header__button-icon"></div>
      </button>
    </header>
  );
}

export default SavedNewsHeader;
