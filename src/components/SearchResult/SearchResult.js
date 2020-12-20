import { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult({ config, configForNewsCard, searchResult }) {
  const { title, showMoreButtonText } = config;

  const [initialCards, setInitialCards] = useState(searchResult);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [index, setIndex] = useState(3);

  const handleClick = () => {
    let newIndex;
    if (initialCards.length - index > 3) {
      newIndex = index + 3;
    } else {
      newIndex = index + (initialCards.length - index);
      setIsDisabled(true);
    }
    setIndex(newIndex);
  };

  useEffect(() => {
    setCardsToRender(initialCards.slice(0, index));
  }, [index]);

  return (
    <section className="search-result">
      <h2 className="search-result__title">{title}</h2>
      <NewsCardList cards={cardsToRender} configForNewsCard={configForNewsCard} />
      <button
        onClick={handleClick}
        disabled={isDisabled}
        type="button"
        className={`search-result__button ${isDisabled ? 'search-result__button_disabled' : ''}`}
      >
        {showMoreButtonText}
      </button>
    </section>
  );
}

export default SearchResult;
