import './About.css';

function About(props) {
  return (
    <section className="about">
      <img
        className="about__image"
        src="https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg"
        alt="фото автора"
      />
      <div className="about__info">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__description">Тут что-то про меня</p>
      </div>
    </section>
  );
}

export default About;
