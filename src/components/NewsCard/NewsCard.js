import classNames from 'classnames';
import { useState } from 'react';
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
    tooltipTextForMainPageToSave,
    tooltipTextForMainPageToDelete,
    tooltipTextForSavedNewsPage,
  } = config;

  const [isSavedToCollection, setIsSavedToCollection] = useState(false);

  const cardBookmarkClassName = classNames('card__bookmark', {
    card__bookmark_page_main:
      !isLoggedIn || (isLoggedIn && !isSavedNewsOpened && !isSavedToCollection),
    card__bookmark_marked: isLoggedIn && !isSavedNewsOpened && isSavedToCollection,
    'card__bookmark_page_saved-news': isSavedNewsOpened,
  });
  const handleClickOnBookmark = () => {
    if (isLoggedIn && !isSavedNewsOpened && !isSavedToCollection) {
      console.log('новость добавляется в коллекцию');
      setIsSavedToCollection(true);
    }
    if (isLoggedIn && !isSavedNewsOpened && isSavedToCollection) {
      console.log('новость удаляется из коллекции');
      setIsSavedToCollection(false);
    }
    if (isSavedNewsOpened) {
      console.log('новость удаляется из сохраненных новостей');
    }
  };

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

        <div className="card__category">{keyword}</div>
      </a>
      <button
        type="button"
        onClick={handleClickOnBookmark}
        className={cardBookmarkClassName}
        name="bookmark"
        disabled={!isLoggedIn}
      ></button>
      <div className="card__tooltip">
        {isSavedNewsOpened && tooltipTextForSavedNewsPage}
        {!isLoggedIn && tooltipTextForMainPageNotLoggedIn}
        {!isSavedNewsOpened && isLoggedIn && !isSavedToCollection && tooltipTextForMainPageToSave}
        {!isSavedNewsOpened && isLoggedIn && isSavedToCollection && tooltipTextForMainPageToDelete}
      </div>
    </li>
  );
}

export default NewsCard;
