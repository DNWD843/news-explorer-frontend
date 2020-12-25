// метод обработки склонения  слов в заголовке сохраненных новостей от количества
//карточек и ключевых слов
// в настоящее время находится в разработке, в приложении на текущий момент не используется.

const radix = 10;
const fewMax = 4;
const pluralize = (n, { zero, one, few, many }) => {
  const mod = Math.abs(n) % radix;
  let pattern;
  if (zero && mod === 0) pattern = zero;
  else if (mod === 1) pattern = one;
  else if (mod > 1 && mod <= fewMax) pattern = few;
  else pattern = many;
  return pattern.replace('{}', n);
};
const config = {
  zero: 'пусто',
  one: '{} сохраненная статья',
  few: '{} сохраненные статьи',
  many: '{} сохраненных статей',
};
console.log(pluralize(0, config));
console.log(pluralize(12, config));
console.log(pluralize(2, config));
console.log(pluralize(6, config));

export default pluralize;
