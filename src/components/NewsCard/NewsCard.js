import './NewsCard.css';

function NewsCard({
  source,
  keyword,
  title,
  text,
  date,
  link,
  image,
  config,
  isSavedNewsOpened,
  isLoggedIn,
}) {
  const {
    altText,
    tooltipTextForMainPageNotLoggedIn,
    tooltipTextForMainPageLoggedIn,
    tooltipTextForSavedNewsPage,
  } = config;

  return (
    <li className="card cards__item">
      <a href={link} className="card__link">
        <img className="card__image" src={image} alt={altText} />
        <div className="card__info">
          <p className="card__date">{date}</p>
          <h2 className="card__title">{title}</h2>

          <div className="card__description-container">
            <p className="card__description">{text}</p>
          </div>

          <p className="card__source">{source}</p>
        </div>
        <button
          type="button"
          className={`card__bookmark ${
            !isSavedNewsOpened ? 'card__bookmark_page_main' : 'card__bookmark_page_saved-news'
          }`}
          name="bookmark"
          disabled={true}
        ></button>
        <div className="card__tooltip">
          {isSavedNewsOpened && tooltipTextForSavedNewsPage}
          {!isLoggedIn && tooltipTextForMainPageNotLoggedIn}
          {!isSavedNewsOpened && isLoggedIn && tooltipTextForMainPageLoggedIn}
        </div>
        <div className="card__category">{keyword}</div>
      </a>
    </li>
  );
}

export default NewsCard;
