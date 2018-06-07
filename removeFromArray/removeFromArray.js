const removeFromArray = function removeFromArray(array = [], ...arg) {
  for (let i = 0; i < arg.length; i += 1) {
    if (array.includes(arg[i])) {
      array.splice(array.indexOf(arg[i]), 1);
    }
  }
  return array;
};

module.exports = removeFromArray;
