import Navigation from '../Navigation/Navigation';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

function Header(props) {
  return (

    <header className="header-container header-container_background_main">
      <div className="header">
        <p className="header__logo">NewsExplorer</p>
        <Navigation />
        <button type="button" className="header__button">
          <span className="header__button-title">Грета</span>
          <div className="header__button-icon"></div>
        </button>
      </div>
      <SearchForm />
    </header>


  );
}

export default Header;
