const add = function (...args) {

  let result = args.reduce((total, current) => total + current);

  return result;
};

const subtract = function (...args) {

  let result = args.reduce((total, current) => total - current);

  return result;
};

const sum = function (arr) {

  let result = arr.reduce((total, current) => total + current, 0);

  return result;
};

const multiply = function (arr) {

  let result = arr.reduce((total, current) => total * current);

  return result;
};

const power = function (...args) {

  let result = args.reduce((total, current) => total ** current);

  return result;
};

const factorial = function (num) {

  let result;
  let nums = []

  for (let i = 1; i <= num; i++) {
    nums.push(i);
  }

  if (num > 0) {
    result = nums.reduce((total, current) => total * current);
  } else {
    result = 1;
  }


  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
