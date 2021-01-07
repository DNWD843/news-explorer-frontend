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
function Register({
  isOpened,
  isRequestProcessing,
  onClose,
  onOverlayClick,
  onRedirectLinkClickClick,
  handleRegister,
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
    NAME_LABEL,
    NAME_PLACEHOLDER,
    NAME_MIN_LENGTH,
    NAME_MAX_LENGTH,
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
      formTitle={FORM_TITLE}
      submitButtonText={SUBMIT_BUTTON_TEXT}
      redirectTitleText={REDIRECT_TITLE_TEXT}
      redirectLinkText={REDIRECT_LINK_TEXT}
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
            <label className="form__input-label">{EMAIL_LABEL}</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInputChange}
              value={email || ''}
              className={`form__input`}
              placeholder={EMAIL_PLACEHOLDER}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="email-input-error">
              {errors.email || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{PASSWORD_LABEL}</label>
            <input
              id="regPassword"
              name="regPassword"
              type="text"
              onChange={handleInputChange}
              value={regPassword || ''}
              className="form__input"
              placeholder={PASSWORD_PLACEHOLDER}
              disabled={isRequestProcessing}
              required
            />
            <span className="form__input-error" id="regPassword-input-error">
              {errors.regPassword || ''}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{NAME_LABEL}</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleInputChange}
              value={name || ''}
              className="form__input"
              placeholder={NAME_PLACEHOLDER}
              minLength={NAME_MIN_LENGTH}
              maxLength={NAME_MAX_LENGTH}
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
