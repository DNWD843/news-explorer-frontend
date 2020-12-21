import NewsCardList from '../NewsCardList/NewsCardList';

import './SavedNews.css';

function SavedNews({ config, userName, savedArticles, configForNewsCard, isLoggedIn }) {
  const { pageName } = config;

  return (
    <section className="saved-news">
      <div className="saved-news__info">
        <p className="saved-news__page-name">{pageName}</p>
        <h2 className="saved-news__title">{userName}, у вас 5 сохранённых статей</h2>
        <p className="saved-news__keywords saved-news__keywords_accent_no-accent">
          По ключевым словам:
          <span className="saved-news__keywords_accent_bold"> Природа, Тайга</span> и{' '}
          <span className="saved-news__keywords_accent_bold">2-м другим</span>
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
