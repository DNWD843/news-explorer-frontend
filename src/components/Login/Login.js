import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWuthForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Login({ config, isOpened, onClose, onOverlayClick, onRedirectLinkClick, onSubmit }) {
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
  const { email, password } = values;

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
        </ul>
      </>
    </PopupWithForm>
  );
}

export default Login;
