import { Link } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';
import { forFooter as config } from '../../configs/configForComponents';
import './Footer.css';

/**
 * @module Footer
 * @description Функциональный компонент<br>
 * Футер, блок с навигационными и информационными ссылками.<br>
 * @returns {JSX}
 * @since v.1.0.0
 */
function Footer() {
  const {
    copyrightText,
    navLinkText,
    outerLinkText,
    outerLink,
    socialLinkGithub,
    socialLinkFacebook,
  } = config;
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">{copyrightText}</p>
        <nav className="footer__menu">
          <ul className="footer__links">
            <li className="footer__links-item">
              <Link to={MAIN} className="footer__link">
                {navLinkText}
              </Link>
            </li>
            <li className="footer__links-item">
              <a
                href={outerLink}
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {outerLinkText}
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a
                href={socialLinkGithub}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer__social-icon footer__social-icon_type_github"></div>
              </a>
            </li>
            <li className="footer__social-item">
              <a
                href={socialLinkFacebook}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer__social-icon footer__social-icon_type_facebook"></div>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
