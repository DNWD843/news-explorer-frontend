import { forSearchForm as config } from '../../configs/configForComponents';
import './SearchForm.css';

/**
 * @module SearchForm
 * @description Функциональный компонент<br>
 * Блок с формой поиска новостей.<br>
 * @returns {JSX}
 * @since v.1.0.0
 */
function SearchForm() {
  const { title, description, placeholderText, submitButtonText } = config;
  return (
    <form className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">{title}</h1>
        <p className="search-form__description">{description}</p>
        <div className="search-form__search-stroke">
          <div className="search-form__field">
            <input
              type="text"
              name="search-input"
              className="search-form__input"
              placeholder={placeholderText}
            />
          </div>
          <button className="search-form__submit-button">{submitButtonText}</button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
