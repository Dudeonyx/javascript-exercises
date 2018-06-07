const repeatString = function repeatString(string, j) {
  let result = '';
  if (j < 0) return 'ERROR';
  for (let i = 0; i < j; i += 1) {
    result += string;
  }
  return result;
};

module.exports = repeatString;
