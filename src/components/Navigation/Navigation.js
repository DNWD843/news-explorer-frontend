import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <nav className="menu">
      <ul className="navbar">
        <li className="navbar__item">
          <NavLink
            exact
            to="/"
            className="navbar__link navbar__link_color_black"
            activeClassName="navbar__link_active"
          >
            Главная
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/saved-news"
            className="navbar__link navbar__link_color_grey"
            activeClassName="navbar__link_active"
          >
            Сохраненные статьи
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
