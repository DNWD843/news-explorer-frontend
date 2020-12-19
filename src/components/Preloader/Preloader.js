import './Preloader.css';

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
