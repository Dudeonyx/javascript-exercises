const sumAll = function sumAll(a, b) {
  if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
  const start = (a < b) ? a : b;
  const end = (a > b) ? a : b;
  let result = 0;
  for (let i = start; i <= end; i += 1) {
    result += i;
  }
  return result;
};

module.exports = sumAll;
