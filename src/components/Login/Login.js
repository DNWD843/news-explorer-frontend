import { forLogin as config } from '../../configs/configsForComponents';
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
function Login({ isOpened, onClose, onOverlayClick, onRedirectLinkClick, onSubmit }) {
  const {
    formTitle,
    submitButtonText,
    redirectTitleText,
    redirectLinkText,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
  } = config;

  const { values, errors, isFormValid, handleInputChange, resetForm } = useFormWithValidation();
  const { login, password } = values;

  useEffect(() => {
    resetForm();
    //eslint-disable-next-line
  }, [isOpened]);

  return (
    <PopupWithForm
      formTitle={formTitle}
      submitButtonText={submitButtonText}
      redirectTitleText={redirectTitleText}
      redirectLinkText={redirectLinkText}
      isOpened={isOpened}
      onClose={onClose}
      onOverlayClick={onOverlayClick}
      onRedirectLinkClick={onRedirectLinkClick}
      isDisabled={!isFormValid}
      onSubmit={onSubmit}
    >
      <>
        <ul className="form__inputs">
          <li className="form__field">
            <label className="form__input-label">{emailLabel}</label>
            <input
              id="login"
              name="login"
              type="email"
              onChange={handleInputChange}
              value={login || ''}
              className="form__input"
              placeholder={emailPlaceholder}
              required
            />
            <span className="form__input-error" id="login-input-error">
              {errors.login || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{passwordLabel}</label>
            <input
              id="password"
              name="password"
              type="text"
              onChange={handleInputChange}
              value={password || ''}
              className="form__input"
              placeholder={passwordPlaceholder}
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
