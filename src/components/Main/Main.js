import About from '../About/About';
import './Main.css';

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="search-result">ARTICLES</section>
        <About />
      </main>
    </>
  );
}

export default Main;
