import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <section className="search-result">
      <h2 className="search-result__title">Результаты поиска</h2>
      <ul className="cards search-result__list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
      <button type="button" className="search-result__button" name="show-more">
        Показать еще
      </button>
    </section>
  );
}

export default NewsCardList;
