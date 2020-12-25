import classNames from 'classnames';
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
  isDisabled,
  onSubmit,
}) {
  const overlayClassName = classNames('popup', {
    'popup_opened page__overlay': isOpened,
  });

  const popupClassName = classNames('popup__container', {
    popup__container_mobile_opened: isOpened,
  });

  const submitButtonClassName = classNames('form__submit-button', {
    'form__submit-button_inactive': isDisabled,
    'form__submit-button_active': !isDisabled,
  });

  return (
    <div onClick={onOverlayClick} className={overlayClassName}>
      <div className={popupClassName}>
        <button type="button" onClick={onClose} className="popup__close-button"></button>
        <form onSubmit={onSubmit} className="form popup__form">
          <h2 className="form__title">{formTitle}</h2>
          {children}
          <span className="form__submit-error-element"></span>
          <button type="submit" className={submitButtonClassName}>
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
