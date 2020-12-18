import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult(props) {
  return (
    <section className="search-result">
      <h2 className="search-result__title">Результаты поиска</h2>
      <NewsCardList />
      <button type="button" className="search-result__button" name="show-more">
        Показать еще
      </button>
    </section>
  );
}

export default SearchResult;
