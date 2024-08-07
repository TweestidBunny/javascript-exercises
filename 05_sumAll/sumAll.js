const sumAll = function (num1, num2) {
  if (+Math.floor(Math.abs(num1)) !== num1 || +Math.floor(Math.abs(num2)) !== num2) {
    return 'ERROR';
  }

  let start = num1 < num2 ? num1 : num2;
  let end = num1 > num2 ? num1 : num2;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
