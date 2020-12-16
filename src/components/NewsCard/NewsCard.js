import './NewsCard.css';

function NewsCard(props) {
  return (
    <li className="card cards__item">
      <img
        className="card__image"
        src="https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png"
        alt="iv"
      />
      <button type="button" className="card__bookmark" name="bookmark"></button>
      <div className="card__info">
        <p className="card__date">16.12.20</p>
        <h2 className="card__title">Card</h2>
        <div className="card__description-overflow">
          <p className="card__description">
            some hre sssss ssssss ssssss some hre sssss ssssss ssssss some hre sssss ssssss ssssss
            sssssssssssssd ome hre sssss ssssss ome hre sssss ssssss ssssss sssssssssssssssd ome hre
            sssss ssssss ome hre sssss ssssss ssssss ss sssssssssssssd ome hre sssss ssssss ome hre
            sssss ssssss ssssss sssssssssssssd ssssss sssssssssssssd{' '}
          </p>
        </div>
        <p className="card__source">from somewhere</p>
      </div>
    </li>
  );
}

export default NewsCard;
