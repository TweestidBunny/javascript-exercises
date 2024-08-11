const palindromes = function (str) {

  let regex = /^[a-zA-Z1-9]+$/;
  let condensedStr = [];

  for (let char of str) {
    if (regex.test(char)) {
      condensedStr.push(char.toLowerCase());
    }
  }

  let sliced = condensedStr.slice().reverse().join('');

  return sliced === condensedStr.join('');
};

// Do not edit below this line
module.exports = palindromes;
