import About from '../About/About';
//import NoResult from '../NoResult/NoResult';
import SavedNews from '../SavedNews/SavedNews';
//import SearchResult from '../SearchResult/SearchResult';
//import Preloader from '../Preloader/Preloader';
import { Switch, Route } from 'react-router-dom';
import './Main.css';

function Main(props) {
  return (
    <>
      <main className="content">
        {/*<Preloader />
         <NoResult />
         <SearchResult />*/}
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/saved-news">
            <SavedNews />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default Main;
