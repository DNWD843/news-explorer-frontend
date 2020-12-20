import { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SearchResult.css';

function SearchResult({ config, configForNewsCard, searchResult }) {
  const { title, showMoreButtonText } = config;
  const newsCardsArray = searchResult;

  const [cardsToRender, setCardsToRender] = useState([]);
  const [cardsToRenderQuantity, setCardsToRenderQuantity] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    let cardsQuantity;
    if (newsCardsArray.length - cardsToRenderQuantity > 3) {
      cardsQuantity = cardsToRenderQuantity + 3;
    } else {
      cardsQuantity = cardsToRenderQuantity + (newsCardsArray.length - cardsToRenderQuantity);
      setIsDisabled(true);
    }
    setCardsToRenderQuantity(cardsQuantity);
  };

  useEffect(() => {
    setCardsToRender(newsCardsArray.slice(0, cardsToRenderQuantity));
  }, [cardsToRenderQuantity, newsCardsArray]);

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
