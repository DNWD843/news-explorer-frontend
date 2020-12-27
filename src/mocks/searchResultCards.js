const searchResultCards = [
  {
    _id: '5fd281f2e6676615dbb34c7a',
    keyword: 'Природа',
    title: 'Национальное достояние – парки',
    text:
      'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    date: '2 августа, 2019',
    source: 'Дзен',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
  {
    _id: '5fd3a627a01dba38a94d68e2',
    keyword: 'Природа',
    title: 'Лесные огоньки',
    text: 'Фотограф отвлеклась.',
    date: '2 августа, 2019',
    source: 'Афиша',
    link: 'https://developer.mozilla.org',
    image: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  {
    _id: '5fd48f1da01dba38a94d68e3',
    keyword: 'Тайга',
    title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка overflow overflow overflow',
    text:
      'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в тайгу, где... overflow overflow overflow overflow',
    date: '2 августа, 2019',
    source: 'Медиазона',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
  {
    _id: '5fd281f2e6676615dbb34c79',
    keyword: 'Парки',
    title: 'Национальное достояние – парки',
    text:
      'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    date: '2 августа, 2019',
    source: 'Дзен',
    link: 'https://developer.mozilla.org',
    image: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  {
    _id: '5fd3a627a01dba38a94d68e8',
    keyword: 'Фотография',
    title: 'Лесные огоньки: история одной фотографии',
    text:
      'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Афиша',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
  {
    _id: '5fd281f2e6626615dbb34c79',
    keyword: 'Парки',
    title: 'Национальное достояние – парки',
    text:
      'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    date: '2 августа, 2019',
    source: 'Дзен',
    link: 'https://developer.mozilla.org',
    image: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  {
    _id: '5fd3a627a01dba38a93d68e8',
    keyword: 'Фотография',
    title: 'Лесные огоньки: история одной фотографии',
    text:
      'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Афиша',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
  {
    _id: '5fd28182e6676615dbb34c99',
    keyword: 'Парки',
    title: 'Национальное достояние – парки',
    text:
      'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    date: '2 августа, 2019',
    source: 'Дзен',
    link: 'https://developer.mozilla.org',
    image: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  {
    _id: '5fd3a62ab01dba38a94d68e8',
    keyword: 'Фотография',
    title: 'Лесные огоньки: история одной фотографии',
    text:
      'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Афиша',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
  {
    _id: '5fd28184e6676615dbb34c99',
    keyword: 'Парки',
    title: 'Национальное достояние – парки',
    text:
      'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
    date: '2 августа, 2019',
    source: 'Дзен',
    link: 'https://developer.mozilla.org',
    image: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  {
    _id: '5fd3a62a701dba38a94d68e8',
    keyword: 'Фотография',
    title: 'Лесные огоньки: история одной фотографии',
    text:
      'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
    date: '2 августа, 2019',
    source: 'Афиша',
    link: 'https://developer.mozilla.org',
    image: 'https://wikipet.ru/uploads/posts/2019-02/1549868089_1.jpg',
  },
];

export default searchResultCards;
