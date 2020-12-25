import './Preloader.css';

/**
 * @module Preloader
 * @description Функциональный компонент<br>
 * Блок с отображением анимационного элемента во время выполнения запроса или поиска.<br>
 * Принимает в пропсах объект с настройками блока - config.
 * @property {Object} config -  объект с базовыми настройками отображения блока
 * @returns {JSX}
 * @since v.1.0.0
 */
function Preloader({ config }) {
  const { title } = config;
  return (
    <div className="preloader">
      <div className="preloader__element"></div>
      <p className="preloader__title">{title}</p>
    </div>
  );
}

export default Preloader;
