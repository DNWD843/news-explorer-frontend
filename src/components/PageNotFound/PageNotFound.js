import { Link } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';
import { forPageNotFound as config } from '../../configs/configForComponents';
import './PageNoutFound.css';

function PageNoutFound() {
  const { TITLE, DESCRIPTION, ERROR_STATUS, LINK_TEXT } = config;
  return (
    <section className="page-not-found">
      <div className="page-not-found__element"></div>
      <h2 className="page-not-found__title">{ERROR_STATUS}</h2>
      <h3 className="page-not-found__title">{TITLE}</h3>
      <p className="page-not-found__description">{DESCRIPTION}</p>
      <Link to={MAIN}>{LINK_TEXT}</Link>
    </section>
  );
}

export default PageNoutFound;
