import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cards, isSavedNewsOpened, isLoggedIn, configForNewsCard }) {
  return (
    <ul
      className={`news-card-list ${
        !isSavedNewsOpened ? 'search-result__cards' : 'saved-news__container'
      }`}
    >
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
