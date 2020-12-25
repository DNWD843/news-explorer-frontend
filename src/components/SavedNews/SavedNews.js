import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

/**
 * @module SavedNews
 * @description Функциональный компонент<br>
 * Отрисовывает карточки со статьями, сохраненными пользователем в своей коллекции.<br>
 * Отрисовка производится частями по три карточки.
 * @property {Object} config - объект с базовыми настройками отображения блока
 * @property {String} userName - имя пользователя
 * @property {Array} savedArticles - массив с данными о сохраненных статьях
 * @property {Object} configForNewsCard - объект с базовыми настройками отображения блока NewsCard
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @returns {JSX} - JSX-фрагмент разметки, форма авторизации в приложении
 * @since v.1.0.0
 */
function SavedNews({ config, userName, savedArticles, configForNewsCard, isLoggedIn }) {
  const { pageName } = config;

  /**
   * @method getKeywordsTopList
   * @description Метод обрабатывает ключевые слова (категории) статей и сортирует их по популярности.
   *  Возвращает массив с ключевыми словами, отсортированными по популярности по убыванию.
   * @param {Array} articlesArray - массив данных статей
   * @public
   * @since v.1.0.0
   */
  const getKeywordsTopList = (articlesArray) => {
    const keywordsWithRangeNumber = articlesArray
      .map((article) => article.keyword)
      .reduce((acc, keyword) => {
        if (!acc[keyword]) {
          acc[keyword] = 1;
        } else {
          acc[keyword] += 1;
        }
        return acc;
      }, {});
    const filteredKeywordsArray = Object.keys(keywordsWithRangeNumber);
    const result = filteredKeywordsArray.sort((a, b) => {
      return keywordsWithRangeNumber[b] - keywordsWithRangeNumber[a];
    });
    return result;
  };
  const top = getKeywordsTopList(savedArticles);

  const firstKeyword = top[0];
  const secondKeyword = top[1];
  const thirdKeyword = top[2];

  return (
    <section className="saved-news">
      <div className="saved-news__info">
        <p className="saved-news__page-name">{pageName}</p>
        <h2 className="saved-news__title">
          {userName}, у вас {savedArticles.length} сохранённых статей
        </h2>
        <p className="saved-news__keywords saved-news__keywords_accent_no-accent">
          По ключевым словам:{' '}
          <span className="saved-news__keywords saved-news__keywords_accent_bold">
            {firstKeyword}, {secondKeyword} {top.length > 3 ? '' : thirdKeyword}
          </span>{' '}
          и{' '}
          <span className="saved-news__keywords saved-news__keywords_accent_bold">
            {top.length > 3 ? `${top.length - 2} другим` : thirdKeyword}
          </span>
        </p>
      </div>
      <div className="saved-news__container">
        <NewsCardList
          cards={savedArticles}
          configForNewsCard={configForNewsCard}
          isSavedNewsOpened={true}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </section>
  );
}

export default SavedNews;
