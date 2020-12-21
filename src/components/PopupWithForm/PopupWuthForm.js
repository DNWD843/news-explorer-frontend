import './PopupWithForm.css';

function PopupWithForm({
  formTitle,
  submitButtonText,
  redirectTitleText,
  redirectLinkText,
  isOpened,
  children,
  onClose,
  onOverlayClick,
  onRedirectLinkClick,
}) {
  return (
    <div
      onClick={onOverlayClick}
      className={`popup page__overlay ${isOpened ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button type="button" onClick={onClose} className="popup__close-button"></button>
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
          <span onClick={onRedirectLinkClick} className="popup__redirect-link">
            {redirectLinkText}
          </span>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
