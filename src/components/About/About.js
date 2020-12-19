import './About.css';

function About({ config }) {
  const { imgSrc, imgAlt, title, aboutAuthor, somethingAbout } = config;

  return (
    <section className="about">
      <img className="about__image" src={imgSrc} alt={imgAlt} />
      <div className="about__info">
        <h2 className="about__title">{title}</h2>
        <ul className="about__description">
          <li className="about__description-item">
            <p className="about__description-fragment">{aboutAuthor}</p>
          </li>
          <li className="about__description-item">
            <p className="about__description-fragment">{somethingAbout}</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
