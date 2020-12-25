import About from '../About/About';
//import NoResult from '../NoResult/NoResult';  // компонент временно отключен. раскомментриовать для подключения
//import Preloader from '../Preloader/Preloader';  // компонент временно отключен. раскомментриовать для подключения
import SavedNews from '../SavedNews/SavedNews';
import SearchResult from '../SearchResult/SearchResult';
import { Switch, Route } from 'react-router-dom';
import * as to from '../../utils/routesMap';
import './Main.css';

/**
 * @module Main
 * @description Функциональный компонент<br>
 * Блок с основным контентом страницы.<br>
 * @property {Object} config -  объект с базовыми настройками отображения блока
 * @property {Boolean} isLoggedIn - стейт состяния пользователя: авторизован/не авторизован
 * @property {String} userName - имя пользователя
 * @property {Object} configForAbout - объект настроек для компонента About
 * @property {Object} configForNoResult - объект настроек для компонента NoResult
 * @property {Object} configForPreloader - объект настроек для компонента Preloader
 * @property {Object} configForSavedNews - объект настроек для компонента SavedNews
 * @property {Array} SearchResult - массив с данными результата поиска
 * @property {Object} configForSearchResult - объект настроек для компонента SearchResult
 * @property {Array} savedArticles - массив с данными сохраненных статей
 * @property {Object} configForNewsCard - объект настроек для компонента NewsCard
 * @returns {JSX}
 * @since v.1.0.0
 */
function Main({
  userName,
  configForAbout,
  configForNoResult,
  configForPreloader,
  configForSavedNews,
  searchResult,
  configForSearchResult,
  savedArticles,
  configForNewsCard,
  isLoggedIn,
}) {
  return (
    <>
      <main className="content">
        <Switch>
          <Route exact path={to.MAIN}>
            {
              <>
                {/*
                <Preloader config={configForPreloader} />  // компонент временно отключен. раскомментриовать для подключения
                <NoResult config={configForNoResult} />  // компонент временно отключен. раскомментриовать для подключения
              */}
                <SearchResult
                  config={configForSearchResult}
                  configForNewsCard={configForNewsCard}
                  searchResult={searchResult}
                  isLoggedIn={isLoggedIn}
                />
              </>
            }
            <About config={configForAbout} />
          </Route>
          <Route path={to.SAVED_NEWS}>
            <SavedNews
              config={configForSavedNews}
              userName={userName}
              savedArticles={savedArticles}
              configForNewsCard={configForNewsCard}
              isLoggedIn={isLoggedIn}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Main;
