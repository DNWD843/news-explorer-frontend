import About from '../About/About';
import NoResult from '../NoResult/NoResult';
import SavedNews from '../SavedNews/SavedNews';
import SearchResult from '../SearchResult/SearchResult';
// import Preloader from '../Preloader/Preloader';
import { Switch, Route } from 'react-router-dom';
import * as to from '../../utils/routesMap';
import './Main.css';

function Main({
  userName,
  configForAbout,
  configForNoResult,
  configForPreloader,
  configForSavedNews,
  configForSearchResult,
}) {
  return (
    <>
      <main className="content">
        <Switch>
          <Route exact path={to.MAIN}>
            {/*} <Preloader config={configForPreloader} /> */}
            <NoResult config={configForNoResult} />
            <SearchResult config={configForSearchResult} />
            <About config={configForAbout} />
          </Route>
          <Route path={to.SAVED_NEWS}>
            <SavedNews config={configForSavedNews} userName={userName} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Main;
