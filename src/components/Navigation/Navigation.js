import { NavLink } from 'react-router-dom';
import { MAIN, SAVED_NEWS } from '../../utils/routesMap';
import './Navigation.css';

function Navigation({ isLoggedIn, onClick, isMobile, config }) {
  const { mainLinkText, savedNewsLinkText } = config;
  return (
    <nav className={`navbar  ${isMobile && 'navbar_mobile'}`}>
      <ul className={`navbar__links ${isMobile && 'navbar__links_mobile'}`}>
        <li className="navbar__item">
          <NavLink
            exact
            to={MAIN}
            className={`navbar__link ${isMobile && 'navbar__link_mobile'}`}
            activeClassName={`${!isMobile ? 'navbar__link_active' : ''}`}
          >
            {mainLinkText}
          </NavLink>
        </li>
        <li className={`navbar__item ${!isLoggedIn ? 'navbar__item_hidden' : ''}`}>
          <NavLink
            to={SAVED_NEWS}
            className={`navbar__link  ${
              isMobile ? 'navbar__link_mobile' : 'navbar__link_color_grey'
            }`}
            activeClassName={`${!isMobile ? 'navbar__link_active' : ''}`}
            onClick={onClick}
          >
            {savedNewsLinkText}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
