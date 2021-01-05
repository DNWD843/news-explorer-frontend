export const getFormattedDate = (dateUTC) => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const monthNumber = new Date(dateUTC).getMonth();
  const letterMonth = months[monthNumber];
  const numericDay = new Date(dateUTC).getDate();
  const numericYear = new Date(dateUTC).getFullYear();

  return `${numericDay} ${letterMonth}, ${numericYear}`;
};
