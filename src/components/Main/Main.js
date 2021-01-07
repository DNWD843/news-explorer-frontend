import About from '../About/About';
import NoResult from '../NoResult/NoResult';
import Preloader from '../Preloader/Preloader';
import SearchResult from '../SearchResult/SearchResult';
import './Main.css';

/**
 * @module Main
 * @description Функциональный компонент<br>
 * Блок с основным контентом страницы.<br>
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @property {Array} SearchResult - массив с данными результата поиска
 * @returns {JSX}
 * @since v.1.0.0
 */
function Main({
  isLoggedIn,
  isSearchDone,
  isSearchInProgress,
  isSearchFailed,
  searchResult,
  handleDeleteArticle,
  handleSaveArticle,
}) {
  return (
    <>
      <main className="content">
        {isSearchInProgress && <Preloader />}
        {isSearchDone ? (
          !isSearchFailed && searchResult.length > 0 ? (
            <SearchResult
              searchResult={searchResult}
              isLoggedIn={isLoggedIn}
              handleDeleteArticle={handleDeleteArticle}
              handleSaveArticle={handleSaveArticle}
            />
          ) : (
            <NoResult isSearchFailed={isSearchFailed} />
          )
        ) : null}

        <About />
      </main>
    </>
  );
}

export default Main;
