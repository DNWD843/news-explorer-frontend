import PopupWithForm from '../PopupWithForm/PopupWuthForm';
import './Login.css';

function Login({ config, isOpened, onClose, onOverlayClick, onRedirectLinkClick }) {
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
    >
      <>
        <ul className="form__inputs">
          <li className="form__field">
            <label className="form__input-label">{emailLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              /* onChange={handleInputChange}
              value={login || ''}*/
              className="form__input"
              placeholder={emailPlaceholder}
              required
            />
            <span className="form__input-error" id="email-input-error">
              {/*errors.email || ''*/}
            </span>
          </li>
          <li className="form__field">
            <label className="form__input-label">{passwordLabel}</label>
            <input
              id="password"
              name="password"
              type="text"
              /* onChange={handleInputChange}
              value={password || ''}*/
              className="form__input"
              placeholder={passwordPlaceholder}
              required
            />
            <span className="form__input-error" id="password-input-error">
              {/*errors.password || ''*/}
            </span>
          </li>
        </ul>
      </>
    </PopupWithForm>
  );
}

export default Login;
