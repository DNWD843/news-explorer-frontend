import './InfoTooltip.css';

function InfoTooltip({ config, onOverlayClick, isOpened, onClose, onRedirectLinkClick }) {
  const { redirectTitleText, redirectLinkText } = config;
  return (
    <div
      onClick={onOverlayClick}
      className={`popup page__overlay ${isOpened ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button type="button" onClick={onClose} className="popup__close-button"></button>
        <h2 className="popup__tooltip-title">{redirectTitleText}</h2>
        <p onClick={onRedirectLinkClick} className="popup__redirect-link">
          {redirectLinkText}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
