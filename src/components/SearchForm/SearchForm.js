import './SearchForm.css';

function SearchForm(props) {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="search-form__description">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <div className="search-form__search-stroke">
          <div className="search-form__field">
            <input type="text" name="search-input" className="search-form__input" placeholder="Введите тему новости" />
          </div>
          <button className="search-form__submit-button">Искать</button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
