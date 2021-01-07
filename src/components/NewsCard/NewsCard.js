import { forNewsCard as config } from '../../configs/configForComponents';
import classNames from 'classnames';
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
  _id,
  source,
  keyword,
  title,
  text,
  date,
  link,
  image,
  isSavedNewsOpened,
  isLoggedIn,
  deleteArticle,
  saveArticle,
}) {
  const {
    ALT_TEXT,
    TOOLTIP_MAIN_PAGE_NOT_LOGGED_IN,
    TOOLTIP_MAIN_PAGE_TO_SAVE,
    TOOLTIP_MAIN_PAGE_TO_DELETE,
    TOOLTIP_SAVED_NEWS,
  } = config;

  const isSavedToCollection = typeof _id !== 'number';

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
      saveArticle({ source, keyword, title, text, date, link, image }, _id);
    } else if ((isLoggedIn && !isSavedNewsOpened && isSavedToCollection) || isSavedNewsOpened) {
      deleteArticle({ _id });
    }
  };

  return (
    <li className="card news-card-list__item">
      <a href={link} className="card__link" target="_blank" rel="noopener noreferrer">
        <img className="card__image" src={image} alt={ALT_TEXT} />
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
        {isSavedNewsOpened && TOOLTIP_SAVED_NEWS}
        {!isLoggedIn && TOOLTIP_MAIN_PAGE_NOT_LOGGED_IN}
        {!isSavedNewsOpened && isLoggedIn && !isSavedToCollection && TOOLTIP_MAIN_PAGE_TO_SAVE}
        {!isSavedNewsOpened && isLoggedIn && isSavedToCollection && TOOLTIP_MAIN_PAGE_TO_DELETE}
      </div>
    </li>
  );
}

export default NewsCard;
