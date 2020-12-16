import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__element"></div>
      <p className="preloader__title">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
