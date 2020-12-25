import NewsCard from '../NewsCard/NewsCard';
import classNames from 'classnames';
import './NewsCardList.css';

function NewsCardList({ cards, isSavedNewsOpened, isLoggedIn, configForNewsCard }) {
  const newsCardListClassName = classNames('news-card-list', {
    'search-result__cards': !isSavedNewsOpened,
    'saved-news__container': isSavedNewsOpened,
  });

  return (
    <ul className={newsCardListClassName}>
      {cards.map((card) => (
        <NewsCard
          key={card._id}
          {...card}
          config={configForNewsCard}
          isSavedNewsOpened={isSavedNewsOpened}
          isLoggedIn={isLoggedIn}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
