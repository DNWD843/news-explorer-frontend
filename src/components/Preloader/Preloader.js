import { forPreloader as config } from '../../configs/configsForComponents';
import './Preloader.css';

/**
 * @module Preloader
 * @description Функциональный компонент<br>
 * Блок с отображением анимационного элемента во время выполнения запроса или поиска.<br>
 * @returns {JSX}
 * @since v.1.0.0
 */
function Preloader() {
  const { title } = config;
  return (
    <div className="preloader">
      <div className="preloader__element"></div>
      <p className="preloader__title">{title}</p>
    </div>
  );
}

export default Preloader;
