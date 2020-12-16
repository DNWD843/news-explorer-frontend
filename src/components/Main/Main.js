import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';
import NoResult from '../NoResult/NoResult';
//import Preloader from '../Preloader/Preloader';
import './Main.css';

function Main(props) {
  return (
    <>
      <main className="content">
        {/*<Preloader />*/}
        <NoResult />
        <NewsCardList />
        <About />

      </main>
    </>
  );
}

export default Main;
