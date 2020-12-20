import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm({
  formTitle,
  submitButtonText,
  redirectTitleText,
  redirectLinkText,
  children,
}) {
  return (
    <div className="popup page__overlay">
      <div className="popup__container">
        <button type="button" className="popup__close-button"></button>
        <form className="form popup__form">
          <h2 className="form__title">{formTitle}</h2>
          {children}
          <span className="form__submit-error-element"></span>
          <button type="submit" className="form__submit-button form__submit-button_active">
            {submitButtonText}
          </button>
        </form>
        <p className="popup__redirect-title">
          {redirectTitleText}
          <Link to="#" className="popup__redirect-link">
            {redirectLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
