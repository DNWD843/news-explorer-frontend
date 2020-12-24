import classNames from 'classnames';
import './InfoTooltip.css';

function InfoTooltip({ config, onOverlayClick, isOpened, onClose, onRedirectLinkClick }) {
  const { redirectTitleText, redirectLinkText } = config;

  const infoTooltipOverlayClassName = classNames('popup-info', 'page__overlay-info', {
    'popup-info_opened': isOpened,
  });

  return (
    <div onClick={onOverlayClick} className={infoTooltipOverlayClassName}>
      <div className="popup-info__container">
        <button type="button" onClick={onClose} className="popup-info__close-button"></button>
        <h2 className="popup-info__tooltip-title">{redirectTitleText}</h2>
        <p onClick={onRedirectLinkClick} className="popup-info__redirect-link">
          {redirectLinkText}
        </p>
      </div>
    </div>
  );
}

export default InfoTooltip;
