import './NoResult.css';

function NoResult(props) {
  return (
    <section className="no-result">
      <div className="no-result__element"></div>
      <h2 className="no-result__title">Ничего не найдено</h2>
      <p className="no-result__description">К сожалению по вашему запросу ничего не найдено.</p>
    </section>
  );
}

export default NoResult;
