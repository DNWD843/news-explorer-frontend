import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { forRegister as config } from '../../configs/configForComponents';

/**
 * @module Register
 * @description Функциональный компонент<br>
 * Попап, форма регистрации в приложение.
 * @property {Boolean} isOpened - стейт открытого состояния попапа
 * @property {Function} onClose - колбэк, закрывает попапы при клике по крестику
 * @property {Function} onOverlayClick - колбэк, закрывает попапы при клике по оверлею
 * @property {Function} onRedirectLinkClick - колбэк, переводит на другую страницу
 * @property {Function} onSubmit - колбэк, отправляет запрос при сабмите формы
 * @returns {JSX} - JSX-фрагмент разметки, форма авторизации в приложении
 * @since v.1.0.0
 */
function Register({ isOpened, isRequestProcessing, onClose, onOverlayClick, onRedirectLinkClickClick, handleRegister }) {
  const {
    formTitle,
    submitButtonText,
    redirectTitleText,
    redirectLinkText,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    nameLabel,
    namePlaceholder,
    nameMinLength,
    nameMaxLength,
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

  const { email, regPassword, name } = values;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const userRegistrationData = { email, password: regPassword, name };
    setFormError('');
    handleRegister(userRegistrationData, setFormError);
  };

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
      onRedirectLinkClick={onRedirectLinkClickClick}
      isDisabled={!isFormValid}
      onSubmit={handleSubmit}
      formError={formError}
    >
      <>
        <ul className="form__inputs">
          <li className="form__field">
            <label className="form__input-label">{emailLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={email || ''}
              className={`form__input`}
              placeholder={emailPlaceholder}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="email-input-error">
              {errors.email || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{passwordLabel}</label>
            <input
              id="regPassword"
              name="regPassword"
              type="text"
              onChange={handleInputChange}
              value={regPassword || ''}
              className="form__input"
              placeholder={passwordPlaceholder}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="regPassword-input-error">
              {errors.regPassword || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{nameLabel}</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              value={name || ''}
              className="form__input"
              placeholder={namePlaceholder}
              minLength={nameMinLength}
              maxLength={nameMaxLength}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="name-input-error">
              {errors.name || ''}
            </span>
          </li>
        </ul>
      </>
    </PopupWithForm>
  );
}

export default Register;
