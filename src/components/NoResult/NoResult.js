import './NoResult.css';

/**
 * @module NoResult
 * @description Функциональный компонент<br>
 * Блок с отображением отсутствия результатов поиска.<br>
 * Принимает в пропсах объект с настройками блока - config.
 * @property {Object} config -  объект с базовыми настройками отображения блока
 * @returns {JSX}
 * @since v.1.0.0
 */
function NoResult({ config }) {
  const { title, description } = config;
  return (
    <section className="no-result">
      <div className="no-result__element"></div>
      <h2 className="no-result__title">{title}</h2>
      <p className="no-result__description">{description}</p>
    </section>
  );
}

export default NoResult;
