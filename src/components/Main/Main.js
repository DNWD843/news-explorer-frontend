import About from '../About/About';
import NoResult from '../NoResult/NoResult';
import SavedNews from '../SavedNews/SavedNews';
import SearchResult from '../SearchResult/SearchResult';
//import Preloader from '../Preloader/Preloader';
import './Main.css';

function Main(props) {
  return (
    <>
      <main className="content">
        {/*<Preloader />
        <NoResult /> */}
        <SearchResult />
        <About />
        <SavedNews />
      </main>
    </>
  );
}

export default Main;
