import './NoResult.css';

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