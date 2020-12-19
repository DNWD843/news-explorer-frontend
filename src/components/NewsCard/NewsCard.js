import './NewsCard.css';

function NewsCard({ source, keyword, title, text, date, link, image }) {
  return (
    <li className="card cards__item">
      <img
        className="card__image"
        src="https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png"
        alt="iv"
      />
      <div className="card__info">
        <p className="card__date">16.12.20</p>
        <h2 className="card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка</h2>

        <div className="card__description-container">
          <p className="card__description">
            Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости
            их сохранения. В этот раз он отправился в Двинско-Пинежскую СИНХРОФ АЗАТРОН
          </p>
        </div>

        <p className="card__source">from somewhere</p>
      </div>
      <button
        type="button"
        className="card__bookmark card__bookmark_not-logged-in"
        name="bookmark"
        disabled={true}
      ></button>
      <div className="card__tooltip">Войдите, чтобы сохранять статьи</div>
      <div className="card__category">Природа</div>
    </li>
  );
}

export default NewsCard;
