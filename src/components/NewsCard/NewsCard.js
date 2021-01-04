import { forNewsCard as config } from '../../configs/configForComponents';
import classNames from 'classnames';
import { useState } from 'react';
import './NewsCard.css';

/**
 * @module NewsCard
 * @description Функциональный компонент<br>
 * Карточка статьи.
 * @property {String} source - источник статьи
 * @property {String} keyword - ключевое слово статьи
 * @property {String} title - заголовок статьи
 * @property {String} text - текст статьи
 * @property {String} date - дата статьи
 * @property {String} link - ссылка на статью
 * @property {String} image - ссылка на изображение
 * @property {Boolean} isSavedNewsOpened - стейт состояния страницы с сохраненными новостями
 * @property {Boolean} isLoggedIn -  стейт состяния пользователя: авторизован/не авторизован
 * @returns {JSX}
 * @since v.1.0.0
 */
function NewsCard({
  source,
  keyword,
  title,
  text,
  date,
  link,
  image,
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

  const cardCategoryClassName = classNames({
    card__category: isSavedNewsOpened,
    'card__category card__category_hidden': !isSavedNewsOpened,
  });

  const cardTooltipClassName = classNames('card__tooltip', {
    'card__tooltip_type_saved-news': isSavedNewsOpened,
    card__tooltip_type_default: !isSavedNewsOpened,
  });

  /**
   * @method handleClickOnBookmark
   * @description Публичный метод<br>
   * Вызывается при клике по флажку на карточке статьи. В зависимости от состояния пользователя,
   *  страницы, на которой находится пользователь, сотояния карточки он сохраняет статью или
   *  удаляет статью из коллекции
   * @public
   * @since v.1.0.0
   */
  const handleClickOnBookmark = () => {
    if (isLoggedIn && !isSavedNewsOpened && !isSavedToCollection) {
      console.log('новость добавляется в коллекцию'); //TODO: удалить на следующем этапе
      setIsSavedToCollection(true);
    } else if (isLoggedIn && !isSavedNewsOpened && isSavedToCollection) {
      console.log('новость удаляется из коллекции'); //TODO: удалить на следующем этапе
      setIsSavedToCollection(false);
    } else if (isSavedNewsOpened) {
      console.log('новость удаляется из сохраненных новостей'); //TODO: удалить на следующем этапе
    }
  };

  return (
    <li className="card news-card-list__item">
      <a href={link} className="card__link" target="_blank" rel="noopener noreferrer">
        <img className="card__image" src={image} alt={altText} />
        <div className="card__info">
          <p className="card__date">{date}</p>

          <div className="card__description-container">
            <div className="card__title-container">
              <h2 className="card__title">{title}</h2>
            </div>
            <p className="card__description">{text}</p>
          </div>
          <p className="card__source">{source}</p>
        </div>
      </a>
      <div className={cardCategoryClassName}>{keyword}</div>
      <button
        type="button"
        onClick={handleClickOnBookmark}
        className={cardBookmarkClassName}
        name="bookmark"
        disabled={!isLoggedIn}
      ></button>
      <div className={cardTooltipClassName}>
        {isSavedNewsOpened && tooltipTextForSavedNewsPage}
        {!isLoggedIn && tooltipTextForMainPageNotLoggedIn}
        {!isSavedNewsOpened && isLoggedIn && !isSavedToCollection && tooltipTextForMainPageToSave}
        {!isSavedNewsOpened && isLoggedIn && isSavedToCollection && tooltipTextForMainPageToDelete}
      </div>
    </li>
  );
}

export default NewsCard;
