const fibonacci = function (iteration) {
  let start = 1;
  let fibArr = [];

  if (+iteration < 0) return 'OOPS';

  if (!+iteration) return 0;

  for (let i = 0; i < +iteration; i++) {
    if (fibArr.length < 2) {
      fibArr.push(start);
    } else {
      fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
  }

  return fibArr[fibArr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
