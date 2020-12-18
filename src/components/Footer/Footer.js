import './Footer.css';

function Footer(props) {
  return (
    <>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
        <ul className="footer__links">
          <li className="footer__links-item footer__links-item_type_default">
            <a href="#" className="footer__link">Главная</a>
          </li>
          <li className="footer__links-item footer__links-item_type_default">
            <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
          </li>
        </ul>
        <ul className="footer__social">
          <li className="footer__links-item footer__links-item_type_social">
            <a href="https://github.com/DNWD843/news-explorer-frontend/tree/level-2" className="footer__social-icon-link">
              <div className="footer__social-icon footer__social-icon_type_github"></div>
            </a>
          </li>
        </ul>
      </footer>
    </>

  );
}

export default Footer;
