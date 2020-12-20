import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cards, configForNewsCard }) {
  console.log(cards.length);
  return (
    <ul className="news-card-list">
      {cards.map((card) => (
        <NewsCard key={card._id} {...card} config={configForNewsCard} />
      ))}
    </ul>
  );
}

export default NewsCardList;
