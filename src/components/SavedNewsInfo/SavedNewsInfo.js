import React from 'react';
import pluralize from '../../utils/pluralize';
import * as configuration from '../../configs/configForPluralizeUtility';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { forSavedNewsInfo as config } from '../../configs/configForComponents';
import './SavedNewsInfo.css';

function SavedNewsInfo({ savedArticles }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { pageName } = config;

  const titleTextFragment = pluralize(savedArticles.length, configuration.forSavedNewsTitle);
  const titleText = currentUser.name.concat(titleTextFragment);

  /**
   * @method getKeywordsTopList
   * @description Метод обрабатывает ключевые слова (категории) статей и сортирует их по популярности.
   *  Возвращает массив с ключевыми словами, отсортированными по популярности по убыванию.
   * @param {Array} articlesArray - массив данных статей
   * @public
   * @since v.1.0.0
   */
  const getKeywordsListSortedByPopularity = (articlesArray) => {
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

  const keywordsList = getKeywordsListSortedByPopularity(savedArticles);
  const firstKeyword = keywordsList[0];
  const secondKeyword = keywordsList[1];
  const thirdKeyword = keywordsList[2];
  const byKeyWordsFragment = keywordsList.length === 1 ? 'По ключевому слову: ' : 'По ключевым словам: ';

  return (
    <div className="saved-news-info">
      <p className="saved-news-info__page-name">{pageName}</p>
      <h2 className="saved-news-info__title">{titleText}</h2>
      <p className="saved-news-info__keywords saved-news-info__keywords_accent_no-accent">
        {keywordsList.length ? byKeyWordsFragment : ''}
        <span className="saved-news-info__keywords saved-news-info__keywords_accent_bold">
          {firstKeyword} {secondKeyword ? `, ${secondKeyword}` : ''}
        </span>
        {keywordsList.length > 2 ? ' и ' : ''}
        <span className="saved-news-info__keywords saved-news-info__keywords_accent_bold">
          {keywordsList.length > 3 ? ` ${keywordsList.length - 2} другим` : `${thirdKeyword || ''}`}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsInfo;
