/**
 * @function getFormattedDate
 * @description  Утилита преобразования даты.<br>
 * Принимает дату в формате UTC, преобразует в строку типа "2 января, 2020"
 * @param {String} dateUTC -  строка, дата статьи
 * @returns {String}
 * @since v.1.1.0
 */
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
