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
 * @property {Function} openRegisterPopup - колбэк, открывает попап регистрации
 * @property {Function} deleteArticle - колбэк, удаляет статью
 * @property {Function} saveArticle - колбэк, сохраняет статью
 * @returns {JSX}
 * @since v.1.0.0
 */
function NewsCardList({
  cards,
  isSavedNewsOpened,
  isLoggedIn,
  openRegisterPopup,
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
          openRegisterPopup={openRegisterPopup}
          deleteArticle={handleDeleteArticle}
          saveArticle={handleSaveArticle}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
