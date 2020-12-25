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
const configa = {
  zero: 'пусто',
  one: '{} сохраненная статья',
  few: '{} сохраненные статьи',
  many: '{} сохраненных статей',
};
console.log(pluralize(0, configa));
console.log(pluralize(12, configa));
console.log(pluralize(2, configa));
console.log(pluralize(6, configa));

export default pluralize;
