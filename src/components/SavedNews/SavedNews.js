import NewsCardList from '../NewsCardList/NewsCardList';
import classNames from 'classnames';
import './SavedNews.css';

function SavedNews({ config, userName, savedArticles, configForNewsCard, isLoggedIn }) {
  const { pageName } = config;

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

  /*
  const totalKeywords = top.length;

  let byKeywords;
  let firstKeyword;
  let secondKeyword;
  let thirdKeyword;
  let and;
  let endOfHowManch = '';
  let another;
  let number;
  const total = totalKeywords - 2;


  switch (totalKeywords) {
    case 1:
      byKeywords = 'По ключевым слову: ';
      firstKeyword = top[0];
      secondKeyword = '';
      thirdKeyword = '';
      and = '';
      another = '';
      break;
    case 2:
      byKeywords = 'По ключевым словам: ';
      firstKeyword = top[0];
      secondKeyword = `, ${top[1]}`;
      thirdKeyword = '';
      and = '';
      another = '';
      break;
    case 3:
      byKeywords = 'По ключевым словам: ';
      firstKeyword = top[0];
      secondKeyword = `, ${top[1]}`;
      thirdKeyword = `, ${top[2]}`;
      and = '';
      another = '';
      break;
    case 4:
      byKeywords = 'По ключевым словам: ';
      firstKeyword = top[0];
      secondKeyword = `, ${top[1]}`;
      and = ' и ';
      another = `${totalKeywords - 2}-м другим`;
      break;
    default:
      byKeywords = 'oops';
      firstKeyword = 'oops';
      secondKeyword = 'oops';
      thirdKeyword = 'oops';
      and = 'oops';
      //let endOfHowManch = '';
      another = 'oops';
      */

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
