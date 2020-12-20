// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import * as config from '../../configs/configsForComponents';
import * as to from '../../utils/routesMap';
import searchResultCards from '../../mocks/searchResultCards'; // временно имитирую получение карточек от сервера
import savedCards from '../../mocks/savedCards'; // временно имитирую получение карточек от сервера
import './App.css';

function App() {
  const currentUser = { userName: 'Вася' }; // TODO: на следующем этапе сюда сохранять контекст пользователя

  return (
    <>
      <Switch>
        <Route exact path={to.MAIN}>
          <Header
            userName={currentUser.userName}
            config={config.forHeader}
            configForNavigation={config.forNavigation}
            configForSearchForm={config.forSearchForm}
          />
        </Route>
        <Route path={to.SAVED_NEWS}>
          <SavedNewsHeader
            userName={currentUser.userName}
            config={config.forSavedNewsHeader}
            configForNavigation={config.forNavigation}
          />
        </Route>
      </Switch>
      <Main
        userName={currentUser.userName}
        configForAbout={config.forAbout}
        configForNoResult={config.forNoResult}
        configForPreloader={config.forPreloader}
        configForSavedNews={config.forSavedNews}
        searchResult={searchResultCards} //TODO: удалить
        configForSearchResult={config.forSearchResult}
        savedArticles={savedCards} //TODO удалить
        configForNewsCard={config.forNewsCard}
      />
      <Footer config={config.forFooter} />
    </>
  );
}

export default App;
