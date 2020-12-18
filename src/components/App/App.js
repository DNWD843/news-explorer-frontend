// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/saved-news">
          <SavedNewsHeader />
        </Route>
      </Switch>
      <Main />
      <Footer />
    </>
  );
}

export default App;
