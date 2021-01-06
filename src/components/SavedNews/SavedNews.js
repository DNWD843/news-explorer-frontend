import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNewsInfo from '../SavedNewsInfo/SavedNewsInfo';
import './SavedNews.css';

/**
 * @module SavedNews
 * @description Функциональный компонент<br>
 * Отрисовывает карточки со статьями, сохраненными пользователем в своей коллекции.<br>
 * Отрисовка производится частями по три карточки.
 * @property {Array} savedArticles - массив с данными о сохраненных статьях
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @returns {JSX} - JSX-фрагмент разметки, форма авторизации в приложении
 * @since v.1.0.0
 */
function SavedNews({ isLoggedIn, savedArticles, handleDeleteArticle, ...props }) {
  return (
    <>
      <SavedNewsHeader isLoggedIn={isLoggedIn} {...props}>
        <SavedNewsInfo savedArticles={savedArticles} />
      </SavedNewsHeader>

      {savedArticles.length ? (
        <main className="saved-news">
          <NewsCardList
            cards={savedArticles}
            isSavedNewsOpened={true}
            isLoggedIn={isLoggedIn}
            handleDeleteArticle={handleDeleteArticle}
          />
        </main>
      ) : (
          null
        )}
    </>
  );
}

export default SavedNews;
