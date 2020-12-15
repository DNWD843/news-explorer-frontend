// import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <>
      <ul className="navbar">
        <li className="navbar__item"><a to="#" className="navbar__link navbar__link_active">Главная</a></li>
        <li className="navbar__item"><a to="#" className="navbar__link navbar__link_color_grey">Сохраненные статьи</a></li>
      </ul>
    </>
  );
}

export default Navigation;
