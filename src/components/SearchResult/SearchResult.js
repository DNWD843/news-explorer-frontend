import { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import classNames from 'classnames';
import './SearchResult.css';

function SearchResult({ config, configForNewsCard, searchResult, isLoggedIn }) {
  const { title, showMoreButtonText } = config;

  const [cardsToRender, setCardsToRender] = useState([]);
  const [cardsToRenderQuantity, setCardsToRenderQuantity] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  const showMoreButtonClassName = classNames('search-result__button', {
    'search-result__button_disabled': isDisabled,
    'search-result__button_enabled': !isDisabled,
  });

  const handleClickShowMoreButton = () => {
    let cardsQuantity;
    if (searchResult.length - cardsToRenderQuantity > 3) {
      cardsQuantity = cardsToRenderQuantity + 3;
    } else {
      cardsQuantity = cardsToRenderQuantity + (searchResult.length - cardsToRenderQuantity);
      setIsDisabled(true);
    }
    setCardsToRenderQuantity(cardsQuantity);
  };

  useEffect(() => {
    setCardsToRender(searchResult.slice(0, cardsToRenderQuantity));
  }, [cardsToRenderQuantity, searchResult]);

  return (
    <section className="search-result">
      <h2 className="search-result__title">{title}</h2>
      <NewsCardList
        cards={cardsToRender}
        configForNewsCard={configForNewsCard}
        isLoggedIn={isLoggedIn}
      />
      <button
        onClick={handleClickShowMoreButton}
        disabled={isDisabled}
        type="button"
        className={showMoreButtonClassName}
      >
        {showMoreButtonText}
      </button>
    </section>
  );
}

export default SearchResult;
