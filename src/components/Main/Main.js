import About from '../About/About';
//import NoResult from '../NoResult/NoResult'; // компонент временно отключен. раскомментриовать для подключения
//import Preloader from '../Preloader/Preloader'; // компонент временно отключен. раскомментриовать для подключения
//import SearchResult from '../SearchResult/SearchResult';
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
function Main({ isLoggedIn, searchResult }) {
  return (
    <>
      <main className="content">
        {/* <Preloader /> // компонент временно отключен. раскомментриовать для подключения
        <NoResult /> // компонент временно отключен. раскомментриовать для подключения
       <SearchResult searchResult={searchResult} isLoggedIn={isLoggedIn} /> */}
        <About />
      </main>
    </>
  );
}

export default Main;
