import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult({ config }) {
  const { title, showMoreButtonText } = config;
  return (
    <section className="search-result">
      <h2 className="search-result__title">{title}</h2>
      <NewsCardList />
      <button type="button" className="search-result__button" name="show-more">
        {showMoreButtonText}
      </button>
    </section>
  );
}

export default SearchResult;
