import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

import './SavedNews.css';

function SavedNews(props) {
  return (
    <section className="saved-news">
      <SavedNewsHeader />

      <NewsCardList />
    </section>
  );
}

export default SavedNews;
