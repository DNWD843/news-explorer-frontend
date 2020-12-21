import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Register.css';

function Register({ config, isOpened, onClose, onOverlayClick, onRedirectLinkClickClick }) {
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
    isInputChecked,
    isInputValid,
    handleInputChange,
    resetForm,
  } = useFormWithValidation();

  const { email, password, name } = values;

  useEffect(() => {
    resetForm();
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
              className="form__input"
              placeholder={emailPlaceholder}
              required
            />
            <span className="form__input-error" id="email-input-error">
              {errors.email || ''}
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
