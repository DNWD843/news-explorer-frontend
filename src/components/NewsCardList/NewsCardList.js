import NewsCard from '../NewsCard/NewsCard';
import classNames from 'classnames';
import './NewsCardList.css';

/**
 * @module NewsCardList
 * @description Функциональный компонент<br>
 * Список карточек статей.
 * @property {Array} cards - массив с данными статей
 * @property {Boolean} isSavedNewsOpened - стейт состояния страницы с сохраненными новостями
 * @property {Boolean} isLoggedIn -  стейт состяния пользователя: авторизован/не авторизован
 * @returns {JSX}
 * @since v.1.0.0
 */
function NewsCardList({
  cards,
  isSavedNewsOpened,
  isLoggedIn,
  handleDeleteArticle,
  handleSaveArticle,
}) {
  const newsCardListClassName = classNames('news-card-list', {
    'search-result__cards': !isSavedNewsOpened,
    'saved-news__container': isSavedNewsOpened,
  });

  return (
    <ul className={newsCardListClassName}>
      {cards.map((card, index) => (
        <NewsCard
          key={index + 1}
          {...card}
          isSavedNewsOpened={isSavedNewsOpened}
          isLoggedIn={isLoggedIn}
          deleteArticle={handleDeleteArticle}
          saveArticle={handleSaveArticle}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
