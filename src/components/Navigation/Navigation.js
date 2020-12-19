import { NavLink } from 'react-router-dom';
import { MAIN, SAVED_NEWS } from '../../utils/routesMap';
import './Navigation.css';

function Navigation({ config }) {
  const { mainLinkText, savedNewsLinkText } = config;
  return (
    <nav className="menu">
      <ul className="navbar">
        <li className="navbar__item">
          <NavLink
            exact
            to={MAIN}
            className="navbar__link navbar__link_color_black"
            activeClassName="navbar__link_active"
          >
            {mainLinkText}
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to={SAVED_NEWS}
            className="navbar__link navbar__link_color_grey"
            activeClassName="navbar__link_active"
          >
            {savedNewsLinkText}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
