import { useEffect, useState } from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import classNames from 'classnames';
import { forSearchResult as config } from '../../configs/configForComponents';
import './SearchResult.css';

/**
 * @module SearchResult
 * @description Функциональный компонент<br>
 * Блок отображает статьи, найденные в результате поиска по запросу пользователя.<br>
 * @property {Array} searchResult - массив с данными статей, найденых в результате поиска по запросу пользователя.
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @returns {JSX}
 * @since v.1.0.0
 */
function SearchResult({ searchResult, isLoggedIn }) {
  const { title, showMoreButtonText } = config;

  const [cardsToRender, setCardsToRender] = useState([]);
  const [cardsToRenderQuantity, setCardsToRenderQuantity] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);

  const showMoreButtonClassName = classNames('search-result__button', {
    'search-result__button_disabled': isDisabled,
    'search-result__button_enabled': !isDisabled,
  });

  /**
   * @method handleClickShowMoreButton
   * @description Обработчик клика по кнопке "Показать ещё". Отображает следующую
   *  часть карточек статей, но не более трех за один раз.
   * @public
   * @since v.1.0.0
   */
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
      <NewsCardList cards={cardsToRender} isSavedNewsOpened={false} isLoggedIn={isLoggedIn} />
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
