import { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult({ config, configForNewsCard, searchResult }) {
  const { title, showMoreButtonText } = config;

  const [initialCards, setInitialCards] = useState(searchResult);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const getPartOfCards = () => {
    if (initialCards.length > 3) {
      const part = initialCards.splice(0, 3);
      setInitialCards(initialCards);
      const newArr = cardsToRender.concat(part);
      setCardsToRender(newArr);
    } else if (initialCards.length > 0) {
      const newArr = cardsToRender.concat(initialCards);
      setCardsToRender(newArr);
      setInitialCards([]);
      setIsDisabled(true);
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    getPartOfCards();
  }, []);

  return (
    <section className="search-result">
      <h2 className="search-result__title">{title}</h2>
      <NewsCardList cards={cardsToRender} configForNewsCard={configForNewsCard} />
      <button
        onClick={getPartOfCards}
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
