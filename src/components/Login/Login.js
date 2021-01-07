import { forLogin as config } from '../../configs/configForComponents';
import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

/**
 * @module Login
 * @description Функциональный компонент<br>
 * Попап, форма входа (авторизации) в приложение.
 * @property {Boolean} isOpened - - стейт открытого состояния попапа
 * @property {Function} onClose - колбэк, закрывает попапы при клике по крестику
 * @property {Function} onOverlayClick - колбэк, закрывает попапы при клике по оверлею
 * @property {Function} onRedirectLinkClick - колбэк, переводит на другую страницу
 * @property {Function} onSubmit - колбэк, отправляет запрос при сабмите формы
 * @returns {JSX} - JSX-фрагмент разметки, форма авторизации в приложении
 * @since v.1.0.0
 */
function Login({
  isOpened,
  isRequestProcessing,
  onClose,
  onOverlayClick,
  onRedirectLinkClick,
  handleLogin,
}) {
  const {
    FORM_TITLE,
    SUBMIT_BUTTON_TEXT,
    REDIRECT_TITLE_TEXT,
    REDIRECT_LINK_TEXT,
    EMAIL_LABEL,
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
  } = config;

  const {
    values,
    errors,
    isFormValid,
    handleInputChange,
    resetForm,
    formError,
    setFormError,
  } = useFormWithValidation();

  const { login, password } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin({ email: login, password }, setFormError);
  };

  useEffect(() => {
    resetForm();
    //eslint-disable-next-line
  }, [isOpened]);

  return (
    <PopupWithForm
      formTitle={FORM_TITLE}
      submitButtonText={SUBMIT_BUTTON_TEXT}
      redirectTitleText={REDIRECT_TITLE_TEXT}
      redirectLinkText={REDIRECT_LINK_TEXT}
      isOpened={isOpened}
      onClose={onClose}
      onOverlayClick={onOverlayClick}
      onRedirectLinkClick={onRedirectLinkClick}
      isDisabled={!isFormValid}
      onSubmit={handleSubmit}
      formError={formError}
    >
      <>
        <ul className="form__inputs">
          <li className="form__field">
            <label className="form__input-label">{EMAIL_LABEL}</label>
            <input
              id="login"
              name="login"
              type="email"
              onChange={handleInputChange}
              value={login || ''}
              className="form__input"
              placeholder={EMAIL_PLACEHOLDER}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="login-input-error">
              {errors.login || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{PASSWORD_LABEL}</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={handleInputChange}
              value={password || ''}
              className="form__input"
              placeholder={PASSWORD_PLACEHOLDER}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="password-input-error">
              {errors.password || ''}
            </span>
          </li>
        </ul>
      </>
    </PopupWithForm>
  );
}

export default Login;
