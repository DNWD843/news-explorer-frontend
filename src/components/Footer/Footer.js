import { Link } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';
import './Footer.css';

function Footer({ config }) {
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
            <li className="footer__links-item footer__links-item_type_default">
              <Link exact="true" to={MAIN} className="footer__link">
                {navLinkText}
              </Link>
            </li>
            <li className="footer__links-item footer__links-item_type_default">
              <a href={outerLink} className="footer__link">
                {outerLinkText}
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__links-item footer__links-item_type_social">
              <a href={socialLinkGithub} className="footer__social-icon-link">
                <div className="footer__social-icon footer__social-icon_type_github"></div>
              </a>
            </li>
            <li className="footer__links-item footer__links-item_type_social">
              <a href={socialLinkFacebook} className="footer__social-icon-link">
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
