import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cards, isSavedNewsOpened, isLoggedIn, configForNewsCard }) {
  return (
    <ul className="news-card-list search-result__cards">
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
