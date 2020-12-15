import './About.css';

function About(props) {
  return (
    <div className="about">
      <img className="about__image" src="https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg" alt="фото автора" />
      <div className="about__info">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__description">Это блок с&nbsp;описанием автора проекта. Здесь следует указать, как вас зовут, чем вы&nbsp;занимаетесь, какими технологиями разработки владеете. Также можно рассказать о&nbsp;процессе обучения в&nbsp;Практикуме, чему вы&nbsp;тут научились, и&nbsp;чем можете помочь потенциальным заказчикам.</p>
      </div>
    </div>

  );
}

export default About;
